import { autoinject, bindable } from 'aurelia-framework';

export interface IButtonInfo {
  id: string;
  label: string;
  variant: string;
  icon: string;
}

@autoinject
export class VdButton {
  @bindable public buttonId!: string;
  @bindable public click!: (() => void);
  @bindable public label!: string;
  @bindable public variant!: string;
  @bindable public icon!: string;  

  private info!: IButtonInfo;

  private types = [
    { id: 'ok', label: 'OK', variant: 'btn-primary', icon: 'fas fa-check' } as IButtonInfo,
    { id: 'cancel', label: 'Annuleren', variant: 'btn-light', icon: 'fas fa-times' } as IButtonInfo,
    { id: 'yes', label: 'Ja', variant: 'btn-primary', icon: 'fas fa-check' } as IButtonInfo,
    { id: 'no', label: 'Nee', variant: 'btn-light', icon: 'fas fa-times' } as IButtonInfo,
    { id: 'çlear', label: 'Wissen', variant: 'btn-light', icon: 'fa fa-eraser' } as IButtonInfo,
    { id: 'save', label: 'Opslaan', variant: 'btn-light', icon: 'fa fa-save'} as IButtonInfo
  ];

  public bind() {
    const standardInfo = this.types.find(x => x.id === this.buttonId);
    const customInfo = { id: this.buttonId, label: this.label, variant: this.variant, icon:this.icon } as IButtonInfo;
    $.extend(this.info, {}, standardInfo, customInfo);
  }
}
