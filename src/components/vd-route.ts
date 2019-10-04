import { bindable } from 'aurelia-framework';

export class VdRoute {
  @bindable public route!: string;
  @bindable public key!: any;

  public params!: { id: string };

  public bind() {
    this.params = { id: this.key };
  }
}
