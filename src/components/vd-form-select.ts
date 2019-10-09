import { bindable } from 'aurelia-framework';
import { IBootstrapSelectOption } from './bootstrap-select';
import { VdFormInput } from './vd-form-input';

export class VdFormSelect extends VdFormInput<string> {
    @bindable public options: IBootstrapSelectOption[];
}
