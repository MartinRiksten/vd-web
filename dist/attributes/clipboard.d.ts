export declare class ClipboardCustomAttribute {
    private readonly element;
    static copyToClipboard(text: string): void;
    private value;
    constructor(element: Element);
    attached(): void;
    detached(): void;
    valueChanged(): void;
    private handleClick;
}
