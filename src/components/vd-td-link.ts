import { bindable } from 'aurelia-framework';
import { VdTd } from './vd-td';

export class VdTdLink extends VdTd<string> {
  @bindable public showIcon = true;
  @bindable public href: string = '#';
  @bindable public icon = 'fas fa-chevron-circle-right';
  @bindable public clickTarget: string | undefined;
  @bindable public clickHandler!: (event: Event) => void;
  @bindable public target: string;

  public onClick(event: Event) {
    if (!!this.clickTarget) {
      $(this.clickTarget).click();
    }

    if (!!this.clickHandler) {
      this.clickHandler(event);
    }
  }
}
