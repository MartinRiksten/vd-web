import { PopoverOption } from 'bootstrap/index';
import { VdFormInput } from './vd-form-input';
export declare class VdFormTextbox extends VdFormInput<string> {
    regex: string;
    maxLength: string;
    placeHolder: string;
    usePopover: boolean;
    popoverOption: PopoverOption;
    dataToggle: string;
    popover: PopoverOption | undefined;
    bind(): void;
}
