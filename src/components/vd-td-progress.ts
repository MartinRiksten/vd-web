import { bindable } from 'aurelia-framework';
import { IFilterable } from '../utilities/list-helper';
import { VdTd } from './vd-td';

export class VdTdProgress extends VdTd<number> {
  @bindable public value: number;
  @bindable public instance: IFilterable;
  @bindable public hideValue: boolean = false;
  @bindable public variant: string;

  public rounded: number;

  public valueChanged() {
    this.rounded = Math.round(this.value);
  }

  public getWidthStyle() {
    return `width: ${this.rounded}%`;
  }
}
