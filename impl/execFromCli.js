/**
 * parse cli-options and exec placeholder.
 *
 * @type {exports}
 */
var nopt = require("nopt");

exports.cli = function() {
        var path = require("path");

        var knownOpts = {
                "config" : path
        };

        var shortHands = {
            "c" : ["--config", "Path to placeholder config file."]
        };

    var parsed = nopt(knownOpts, shortHands, process.argv, 2);

    console.log(parsed);

    return parsed;
};