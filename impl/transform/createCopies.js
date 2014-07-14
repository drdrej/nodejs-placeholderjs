var _ = require( "underscore" );

exports.transform = function( image, options ) {
    var _ = require( 'underscore' );
    var Path = require( 'path' );
    var fs = require( 'fs' );

    _.each( image.copy, function(copy) {
        var file = './' + copy + "_" + image.width + "x" + image.height + "." + image.type;
        var output = Path.join(
               Path.dirname(image.output), file);
        var newFile = fs.createWriteStream(output);
        var oldFile = fs.createReadStream( image.output);

        oldFile.pipe( newFile );
    });
};

