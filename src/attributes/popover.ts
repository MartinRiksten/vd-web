import { autoinject, customAttribute } from "aurelia-framework";
import { PopoverOption } from "bootstrap";
import $ from "jquery";

@autoinject
@customAttribute("popover")
export class PopoverCustomAttribute {
    public value: PopoverOption | undefined;

    constructor(private readonly element: Element) {
    }

    public attached(): void {
        if (!this.value) {
            return;
        }

        $(this.element).popover(this.value);
    }

    public detached(): void {
        if (!this.value) {
            return;
        }

        $(this.element).popover("dispose");
   }
}
