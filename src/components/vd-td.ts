﻿import { bindable } from 'aurelia-framework';

import { IFilterable } from '../utilities/list-helper';

export class VdTd {
  @bindable public value: string;
  @bindable public instance: IFilterable;

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
