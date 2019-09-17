import { Aurelia } from "aurelia-framework";
import "./attributes/clipboard";
import "./attributes/draggable";
import "./attributes/popover";
import "./attributes/tooltip";
import "./components/bootstrap-select";
import "./components/vd-bool-icon";
import "./components/vd-button";
import "./components/vd-data";
import "./components/vd-route";
import "./components/vd-td";
import "./components/vd-td-abbrev";
import "./components/vd-td-list";
import "./components/vd-th";

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