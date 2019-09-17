import { autoinject, bindable } from "aurelia-framework";

@autoinject
export class VdTd {
    @bindable public value: string | undefined;
}