import { bindable } from 'aurelia-framework';

export class VdFilterInput {
  @bindable public value!: string;
  @bindable public groupClass: string = "input-group-sm col-sm-4 col-lg-3 col-x3l-2 pr-1 mb-1";
}
