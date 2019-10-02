import { PopoverOption } from 'bootstrap/index';
export declare class VdTdList {
    items: IValueList[];
    getToggle(item: IValueList): string | undefined;
}
export interface IValueList {
    id: string;
    value: string;
    variant?: string;
    binding?: any;
    popoverOption?: PopoverOption;
}
