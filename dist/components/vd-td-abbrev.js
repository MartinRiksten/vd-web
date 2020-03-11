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
var vd_td_1 = require("./vd-td");
var VdTdAbbrev = /** @class */ (function (_super) {
    __extends(VdTdAbbrev, _super);
    function VdTdAbbrev() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.cutoff = 25;
        _this.abbrev = false;
        return _this;
    }
    VdTdAbbrev.prototype.bind = function () {
        _super.prototype.bind.call(this);
        this.abbrev = !!this.value && this.value.length > this.cutoff;
        this.short = this.abbrev ? this.value.substr(0, this.cutoff) : this.value;
        this.tooltipOption = !this.abbrev
            ? void 0
            : { container: 'body', html: false, placement: 'right', title: this.value, trigger: 'hover' };
    };
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", String)
    ], VdTdAbbrev.prototype, "value", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Object)
    ], VdTdAbbrev.prototype, "instance", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Object)
    ], VdTdAbbrev.prototype, "cutoff", void 0);
    return VdTdAbbrev;
}(vd_td_1.VdTd));
exports.VdTdAbbrev = VdTdAbbrev;
