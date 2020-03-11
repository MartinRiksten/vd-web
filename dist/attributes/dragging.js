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
var hammerjs_1 = __importDefault(require("hammerjs"));
var DraggingCustomAttribute = /** @class */ (function () {
    function DraggingCustomAttribute(element) {
        this.value = '';
        this.startX = 0;
        this.startY = 0;
        this.element = element;
    }
    DraggingCustomAttribute.prototype.attached = function () {
        this.valueChanged();
    };
    DraggingCustomAttribute.prototype.valueChanged = function () {
        if (!!this.value) {
            this.initTarget();
        }
    };
    DraggingCustomAttribute.prototype.initTarget = function () {
        var _this = this;
        var target = this.element.querySelector(this.value);
        if (!target) {
            return;
        }
        target.addEventListener('mousedown', function (event) { return _this.init(event); });
        var manager = new hammerjs_1.default.Manager(target);
        manager.add(new hammerjs_1.default.Pan({ direction: hammerjs_1.default.DIRECTION_ALL, threshold: 0 }));
        manager.on('pan', function (e) { return _this.pan(e); });
    };
    DraggingCustomAttribute.prototype.init = function (event) {
        var rect = this.element.getBoundingClientRect();
        /* tslint:disable */
        this.startX = rect.x | rect.left;
        this.startY = rect.y | rect.top;
        /* tslint:enable */
        if (!this.element.style.top) {
            this.element.style.top = this.startY + 'px';
            this.element.style.left = this.startX + 'px';
            this.element.style.marginTop = '0';
            this.element.style.position = 'absolute';
        }
    };
    DraggingCustomAttribute.prototype.pan = function (e) {
        this.element.style.top = this.startY + e.deltaY + 'px';
        this.element.style.left = this.startX + e.deltaX + 'px';
    };
    DraggingCustomAttribute = __decorate([
        aurelia_framework_1.autoinject,
        aurelia_framework_1.customAttribute('dragging'),
        __metadata("design:paramtypes", [Element])
    ], DraggingCustomAttribute);
    return DraggingCustomAttribute;
}());
exports.DraggingCustomAttribute = DraggingCustomAttribute;
