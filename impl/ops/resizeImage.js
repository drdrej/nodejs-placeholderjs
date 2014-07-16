var _ = require( "underscore" );
require( 'colors' );

exports.exec = function( image, ready ) {
    console.log( "-- resize image: " + image.input );

    var fs = require('fs');
    var gm = require('gm');

    gm( image.input )
        .resize( image.width, image.height)
        .noProfile()
        .write( image.output, function (err) {
            if (!err) {
                console.log(('-- IMAGE resize done! path: ' + image.output).green);
                ready();
            } else {
                console.log( ("Couldn't resize image: " + image.input).red );
                console.log(err);
                ready(err);
            }
        });

    return image;
};