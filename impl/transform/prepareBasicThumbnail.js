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

exports.transform = prepareBasicThumbnail;