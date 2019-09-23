import { autoinject, bindable } from 'aurelia-framework';

export interface IButtonInfo {
  id: string;
  label: string;
  variant: string;
  icon: string;
}

@autoinject
export class VdButton {
  @bindable public buttonId: string | undefined;
  @bindable public info: IButtonInfo | undefined;
  @bindable public click: (() => void) | undefined;

  private types = [
    { id: 'ok', label: 'OK', variant: 'btn-primary', icon: 'fas fa-check' } as IButtonInfo,
    { id: 'cancel', label: 'Annuleren', variant: 'btn-light', icon: 'fas fa-times' } as IButtonInfo,
    { id: 'yes', label: 'Ja', variant: 'btn-primary', icon: 'fas fa-check' } as IButtonInfo,
    { id: 'no', label: 'Nee', variant: 'btn-light', icon: 'fas fa-times' } as IButtonInfo,
  ];

  public bind() {
    this.info = !this.info ? this.types.find(x => x.id === this.buttonId) : this.info;
  }
}
