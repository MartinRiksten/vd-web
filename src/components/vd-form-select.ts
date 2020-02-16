import { PopoverOption } from 'bootstrap';

import { EventAggregator, Subscription } from 'aurelia-event-aggregator';
import { autoinject, bindable } from 'aurelia-framework';
import { IBootstrapSelectOption } from './bootstrap-select';
import { VdFormInput } from './vd-form-input';

@autoinject
export class VdFormSelect extends VdFormInput<string> {
    @bindable public labelClass: string;
    @bindable public groupClass: string;
    @bindable public inputClass: string;

    @bindable public inputId: string;
    @bindable public displayName: string;
    @bindable public value: string;

    @bindable public autoFocus: boolean;

    @bindable public options: IBootstrapSelectOption[];
    @bindable public popoverOption: PopoverOption | string = { container: 'body', placement: 'right', trigger: 'manual' } as PopoverOption;

    public dataToggle: string;

    private select: Element;

    constructor(private readonly eventAggregator: EventAggregator) {
        super();
    }

    public bind() {
        this.dataToggle = !!this.popoverOption ? 'popover' : '';
    }

    public attached() {
        this.eventAggregator.publish("addon:resize", this.select);
    }
}
