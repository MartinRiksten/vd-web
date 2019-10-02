import { bindable } from 'aurelia-framework';
import { IOrderInfo } from '../utilities/list-helper';

export class VdTh {
  @bindable public label!: string;
  @bindable public name!: string;
  @bindable public order!: IOrderInfo;

  public getClass(by: string, ascending: boolean): string {
    const result =
      !!this.order && by === this.name
        ? ascending
          ? 'fas fa-caret-up'
          : 'fas fa-caret-down'
        : 'fas fa-caret-up invisible';
    return result;
  }
}
