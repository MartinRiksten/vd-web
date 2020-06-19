import { bindable } from 'aurelia-framework';
import { PopoverOption, TooltipOption } from 'bootstrap/index';
import { IFilterable } from '../utilities/list-helper';
import { VdTd } from './vd-td';

export class VdTdAbbrev extends VdTd<string> {
  @bindable public value: string;
  @bindable public instance: IFilterable;
  @bindable public cutoff = 25;
  @bindable public usePopover = 'false';
  @bindable public displayName: string;
  
  public short!: string;
  public abbrev: boolean = false;
  public tooltipOption!: TooltipOption;
  public popoverOption: PopoverOption;

  public bind(): void {
    super.bind();
    this.abbrev = !!this.value && this.value.length > this.cutoff;
    this.short = this.abbrev ? this.value.substr(0, this.cutoff) : this.value;
    this.tooltipOption = !this.abbrev || this.usePopover === 'true'
            ? void 0
            : {
                container: 'body',
                html: false,
                placement: 'right',
                title: this.value,
                trigger: 'hover'
            };
        this.popoverOption = !this.abbrev || this.usePopover !== 'true'
            ? void 0
            : {
                container: 'body',
                content: this.value,
                html: false, placement: 'right',
                title: this.displayName,
                trigger: 'hover'
            };
  }
}
