import { bindable } from 'aurelia-framework';
import { PopoverOption } from 'bootstrap/index';

export class VdTextbox {
  @bindable public formClass = 'col-6';
  @bindable public labelClass = 'col-6';
  @bindable public inputClass = 'col-6';

  @bindable public inputId: string;
  @bindable public label: string;
  @bindable public value: string;

  @bindable public element: Element;
  @bindable public inputRegex: string;
  @bindable public maxLength: string;
  @bindable public placeholder: string;

  @bindable public usePopover: boolean = true;
  @bindable public popoverOption = { container: 'body', placement: 'right', trigger: 'manual' } as PopoverOption;

  public dataToggle: string;
  public popover: PopoverOption | undefined;

  public bind() {
    this.dataToggle = this.usePopover ? 'popover' : '';
    this.popover = this.usePopover ? this.popoverOption : undefined;
  }
}
