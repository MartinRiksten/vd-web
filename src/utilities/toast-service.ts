import { autoinject, CompositionContext, CompositionEngine, Container } from 'aurelia-framework';

import { IToastOptions, ToastRenderer } from './toast-renderer';
import { getViewModel, invokeLifecycle } from './toast-utilities';

const defaults: IToastOptions = {
  position: 'toast-top-right',
  startingZIndex: 1000
};

const ToastType = {
  Error: 'error',
  Info: 'info',
  Success: 'success',
  Warning: 'warning'
}

@autoinject
export class ToastService {
  private containers = new Map();
  private toasts = [];

  constructor(private readonly container: Container, 
    private readonly compositionEngine: CompositionEngine, 
    private readonly renderer: ToastRenderer) {
  }

  public async error(message: string, title: string, options: IToastOptions): Promise<void> {
    await this.notify(ToastType.Error, message, title, options);
  }

  public async info(message: string, title: string, options: IToastOptions): Promise<void> {
    await this.notify(ToastType.Info, message, title, options);
  }

  public async success(message: string, title: string, options: IToastOptions): Promise<void> {
    await this.notify(ToastType.Success, message, title, options);
  }

  public async warning(message: string, title: string, options: IToastOptions): Promise<void> {
    await this.notify(ToastType.Warning, message, title, options);
  }

  public clearAll() {
    let length = this.toasts.length;
    while (length--) {
      const toast = this.toasts.pop();
      toast.remove();
    }

    this.containers.forEach((value) => value.remove());
    this.containers.clear();
  }

  public clearLast() {
    const toast = this.toasts.pop();
    toast.remove();
  }

  private async notify(type: string, message: string | IToastOptions, title: string, options: IToastOptions): Promise<void> {
    if (title === undefined && typeof message !== 'string') {
      options = message;
    }

    options = Object.assign({}, defaults, options, { message, title, type });

    const childContainer = this.container.createChild();
    const instruction = { childContainer, container: this.container, model: options.model, viewModel: './dist/components/toast' } as CompositionContext;
    const controllerInstruction = await getViewModel(instruction, this.compositionEngine);
    const canActivate = await invokeLifecycle(controllerInstruction.viewModel, 'canActivate', options.model);
    if (!canActivate) {
      return null;
    }

    const controller = await this.compositionEngine.createController(controllerInstruction);
    controller.automate();
    this.renderer.render(controller, options);
  } 
}