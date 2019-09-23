import { autoinject, bindable } from 'aurelia-framework';

@autoinject
export class VdBoolIcon {
  @bindable public value: boolean = false;

  public getIcon(value: boolean) {
    return value ? 'fa-check text-success' : 'fa-times text-danger';
  }
}
