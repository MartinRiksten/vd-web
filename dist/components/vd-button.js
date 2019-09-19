"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const aurelia_framework_1 = require("aurelia-framework");
let VdButton = class VdButton {
    constructor() {
        this.types = [
            { id: "ok", label: "OK", variant: "btn-primary", icon: "fas fa-check" },
            { id: "cancel", label: "Annuleren", variant: "btn-light", icon: "fas fa-times" },
            { id: "yes", label: "Ja", variant: "btn-primary", icon: "fas fa-check" },
            { id: "no", label: "Nee", variant: "btn-light", icon: "fas fa-times" }
        ];
    }
    bind() {
        this.info = !this.info ? this.types.find(x => x.id === this.buttonId) : this.info;
    }
};
__decorate([
    aurelia_framework_1.bindable
], VdButton.prototype, "buttonId", void 0);
__decorate([
    aurelia_framework_1.bindable
], VdButton.prototype, "info", void 0);
__decorate([
    aurelia_framework_1.bindable
], VdButton.prototype, "click", void 0);
VdButton = __decorate([
    aurelia_framework_1.autoinject
], VdButton);
exports.VdButton = VdButton;
