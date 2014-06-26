console.log( "-- start app: create placeholders" );
console.log( "-- needs imagemagick" );

// imports:
var tools = require( 'json-tools' );

// read config:
var config = require( "./example/placeholder.json" );


var resize = require( './impl/transform/resizeImage.js').transform;
var prepareBasicThumbnail =  require( './impl/transform/prepareBasicThumbnail.js').transform;
var prepareCopiesThumbnails =  require( './impl/transform/prepareCopiesThumbnails.js').transform;

tools.query( config )
    .select( '.images > *' )
    .transform( prepareBasicThumbnail )
    .transform( resize )
    .transform( prepareCopiesThumbnails )
    .split()
    .transform( resize );
