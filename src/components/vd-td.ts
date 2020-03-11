import { bindable } from 'aurelia-framework';
import { PopoverOption, TooltipOption } from 'bootstrap';
import { IFilterable } from '../utilities/list-helper';

export class VdTd<TValue> {
  @bindable public value: TValue;
  @bindable public instance: IFilterable;
  @bindable public dataClass: string;
  @bindable public popoverOption: PopoverOption;
  @bindable public tooltipOption: TooltipOption;

  public bind() {
    if (!this.instance) {
      return;
    }

    if (!this.instance._filterValues) {
      this.instance._filterValues = [];
    }

    this.instance._filterValues.push(this.value);
  }
}
