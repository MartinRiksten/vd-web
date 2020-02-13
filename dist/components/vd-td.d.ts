import { PopoverOption } from 'bootstrap';
import { IFilterable } from '../utilities/list-helper';
export declare class VdTd<TValue> {
    value: TValue;
    instance: IFilterable;
    valueClass: string;
    usePopover: boolean;
    popoverOption: PopoverOption;
    bind(): void;
}
