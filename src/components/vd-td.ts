import { bindable } from 'aurelia-framework';

import { IFilterable } from '../utilities/list-helper';

export class VdTd<TValue> {
  @bindable public value: TValue;
  @bindable public instance: IFilterable;
  @bindable public valueClass: string;

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
