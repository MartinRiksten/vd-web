import { bindable } from 'aurelia-framework';

export interface IAddonInfo {
  kind: string;
  title: string;
  variant: string;
  icon: string;
  clickable: boolean;
}

export class VdAddon {
  @bindable public kind!: string;
  @bindable public addonName: string | undefined;
  @bindable public clickHandler!: (event: Event) => void;
  @bindable public clickTarget: string | undefined;
  @bindable public title: string | undefined;
  @bindable public variant!: string;
  @bindable public icon!: string;
  @bindable public clickable: boolean | undefined;
  @bindable public type: string = "text";

  private types = [
    { kind: 'eraser', title: 'Wissen', variant: 'text-danger', icon: 'fas fa-times', clickable: true } as IAddonInfo,
    { kind: 'search', title: 'Zoeken', variant: 'text-primary', icon: 'fas fa-search', clickable: true } as IAddonInfo
  ];

  public bind() {
    this.addonName = !this.addonName ? this.kind : this.addonName;
    const info = this.types.find(x => x.kind === this.kind) || ({} as IAddonInfo);
    this.title = !!this.title ? this.title : info.title;
    this.variant = !!this.variant ? this.variant : info.variant;
    this.icon = !!this.icon ? this.icon : info.icon;
    this.clickable = typeof this.clickable !== 'undefined' ? this.clickable : info.clickable; 
  }

  public getClass(): string {
    const result = `${this.icon} ${this.variant}`;
    return result;
  }

  public onClick(event: Event) {
    if (!!this.clickTarget) {
      $(this.clickTarget).click();
    }

    if (!!this.clickHandler) {
      this.clickHandler(event)
    }
  }
}
