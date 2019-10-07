import { bindable } from 'aurelia-framework';
import { VdTd } from './vd-td';

export class VdTdBoolIcon extends VdTd {
  @bindable public iconValue: string;
}
