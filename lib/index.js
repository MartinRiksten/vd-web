"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./attributes/clipboard");
require("./attributes/draggable");
require("./attributes/popover");
require("./attributes/tooltip");
require("./components/bootstrap-select");
require("./components/vd-bool-icon");
require("./components/vd-button");
require("./components/vd-data");
require("./components/vd-route");
require("./components/vd-td");
require("./components/vd-td-abbrev");
require("./components/vd-td-list");
require("./components/vd-th");
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
