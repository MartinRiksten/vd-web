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
class VdTextbox {
    constructor() {
        this.formClass = 'col-6';
        this.labelClass = 'col-6';
        this.inputClass = 'col-6';
        this.usePopover = true;
        this.popoverOption = { container: 'body', placement: 'right', trigger: 'manual' };
    }
    bind() {
        this.dataToggle = this.usePopover ? 'popover' : '';
        this.popover = this.usePopover ? this.popoverOption : undefined;
    }
}
__decorate([
    aurelia_framework_1.bindable,
    __metadata("design:type", Object)
], VdTextbox.prototype, "formClass", void 0);
__decorate([
    aurelia_framework_1.bindable,
    __metadata("design:type", Object)
], VdTextbox.prototype, "labelClass", void 0);
__decorate([
    aurelia_framework_1.bindable,
    __metadata("design:type", Object)
], VdTextbox.prototype, "inputClass", void 0);
__decorate([
    aurelia_framework_1.bindable,
    __metadata("design:type", String)
], VdTextbox.prototype, "inputId", void 0);
__decorate([
    aurelia_framework_1.bindable,
    __metadata("design:type", String)
], VdTextbox.prototype, "label", void 0);
__decorate([
    aurelia_framework_1.bindable,
    __metadata("design:type", String)
], VdTextbox.prototype, "value", void 0);
__decorate([
    aurelia_framework_1.bindable,
    __metadata("design:type", Element)
], VdTextbox.prototype, "element", void 0);
__decorate([
    aurelia_framework_1.bindable,
    __metadata("design:type", String)
], VdTextbox.prototype, "inputRegex", void 0);
__decorate([
    aurelia_framework_1.bindable,
    __metadata("design:type", String)
], VdTextbox.prototype, "maxLength", void 0);
__decorate([
    aurelia_framework_1.bindable,
    __metadata("design:type", String)
], VdTextbox.prototype, "placeholder", void 0);
__decorate([
    aurelia_framework_1.bindable,
    __metadata("design:type", Boolean)
], VdTextbox.prototype, "usePopover", void 0);
__decorate([
    aurelia_framework_1.bindable,
    __metadata("design:type", Object)
], VdTextbox.prototype, "popoverOption", void 0);
exports.VdTextbox = VdTextbox;
