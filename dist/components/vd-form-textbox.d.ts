import { PopoverOption } from 'bootstrap/index';
import { VdFormInput } from './vd-form-input';
export declare class VdFormTextbox extends VdFormInput<string> {
    labelClass: string;
    groupClass: string;
    inputClass: string;
    inputId: string;
    displayName: string;
    value: string;
    autoFocus: boolean;
    regex: string;
    maxLength: string;
    placeHolder: string;
    usePopover: boolean;
    popoverOption: PopoverOption;
    dataToggle: string;
    popover: PopoverOption | undefined;
    bind(): void;
}
