import { autoinject, bindable } from 'aurelia-framework';

@autoinject
export class VdRoute {
  @bindable public route: string | undefined;
  @bindable public key: any;
  public params:
    | {
        id: string;
      }
    | undefined;

  public bind() {
    this.params = { id: this.key };
  }
}
