export declare class DraggableCustomAttribute {
    value: string;
    private startX;
    private startY;
    private readonly element;
    constructor(element: Element);
    attached(): void;
    valueChanged(): void;
    private initTarget;
    private init;
    private pan;
}
