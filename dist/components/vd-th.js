"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const aurelia_framework_1 = require("aurelia-framework");
let VdTh = class VdTh {
    getClass(by, ascending) {
        const result = !!this.order && by === this.name
            ? ascending
                ? 'fas fa-caret-up'
                : 'fas fa-caret-down'
            : 'fas fa-caret-up invisible';
        return result;
    }
};
__decorate([
    aurelia_framework_1.bindable
], VdTh.prototype, "label", void 0);
__decorate([
    aurelia_framework_1.bindable
], VdTh.prototype, "name", void 0);
__decorate([
    aurelia_framework_1.bindable
], VdTh.prototype, "order", void 0);
VdTh = __decorate([
    aurelia_framework_1.autoinject
], VdTh);
exports.VdTh = VdTh;
