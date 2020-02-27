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
var aurelia_framework_1 = require("aurelia-framework");
var VdAddon = /** @class */ (function () {
    function VdAddon() {
        this.type = 'text';
        this.types = [
            { kind: 'eraser', title: 'Wissen', variant: 'text-danger', icon: 'fas fa-times', clickable: true },
            { kind: 'search', title: 'Zoeken', variant: 'text-primary', icon: 'fas fa-search', clickable: true },
        ];
    }
    VdAddon.prototype.bind = function () {
        var _this = this;
        this.addonName = !this.addonName ? this.kind : this.addonName;
        var info = this.types.find(function (x) { return x.kind === _this.kind; }) || {};
        this.title = !!this.title ? this.title : info.title;
        this.variant = !!this.variant ? this.variant : info.variant;
        this.icon = !!this.icon ? this.icon : info.icon;
        this.clickable = typeof this.clickable !== 'undefined' ? this.clickable : info.clickable;
    };
    VdAddon.prototype.getClass = function () {
        var result = this.icon + " " + this.variant;
        return result;
    };
    VdAddon.prototype.getClickableClass = function () {
        return this.clickable ? 'cursor-pointer' : '';
    };
    VdAddon.prototype.onClick = function (event) {
        if (!!this.clickTarget) {
            $(this.clickTarget).click();
        }
        if (!!this.clickHandler) {
            this.clickHandler(event);
        }
    };
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", String)
    ], VdAddon.prototype, "kind", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", String)
    ], VdAddon.prototype, "addonName", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Function)
    ], VdAddon.prototype, "clickHandler", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", String)
    ], VdAddon.prototype, "clickTarget", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", String)
    ], VdAddon.prototype, "title", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", String)
    ], VdAddon.prototype, "variant", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", String)
    ], VdAddon.prototype, "icon", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Boolean)
    ], VdAddon.prototype, "clickable", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", String)
    ], VdAddon.prototype, "type", void 0);
    return VdAddon;
}());
exports.VdAddon = VdAddon;
