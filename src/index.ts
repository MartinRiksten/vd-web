import { Aurelia } from "aurelia-framework";
import "./attributes/clipboard";
import "./attributes/draggable";
import "./attributes/popover";
import "./attributes/tooltip";

export function configure(aurelia: Aurelia): void {
    const customAttributes = [
        "clipboard",
        "draggable",
        "popover",
        "tooltip"
    ];
    const resources = customAttributes.map(x => `attributes/${x}`);
    aurelia.use.standardConfiguration().globalResources(resources);
}