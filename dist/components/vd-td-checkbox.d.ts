import { IFilterable } from '../utilities/list-helper';
import { VdTd } from './vd-td';
export declare class VdTdCheckbox extends VdTd<boolean> {
    static defaultVariant: string;
    value: boolean;
    instance: IFilterable;
    variant: string;
}
