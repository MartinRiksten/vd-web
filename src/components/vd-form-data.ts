import { bindable } from 'aurelia-framework';

export class VdFormData {
  public static defaultLabelClass = 'font-weight-bold text-sm-flex-left text-md-flex-right col-xs-12 col-md-6 mb-1';
  public static defaultGroupClass = 'col-xs-12 col-md-6';
  public static defaultDataClass = 'ml-2';
  
  @bindable public labelClass = VdFormData.defaultLabelClass;
  @bindable public groupClass = VdFormData.defaultGroupClass;
  @bindable public dataClass = VdFormData.defaultDataClass;
  @bindable public displayName: string;
  @bindable public value: string;
}
