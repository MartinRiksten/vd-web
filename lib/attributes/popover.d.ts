import { PopoverOption } from 'bootstrap';
export declare class PopoverCustomAttribute {
    private readonly element;
    value: PopoverOption | undefined;
    constructor(element: Element);
    attached(): void;
    detached(): void;
}
