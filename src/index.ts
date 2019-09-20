import { FrameworkConfiguration } from "aurelia-framework";
import { PLATFORM } from "aurelia-pal";

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

export function configure(config: FrameworkConfiguration) {
    const attributes = [
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
    const converters = [
        "bool",
        "date",
        "encode-uri",
        "null",
        "uppercase"
    ];
   
    const resources = components.map(x => `./dist/components/${x}`)
        .concat(attributes.map(x => `./dist/attributes/${x}`))
        .concat(converters.map(x => `./dist/converters/${x}`))
        .map(x => PLATFORM.moduleName(x)); 
    config.globalResources(resources);
}