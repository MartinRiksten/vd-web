"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const aurelia_framework_1 = require("aurelia-framework");
let VdData = class VdData {
    constructor() {
        this.labelClass = 'col-6';
        this.dataClass = 'col-6';
    }
};
__decorate([
    aurelia_framework_1.bindable
], VdData.prototype, "labelClass", void 0);
__decorate([
    aurelia_framework_1.bindable
], VdData.prototype, "dataClass", void 0);
__decorate([
    aurelia_framework_1.bindable
], VdData.prototype, "label", void 0);
__decorate([
    aurelia_framework_1.bindable
], VdData.prototype, "value", void 0);
VdData = __decorate([
    aurelia_framework_1.autoinject
], VdData);
exports.VdData = VdData;
