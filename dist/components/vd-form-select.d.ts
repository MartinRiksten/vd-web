import { PopoverOption } from 'bootstrap';
import { IBootstrapSelectOption } from './bootstrap-select';
import { VdFormInput } from './vd-form-input';
export declare class VdFormSelect extends VdFormInput<string> {
    labelClass: string;
    groupClass: string;
    selectClass: string;
    inputClass: string;
    inputId: string;
    displayName: string;
    value: string;
    virtualScroll: boolean | number;
    autoFocus: boolean;
    width: string;
    options: IBootstrapSelectOption[];
    popoverOption: PopoverOption | string;
    dataToggle: string;
    bind(): void;
}
