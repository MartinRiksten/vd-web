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
var aurelia_event_aggregator_1 = require("aurelia-event-aggregator");
var aurelia_framework_1 = require("aurelia-framework");
var vd_form_input_1 = require("./vd-form-input");
var VdFormSelect = /** @class */ (function (_super) {
    __extends(VdFormSelect, _super);
    function VdFormSelect(eventAggregator) {
        var _this = _super.call(this) || this;
        _this.eventAggregator = eventAggregator;
        _this.popoverOption = { container: 'body', placement: 'right', trigger: 'manual' };
        return _this;
    }
    VdFormSelect.prototype.bind = function () {
        this.dataToggle = !!this.popoverOption ? 'popover' : '';
    };
    VdFormSelect.prototype.attached = function () {
        this.eventAggregator.publish("addon:resize", this.select);
    };
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", String)
    ], VdFormSelect.prototype, "labelClass", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", String)
    ], VdFormSelect.prototype, "groupClass", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", String)
    ], VdFormSelect.prototype, "inputClass", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", String)
    ], VdFormSelect.prototype, "inputId", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", String)
    ], VdFormSelect.prototype, "displayName", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", String)
    ], VdFormSelect.prototype, "value", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Boolean)
    ], VdFormSelect.prototype, "autoFocus", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Array)
    ], VdFormSelect.prototype, "options", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Object)
    ], VdFormSelect.prototype, "popoverOption", void 0);
    VdFormSelect = __decorate([
        aurelia_framework_1.autoinject,
        __metadata("design:paramtypes", [aurelia_event_aggregator_1.EventAggregator])
    ], VdFormSelect);
    return VdFormSelect;
}(vd_form_input_1.VdFormInput));
exports.VdFormSelect = VdFormSelect;
