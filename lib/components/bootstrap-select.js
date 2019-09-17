"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const aurelia_framework_1 = require("aurelia-framework");
let BootstrapSelect = class BootstrapSelect {
    constructor() {
        this.picker = new Element;
    }
    attached() {
        if (!!this.displayName) {
            $(this.picker).data("live-search-placeholder", this.displayName);
        }
        $(this.picker).selectpicker();
        $(this.picker).selectpicker("val", this.selected);
        $(this.picker).on("changed.bs.select", () => {
            this.selected = $(this.picker).selectpicker("val");
        });
    }
    selectedChanged() {
        $(this.picker).selectpicker("val", this.selected);
    }
};
__decorate([
    aurelia_framework_1.bindable
], BootstrapSelect.prototype, "options", void 0);
__decorate([
    aurelia_framework_1.bindable
], BootstrapSelect.prototype, "selected", void 0);
__decorate([
    aurelia_framework_1.bindable
], BootstrapSelect.prototype, "displayName", void 0);
BootstrapSelect = __decorate([
    aurelia_framework_1.autoinject
], BootstrapSelect);
exports.BootstrapSelect = BootstrapSelect;
