"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./attributes/clipboard"));
__export(require("./attributes/draggable"));
__export(require("./attributes/popover"));
__export(require("./attributes/tooltip"));
__export(require("./components/bootstrap-select"));
__export(require("./components/vd-bool-icon"));
__export(require("./components/vd-button"));
__export(require("./components/vd-data"));
__export(require("./components/vd-route"));
__export(require("./components/vd-td"));
__export(require("./components/vd-td-abbrev"));
__export(require("./components/vd-td-list"));
__export(require("./components/vd-th"));
class VdWebInitializer {
    constructor() {
        this.customAttributes = [
            "clipboard",
            "draggable",
            "popover",
            "tooltip"
        ];
        this.components = [
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
    }
    configure(aurelia) {
        const resources = this.components.map(x => `components/${x}`)
            .concat(this.customAttributes.map(x => `attributes/${x}`));
        aurelia.use.standardConfiguration().globalResources(resources);
    }
}
exports.VdWebInitializer = VdWebInitializer;
