
// read config: Example
// var config = require( "./example/placeholder.json" );
exports.exec = function( config ) {
    console.log( "-- start: placeholders" );

    var _ = require( "underscore" );

    if(_.isNull(config) ) {
        console.log( "ERROR: needs config. passed param:config is NULL/undefined.");
        return;
    }

    var tools = require( 'json-tools' );

    tools.json( config )
        .select( '.images > *' )
        .transform( __dirname + '/transform/prepareBasicThumbnail.js' )
        .transform( __dirname + '/transform/resizeImage.js' )
        .transform( __dirname + '/transform/prepareCopiesThumbnails.js' )
        .split()
        .transform( __dirname + '/transform/resizeImage.js' );
};


