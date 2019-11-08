export declare class ClipboardCustomAttribute {
    private readonly element;
    private value;
    constructor(element: Element);
    attached(): void;
    detached(): void;
    private handleClick;
    private valueChanged;
}
