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
__decorate([
    aurelia_framework_1.bindable,
    __metadata("design:type", Object)
], VdFormInput.prototype, "labelClass", void 0);
__decorate([
    aurelia_framework_1.bindable,
    __metadata("design:type", Object)
], VdFormInput.prototype, "groupClass", void 0);
__decorate([
    aurelia_framework_1.bindable,
    __metadata("design:type", Object)
], VdFormInput.prototype, "inputClass", void 0);
__decorate([
    aurelia_framework_1.bindable,
    __metadata("design:type", String)
], VdFormInput.prototype, "inputId", void 0);
__decorate([
    aurelia_framework_1.bindable,
    __metadata("design:type", String)
], VdFormInput.prototype, "label", void 0);
__decorate([
    aurelia_framework_1.bindable,
    __metadata("design:type", String)
], VdFormInput.prototype, "value", void 0);
__decorate([
    aurelia_framework_1.bindable,
    __metadata("design:type", Object)
], VdFormInput.prototype, "autoFocus", void 0);
exports.VdFormInput = VdFormInput;
