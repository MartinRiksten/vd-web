import { IFilterable } from '../utilities/list-helper';
import { VdTd } from './vd-td';
export declare class VdTdAbbrev extends VdTd<string> {
    value: string;
    instance: IFilterable;
    cutoff: number;
    short: string;
    abbrev: boolean;
    bind(): void;
    getTootltipOption(): {
        container: string;
        html: boolean;
        placement: string;
        title: string;
        trigger: string;
    };
}
