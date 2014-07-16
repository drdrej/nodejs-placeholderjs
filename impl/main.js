/**
 * structure of config : {
 *     $modified : Date,
 *     $path     : path to json,
 *     $json     : loaded json
 * }
 *
 * @param config
 */
exports.exec = function( config ) {
    console.log( "-- start: placeholders" );

    var _ = require( "underscore" );

    if(_.isNull(config) ) {
        console.log( "ERROR: needs config. passed param:config is NULL/undefined.");
        return;
    }

    var tools = require( 'json-tools' );

    tools.json( config )
        .validate( __dirname + "/validate/checkVersion.js" )
        .transform( __dirname + '/transform/prepareImageWrapper.js' )
        .transform( __dirname + '/transform/prepareImageInput.js' )
        .split()

        .transform( __dirname + '/transform/createOutputDirs.js' )
        .tool( __dirname + '/ops/newImage.js' )
        .tool( __dirname + '/ops/resizeImage.js')
        .tool( __dirname + '/ops/createCopies.js')

        .done( function() {
            console.log( "[FINISHED]".green );
        });
     };

exports.run = function( path ) {
    var loader = require( 'artefactjs-loader' );

    var config = loader.load( path );
    exports.exec( config );
};

