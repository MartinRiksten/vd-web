import { bindable } from 'aurelia-framework';

export class VdFilterInput {
  public static defaultGroupClass = 'input-group-sm col-sm-4 col-lg-3 col-x3l-2 pr-1 mb-1';
  
  @bindable public value: string;
  @bindable public groupClass: string = VdFilterInput.defaultGroupClass;
}
