"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const aurelia_framework_1 = require("aurelia-framework");
/**
 * Initializer for the release configuration mode
 */
class ReleaseConfiguration {
    /**
     * Configures the configuration mode dependant stuff
     * @param config The framework configuration
     */
    initialize(config) {
        aurelia_framework_1.LogManager.setLevel(aurelia_framework_1.LogManager.logLevel.warn);
    }
}
exports.ReleaseConfiguration = ReleaseConfiguration;
