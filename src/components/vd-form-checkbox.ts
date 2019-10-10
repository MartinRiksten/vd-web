import { bindable } from 'aurelia-framework';
import { VdFormInput } from './vd-form-input';

export class VdFormCheckbox extends VdFormInput<boolean> {
  @bindable public labelClass = 'col-6';
  @bindable public groupClass = 'offset-sm-4';
  @bindable public inputClass: string;

  @bindable public inputId: string;
  @bindable public label: string;
  @bindable public value: boolean;

  @bindable public autoFocus: boolean;
}
