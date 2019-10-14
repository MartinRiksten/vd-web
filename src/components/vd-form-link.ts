import { bindable } from 'aurelia-framework';
import { VdFormData } from './vd-form-data';

export class VdFormLink extends VdFormData {
  @bindable public labelClass: string;
  @bindable public dataClass: string;
  @bindable public label: string;
  @bindable public value: string;
  @bindable public showIcon = true;
  @bindable public href: string = '#';
  @bindable public clickHandler: (event: Event) => void;

  public onClick(event: Event) {
    if (!!this.clickHandler) {
      this.clickHandler(event)
    }
  }
}
