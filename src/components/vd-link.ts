import { bindable } from "aurelia-framework";
import { VdData } from "./vd-data";

export class VdLink extends VdData {
    @bindable public href: string = "#";
    // tslint:disable-next-line:no-empty
    @bindable public click: () => void = () => {};
}