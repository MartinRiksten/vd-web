import { bindable } from 'aurelia-framework';
import { IBootstrapSelectOption } from './bootstrap-select';
import { VdFormInput } from './vd-form-input';

export class VdFormSelect extends VdFormInput {
    @bindable public options: IBootstrapSelectOption[];
}
