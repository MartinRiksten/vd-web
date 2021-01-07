import { bindable } from 'aurelia-framework';

export class VdFilterInput {
  @bindable public value!: string;
  @bindable public groupClass: string = "";
}
