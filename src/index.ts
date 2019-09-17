import { Aurelia } from "aurelia-framework";
import "./attributes/clipboard";
import "./attributes/draggable";
import "./attributes/popover";
import "./attributes/tooltip";

export class VdWebInitializer {
    public configure(aurelia: Aurelia): void {
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