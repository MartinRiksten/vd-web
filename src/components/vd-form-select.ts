import { bindable } from 'aurelia-framework';
import { IBootstrapSelectOption } from './bootstrap-select';
import { VdFormInput } from './vd-form-input';

export class VdFormSelect extends VdFormInput<string> {
    @bindable public labelClass: string;
    @bindable public groupClass: string;
    @bindable public inputClass: string;
  
    @bindable public inputId: string;
    @bindable public label: string;
    @bindable public value: string;
  
    @bindable public autoFocus: boolean;
    
    @bindable public options: IBootstrapSelectOption[];
}
