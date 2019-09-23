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
const aurelia_framework_1 = require("aurelia-framework");
const aurelia_task_queue_1 = require("aurelia-task-queue");
const jquery_1 = __importDefault(require("jquery"));
let TooltipCustomAttribute = class TooltipCustomAttribute {
    constructor(element, taskQueue) {
        this.element = element;
        this.taskQueue = taskQueue;
    }
    attached() {
        if (!this.value) {
            return;
        }
        const option = this.value;
        this.taskQueue.queueTask(() => {
            jquery_1.default(this.element).tooltip(option);
        });
    }
    detached() {
        if (!this.value) {
            return;
        }
        jquery_1.default(this.element).tooltip('dispose');
    }
};
TooltipCustomAttribute = __decorate([
    aurelia_framework_1.autoinject,
    aurelia_framework_1.customAttribute('tooltip'),
    __metadata("design:paramtypes", [Element, aurelia_task_queue_1.TaskQueue])
], TooltipCustomAttribute);
exports.TooltipCustomAttribute = TooltipCustomAttribute;
