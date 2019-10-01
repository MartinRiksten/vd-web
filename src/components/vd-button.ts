﻿import { autoinject, bindable } from 'aurelia-framework';

export interface IButtonInfo {
  id: string;
  label: string;
  variant: string;
  icon: string;
}

@autoinject
export class VdButton {
  @bindable public buttonId!: string;
  @bindable public id!: string;
  @bindable public click!: (() => void);
  @bindable public label!: string;
  @bindable public variant!: string;
  @bindable public icon!: string;  
  @bindable public clickTarget: string | undefined;

  private types = [
    { id: 'ok', label: 'OK', variant: 'btn-primary', icon: 'fas fa-check' } as IButtonInfo,
    { id: 'cancel', label: 'Annuleren', variant: 'btn-light', icon: 'fas fa-times' } as IButtonInfo,
    { id: 'yes', label: 'Ja', variant: 'btn-primary', icon: 'fas fa-check' } as IButtonInfo,
    { id: 'no', label: 'Nee', variant: 'btn-light', icon: 'fas fa-times' } as IButtonInfo,
    { id: 'clear', label: 'Wissen', variant: 'btn-light', icon: 'fas fa-eraser' } as IButtonInfo,
    { id: 'save', label: 'Opslaan', variant: 'btn-light', icon: 'fas fa-save'} as IButtonInfo,
    { id: 'upload', label: 'Upload', variant: 'btn-light', icon: 'fas fa-upload' } as IButtonInfo,
  ];

  public bind() {
    this.buttonId = !this.buttonId ? this.id : this.buttonId;
    const info = this.types.find(x => x.id === this.id) || {} as IButtonInfo;
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
