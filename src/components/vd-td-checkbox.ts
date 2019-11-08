import { bindable } from "aurelia-framework";
import { IFilterable } from "../utilities/list-helper";
import { VdTd } from "./vd-td";


export class VdTdCheckbox extends VdTd {
    @bindable public value: string;
    @bindable public instance: IFilterable;
    @bindable public variant = "text-success";
}
