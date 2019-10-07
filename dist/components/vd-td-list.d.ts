import { PopoverOption } from 'bootstrap/index';
import { IFilterable } from '../utilities/list-helper';
import { VdTd } from './vd-td';
export declare class VdTdList extends VdTd {
    instance: IFilterable;
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
