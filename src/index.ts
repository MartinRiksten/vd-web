import { FrameworkConfiguration } from "aurelia-framework";
import "./attributes/clipboard";
import "./attributes/draggable";
import "./attributes/popover";
import "./attributes/tooltip";

/**
 * VdWebInitialize
 * configuraion: FrameworkConfiguration 
 */
export class VdWebInitializer {
    public initialize(configuration: FrameworkConfiguration): void {
        configuration.globalResources(["attributes/clipboard", "attributes/draggable", "attributes/popover", "tooltip"]);
    }
}