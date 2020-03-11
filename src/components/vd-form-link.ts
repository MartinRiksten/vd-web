import { bindable } from 'aurelia-framework';
import { VdFormData } from './vd-form-data';

export class VdFormLink extends VdFormData {
  @bindable public labelClass: string;
  @bindable public groupClass: string;
  @bindable public displayName: string;
  @bindable public value: string;
  @bindable public showIcon = true;
  @bindable public href: string = '#';
  @bindable public target: string = "_self";
  @bindable public icon = 'fas fa-chevron-circle-right';
  @bindable public clickTarget: string | undefined;
  @bindable public clickHandler!: (event: Event) => void;

  public onClick(event: Event) {
    if (!!this.clickTarget) {
      $(this.clickTarget).click();
    }

    if (!!this.clickHandler) {
      this.clickHandler(event);
    }
  }
}
