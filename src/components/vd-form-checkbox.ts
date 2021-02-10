import { bindable } from 'aurelia-framework';
import { VdFormData } from './vd-form-data';
import { VdFormInput } from './vd-form-input';

export class VdFormCheckbox extends VdFormInput<boolean> {
  public static defaultLabelClass = VdFormData.defaultLabelClass;
  public static defaultGroupClass = 'offset-md-4';
  
  @bindable public labelClass = VdFormCheckbox.defaultLabelClass
  @bindable public groupClass = VdFormCheckbox.defaultGroupClass;
  @bindable public inputClass: string;

  @bindable public inputId: string;
  @bindable public displayName: string;
  @bindable public value: boolean;

  @bindable public autoFocus: boolean;
}
