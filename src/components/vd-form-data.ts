import { bindable } from 'aurelia-framework';

export class VdFormData {
  @bindable public labelClass = 'col-md-6';
  @bindable public dataClass = 'col-md-6';
  @bindable public label: string;
  @bindable public value: string;
}
