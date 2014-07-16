var _ = require( "underscore" );
require( 'colors' );

exports.exec = function( image, ready ) {
    var _ = require( 'underscore' );

    var Path = require( 'path' );
    var fs = require( 'fs' );



    if( !image.copy ) {
        console.log( ("[INFO] skip copy images. no copies assigned. image: " + image.input).green );
        ready();
        return;
    }

    if( !_.isArray(image.copy) ) {
        console.log( ("[ERROR] couldn't create copies. passed image contains copy is not an Array. image: " + image.input).red );
        ready( new Error("couldn't create copies") );
        return;
    }

    var count = 0;
    var nrOfOps = image.copy.length;
    var opCounter = 0;

    _.each( image.copy, function(copy) {
        count++;
        opCounter++;

        var file = './' + copy + "_" + image.width + "x" + image.height + "." + image.type;
        var output = Path.join(
               Path.dirname(image.output), file);

        var oldFile = fs.createReadStream( image.output);

        var streams = require('event-stream');
        var newFile = fs.createWriteStream(output);

        var finishingStream = streams.through(function write(data) {
                console.log( "[CREATE COPY] try to copy." );
                newFile.write(data);
            },

            function end () {
                count--;

                if( count < 1 && opCounter == nrOfOps)
                    ready();

                newFile.end();

                this.emit('end');
            });

        // { end: false }
        oldFile.pipe(finishingStream);
    });
};

