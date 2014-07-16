exports.transform = function( image, options ) {
    var FS = require( 'fs' );

    if( FS.existsSync(image.output) ) {
        return image;
    }

    var Path = require( 'path' );
    var dirs = Path.dirname(image.output);

    var Wrench = require( 'wrench' );
    Wrench.mkdirSyncRecursive(dirs, 0777);

    console.log( "-- path created: " + dirs);

    return image;
};