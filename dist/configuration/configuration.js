"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Enumeration of available configuration modes
 */
var ConfigurationMode;
(function (ConfigurationMode) {
    ConfigurationMode[ConfigurationMode["Debug"] = 0] = "Debug";
    ConfigurationMode[ConfigurationMode["Release"] = 1] = "Release";
})(ConfigurationMode = exports.ConfigurationMode || (exports.ConfigurationMode = {}));
/**
 * Container class for the current configuration mode
 */
var Configuration = /** @class */ (function () {
    function Configuration() {
    }
    /**
     * Creates the map of available modes
     */
    Configuration.createModes = function () {
        var result = new Map();
        result.set('Debug', ConfigurationMode.Debug);
        result.set('Release', ConfigurationMode.Release);
        return result;
    };
    /**
     * The map of available modes
     */
    Configuration.modes = Configuration.createModes();
    return Configuration;
}());
exports.Configuration = Configuration;
