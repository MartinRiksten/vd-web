import { autoinject, bindable } from "aurelia-framework";
import { PopoverOption } from "bootstrap/index";

@autoinject
export class VdTdList {
    @bindable public items: IValueList[] | undefined;

    public getToggle(item: IValueList): string | undefined {
        return !item.popoverOption ? void 0 : "popover";
    }
}

export interface IValueList {
    id: string;
    value: string;
    variant?: string;
    binding?: any;
    popoverOption?: PopoverOption;
}