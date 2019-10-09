import { bindable } from 'aurelia-framework';
import { PopoverOption } from 'bootstrap/index';

export class VdTextbox {
  @bindable public labelClass = 'col-6';
  @bindable public groupClass = 'col-6';
  @bindable public inputClass = '';

  @bindable public inputId: string;
  @bindable public label: string;
  @bindable public value: string;

  @bindable public regex: string;
  @bindable public maxLength: string;
  @bindable public placeHolder: string;
  @bindable public autoFocus = false;

  @bindable public usePopover: boolean = true;
  @bindable public popoverOption = { container: 'body', placement: 'right', trigger: 'manual' } as PopoverOption;

  public element: Element;
  public dataToggle: string;
  public popover: PopoverOption | undefined;

  public bind() {
    this.dataToggle = this.usePopover ? 'popover' : '';
    this.popover = this.usePopover ? this.popoverOption : undefined;
  }

  public attached() {
    if (this.autoFocus) {
      $(this.element).focus();
    }
  }
}
