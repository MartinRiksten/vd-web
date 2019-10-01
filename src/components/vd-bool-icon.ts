import { autoinject, bindable } from 'aurelia-framework';

@autoinject
export class VdBoolIcon {
  @bindable public value: boolean;

  public getIcon(value: boolean) {
    return value === true ? 'fa-check text-success' : value === false ? 'fa-times text-danger' : "";
  }
}
