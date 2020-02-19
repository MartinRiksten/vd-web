import { IFilterable } from '../utilities/list-helper';
import { VdTd } from './vd-td';
export declare class VdTdProgress extends VdTd<number> {
    value: number;
    instance: IFilterable;
    hideValue: boolean;
    variant: string;
    rounded: number;
    valueChanged(): void;
    getWidthStyle(): string;
}
