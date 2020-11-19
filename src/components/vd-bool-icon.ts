import { bindable } from 'aurelia-framework';

export class VdBoolIcon {
  public static SuccessIcon = 'fa-check text-success';
  public static FailureIcon = 'fa-times text-danger';
  public static UndeterminedIcon = '';

  @bindable public value: boolean;

  public getIcon(value: boolean) {
    return value === true
      ? VdBoolIcon.SuccessIcon
      : value === false
        ? VdBoolIcon.FailureIcon
        : VdBoolIcon.UndeterminedIcon;
  }
}
