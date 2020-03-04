import { Controller, ViewSlot } from 'aurelia-framework';

import { Toast } from "../components/toast"

export interface IToastOptions {
  position: string;
  startingZIndex: number;
  model?: Toast;
}

export class ToastRenderer {
  private toastContainers = new Map();

  public render(controller: Controller, options: IToastOptions) {
    // this._mixinControllerMethods(controller);
    const viewSlot = this.createToastContainer(options);
    controller.view.bind(options);
    viewSlot.add(controller.view);
  }

  private createToastContainer(options) {
    const position = options.position;
    if (this.toastContainers.has(position)) {
      return this.toastContainers.get(position);
    }

    const containerElement = document.createElement('div');
    containerElement.id = 'toast-container';
    containerElement.classList.add(options.position);
    containerElement.setAttribute('aria-live', 'polite');
    containerElement.setAttribute('role', 'alert');
    document.body.insertBefore(containerElement, document.body.firstChild);
    const toastContainerViewSlot = new ViewSlot(containerElement, true);
    this.toastContainers.set(position, toastContainerViewSlot);
    return toastContainerViewSlot;
  }
}