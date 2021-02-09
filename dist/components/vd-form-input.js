"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var VdFormInput = /** @class */ (function () {
    function VdFormInput() {
        this.labelClass = 'font-weight-bold text-sm-flex-left text-md-flex-right col-md-6 mb-1';
        this.groupClass = 'col-md-6';
        this.inputClass = '';
        this.autoFocus = false;
    }
    VdFormInput.prototype.attached = function () {
        if (this.autoFocus) {
            $(this.element).focus();
        }
    };
    return VdFormInput;
}());
exports.VdFormInput = VdFormInput;
