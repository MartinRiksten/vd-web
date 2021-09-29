import { bindable } from 'aurelia-framework';
import { PopoverOption } from 'bootstrap';

export class VdFormData {
  public static defaultLabelClass = 'font-weight-bold text-sm-flex-left text-md-flex-right col-xs-12 col-md-5 mb-1';
  public static defaultGroupClass = 'col-xs-12 col-md-7';
  public static defaultDataClass = 'ml-3 ml-lg-2 my-1';
  
  @bindable public labelClass = VdFormData.defaultLabelClass;
  @bindable public groupClass = VdFormData.defaultGroupClass;
  @bindable public dataClass = VdFormData.defaultDataClass;
  @bindable public displayName: string;
  @bindable public value: string;

  @bindable public popoverOption: PopoverOption | string = {
    container: 'body',
    placement: 'right',
    trigger: 'manual',
  } as PopoverOption;
}
