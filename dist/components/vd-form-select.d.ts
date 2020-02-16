import { PopoverOption } from 'bootstrap';
import { IBootstrapSelectOption } from './bootstrap-select';
import { VdFormInput } from './vd-form-input';
export declare class VdFormSelect extends VdFormInput<string> {
    labelClass: string;
    groupClass: string;
    inputClass: string;
    inputId: string;
    displayName: string;
    value: string;
    autoFocus: boolean;
    options: IBootstrapSelectOption[];
    popoverOption: PopoverOption | string;
    dataToggle: string;
    private select;
    bind(): void;
    attached(): void;
}
