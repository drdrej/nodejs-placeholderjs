/**
 *
 * @param json
 * @param options
 */
exports.transform = function( json, options ) {
    console.log( "-- prepare empty images list" );

    json.$images = [];

    return json;
};