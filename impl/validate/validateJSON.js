require( 'colors' );

var _ = require( 'underscore' );

exports.validate = function( image, options ) {
   if( !image ) {
       console.log( "[IVALID] passed image is NULL".red );
       return false
   }

    if( !(image.version == 1) ) {
        console.log( "[IVALID] placeholderjs.json needs a version of type Number.".red );
        return false
    }

    if( !(_.isNumber(image.width) ) ) {
        console.log( "[IVALID] root:/.../image/width should be a number.".red );
        return false
    }


    if( !(image.width > 0))  {
        console.log( "[IVALID] root:/.../image/width mus be greater then 0.".red );
        return false
    }

    if( !(_.isNumber(image.width) ) ) {
        console.log( "[IVALID] root:/.../image/width should be a number.".red );
        return false
    }


    if( !(image.width > 0))  {
        console.log( "[IVALID] root:/.../image/width mus be greater then 0.".red );
        return false
    }

    return true;
};