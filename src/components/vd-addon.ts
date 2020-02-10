import { bindable } from 'aurelia-framework';

export interface IAddonInfo {
    kind: string;
    title: string;
    variant: string;
    icon: string;
  }
  
export class VdEraserAddon {
  @bindable public kind!: string;
  @bindable public addonName: string;
  @bindable public clickHandler!: (event: Event) => void;
  @bindable public clickTarget: string | undefined;
  @bindable public title: string;
  @bindable public variant!: string;
  @bindable public icon!: string;
  
  private types = [
    { kind: 'erase', title: 'Wissen', variant: 'text-danger', icon: 'fas fa-times' } as IAddonInfo
  ];

  public bind() {
    this.addonName = !this.addonName ? this.kind : this.addonName;
    const info = this.types.find(x => x.kind === this.kind) || ({} as IAddonInfo);
    this.title = !!this.title ? this.title : info.title;
    this.variant = !!this.variant ? this.variant : info.variant;
    this.icon = !!this.icon ? this.icon : info.icon;
  }

public getClass(): string {
  const result = `${this.icon} ${this.variant}`;
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
