"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const aurelia_framework_1 = require("aurelia-framework");
const vd_form_input_1 = require("./vd-form-input");
class VdFormCheckbox extends vd_form_input_1.VdFormInput {
    constructor() {
        super(...arguments);
        this.labelClass = 'col-md-6';
        this.groupClass = 'offset-md-4';
    }
}
__decorate([
    aurelia_framework_1.bindable,
    __metadata("design:type", Object)
], VdFormCheckbox.prototype, "labelClass", void 0);
__decorate([
    aurelia_framework_1.bindable,
    __metadata("design:type", Object)
], VdFormCheckbox.prototype, "groupClass", void 0);
__decorate([
    aurelia_framework_1.bindable,
    __metadata("design:type", String)
], VdFormCheckbox.prototype, "inputClass", void 0);
__decorate([
    aurelia_framework_1.bindable,
    __metadata("design:type", String)
], VdFormCheckbox.prototype, "inputId", void 0);
__decorate([
    aurelia_framework_1.bindable,
    __metadata("design:type", String)
], VdFormCheckbox.prototype, "label", void 0);
__decorate([
    aurelia_framework_1.bindable,
    __metadata("design:type", Boolean)
], VdFormCheckbox.prototype, "value", void 0);
__decorate([
    aurelia_framework_1.bindable,
    __metadata("design:type", Boolean)
], VdFormCheckbox.prototype, "autoFocus", void 0);
exports.VdFormCheckbox = VdFormCheckbox;
