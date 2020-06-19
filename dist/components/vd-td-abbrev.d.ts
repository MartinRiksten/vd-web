import { PopoverOption, TooltipOption } from 'bootstrap/index';
import { IFilterable } from '../utilities/list-helper';
import { VdTd } from './vd-td';
export declare class VdTdAbbrev extends VdTd<string> {
    value: string;
    instance: IFilterable;
    cutoff: number;
    usePopover: string;
    displayName: string;
    short: string;
    abbrev: boolean;
    tooltipOption: TooltipOption;
    popoverOption: PopoverOption;
    bind(): void;
}
