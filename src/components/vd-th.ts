import { autoinject, bindable } from "aurelia-framework";
import { IOrderInfo } from "./list-helper";

@autoinject
export class VdTh {
    @bindable public label: string | undefined;
    @bindable public name: string | undefined;
    @bindable public order: IOrderInfo | undefined;

    public getClass(by: string, ascending: boolean): string {
        const result = !!this.order && by === this.name
            ? ascending
                ? "fas fa-caret-up"
                : "fas fa-caret-down"
            : "fas fa-caret-up invisible";
        return result;
    }
}