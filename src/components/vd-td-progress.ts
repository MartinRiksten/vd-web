import { bindable } from "aurelia-framework";
import { IFilterable } from "../utilities/list-helper";
import { VdTd } from "./vd-td";


export class VdTdProgress extends VdTd<number> {
    @bindable public value: number;
    @bindable public instance: IFilterable;
    @bindable public hideValue: boolean = false;

    public getWidthStyle(value: number) {
        return `width: ${value}%`;
    }
}
