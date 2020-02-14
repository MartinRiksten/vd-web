import { autoinject, customAttribute } from 'aurelia-framework';

@autoinject
@customAttribute('clipboard')
export class ClipboardCustomAttribute {
  
  public static copyToClipboard(text: string): void {
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

  private value: string;

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

  public valueChanged() {
    this.element.setAttribute('text', this.value);
  }

  private handleClick($event: Event) {
    const text = ($event.srcElement as Element).getAttribute('text');
    ClipboardCustomAttribute.copyToClipboard(text);
  }
}
