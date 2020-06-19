"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var vd_form_data_1 = require("./vd-form-data");
var VdFormLink = /** @class */ (function (_super) {
    __extends(VdFormLink, _super);
    function VdFormLink() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.showIcon = true;
        _this.href = '#';
        _this.linkTarget = "_self";
        _this.icon = 'fas fa-chevron-circle-right';
        return _this;
    }
    VdFormLink.prototype.bind = function () {
        if (this.href === "#" && (!this.clickTarget || !this.clickHandler)) {
            this.href = "";
        }
    };
    VdFormLink.prototype.onClick = function (event) {
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
    ], VdFormLink.prototype, "labelClass", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", String)
    ], VdFormLink.prototype, "groupClass", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", String)
    ], VdFormLink.prototype, "displayName", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", String)
    ], VdFormLink.prototype, "value", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Object)
    ], VdFormLink.prototype, "showIcon", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", String)
    ], VdFormLink.prototype, "href", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", String)
    ], VdFormLink.prototype, "linkTarget", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Object)
    ], VdFormLink.prototype, "icon", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", String)
    ], VdFormLink.prototype, "clickTarget", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Function)
    ], VdFormLink.prototype, "clickHandler", void 0);
    return VdFormLink;
}(vd_form_data_1.VdFormData));
exports.VdFormLink = VdFormLink;
