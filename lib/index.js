"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./attributes/clipboard");
require("./attributes/draggable");
require("./attributes/popover");
require("./attributes/tooltip");
/**
 * VdWebInitialize
 * configuraion: FrameworkConfiguration
 */
class VdWebInitializer {
    initialize(configuration) {
        configuration.globalResources(["attributes/clipboard", "attributes/draggable", "attributes/popover", "tooltip"]);
    }
}
exports.VdWebInitializer = VdWebInitializer;
