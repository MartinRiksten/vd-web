import { Aurelia } from "aurelia-framework";

export * from "./attributes/clipboard";
export * from "./attributes/draggable";
export * from "./attributes/popover";
export * from "./attributes/tooltip";
export * from "./components/bootstrap-select";
export * from "./components/vd-bool-icon";
export * from "./components/vd-button";
export * from "./components/vd-data";
export * from "./components/vd-route";
export * from "./components/vd-td";
export * from "./components/vd-td-abbrev";
export * from "./components/vd-td-list";
export * from "./components/vd-th";

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