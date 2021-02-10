import { VdFormData } from './vd-form-data';
export declare class VdFormLink extends VdFormData {
    static defaultIconClass: string;
    static defaultGroupClass: string;
    labelClass: string;
    groupClass: string;
    displayName: string;
    value: string;
    showIcon: boolean;
    href: string;
    linkTarget: string;
    icon: string;
    clickTarget: string | undefined;
    clickHandler: (event: Event) => void;
    bind(): void;
    onClick(event: Event): void;
}
