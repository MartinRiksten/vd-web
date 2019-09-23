import { autoinject, bindable } from 'aurelia-framework';
import { PopoverOption } from 'bootstrap/index';

@autoinject
export class VdTdAbbrev {
  @bindable public value: string = '';
  @bindable public cutoff = 25;
  public short: string | undefined;
  public abbrev: boolean = false;
  public popoverOption: PopoverOption | undefined;

  public bind(): void {
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
