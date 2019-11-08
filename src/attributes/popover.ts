import { autoinject, bindable, customAttribute } from 'aurelia-framework';
import { PopoverOption } from 'bootstrap';
import $ from 'jquery';

@autoinject
@customAttribute('popover')
export class PopoverCustomAttribute {
  @bindable({ primaryProperty: true }) public value: PopoverOption;

  constructor(private readonly element: Element) {}

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

    $(this.element).popover('dispose');
  }
}
