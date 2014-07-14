var _ = require( "underscore" );

var create = function( image, path, output ) {
    console.log( "-- create src: " + image.path );

    var fs = require('fs');
    var gm = require('gm');

    if (fs.existsSync(path)) {
        console.log( "-- file exists. use original. skip create()" );
        return image;
    }

    var bgColor = image.src.bgColor && _.isString(image.src.bgColor) ? image.src.bgColor : "red";
    var isRunning = true;

    var realPath = require( 'path').resolve(path);

    gm( image.width, image.height, bgColor )
        .write(realPath, function (err) {
            if (!err) {
                console.log('-- IMAGE src created successful! path: ' + realPath);
            } else {
                console.log("[ERROR] couldn't create src: " + realPath);
                console.log(err);
            }

            isRunning = false;
        });

    /*
     .drawText(10, 50, "from scratch")
    */

    /*
    var wait = function() {
        console.log( "-- set timeout." );

        setTimeout(function () {
            if( isRunning )
                wait();
            else
                console.log( "-- ready to do next step." );
        }, 1000);
    };

    wait();
   */

    return image;
};



exports.transform = function(image) {
    return create(image, image.path, image.output)
};

exports.DEFAULT_HEIGHT = 512;
exports.DEFAULT_WIDTH = 512;

