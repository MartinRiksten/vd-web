import { PopoverOption } from 'bootstrap/index';
import { VdFormInput } from './vd-form-input';
export declare class VdTextbox extends VdFormInput {
    regex: string;
    maxLength: string;
    placeHolder: string;
    usePopover: boolean;
    popoverOption: PopoverOption;
    dataToggle: string;
    popover: PopoverOption | undefined;
    bind(): void;
}
