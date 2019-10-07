import { PopoverOption } from 'bootstrap/index';
import { VdTd } from './vd-td';
export declare class VdTdAbbrev extends VdTd {
    cutoff: number;
    short: string;
    abbrev: boolean;
    popoverOption: PopoverOption;
    bind(): void;
}
