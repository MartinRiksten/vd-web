import { Controller } from 'aurelia-framework';
import { Toast } from "../components/toast";
export interface IToastOptions {
    position: string;
    startingZIndex: number;
    model?: Toast;
}
export declare class ToastRenderer {
    private toastContainers;
    render(controller: Controller, options: IToastOptions): void;
    private createToastContainer;
}
