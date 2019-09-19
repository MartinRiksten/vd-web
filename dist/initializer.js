"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
