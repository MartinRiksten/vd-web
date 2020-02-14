import { PopoverOption } from 'bootstrap';
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
    maxLength: number;
    placeHolder: string;
    popoverOption: PopoverOption | string;
    dataToggle: string;
    bind(): void;
}
