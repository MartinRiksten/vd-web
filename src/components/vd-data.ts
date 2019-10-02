import { bindable } from 'aurelia-framework';

export class VdData {
  @bindable public formClass = 'col-6';
  @bindable public labelClass = 'col-6';
  @bindable public dataClass = 'col-6';
  @bindable public label!: string;
  @bindable public value!: string;
}
