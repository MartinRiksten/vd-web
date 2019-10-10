import { bindable } from 'aurelia-framework';
import { VdFormInput } from './vd-form-input';

export class VdFormCheckbox extends VdFormInput<boolean> {
    @bindable public labelClass = 'col-6';
    @bindable public groupClass = 'offset-sm-4';
  }
