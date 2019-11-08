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
var ClipboardCustomAttribute = /** @class */ (function () {
    function ClipboardCustomAttribute(element) {
        this.element = element;
    }
    ClipboardCustomAttribute.prototype.attached = function () {
        // Loop over any child elements and disable the click events. For example if you put this on a button,
        // and then put a span / image icon it breaks the click event.
        this.element.childNodes.forEach(function (e) {
            var style = e.style;
            if (style) {
                style.pointerEvents = 'none';
            }
        });
        this.element.addEventListener('click', this.handleClick);
    };
    ClipboardCustomAttribute.prototype.detached = function () {
        this.element.removeEventListener('click', this.handleClick);
    };
    ClipboardCustomAttribute.prototype.handleClick = function ($event) {
        var text = $event.srcElement.getAttribute('text');
        if (document.queryCommandSupported('copy') && text) {
            var textarea = document.createElement('textarea');
            textarea.style.display = 'none !important;';
            textarea.value = text;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('Copy');
            document.body.removeChild(textarea);
        }
    };
    ClipboardCustomAttribute.prototype.valueChanged = function (newValue) {
        this.element.setAttribute('text', newValue);
    };
    __decorate([
        aurelia_framework_1.bindable({ primaryProperty: true }),
        __metadata("design:type", String)
    ], ClipboardCustomAttribute.prototype, "value", void 0);
    ClipboardCustomAttribute = __decorate([
        aurelia_framework_1.autoinject,
        aurelia_framework_1.customAttribute('clipboard'),
        __metadata("design:paramtypes", [Element])
    ], ClipboardCustomAttribute);
    return ClipboardCustomAttribute;
}());
exports.ClipboardCustomAttribute = ClipboardCustomAttribute;
