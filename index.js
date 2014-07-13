// Example to create placeholders

var impl = require( "./impl/main.js" );

var loader = require( 'artefactjs-loader' );
var config = loader.load( "./example/placeholder.json" );

// var config = require( "./example/placeholder.json" );

impl.exec( config );