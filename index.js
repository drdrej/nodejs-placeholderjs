console.log( "-- start app: create placeholders" );
console.log( "-- needs imagemagick" );

// need json-tools to handle json-transformations:
var tools = require( 'json-tools' );

// read config:
var config = require( "./placeholder.json" );

// include underscore: nice lib
var _ = require( "underscore" );

tools.query( config )
    .select( '.images > *' )
    .transform( function( image ){
        var path = image.path + "/" + image.src + "." + image.type;
        var width = image.width;
        var height = image.height;
        var output = image.output + "/" + image.src + "_" + width + "x" + height + "." + image.type;

        console.log( "-- resize image: " + path );
        console.log( "-- resized path: " + output );

        return {
          "path"   : path,
          "output" : output,
          "width"  : width,
          "height" : height,

          "src"    : image
        };
    })
    .transform( function( image ) {
        console.log( "-- create thumbnail: " + image.path );
        var fs = require('fs');
        var gm = require('gm');

        gm( image.path )
            .resize( image.width, image.height)
            .noProfile()
            .write( image.output, function (err) {
                if (!err)
                    console.log('-- IMAGE resize done! path: ' + image.output );
                else
                    console.log( err );
            });

        // return original image after transformation.
        return image;
    })
    .transform( function( image ) {
        console.log( "-- PREPARE COPIES ..." );

        var copies = image.src.copy;
        if( !_.isArray(copies) ) {
            console.log( "WARN: couldn't create copies. should be an array" );
        }

        var result = []

        _.each( copies, function( name ) {
            console.log( "-- create path for: " + name);

            var copy = {
                path: image.path,
                width: image.src.width,
                height: image.src.height,
                output: (image.src.output + "/" + name + "_" + this.width + "x" + this.height + "." + image.src.type)
            };

            result.push(copy);
        });

        console.log( "-- ready!!!" );
        return result;
    });

    // TODO: split  array in elements ...
    //.split();






/*
       "path"   : "./img",
        "src"    : "test.png",
        "type"   : "png",

        "width"  : 100,
        "height" : 100,

        "copy" : [
            "xyz"
        ]

*/
// http://placehold.it/350x150

// * [gulp-changed](https://www.npmjs.org/package/gulp-changed/): only resize changed images
//```js
//

/*
var gulp    = require('gulp');
var imageResize = require('gulp-image-resize');

var changed = require("gulp-changed");
*/
// .pipe(changed("dist"))
// "src/**/*.{jpg,png}"
/*
gulp.task("changed", function () {
    gulp.src( "img/test.png" )
        .pipe(imageResize({ width : 100 }))
        .pipe(gulp.dest("dist"));
});
*/
