﻿import { bindable } from 'aurelia-framework';

export interface IButtonInfo {
  kind: string;
  displayName: string;
  variant: string;
  icon: string;
}

export class VdButton {
  public static DefaultClass = "btn-sm";

  @bindable public kind!: string;
  @bindable public buttonId!: string;
  @bindable public clickHandler!: (event: Event) => void;
  @bindable public displayName!: string;
  @bindable public variant!: string;
  @bindable public icon!: string;
  @bindable public clickTarget: string | undefined;
  @bindable public buttonClass = 'ml-2';
  @bindable public disabled = false;

  private types = [
    { kind: 'ok', displayName: 'OK', variant: 'btn-primary', icon: 'fas fa-check' } as IButtonInfo,
    { kind: 'cancel', displayName: 'Annuleren', variant: 'btn-light', icon: 'fas fa-times' } as IButtonInfo,
    { kind: 'yes', displayName: 'Ja', variant: 'btn-primary', icon: 'fas fa-check' } as IButtonInfo,
    { kind: 'no', displayName: 'Nee', variant: 'btn-light', icon: 'fas fa-times' } as IButtonInfo,
    { kind: 'clear', displayName: 'Wissen', variant: 'btn-light', icon: 'fas fa-eraser' } as IButtonInfo,
    { kind: 'save', displayName: 'Opslaan', variant: 'btn-primary', icon: 'fas fa-save' } as IButtonInfo,
    { kind: 'register', displayName: 'Registreren', variant: 'btn-primary', icon: 'fas fa-save' } as IButtonInfo,
    { kind: 'search', displayName: 'Zoeken', variant: 'btn-primary', icon: 'fas fa-search' } as IButtonInfo,
    { kind: 'input', displayName: 'Invoer', variant: 'btn-light', icon: 'fas fa-keyboard' } as IButtonInfo,
    { kind: 'execute', displayName: 'Uitvoeren', variant: 'btn-primary', icon: 'fas fa-check' } as IButtonInfo,
    { kind: 'close', displayName: 'Sluiten', variant: 'btn-light', icon: 'fas fa-times' } as IButtonInfo,
    { kind: 'add', displayName: 'Toevoegen', variant: 'btn-primary', icon: 'fas fa-plus-circle' } as IButtonInfo,
    { kind: 'upload', displayName: 'Uploaden', variant: 'btn-primary', icon: 'fas fa-upload' } as IButtonInfo,
    { kind: 'download', displayName: 'Downloaden', variant: 'btn-primary', icon: 'fas fa-download' } as IButtonInfo,
    { kind: 'select', displayName: 'Selecteer', variant: 'btn-primary', icon: 'fas fa-check' } as IButtonInfo,
    { kind: 'select-all', displayName: 'Alle', variant: 'btn-light', icon: 'fas fa-check-square' } as IButtonInfo,
    { kind: 'deselect-all', displayName: 'Geen', variant: 'btn-light', icon: 'far fa-square' } as IButtonInfo,
    { kind: 'back', displayName: 'Terug', variant: 'btn-light', icon: 'fas fa-arrow-circle-left' } as IButtonInfo
  ];

  public bind() {
    this.buttonId = !this.buttonId ? this.kind : this.buttonId;
    const info = this.types.find(x => x.kind === this.kind) || ({} as IButtonInfo);
    this.displayName = !!this.displayName ? this.displayName : info.displayName;
    this.variant = !!this.variant ? this.variant : info.variant;
    this.icon = !!this.icon ? this.icon : info.icon;
  }

  public getClass(): string {
    const result = `${this.buttonClass} ${VdButton.DefaultClass} ${this.variant}`;
    return result;
  }

  public onClick(event: Event) {
    if (!!this.clickTarget) {
      $(this.clickTarget).click();
    }

    if (!!this.clickHandler) {
      this.clickHandler(event);
    }
  }
}
