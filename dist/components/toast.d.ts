export declare class Toast {
    type: string;
    title: string;
    message: string;
    closeable: boolean;
    clearable: boolean;
    toast: Element;
    activate(): void;
    deactivate(): void;
}
