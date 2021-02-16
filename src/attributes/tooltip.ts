import { autoinject, observable, customAttribute } from 'aurelia-framework';
import { TaskQueue } from 'aurelia-task-queue';
import { TooltipOption } from 'bootstrap';
import $ from 'jquery';

@autoinject
@customAttribute('tooltip')
export class TooltipCustomAttribute {
  private valueValue: TooltipOption;
    
  public get value(): TooltipOption {
      return this.valueValue;
  }
  public set value(value: TooltipOption) {
      this.valueValue = value;
      this.valueChanged();
  }

  constructor(private readonly element: Element, private readonly taskQueue: TaskQueue) {}

  public attached(): void {
      this.initialize();
  }

  public detached(): void {
      this.finalize();
  }

  public valueChanged() {
      this.finalize();
      this.initialize();
  }

  private finalize() {
      if (!this.value) {
          return;
      }

      $(this.element).tooltip('dispose');
  }

  private initialize() {
      if (!this.value) {
          return;
      }

      const option = this.value;
      this.taskQueue.queueTask(() => {
          $(this.element).tooltip(option);
      });
  }
}
