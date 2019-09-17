"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./attributes/clipboard");
require("./attributes/draggable");
require("./attributes/popover");
require("./attributes/tooltip");
class VdWebInitializer {
    configure(aurelia) {
        const customAttributes = [
            "clipboard",
            "draggable",
            "popover",
            "tooltip"
        ];
        const resources = customAttributes.map(x => `attributes/${x}`);
        aurelia.use.standardConfiguration().globalResources(resources);
    }
}
exports.VdWebInitializer = VdWebInitializer;
