exports.validate = function( config, options ) {
    require( 'colors' );

    if( !config ) {
        console.log( "[IVALID] passed config is NULL".red );
        return false;
    }

    if( !config.$json ) {
        console.log( "[IVALID] json is invalid. META-DATA missed. where is $json-Filed?".red );
        return false;
    }

    if( !(config.$json.version > 0) ) {
        console.log( "[IVALID] placeholderjs.json needs a version of type Number.".red );
        return false;
    }

    return true;
};