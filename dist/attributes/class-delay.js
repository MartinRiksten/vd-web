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
var ClassDelayCustomAttribute = /** @class */ (function () {
    function ClassDelayCustomAttribute(element) {
        this.element = element;
    }
    ClassDelayCustomAttribute.prototype.attached = function () {
        var _this = this;
        if (!this.value) {
            return;
        }
        var _loop_1 = function (current) {
            var parts = current.split(":");
            var value = parts[0];
            var delay = parts.length === 1 ? 1000 : parseInt(parts[1], 10);
            setTimeout(function () { jquery_1.default(_this.element).addClass(value); }, delay);
        };
        for (var _i = 0, _a = this.value.split(","); _i < _a.length; _i++) {
            var current = _a[_i];
            _loop_1(current);
        }
    };
    ClassDelayCustomAttribute = __decorate([
        aurelia_framework_1.autoinject,
        aurelia_framework_1.customAttribute('class-delay'),
        __metadata("design:paramtypes", [Element])
    ], ClassDelayCustomAttribute);
    return ClassDelayCustomAttribute;
}());
exports.ClassDelayCustomAttribute = ClassDelayCustomAttribute;
