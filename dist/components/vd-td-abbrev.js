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
let VdTdAbbrev = class VdTdAbbrev {
    constructor() {
        this.value = '';
        this.cutoff = 25;
        this.abbrev = false;
    }
    bind() {
        this.abbrev = !!this.value && this.value.length > this.cutoff;
        this.short = this.abbrev ? this.value.substr(0, this.cutoff) : this.value;
        this.popoverOption = !this.abbrev
            ? void 0
            : {
                container: 'body',
                content: () => this.value,
                html: false,
                placement: 'right',
                trigger: 'hover',
            };
    }
};
__decorate([
    aurelia_framework_1.bindable,
    __metadata("design:type", String)
], VdTdAbbrev.prototype, "value", void 0);
__decorate([
    aurelia_framework_1.bindable,
    __metadata("design:type", Object)
], VdTdAbbrev.prototype, "cutoff", void 0);
VdTdAbbrev = __decorate([
    aurelia_framework_1.autoinject
], VdTdAbbrev);
exports.VdTdAbbrev = VdTdAbbrev;
