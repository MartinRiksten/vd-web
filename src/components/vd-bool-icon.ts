import { bindable } from 'aurelia-framework';

export class VdBoolIcon {
  @bindable public value: boolean;

  public getIcon(value: boolean) {
    return value === true
      ? 'fa-check text-success'
      : value === false
      ? 'fa-times text-danger'
      : 'fa-question text-warning';
  }
}
