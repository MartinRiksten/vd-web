import { IBootstrapSelectOption } from './bootstrap-select';
import { VdFormInput } from './vd-form-input';
export declare class VdFormSelect extends VdFormInput<string> {
    labelClass: string;
    groupClass: string;
    inputClass: string;
    inputId: string;
    label: string;
    value: string;
    autoFocus: boolean;
    options: IBootstrapSelectOption[];
}