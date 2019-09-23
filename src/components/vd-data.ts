import { autoinject, bindable } from 'aurelia-framework';

@autoinject
export class VdData {
  @bindable public labelClass = 'col-6';
  @bindable public dataClass = 'col-6';
  @bindable public label: string | undefined;
  @bindable public value: string | undefined;
}
