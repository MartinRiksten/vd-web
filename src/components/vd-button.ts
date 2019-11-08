﻿import { bindable } from 'aurelia-framework';

export interface IButtonInfo {
  kind: string;
  label: string;
  variant: string;
  icon: string;
}

export class VdButton {
  @bindable public kind!: string;
  @bindable public buttonId!: string;
  @bindable public clickHandler!: (event: Event) => void;
  @bindable public label!: string;
  @bindable public variant!: string;
  @bindable public icon!: string;
  @bindable public clickTarget: string | undefined;
  @bindable public buttonIf: boolean = true;
  @bindable public buttonClass = 'ml-1';

  private types = [
    { kind: 'ok', label: 'OK', variant: 'btn-primary', icon: 'fas fa-check' } as IButtonInfo,
    { kind: 'cancel', label: 'Annuleren', variant: 'btn-light', icon: 'fas fa-times' } as IButtonInfo,
    { kind: 'yes', label: 'Ja', variant: 'btn-primary', icon: 'fas fa-check' } as IButtonInfo,
    { kind: 'no', label: 'Nee', variant: 'btn-light', icon: 'fas fa-times' } as IButtonInfo,
    { kind: 'clear', label: 'Wissen', variant: 'btn-light', icon: 'fas fa-eraser' } as IButtonInfo,
    { kind: 'save', label: 'Opslaan', variant: 'btn-light', icon: 'fas fa-save' } as IButtonInfo,
    { kind: 'close', label: '', variant: 'btn-light', icon: 'fas fa-times' } as IButtonInfo,
    { kind: 'upload', label: 'Uploaden', variant: 'btn-light', icon: 'fas fa-upload' } as IButtonInfo,
    { kind: 'download', label: 'Downloaden', variant: 'btn-light', icon: 'fas fa-download' } as IButtonInfo,
    { kind: 'select-all', label: 'Alle', variant: 'btn-light', icon: 'fas fa-check-sqaure' } as IButtonInfo,
    { kind: 'deselect-all', label: 'Geen', variant: 'btn-light', icon: 'fas fa-square' } as IButtonInfo
  ];

  public bind() {
    this.buttonId = !this.buttonId ? this.kind : this.buttonId;
    const info = this.types.find(x => x.kind === this.kind) || ({} as IButtonInfo);
    this.label = !!this.label ? this.label : info.label;
    this.variant = !!this.variant ? this.variant : info.variant;
    this.icon = !!this.icon ? this.icon : info.icon;
  }

public getClass(): string {
  const result = `${this.buttonClass} ${this.variant}`;
  return result;
}

  public onClick() {
    if (!!this.clickTarget) {
      $(this.clickTarget).click();
    }

    if (!!this.clickHandler) {
      this.clickHandler(event)
    }
  }
}
