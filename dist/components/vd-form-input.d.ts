export declare class VdFormInput<T> {
    static defaultInputClass: string;
    labelClass: string;
    groupClass: string;
    inputClass: string;
    inputId: string;
    displayName: string;
    value: T;
    autoFocus: boolean;
    element: Element;
    attached(): void;
}
