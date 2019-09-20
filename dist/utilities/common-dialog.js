"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
const aurelia_framework_1 = require("aurelia-framework");
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
        this.info = CommonDialogs.types.get(this.model.type);
    }
    /**
     * Indicates wheter the given button must be shown
     * @param button The button name
     */
    showButton(button) {
        const result = this.info.buttons.indexOf(CommonDialogs.buttons.get(button)) >= 0;
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
    aurelia_framework_1.autoinject
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
 * Model for the common dialog
 */
class CommonDialogModel {
    /**
     * Initailizes anew instance of the CommonDialogModel class
     * @param type The type of the dialog
     * @param text The text for the dialog
     */
    constructor(type, text) {
        this.type = type;
        this.text = text;
    }
}
exports.CommonDialogModel = CommonDialogModel;
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
/**
 * Common dialog information container
 */
class CommonDialogInfo {
    /**
     * Initializes a new instance of the CommonDialogInfo class
     * @param header The header text
     * @param headerClass The additonal header class(es)
     * @param buttons The buttons
     * @param symbolClass The header symbol class
     */
    constructor(header, headerClass, buttons = [], symbolClass) {
        this.header = header;
        this.headerClass = headerClass;
        this.buttons = buttons;
        this.symbolClass = symbolClass;
    }
}
exports.CommonDialogInfo = CommonDialogInfo;
/**
 * Container for common dialog information
 */
class CommonDialogs {
}
exports.CommonDialogs = CommonDialogs;
/**
 * A map containing the dialog information per dialog type
 */
CommonDialogs.types = new Map();
/**
 * A mapn containing the enumeration button value for each button name
 */
CommonDialogs.buttons = new Map();
/**
 * Initailizes the common dialog information container
 */
CommonDialogs.types.set(CommonDialogType.Information, new CommonDialogInfo("Informatie", "alert-info", [CommonDialogButton.Ok], "fas fa-1_5x fa-info-circle"));
CommonDialogs.types.set(CommonDialogType.Confirmation, new CommonDialogInfo("Bevestiging", "alert-info", [CommonDialogButton.Yes, CommonDialogButton.No], "fas fa-1_5x fa-question-circle"));
CommonDialogs.types.set(CommonDialogType.ConfirmationCancel, new CommonDialogInfo("Bevestiging", "alert-info", [CommonDialogButton.Yes, CommonDialogButton.No, CommonDialogButton.Cancel], "fas fa-1_5x fa-question-circle"));
CommonDialogs.types.set(CommonDialogType.Warning, new CommonDialogInfo("Waarschuwing", "alert-warning", [CommonDialogButton.Ok], "fas fa-1_5x fa-exclamation-triangle"));
CommonDialogs.types.set(CommonDialogType.Error, new CommonDialogInfo("Fout", "alert-danger", [CommonDialogButton.Ok], "fas fa-1_5x fa-times-circle"));
CommonDialogs.types.set(CommonDialogType.Success, new CommonDialogInfo("Succes", "alert-success", [CommonDialogButton.Ok], "fas fa-1_5x fa-check"));
CommonDialogs.buttons.set("ok", CommonDialogButton.Ok);
CommonDialogs.buttons.set("cancel", CommonDialogButton.Cancel);
CommonDialogs.buttons.set("yes", CommonDialogButton.Yes);
CommonDialogs.buttons.set("no", CommonDialogButton.No);
