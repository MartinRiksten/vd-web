import { bindable } from 'aurelia-framework';

export class VdFormData {
  @bindable public labelClass = 'col-md-6';
  @bindable public groupClass = 'col-md-6';
  @bindable public dataClass = 'ml-2';
  @bindable public displayName: string;
  @bindable public value: string;
}
