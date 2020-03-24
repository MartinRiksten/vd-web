import { bindable } from 'aurelia-framework';
import { PopoverOption } from 'bootstrap';
import { VdFormInput } from './vd-form-input';

export class VdFormTextbox extends VdFormInput<string> {
  @bindable public labelClass: string;
  @bindable public groupClass: string;
  @bindable public inputClass: string;

  @bindable public inputId: string;
  @bindable public displayName: string;
  @bindable public value: string;

  @bindable public autoFocus: boolean;
 
  @bindable public regex: string;
  @bindable public maxLength: number = 99;
  @bindable public placeHolder: string;
  @bindable public inputType = "text";

  @bindable public popoverOption: PopoverOption | string = {
    container: 'body',
    placement: 'right',
    trigger: 'manual',
  } as PopoverOption;

  public dataToggle: string;

  public bind() {
    this.dataToggle = !!this.popoverOption ? 'popover' : '';
  }
}
