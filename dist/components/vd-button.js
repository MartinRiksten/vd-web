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
var VdButton = /** @class */ (function () {
    function VdButton() {
        this.buttonIf = true;
        this.buttonClass = 'ml-2';
        this.types = [
            { kind: 'ok', displayName: 'OK', variant: 'btn-primary', icon: 'fas fa-check' },
            { kind: 'cancel', displayName: 'Annuleren', variant: 'btn-light', icon: 'fas fa-times' },
            { kind: 'yes', displayName: 'Ja', variant: 'btn-primary', icon: 'fas fa-check' },
            { kind: 'no', displayName: 'Nee', variant: 'btn-light', icon: 'fas fa-times' },
            { kind: 'clear', displayName: 'Wissen', variant: 'btn-light', icon: 'fas fa-eraser' },
            { kind: 'save', displayName: 'Opslaan', variant: 'btn-primary', icon: 'fas fa-save' },
            { kind: 'register', displayName: 'Registreren', variant: 'btn-primary', icon: 'fas fa-save' },
            { kind: 'search', displayName: 'Zoeken', variant: 'btn-primary', icon: 'fas fa-search' },
            { kind: 'execute', displayName: 'Uitvoeren', variant: 'btn-primary', icon: 'fas fa-check' },
            { kind: 'close', displayName: 'Sluiten', variant: 'btn-light', icon: 'fas fa-times' },
            { kind: 'add', displayName: 'Toevoegen', variant: 'btn-primary', icon: 'fas fa-plus-circle' },
            { kind: 'upload', displayName: 'Uploaden', variant: 'btn-primary', icon: 'fas fa-upload' },
            { kind: 'download', displayName: 'Downloaden', variant: 'btn-primary', icon: 'fas fa-download' },
            { kind: 'select-all', displayName: 'Alle', variant: 'btn-light', icon: 'fas fa-check-square' },
            { kind: 'deselect-all', displayName: 'Geen', variant: 'btn-light', icon: 'far fa-square' },
        ];
    }
    VdButton.prototype.bind = function () {
        var _this = this;
        this.buttonId = !this.buttonId ? this.kind : this.buttonId;
        var info = this.types.find(function (x) { return x.kind === _this.kind; }) || {};
        this.displayName = !!this.displayName ? this.displayName : info.displayName;
        this.variant = !!this.variant ? this.variant : info.variant;
        this.icon = !!this.icon ? this.icon : info.icon;
    };
    VdButton.prototype.getClass = function () {
        var result = this.buttonClass + " " + this.variant;
        return result;
    };
    VdButton.prototype.onClick = function (event) {
        if (!!this.clickTarget) {
            $(this.clickTarget).click();
        }
        if (!!this.clickHandler) {
            this.clickHandler(event);
        }
    };
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", String)
    ], VdButton.prototype, "kind", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", String)
    ], VdButton.prototype, "buttonId", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Function)
    ], VdButton.prototype, "clickHandler", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", String)
    ], VdButton.prototype, "displayName", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", String)
    ], VdButton.prototype, "variant", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", String)
    ], VdButton.prototype, "icon", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", String)
    ], VdButton.prototype, "clickTarget", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Boolean)
    ], VdButton.prototype, "buttonIf", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Object)
    ], VdButton.prototype, "buttonClass", void 0);
    return VdButton;
}());
exports.VdButton = VdButton;
