/**
 *
 * @param json
 * @param options
 */
exports.transform = function( json, options ) {
    console.log( "-- prepare empty images list" );

    var images = [];

    var _ = require( 'underscore' );
    var Path = require( 'path' );
    var tools = require( 'json-tools' );

    var root = tools.selectable(json);
    var inputPath = root.text( '.$json > .input');
    var docPath = Path.dirname( root.text( '#$path') );

    var inputResolved = Path.resolve(docPath, inputPath);

    root.each( '.$json > .images > *', function( imgConfig ) {
        var copy = imgConfig.json.copy;
        var bgColor = imgConfig.text( '#bgColor' );
        var name = './' + imgConfig.text( '#src' ) + '.' + imgConfig.text( '#type' );

        imgConfig.each( '.output > *', function( outputConfig, idx ){
            var outputResolved = Path.resolve(
                     Path.resolve(docPath, outputConfig.text( '#path' ) ), name);
            var imgSrcFile = Path.resolve( inputResolved, name );

            var image = {
                width  : outputConfig.json.width,
                height : outputConfig.json.height,
                input  : imgSrcFile,
                output : outputResolved,
                bgColor: bgColor,
                copy : copy
            };

            images.push( image );
        } )

    });

    return images;
};