import { bindable } from 'aurelia-framework';
import { PopoverOption } from 'bootstrap/index';

export class VdFormInput<T> {
  @bindable public labelClass = 'col-6';
  @bindable public groupClass = 'col-6';
  @bindable public inputClass = '';

  @bindable public inputId: string;
  @bindable public label: string;
  @bindable public value: T;

  @bindable public autoFocus = false;

  public element: Element;

  public attached() {
    if (this.autoFocus) {
      $(this.element).focus();
    }
  }
}
