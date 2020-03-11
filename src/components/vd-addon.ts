import { bindable } from 'aurelia-framework';

import { TooltipOption, PopoverOption } from 'bootstrap';

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
  @bindable public content: string | undefined;
  @bindable public variant!: string;
  @bindable public icon!: string;
  @bindable public clickable: boolean | undefined;
  @bindable public type: string = 'text';
  public tooltipOption: TooltipOption;
  public popoverOption: PopoverOption;

  private types = [
    { kind: 'eraser', title: 'Wissen', variant: 'text-danger', icon: 'fas fa-times', clickable: true } as IAddonInfo,
    { kind: 'search', title: 'Zoeken', variant: 'text-primary', icon: 'fas fa-search', clickable: true } as IAddonInfo,
    { kind: 'info', title: 'Informatie', variant: 'text-info', icon: 'fas fa-info', clickable: true } as IAddonInfo
  ];

  public bind() {
    this.addonName = !this.addonName ? this.kind : this.addonName;
    const info = this.types.find(x => x.kind === this.kind) || ({} as IAddonInfo);
    this.title = !!this.title ? this.title : info.title;
    this.variant = !!this.variant ? this.variant : info.variant;
    this.icon = !!this.icon ? this.icon : info.icon;
    this.clickable = typeof this.clickable !== 'undefined' ? this.clickable : info.clickable;

    this.tooltipOption = !this.title || !!this.content
      ? void 0
      : { container: 'body', html: false, placement: 'right', title: this.title, trigger: 'hover' };
    this.popoverOption = !this.title || !this.content
      ? void 0
      : { container: 'body', content: this.content, html: false, placement: 'right', title: this.title, trigger: 'hover' };
  }

  public getClass(): string {
    const result = `${this.icon} ${this.variant}`;
    return result;
  }

  public getClickableClass() {
    return this.clickable ? 'cursor-pointer' : '';
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
