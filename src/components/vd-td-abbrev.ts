import { bindable } from 'aurelia-framework';
import { TooltipOption } from 'bootstrap/index';
import { IFilterable } from '../utilities/list-helper';
import { VdTd } from './vd-td';

export class VdTdAbbrev extends VdTd<string> {
  @bindable public value: string;
  @bindable public instance: IFilterable;
  @bindable public cutoff = 25;
  public short!: string;
  public abbrev: boolean = false;

  public bind(): void {
    super.bind();
    this.abbrev = !!this.value && this.value.length > this.cutoff;
    this.short = this.abbrev ? this.value.substr(0, this.cutoff) : this.value;
  }

  public getTootltipOption() {
    const tooltipOption = !this.abbrev
    ? void 0
    : {
        container: 'body',
        html: false,
        placement: 'right',
        title: this.value,
        trigger: 'hover',
      };
    return tooltipOption;
  }
}
