import { autoinject, bindable } from 'aurelia-framework';

export interface IButtonInfo {
  kind: string;
  label: string;
  variant: string;
  icon: string;
}

@autoinject
export class VdButton {
  @bindable public kind!: string;
  @bindable public id!: string;
  @bindable public click!: (() => void);
  @bindable public label!: string;
  @bindable public variant!: string;
  @bindable public icon!: string;  
  @bindable public clickTarget: string | undefined;

  private types = [
    { kind: 'ok', label: 'OK', variant: 'btn-primary', icon: 'fas fa-check' } as IButtonInfo,
    { kind: 'cancel', label: 'Annuleren', variant: 'btn-light', icon: 'fas fa-times' } as IButtonInfo,
    { kind: 'yes', label: 'Ja', variant: 'btn-primary', icon: 'fas fa-check' } as IButtonInfo,
    { kind: 'no', label: 'Nee', variant: 'btn-light', icon: 'fas fa-times' } as IButtonInfo,
    { kind: 'clear', label: 'Wissen', variant: 'btn-light', icon: 'fas fa-eraser' } as IButtonInfo,
    { kind: 'save', label: 'Opslaan', variant: 'btn-light', icon: 'fas fa-save'} as IButtonInfo,
    { kind: 'upload', label: 'Upload', variant: 'btn-light', icon: 'fas fa-upload' } as IButtonInfo,
  ];

  public bind() {
    this.id = !this.id ? this.kind : this.id;
    const info = this.types.find(x => x.kind === this.kind) || {} as IButtonInfo;
    this.label = !!this.label ? this.label : info.label;
    this.variant = !!this.variant ? this.variant : info.variant;
    this.icon = !!this.icon ? this.icon : info.icon;
    this.click = !!this.click ? this.click : this.onClick;
  }

  public onClick() {
    if (!!this.clickTarget) {
      $(this.clickTarget).click();
    }
  }
}
