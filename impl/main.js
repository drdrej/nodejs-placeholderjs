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
        
        .select( '.images > *' )
        .validate( __dirname + '/validate/checkHeightWidth.js')

        .transform( __dirname + '/transform/prepareBasicThumbnail.js' )
        .validate(  __dirname + '/validate/checkHeightWidth.js' )
        .transform( __dirname + '/transform/createNewImage.js' )
        .transform( __dirname + '/transform/prepareCopiesThumbnails.js' )
        .split()
        .transform( __dirname + '/transform/resizeImage.js' );
};

exports.run = function( path ) {
    var loader = require( 'artefactjs-loader' );

    var config = loader.load( path );
    exports.exec( config );
};


