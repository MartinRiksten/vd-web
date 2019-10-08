import { bindable } from "aurelia-framework";
import { VdData } from "./vd-data";

export class VdLink extends VdData {
    @bindable public href: string = "#";
    @bindable public click: () => void;
}