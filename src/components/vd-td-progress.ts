import { bindable } from "aurelia-framework";
import { IFilterable, VdTd } from "..";


export class VdTdProgress extends VdTd {
    @bindable public value: string;
    @bindable public instance: IFilterable;
    @bindable public showValue: boolean = false;

    public getWidthStyle(value: number) {
        return `width: ${value}%`;
    }
}
