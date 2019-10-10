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
require("bootstrap");
require("bootstrap-select");
var BootstrapSelect = /** @class */ (function () {
    function BootstrapSelect() {
    }
    BootstrapSelect.prototype.attached = function () {
        var _this = this;
        if (!!this.displayName) {
            $(this.picker).data('live-search-placeholder', this.displayName);
        }
        $(this.picker).selectpicker();
        $(this.picker).selectpicker('val', this.selected);
        $(this.picker).on('changed.bs.select', function () {
            _this.selected = $(_this.picker).selectpicker('val');
        });
    };
    BootstrapSelect.prototype.selectedChanged = function () {
        $(this.picker).selectpicker('val', this.selected);
    };
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Array)
    ], BootstrapSelect.prototype, "options", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", String)
    ], BootstrapSelect.prototype, "selected", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", String)
    ], BootstrapSelect.prototype, "displayName", void 0);
    return BootstrapSelect;
}());
exports.BootstrapSelect = BootstrapSelect;
