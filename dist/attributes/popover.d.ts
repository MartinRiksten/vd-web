import { PopoverOption } from 'bootstrap';
export declare class PopoverCustomAttribute {
    private readonly element;
    value: PopoverOption;
    constructor(element: Element);
    attached(): void;
    detached(): void;
}
