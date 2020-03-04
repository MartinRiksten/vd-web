import { CompositionEngine, Container } from 'aurelia-framework';
import { IToastOptions, ToastRenderer } from './toast-renderer';
export declare class ToastService {
    private readonly container;
    private readonly compositionEngine;
    private readonly renderer;
    private containers;
    private toasts;
    constructor(container: Container, compositionEngine: CompositionEngine, renderer: ToastRenderer);
    error(message: string, title: string, options: IToastOptions): Promise<void>;
    info(message: string, title: string, options: IToastOptions): Promise<void>;
    success(message: string, title: string, options: IToastOptions): Promise<void>;
    warning(message: string, title: string, options: IToastOptions): Promise<void>;
    clearAll(): void;
    clearLast(): void;
    private notify;
}
