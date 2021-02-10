import { bindable } from 'aurelia-framework';
import { VdFormData } from './vd-form-data';

export class VdFormLink extends VdFormData {
public static defaultIconClass = 'fas fa-chevron-circle-right';
public static defaultGroupClass = 'col-md-6 pl-4';

  @bindable public labelClass: string;
  @bindable public groupClass = VdFormLink.defaultGroupClass;
  @bindable public displayName: string;
  @bindable public value: string;
  @bindable public showIcon = true;
  @bindable public href: string = '#';
  @bindable public linkTarget: string = "_self";
  @bindable public icon = VdFormLink.defaultIconClass;
  @bindable public clickTarget: string | undefined;
  @bindable public clickHandler!: (event: Event) => void;

  public bind() {
    if (this.href === "#" && (!this.clickTarget || !this.clickHandler)) {
      this.href = "";
    }
  }

  public onClick(event: Event) {
    if (!!this.clickTarget) {
      $(this.clickTarget).click();
    }

    if (!!this.clickHandler) {
      this.clickHandler(event);
    }
  }
}
