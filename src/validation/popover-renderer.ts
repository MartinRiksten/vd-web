﻿import { RenderInstruction, ValidationRenderer } from 'aurelia-validation';

export class PopoverRenderer implements ValidationRenderer {
  public findById: boolean = true;
  public focusFirst: boolean = false;
  public dashedId: boolean = true;

  public render(instruction: RenderInstruction) {
    const toHide: Element[] = [];
    const toShow: Element[] = [];
    for (let { result, elements } of instruction.unrender.filter(x => !x.result.valid)) {
      if (this.findById && elements.length === 0 && !!result.propertyName) {
        elements = this.findElementById(result.propertyName.toString());
      }

      for (const element of elements) {
        toHide.push(element);
      }
    }

    for (let { result, elements } of instruction.render) {
      if (this.findById && elements.length === 0 && !!result.propertyName) {
        elements = this.findElementById(result.propertyName.toString());
      }

      for (const element of elements) {
        if (result.valid) {
          toHide.push(element);
        } else {
          const popover = $(element).closest('[data-toggle=popover]');
          if (toShow.indexOf(element) >= 0) {
            popover.data('content', popover.data('content') + '\n' + result.message);
          } else {
            popover.data('content', result.message);
            toShow.push(element);
          }
        }
      }
    }

    let first = true;
    for (const element of toShow) {
      if (this.focusFirst && first) {
        first = false;
        $(element).focus();
      }

      const popover = $(element).closest('[data-toggle=popover]');
      const data = popover.data('bs.popover');
      const isVisible = !!data && !!data.tip && data.tip.hasClass('in');
      const content = popover.data('content');
      if (!!data) {
        data.config.content = content;
      }

      if (isVisible) {
        data.tip.find('.popover-content').html(content);
        popover.popover('update');
      } else {
        popover.popover('show');
        $(element).one('keypress', () => {
          popover.popover('hide');
        });
      }
    }

    for (const element of $.unique(toHide).filter(x => toShow.indexOf(x) === -1)) {
      const popover = $(element).closest('[data-toggle=popover]');
      popover.popover('hide');
    }
  }

  private findElementById(id: string): Element[] {
    const name = this.dashedId
      ? id.replace(/^[a-z]|[A-Z]/g, (s, i) => (i === 0 ? s.toLowerCase() : `-${s.toLowerCase()}`))
      : id.toString().toLowerCase();
    const selector = `#${name}`;
    return $(selector).get();
  }
}
