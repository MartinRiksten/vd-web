import { PopoverOption } from "bootstrap/index";
export declare class VdTextbox {
    formClass: string;
    labelClass: string;
    inputClass: string;
    inputId: string;
    label: string;
    value: string;
    element: Element;
    inputRegex: string;
    maxLength: string;
    placeholder: string;
    usePopover: boolean;
    popoverOption: PopoverOption;
    dataToggle: string;
    popover: PopoverOption | undefined;
    bind(): void;
}
