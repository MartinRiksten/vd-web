import { VdFormData } from "./vd-form-data";

export class VdFormInput<T> {
  public static defaultInputClass = '';

  public labelClass = VdFormData.defaultLabelClass;
  public groupClass = VdFormData.defaultGroupClass;
  public inputClass = VdFormInput.defaultInputClass;

  public inputId: string;
  public displayName: string;
  public value: T;

  public autoFocus = false;

  public element: Element;

  public attached() {
    if (this.autoFocus) {
      $(this.element).focus();
    }
  }
}
