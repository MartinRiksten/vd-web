import { autoinject, customAttribute } from 'aurelia-framework';
import $ from 'jquery';

@autoinject
@customAttribute('class-delay')
export class ClassDelayCustomAttribute {
  public value: string;

  constructor(private readonly element: Element) {}

  public attached(): void {
    if (!this.value) {
      return;
    }

    for (const current of this.value.split(",")) {
        const parts = current.split(":");
        const value = parts[0];
        const delay = parts.length === 1 ? 1000 : parseInt(parts[1], 10);
        setTimeout(() => { $(this.element).addClass(value); }, delay);
    }
  }
}
