var _ = require( "underscore" );

var prepareCopiesThumbnails = function( image ) {
    console.log( "-- PREPARE COPIES ..." );

    var copies = image.src.copy;
    if( !_.isArray(copies) ) {
        console.log( "WARN: couldn't create copies. should be an array" );
    }

    var result = [];

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
};

exports.transform = prepareCopiesThumbnails;

