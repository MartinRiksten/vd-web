import { autoinject, customAttribute } from 'aurelia-framework';
import { PopoverOption } from 'bootstrap';
import $ from 'jquery';

@autoinject
@customAttribute('popover')
export class PopoverCustomAttribute {
  public value: PopoverOption;

  constructor(private readonly element: Element) {}

  public attached(): void {
    if (!this.value) {
      return;
    }

    const value = this.value === "init" ? void 0 : this.value;
    setTimeout(() => $(this.element).popover(value), 100);
  }

  public detached(): void {
    if (!this.value) {
      return;
    }

    $(this.element).popover('dispose');
  }
}
