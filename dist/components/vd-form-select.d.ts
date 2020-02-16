import { PopoverOption } from 'bootstrap';
import { EventAggregator } from 'aurelia-event-aggregator';
import { IBootstrapSelectOption } from './bootstrap-select';
import { VdFormInput } from './vd-form-input';
export declare class VdFormSelect extends VdFormInput<string> {
    private readonly eventAggregator;
    labelClass: string;
    groupClass: string;
    inputClass: string;
    inputId: string;
    displayName: string;
    value: string;
    autoFocus: boolean;
    options: IBootstrapSelectOption[];
    popoverOption: PopoverOption | string;
    dataToggle: string;
    private select;
    constructor(eventAggregator: EventAggregator);
    bind(): void;
    attached(): void;
    update(): void;
}
