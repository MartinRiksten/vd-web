"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const aurelia_framework_1 = require("aurelia-framework");
const hammerjs_1 = __importDefault(require("hammerjs"));
let DraggableCustomAttribute = class DraggableCustomAttribute {
    constructor(element) {
        this.startX = 0;
        this.startY = 0;
        this.selector = '';
        this.element = element;
    }
    attached() {
        const target = this.element.querySelector(this.selector);
        target.addEventListener('mousedown', (event) => this.init(event), false);
        const manager = new hammerjs_1.default.Manager(target);
        manager.add(new hammerjs_1.default.Pan({ direction: hammerjs_1.default.DIRECTION_ALL, threshold: 0 }));
        manager.on('pan', (e) => this.pan(e));
    }
    init(event) {
        const rect = this.element.getBoundingClientRect();
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
    }
    pan(e) {
        this.element.style.top = this.startY + e.deltaY + 'px';
        this.element.style.left = this.startX + e.deltaX + 'px';
    }
};
__decorate([
    aurelia_framework_1.bindable({ primaryProperty: true })
], DraggableCustomAttribute.prototype, "selector", void 0);
DraggableCustomAttribute = __decorate([
    aurelia_framework_1.autoinject,
    aurelia_framework_1.customAttribute('draggable')
], DraggableCustomAttribute);
exports.DraggableCustomAttribute = DraggableCustomAttribute;
