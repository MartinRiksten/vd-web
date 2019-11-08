export declare class CollapseCustomAttribute {
    private readonly element;
    value: boolean;
    constructor(element: Element);
    attached(): void;
    detached(): void;
    valueChanged(newValue: boolean): void;
}
