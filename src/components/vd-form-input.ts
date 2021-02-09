export class VdFormInput<T> {
  public labelClass = 'font-weight-bold text-sm-flex-left text-md-flex-right col-md-6 mb-1';
  public groupClass = 'col-md-6';
  public inputClass = '';

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
