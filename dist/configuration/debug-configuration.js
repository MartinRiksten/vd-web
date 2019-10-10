"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Initializer for the debug configuration mode
 */
var DebugConfiguration = /** @class */ (function () {
    function DebugConfiguration() {
    }
    /**
     * Configures the configuration mode dependant stuff
     * @param config The framework configuration
     */
    DebugConfiguration.prototype.initialize = function (config) {
        config.developmentLogging();
    };
    return DebugConfiguration;
}());
exports.DebugConfiguration = DebugConfiguration;
