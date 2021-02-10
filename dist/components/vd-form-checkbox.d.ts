import { VdFormInput } from './vd-form-input';
export declare class VdFormCheckbox extends VdFormInput<boolean> {
    static defaultLabelClass: string;
    static defaultGroupClass: string;
    labelClass: string;
    groupClass: string;
    inputClass: string;
    inputId: string;
    displayName: string;
    value: boolean;
    autoFocus: boolean;
}
