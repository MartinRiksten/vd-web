import { bindable } from 'aurelia-framework';
import { PopoverOption } from 'bootstrap/index';
import { VdTd } from './vd-td';

export class VdTdAbbrev extends VdTd {
  @bindable public cutoff = 25;
  public short!: string;
  public abbrev: boolean = false;
  public popoverOption!: PopoverOption;

  public bind(): void {
    super.bind();
    this.abbrev = !!this.value && this.value.length > this.cutoff;
    this.short = this.abbrev ? this.value.substr(0, this.cutoff) : this.value;
    this.popoverOption = !this.abbrev
      ? void 0
      : {
          container: 'body',
          content: () => this.value,
          html: false,
          placement: 'right',
          trigger: 'hover',
        };
  }
}
