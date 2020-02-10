import { PopoverOption } from 'bootstrap/index';
import { IFilterable } from '../utilities/list-helper';
import { VdTd } from './vd-td';
export declare class VdTdList extends VdTd<string> {
    instance: IFilterable;
    items: IListValue[];
    bind(): void;
    getToggle(item: IListValue): string | undefined;
}
export interface IListValue {
    id: string;
    value: string;
    variant?: string;
    binding?: any;
    popoverOption?: PopoverOption;
}
