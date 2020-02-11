import { VdFormData } from './vd-form-data';
export declare class VdFormLink extends VdFormData {
    labelClass: string;
    dataClass: string;
    displayName: string;
    value: string;
    showIcon: boolean;
    href: string;
    clickHandler: (event: Event) => void;
    onClick(event: Event): void;
}
