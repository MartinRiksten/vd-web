"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class VdFormInput {
    constructor() {
        this.labelClass = 'col-6';
        this.groupClass = 'col-6';
        this.inputClass = '';
        this.autoFocus = false;
    }
    attached() {
        if (this.autoFocus) {
            $(this.element).focus();
        }
    }
}
exports.VdFormInput = VdFormInput;
