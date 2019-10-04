import { PopoverOption } from 'bootstrap/index';
export declare class VdTextbox {
    formClass: string;
    labelClass: string;
    inputClass: string;
    inputId: string;
    label: string;
    value: string;
    regex: string;
    maxLength: string;
    placeHolder: string;
    autoFocus: boolean;
    usePopover: boolean;
    popoverOption: PopoverOption;
    element: Element;
    dataToggle: string;
    popover: PopoverOption | undefined;
    bind(): void;
    attached(): void;
}
