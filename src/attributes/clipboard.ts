import { autoinject, customAttribute } from 'aurelia-framework';

@autoinject
@customAttribute('clipboard')
export class ClipboardCustomAttribute {
  constructor(private readonly element: Element) {}

  public attached() {
    // Loop over any child elements and disable the click events. For example if you put this on a button,
    // and then put a span / image icon it breaks the click event.
    this.element.childNodes.forEach(e => {
      const style = (e as HTMLElement).style;
      if (style) {
        style.pointerEvents = 'none';
      }
    });

    this.element.addEventListener('click', this.handleClick);
  }

  public detached() {
    this.element.removeEventListener('click', this.handleClick);
  }

  private handleClick($event: Event) {
    const text = ($event.srcElement as Element).getAttribute('text');
    if (document.queryCommandSupported('copy') && text) {
      const textarea: HTMLTextAreaElement = document.createElement('textarea');
      textarea.style.display = 'none !important;';
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('Copy');
      document.body.removeChild(textarea);
    }
  }

  private valueChanged(newValue: string) {
    this.element.setAttribute('text', newValue);
  }
}
