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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
var jquery_1 = __importDefault(require("jquery"));
var CollapseCustomAttribute = /** @class */ (function () {
    function CollapseCustomAttribute(element) {
        this.element = element;
        this.value = false;
    }
    CollapseCustomAttribute.prototype.attached = function () {
        jquery_1.default(this.element).collapse({ toggle: this.value });
    };
    CollapseCustomAttribute.prototype.detached = function () {
        jquery_1.default(this.element).collapse('dispose');
    };
    CollapseCustomAttribute.prototype.valueChanged = function (newValue) {
        var option = newValue ? 'show' : 'hide';
        jquery_1.default(this.element).collapse(option);
    };
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Boolean)
    ], CollapseCustomAttribute.prototype, "value", void 0);
    CollapseCustomAttribute = __decorate([
        aurelia_framework_1.autoinject,
        aurelia_framework_1.customAttribute('collapse'),
        __metadata("design:paramtypes", [Element])
    ], CollapseCustomAttribute);
    return CollapseCustomAttribute;
}());
exports.CollapseCustomAttribute = CollapseCustomAttribute;
