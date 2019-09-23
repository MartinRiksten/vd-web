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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const aurelia_dialog_1 = require("aurelia-dialog");
const aurelia_framework_1 = require("aurelia-framework");
const common_dialogs_1 = require("./common-dialogs");
/**
 * Controller for the common-dialog component
 */
let CommonDialog = class CommonDialog {
    /**
     * Initializes a new instance of the CommonDialog class
     * @param controller The injected dialog controller
     */
    constructor(controller) {
        this.controller = controller;
    }
    /**
     *
     * Called by the aurelia framework
     * @param model
     */
    activate(model) {
        this.model = model;
        const info = common_dialogs_1.CommonDialogs.types.get(this.model.type);
        if (!!info) {
            this.info = info;
        }
    }
    /**
     * Indicates wheter the given button must be shown
     * @param name The button name
     */
    showButton(name) {
        const button = common_dialogs_1.CommonDialogs.buttons.get(name);
        const result = !!button && this.info.buttons.indexOf(button) >= 0;
        return result;
    }
    /**
     * Handles the successful closing of the modal window by pressing the button ok
     */
    ok() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.controller.ok(true);
            return result;
        });
    }
    /**
     * Handles the unsuccesful closing of the modal window by pressing the button cancel
     */
    cancel() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.controller.cancel(false);
            return result;
        });
    }
    /**
     * Handles the successful closing of the modal window by pressing the button yes
     */
    yes() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.controller.ok(true);
            return result;
        });
    }
    /**
     * Handles the unsuccesful closing of the modal window by pressing the button no
     */
    no() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.controller.ok(false);
            return result;
        });
    }
};
CommonDialog = __decorate([
    aurelia_framework_1.autoinject,
    __metadata("design:paramtypes", [aurelia_dialog_1.DialogController])
], CommonDialog);
exports.CommonDialog = CommonDialog;
/**
 * Enumeration of common dialog types
 */
var CommonDialogType;
(function (CommonDialogType) {
    CommonDialogType[CommonDialogType["Information"] = 0] = "Information";
    CommonDialogType[CommonDialogType["Confirmation"] = 1] = "Confirmation";
    CommonDialogType[CommonDialogType["ConfirmationCancel"] = 2] = "ConfirmationCancel";
    CommonDialogType[CommonDialogType["Warning"] = 3] = "Warning";
    CommonDialogType[CommonDialogType["Error"] = 4] = "Error";
    CommonDialogType[CommonDialogType["Success"] = 5] = "Success";
})(CommonDialogType = exports.CommonDialogType || (exports.CommonDialogType = {}));
/**
 * Enumeration of buttons that may appear on a common dialog
 */
var CommonDialogButton;
(function (CommonDialogButton) {
    CommonDialogButton[CommonDialogButton["Ok"] = 0] = "Ok";
    CommonDialogButton[CommonDialogButton["Cancel"] = 1] = "Cancel";
    CommonDialogButton[CommonDialogButton["Yes"] = 2] = "Yes";
    CommonDialogButton[CommonDialogButton["No"] = 3] = "No";
})(CommonDialogButton = exports.CommonDialogButton || (exports.CommonDialogButton = {}));
