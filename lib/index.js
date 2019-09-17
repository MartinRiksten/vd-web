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
        const components = [
            "bootstrap-select",
            "vd-bool-icon",
            "vd-button",
            "vd-data",
            "vd-td",
            "vd-td-abbrev",
            "vd-td-list",
            "vd-th",
            "vd-route"
        ];
        const resources = components.map(x => `components/${x}`)
            .concat(customAttributes.map(x => `attributes/${x}`));
        aurelia.use.standardConfiguration().globalResources(resources);
    }
}
exports.VdWebInitializer = VdWebInitializer;
