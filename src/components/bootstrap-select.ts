import { autoinject, bindable, TaskQueue } from 'aurelia-framework';

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

@autoinject
export class BootstrapSelect {
  @bindable public options!: IBootstrapSelectOption[];
  @bindable public selected!: string;
  @bindable public displayName!: string;
  @bindable public inputId: string;
  @bindable public width = "100%";
  @bindable public virtualScroll = 250;
  
  public picker!: Element;

  constructor(private readonly taskQueue: TaskQueue) {}

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

  public optionsChanged() {
    this.taskQueue.queueTask(() => {
      $(this.picker).selectpicker('refresh');
      $(this.picker).selectpicker('val', this.selected);
    });
  }

  public selectedChanged(newValue: string, oldValue: string) {
    // suppress change from empty string to null and vice versa
    if (!newValue && !oldValue) {
        return;
    }

    this.taskQueue.queueTask(() => {
      $(this.picker).selectpicker('val', this.selected);
    });
  }
}
