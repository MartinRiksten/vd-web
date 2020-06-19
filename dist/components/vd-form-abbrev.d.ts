import { PopoverOption, TooltipOption } from 'bootstrap';
import { VdFormData } from './vd-form-data';
export declare class VdFormAbbrev extends VdFormData {
    private static popover;
    private static tooltip;
    cutoff: number;
    usePopover: string;
    headerClass: string;
    bodyClass: string;
    tooltipClass: string;
    short: string;
    abbrev: boolean;
    tooltipOption: TooltipOption;
    popoverOption: PopoverOption;
    bind(): void;
}
