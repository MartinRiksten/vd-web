import { bindable } from 'aurelia-framework';

export class Toast {
  @bindable public type: string;
  @bindable public title: string;
  @bindable public message: string;

  @bindable public closeable = false;
  @bindable public clearable = false;

  public toast: Element;

  public activate() {
    $(this.toast).toast();
  }

  public deactivate() {
    $(this.toast).toast("dispose");
  }
}