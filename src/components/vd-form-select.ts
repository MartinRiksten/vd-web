import { PopoverOption } from 'bootstrap';

import { autoinject, bindable } from 'aurelia-framework';
import { IBootstrapSelectOption } from './bootstrap-select';
import { VdFormInput } from './vd-form-input';

@autoinject
export class VdFormSelect extends VdFormInput<string> {
  @bindable public labelClass: string;
  @bindable public groupClass: string;
  @bindable public selectClass: string;
  @bindable public inputClass: string;

  @bindable public inputId: string;
  @bindable public displayName: string;
  @bindable public value: string;
  @bindable public virtualScroll: boolean | number;

  @bindable public autoFocus: boolean;
  @bindable public width = "100%";

  @bindable public options: IBootstrapSelectOption[];
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
