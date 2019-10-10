"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
/**
 * Initializer for the release configuration mode
 */
var ReleaseConfiguration = /** @class */ (function () {
    function ReleaseConfiguration() {
    }
    /**
     * Configures the configuration mode dependant stuff
     * @param config The framework configuration
     */
    ReleaseConfiguration.prototype.initialize = function (config) {
        aurelia_framework_1.LogManager.setLevel(aurelia_framework_1.LogManager.logLevel.warn);
    };
    return ReleaseConfiguration;
}());
exports.ReleaseConfiguration = ReleaseConfiguration;
