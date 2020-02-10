import { bindable } from 'aurelia-framework';
import { PopoverOption } from 'bootstrap/index';
import { IFilterable } from '../utilities/list-helper';
import { VdTd } from './vd-td';

export class VdTdList extends VdTd<string> {
  @bindable public instance: IFilterable;
  @bindable public items!: IListValue[];

  public bind() {
    super.bind();
    this.value = !this.items ? '' : this.items.map(x => x.id).join(', ');
  }

  public getToggle(item: IListValue): string | undefined {
    return !item.popoverOption ? void 0 : 'popover';
  }
}

export interface IListValue {
  id: string;
  value: string;
  variant?: string;
  binding?: any;
  popoverOption?: PopoverOption;
}
