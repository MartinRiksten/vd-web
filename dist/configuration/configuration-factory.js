"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var configuration_1 = require("./configuration");
var debug_configuration_1 = require("./debug-configuration");
var release_configuration_1 = require("./release-configuration");
/**
 * Factory for the initializer class
 */
var InitializerFactory = /** @class */ (function () {
    function InitializerFactory() {
    }
    /**
     * Create the appropriate initializer
     * @param mode: The current configuration mode
     */
    InitializerFactory.create = function (mode) {
        switch (mode) {
            case configuration_1.ConfigurationMode.Debug:
                return new debug_configuration_1.DebugConfiguration();
            case configuration_1.ConfigurationMode.Release:
                return new release_configuration_1.ReleaseConfiguration();
            default:
                throw new Error('Unknown configuration mode');
        }
    };
    return InitializerFactory;
}());
exports.InitializerFactory = InitializerFactory;
