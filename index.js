console.log( "-- start app: create placeholders" );
console.log( "-- needs imagemagick" );

// need json-tools to handle json-transformations:
var tools = require( 'json-tools' );

// read config:
var config = require( "./placeholder.json" );

// include underscore: nice lib
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

var prepareBasicThumbnail = function( image ){
    console.log( "-- TRAMSFORMATION: create img.resize.node");
    return {
        "$type"    : "img/resize",
        "path"   : (image.path + "/" + image.src + "." + image.type),
        "output" : (image.output + "/" + image.src + "_" + image.width + "x" + image.height + "." + image.type),
        "width"  : image.width,
        "height" : image.height,

        "src"    : image
    };
};

var prepareCopiesThumbnails = function( image ) {
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
            output: (image.src.output + "/" + name + "_" + image.src.width + "x" + image.src.height + "." + image.src.type)
        };

        result.push(copy);
    });

    console.log( "-- ready!!!" );
    return result;
}

tools.query( config )
    .select( '.images > *' )
    .transform( prepareBasicThumbnail )
    .transform( resize )
    .transform( prepareCopiesThumbnails )
    .split()
    .transform( resize );
