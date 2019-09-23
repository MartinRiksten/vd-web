"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const configuration_1 = require("./configuration");
const debug_configuration_1 = require("./debug-configuration");
const release_configuration_1 = require("./release-configuration");
/**
 * Factory for the initializer class
 */
class InitializerFactory {
    /**
     * Create the appropriate initializer
     * @param mode: The current configuration mode
     */
    static create(mode) {
        switch (mode) {
            case configuration_1.ConfigurationMode.Debug:
                return new debug_configuration_1.DebugConfiguration();
            case configuration_1.ConfigurationMode.Release:
                return new release_configuration_1.ReleaseConfiguration();
            default:
                throw new Error('Unknown configuration mode');
        }
    }
}
exports.InitializerFactory = InitializerFactory;
