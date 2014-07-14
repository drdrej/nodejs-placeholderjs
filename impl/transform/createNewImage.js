var _ = require( "underscore" );

exports.transform = function( image, options ) {
    var fs = require('fs');
    var gm = require('gm');

    if (fs.existsSync(image.input)) {
        console.log( "-- file exists. use original. skip create()" );
        return image;
    }

    var bgColor = image.bgColor && _.isString(image.bgColor) ? image.bgColor : "red";

    gm( image.width, image.height, bgColor )
        .write( image.output, function (err) {
            if (!err) {
                console.log('-- IMAGE src created successful! path: ' + image.output);
            } else {
                console.log("[ERROR] couldn't create src: " + image.output);
                console.log(err);
            }
        });

    return image;
};

