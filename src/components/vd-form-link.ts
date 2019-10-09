import { bindable } from 'aurelia-framework';
import { VdFormData } from './vd-form-data';

export class VdFormLink extends VdFormData {
  @bindable public href: string = '#';
  // tslint:disable-next-line:no-empty
  @bindable public click: () => void = () => {};
}
