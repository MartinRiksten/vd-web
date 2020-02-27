import { autoinject, customAttribute } from 'aurelia-framework';
import { CollapseOption } from 'bootstrap';
import $ from 'jquery';

@autoinject
@customAttribute('collapse')
export class CollapseCustomAttribute {
  public value: boolean = false;

  constructor(private readonly element: Element) {}

  public attached(): void {
    $(this.element).collapse();
    this.valueChanged(this.value);
  }

  public detached(): void {
    $(this.element).collapse('dispose');
  }

  public valueChanged(newValue: boolean) {
    const option = newValue ? 'show' : 'hide';
    $(this.element).collapse(option);
  }
}
