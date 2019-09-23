"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Initializer for the debug configuration mode
 */
class DebugConfiguration {
    /**
     * Configures the configuration mode dependant stuff
     * @param config The framework configuration
     */
    initialize(config) {
        config.developmentLogging();
    }
}
exports.DebugConfiguration = DebugConfiguration;
