
exports.exec = function(path) {
    var impl = require( "./impl/main.js" );

    var loader = require( 'artefactjs-loader' );
    var config = loader.load( path );

    impl.exec( config );
};