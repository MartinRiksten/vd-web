import { Binding } from "aurelia-binding";
export declare class AsyncBindingBehavior {
    bind(binding: IAsyncBinding, source: unknown, message: unknown): void;
    unbind(binding: IAsyncBinding): void;
}
interface IAsyncBinding extends Binding {
    originalUpdateTarget: (value: unknown) => void;
}
export {};
