import { autoinject, bindable, customAttribute } from 'aurelia-framework';
import { TaskQueue } from 'aurelia-task-queue';
import { TooltipOption } from 'bootstrap';
import $ from 'jquery';

@autoinject
@customAttribute('collapse')
export class CollapseCustomAttribute {
  @bindable public value: boolean;

  constructor(private readonly element: Element, private readonly taskQueue: TaskQueue) {}

  public attached(): void {
    $(this.element).collapse();
    this.valueChanged();
  }

  public detached(): void {
    $(this.element).collapse('dispose');
  }

  public valueChanged() {
    $(this.element).collapse(this.value ? 'hide' : 'show');
  }
}
