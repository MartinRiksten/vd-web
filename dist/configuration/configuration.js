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
class Configuration {
    /**
     * Creates the map of available modes
     */
    static createModes() {
        const result = new Map();
        result.set('Debug', ConfigurationMode.Debug);
        result.set('Release', ConfigurationMode.Release);
        return result;
    }
}
exports.Configuration = Configuration;
/**
 * The map of available modes
 */
Configuration.modes = Configuration.createModes();
