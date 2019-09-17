export declare class DraggableCustomAttribute {
    private startX;
    private startY;
    private readonly element;
    private selector;
    constructor(element: Element);
    attached(): void;
    private init;
    private pan;
}
