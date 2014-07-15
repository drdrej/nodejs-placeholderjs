require( 'colors' );
var _ = require( "underscore" );

exports.exec = function( image, ready ) {
    var fs = require('fs');

    if (fs.existsSync(image.input)) {
        console.log( "-- file exists. use original. skip create()" );
        ready();
    }

    var bgColor = image.bgColor && _.isString(image.bgColor) ? image.bgColor : "red";

    var gm = require('gm');
    gm( image.width, image.height, bgColor )
        .write( image.input, function (err) {
            if (!err) {
                console.log( ('-- IMAGE src created successful! path: ' + image.output).green );

                ready();
            } else {
                console.log( ("[ERROR] couldn't create src: " + image.output).red );
                console.log(err);
                ready(err);
            }
        });
};