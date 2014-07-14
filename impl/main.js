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
        .transform( __dirname + '/transform/createNewImage.js' )
        .transform( __dirname + '/transform/resizeImage.js' );

        /*
        .transform( function( element, options ) {
            console.log();
            return element.$images;
        })
        .validate( function( element ) {
            console.log();
            return true;
        });
        */

        /*
        .select( '.images > *' )
        .validate( __dirname + '/validate/checkHeightWidth.js')

        .transform( __dirname + '/transform/prepareBasicThumbnail.js' )
        .validate(  __dirname + '/validate/checkHeightWidth.js' )
        .transform( __dirname + '/transform/createNewImage.js' )
        .transform( __dirname + '/transform/prepareCopiesThumbnails.js' )
        .split()
        .transform( __dirname + '/transform/resizeImage.js' );
        */
};

exports.run = function( path ) {
    var loader = require( 'artefactjs-loader' );

    var config = loader.load( path );
    exports.exec( config );
};


// transform from:
/*
 {
 "version"        : 2,

 "input"           : "./img",

 "images" : [
 {
 "src"    : "test",
 "type"   : "png",

 "output"  : [{
 "path" : "./dist/dir1",
 "width"  : 100,
 "height" : 100
 }],

 "copy" : [
 "btn_example_state_on"
 ]
 },
 {
 "src"    : "test_new",
 "type"   : "png",
 "bgColor"   : "rgb(0, 10, 25)",

 "output"  : [{
 "path" : "./dist/dir2",
 "width"  : 200,
 "height" : 200
 }],

 "copy" : [
 "btn_example_state_on_2"
 ]
 }
 ]
 }

 to: ....

create source if not exists:
 {
     input:  'path',
     output: 'path',
     bgColor : 'color',

     width: int,
     height: int
 }
 */