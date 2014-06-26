var _ = require( "underscore" );

var resizeFnc = function( image, path, output ) {
    console.log( "-- create thumbnail: " + image.path );
    var fs = require('fs');
    var gm = require('gm');

    gm( path )
        .resize( image.width, image.height)
        .noProfile()
        .write( output, function (err) {
            if (!err)
                console.log('-- IMAGE resize done! path: ' + image.output );
            else
                console.log( err );
        });

    // return original image after transformation.
    return image;
};

var resize = function(image) {
    return resizeFnc(image, image.path, image.output)
};

exports.transform = resize;