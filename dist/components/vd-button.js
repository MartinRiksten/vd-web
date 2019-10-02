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
class VdButton {
    constructor() {
        this.types = [
            { kind: 'ok', label: 'OK', variant: 'btn-primary', icon: 'fas fa-check' },
            { kind: 'cancel', label: 'Annuleren', variant: 'btn-light', icon: 'fas fa-times' },
            { kind: 'yes', label: 'Ja', variant: 'btn-primary', icon: 'fas fa-check' },
            { kind: 'no', label: 'Nee', variant: 'btn-light', icon: 'fas fa-times' },
            { kind: 'clear', label: 'Wissen', variant: 'btn-light', icon: 'fas fa-eraser' },
            { kind: 'save', label: 'Opslaan', variant: 'btn-light', icon: 'fas fa-save' },
            { kind: 'upload', label: 'Inlezen', variant: 'btn-light', icon: 'fas fa-upload' },
        ];
    }
    bind() {
        this.id = !this.id ? this.kind : this.id;
        const info = this.types.find(x => x.kind === this.kind) || {};
        this.label = !!this.label ? this.label : info.label;
        this.variant = !!this.variant ? this.variant : info.variant;
        this.icon = !!this.icon ? this.icon : info.icon;
        this.click = !!this.click ? this.click : this.onClick;
    }
    onClick() {
        if (!!this.clickTarget) {
            $(this.clickTarget).click();
        }
    }
}
__decorate([
    aurelia_framework_1.bindable,
    __metadata("design:type", String)
], VdButton.prototype, "kind", void 0);
__decorate([
    aurelia_framework_1.bindable,
    __metadata("design:type", String)
], VdButton.prototype, "id", void 0);
__decorate([
    aurelia_framework_1.bindable,
    __metadata("design:type", Function)
], VdButton.prototype, "click", void 0);
__decorate([
    aurelia_framework_1.bindable,
    __metadata("design:type", String)
], VdButton.prototype, "label", void 0);
__decorate([
    aurelia_framework_1.bindable,
    __metadata("design:type", String)
], VdButton.prototype, "variant", void 0);
__decorate([
    aurelia_framework_1.bindable,
    __metadata("design:type", String)
], VdButton.prototype, "icon", void 0);
__decorate([
    aurelia_framework_1.bindable,
    __metadata("design:type", String)
], VdButton.prototype, "clickTarget", void 0);
exports.VdButton = VdButton;
