import { Aurelia } from "aurelia-framework";

export class VdWebInitializer {
    private readonly customAttributes = [
        "clipboard",
        "draggable",
        "popover",
        "tooltip"
    ];
    private readonly components = [
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

    public configure(aurelia: Aurelia): void {
        const resources = this.components.map(x => `components/${x}`)
         .concat(this.customAttributes.map(x => `attributes/${x}`));
        aurelia.use.standardConfiguration().globalResources(resources);
    }
}