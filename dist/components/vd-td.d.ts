import { PopoverOption, TooltipOption } from 'bootstrap';
import { IFilterable } from '../utilities/list-helper';
export declare class VdTd<TValue> {
    value: TValue;
    instance: IFilterable;
    dataClass: string;
    popoverOption: PopoverOption;
    tooltipOption: TooltipOption;
    bind(): void;
}
