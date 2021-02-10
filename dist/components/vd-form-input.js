"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vd_form_data_1 = require("./vd-form-data");
var VdFormInput = /** @class */ (function () {
    function VdFormInput() {
        this.labelClass = vd_form_data_1.VdFormData.defaultLabelClass;
        this.groupClass = vd_form_data_1.VdFormData.defaultGroupClass;
        this.inputClass = VdFormInput.defaultInputClass;
        this.autoFocus = false;
    }
    VdFormInput.prototype.attached = function () {
        if (this.autoFocus) {
            $(this.element).focus();
        }
    };
    VdFormInput.defaultInputClass = '';
    return VdFormInput;
}());
exports.VdFormInput = VdFormInput;
