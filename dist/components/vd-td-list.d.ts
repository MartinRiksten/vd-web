import { PopoverOption } from 'bootstrap/index';
import { IFilterable } from '../utilities/list-helper';
import { VdTd } from './vd-td';
export declare class VdTdList extends VdTd<string> {
    instance: IFilterable;
    items: IValueList[];
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
