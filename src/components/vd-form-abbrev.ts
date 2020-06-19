import { bindable } from 'aurelia-framework';
import { PopoverOption, TooltipOption } from 'bootstrap';
import { VdFormData } from './vd-form-data';

export class VdFormAbbrev extends VdFormData {
    private static popover = '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header ${header-class}"></h3><div class="popover-body ${body-class}"></div></div>';
    private static tooltip = '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner ${tooltip-class}"></div></div>';

    @bindable public cutoff = 25;
    @bindable public usePopover = 'false';
    @bindable public headerClass = '';
    @bindable public bodyClass = '';
    @bindable public tooltipClass = '';

    public short!: string;
    public abbrev: boolean = false;
    public tooltipOption: TooltipOption;
    public popoverOption: PopoverOption;

    public bind(): void {
        this.abbrev = !!this.value && this.value.length > this.cutoff;
        this.short = this.abbrev ? this.value.substr(0, this.cutoff) : this.value;
        this.tooltipOption = !this.abbrev || this.usePopover === 'true'
            ? void 0
            : {
                container: 'body',
                html: false,
                placement: 'right',
                template: VdFormAbbrev.tooltip
                    .replace("${tooltip-class}", this.tooltipClass),
                title: this.value,
                trigger: 'hover'
            };
        this.popoverOption = !this.abbrev || this.usePopover !== 'true'
            ? void 0
            : {
                boundary: 'viewport',
                container: 'body',
                content: this.value,
                placement: 'right',
                template: VdFormAbbrev.popover
                    .replace("${header-class}", this.headerClass)
                    .replace("${body-class}", this.bodyClass),
                title: this.displayName,
                trigger: 'hover'
            };
    }
}
