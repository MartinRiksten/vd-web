import { bindable } from 'aurelia-framework';
import { VdFormData } from './vd-form-data';

export class VdFormLink extends VdFormData {
  @bindable public labelClass: string;
  @bindable public dataClass: string;
  @bindable public displayName: string;
  @bindable public value: string;
  @bindable public showIcon = true;
  @bindable public href: string = '#';
  @bindable public icon = "fas fa-chevron-circle-right";
}
