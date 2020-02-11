import { bindable } from 'aurelia-framework';

export interface IAddonInfo {
    kind: string;
    append: boolean;
    title: string;
    variant: string;
    icon: string;
  }
  
export class VdAddon {
  @bindable public kind!: string;
  @bindable public addonName: string;
  @bindable public append: boolean;
  @bindable public clickHandler!: (event: Event) => void;
  @bindable public clickTarget: string | undefined;
  @bindable public title: string;
  @bindable public variant!: string;
  @bindable public icon!: string;
  
  private types = [
    { kind: 'eraser', append: true, title: 'Wissen', variant: 'text-danger', icon: 'fas fa-times' } as IAddonInfo
  ];

  public bind() {
    this.addonName = !this.addonName ? this.kind : this.addonName;
    const info = this.types.find(x => x.kind === this.kind) || ({} as IAddonInfo);
    this.append = !!this.append ? this.append : info.append;
    this.title = !!this.title ? this.title : info.title;
    this.variant = !!this.variant ? this.variant : info.variant;
    this.icon = !!this.icon ? this.icon : info.icon;
  }

public getGroupClass() {
  const result = this.append ? 'input-group-append' : 'input-group-prepend';
  return result;
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
