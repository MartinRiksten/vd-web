import { bindable } from 'aurelia-framework';
import "bootstrap";
import "bootstrap-select";

declare global {
  // tslint:disable-next-line:interface-name
  interface JQuery<TElement = HTMLElement> {
    selectpicker: (x?: string, y?: string) => string;
  }
}

export interface IBootstrapSelectOption {
  id: string;
  option: string;
  subtext: string;
}

export class BootstrapSelect {
  @bindable public options!: IBootstrapSelectOption[];
  @bindable public selected!: string;
  @bindable public displayName!: string;

  public picker!: Element;

  public attached() {
    if (!!this.displayName) {
      $(this.picker).data('live-search-placeholder', this.displayName);
    }

    $(this.picker).selectpicker();
    $(this.picker).selectpicker('val', this.selected);
    $(this.picker).on('changed.bs.select', () => {
      this.selected = $(this.picker).selectpicker('val');
    });
  }

  public selectedChanged() {
    $(this.picker).selectpicker('val', this.selected);
  }
}
