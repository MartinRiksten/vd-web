import { bindable } from 'aurelia-framework';
import { PopoverOption } from 'bootstrap/index';
import { VdTd } from './vd-td';

export class VdTdList extends VdTd {
  @bindable public items!: IValueList[];
  public value: string;
  
public bind() {
  this.value = !this.items ? "" : this.items.join(", ");
}

  public getToggle(item: IValueList): string | undefined {
    return !item.popoverOption ? void 0 : 'popover';
  }
}

export interface IValueList {
  id: string;
  value: string;
  variant?: string;
  binding?: any;
  popoverOption?: PopoverOption;
}
