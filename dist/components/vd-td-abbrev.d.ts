import { PopoverOption } from 'bootstrap/index';
import { IFilterable } from '../utilities/list-helper';
import { VdTd } from './vd-td';
export declare class VdTdAbbrev extends VdTd {
    value: string;
    instance: IFilterable;
    cutoff: number;
    short: string;
    abbrev: boolean;
    popoverOption: PopoverOption;
    bind(): void;
}
