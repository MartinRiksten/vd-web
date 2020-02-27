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
var BootstrapSelect = /** @class */ (function () {
    function BootstrapSelect(taskQueue) {
        this.taskQueue = taskQueue;
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
    BootstrapSelect.prototype.optionsChanged = function () {
        var _this = this;
        this.taskQueue.queueTask(function () {
            $(_this.picker).selectpicker('refresh');
        });
    };
    BootstrapSelect.prototype.selectedChanged = function (newValue, oldValue) {
        // suppress change from empty string to null and vice versa
        if (!newValue && !oldValue) {
            return;
        }
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
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", String)
    ], BootstrapSelect.prototype, "inputId", void 0);
    BootstrapSelect = __decorate([
        aurelia_framework_1.autoinject,
        __metadata("design:paramtypes", [aurelia_framework_1.TaskQueue])
    ], BootstrapSelect);
    return BootstrapSelect;
}());
exports.BootstrapSelect = BootstrapSelect;
