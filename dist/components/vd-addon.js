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
var VdEraserAddon = /** @class */ (function () {
    function VdEraserAddon() {
        this.types = [
            { kind: 'erase', title: 'Wissen', variant: 'text-danger', icon: 'fas fa-times' }
        ];
    }
    VdEraserAddon.prototype.bind = function () {
        var _this = this;
        this.addonName = !this.addonName ? this.kind : this.addonName;
        var info = this.types.find(function (x) { return x.kind === _this.kind; }) || {};
        this.title = !!this.title ? this.title : info.title;
        this.variant = !!this.variant ? this.variant : info.variant;
        this.icon = !!this.icon ? this.icon : info.icon;
    };
    VdEraserAddon.prototype.getClass = function () {
        var result = this.icon + " " + this.variant;
        return result;
    };
    VdEraserAddon.prototype.onClick = function () {
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
    ], VdEraserAddon.prototype, "kind", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", String)
    ], VdEraserAddon.prototype, "addonName", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Function)
    ], VdEraserAddon.prototype, "clickHandler", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", String)
    ], VdEraserAddon.prototype, "clickTarget", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", String)
    ], VdEraserAddon.prototype, "title", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", String)
    ], VdEraserAddon.prototype, "variant", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", String)
    ], VdEraserAddon.prototype, "icon", void 0);
    return VdEraserAddon;
}());
exports.VdEraserAddon = VdEraserAddon;
