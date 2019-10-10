import { bindable } from 'aurelia-framework';
import { PopoverOption } from 'bootstrap/index';
import { VdFormInput } from './vd-form-input';

export class VdFormTextbox extends VdFormInput<string> {
  @bindable public labelClass: string;
  @bindable public groupClass: string;
  @bindable public inputClass: string;

  @bindable public inputId: string;
  @bindable public label: string;
  @bindable public value: string;

  @bindable public autoFocus: boolean;

  @bindable public regex: string;
  @bindable public maxLength: string;
  @bindable public placeHolder: string;

  @bindable public usePopover: boolean = true;
  @bindable public popoverOption = { container: 'body', placement: 'right', trigger: 'manual' } as PopoverOption;

  public dataToggle: string;
  public popover: PopoverOption | undefined;

  public bind() {
    this.dataToggle = this.usePopover ? 'popover' : '';
    this.popover = this.usePopover ? this.popoverOption : undefined;
  }
}