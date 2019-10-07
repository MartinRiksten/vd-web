import { PopoverOption } from 'bootstrap/index';
import { VdTd } from './vd-td';
export declare class VdTdList extends VdTd {
    items: IValueList[];
    value: string;
    bind(): void;
    getToggle(item: IValueList): string | undefined;
}
export interface IValueList {
    id: string;
    value: string;
    variant?: string;
    binding?: any;
    popoverOption?: PopoverOption;
}
