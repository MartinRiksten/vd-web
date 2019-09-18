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
export declare class VdWebInitializer {
    private readonly customAttributes;
    private readonly components;
    configure(aurelia: Aurelia): void;
}
