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
const common_dialog_1 = require("./common-dialog");
const common_dialog_model_1 = require("./common-dialog-model");
/**
 * Helper class for common dialogs.
 */
let CommonDialogHelper = class CommonDialogHelper {
    /**
     * Initializes a new instance of the CommonDialogs class
     * @param dialogService The injected dialog service
     */
    constructor(dialogService) {
        this.dialogService = dialogService;
    }
    /**
     * Shows a dialog with a yes/no question
     * @param question The question for the user
     */
    confirm(question, cancellable) {
        return __awaiter(this, void 0, void 0, function* () {
            const model = cancellable
                ? new common_dialog_model_1.CommonDialogModel(common_dialog_1.CommonDialogType.ConfirmationCancel, question)
                : new common_dialog_model_1.CommonDialogModel(common_dialog_1.CommonDialogType.Confirmation, question);
            const result = yield this.dialogService.open({ viewModel: common_dialog_1.CommonDialog, model });
            return result;
        });
    }
    /**
     * Shows a dialog with an error message
     * @param message The message to show
     */
    message(message, dialogType) {
        return __awaiter(this, void 0, void 0, function* () {
            const model = new common_dialog_model_1.CommonDialogModel(dialogType, message);
            const result = yield this.dialogService.open({ viewModel: common_dialog_1.CommonDialog, model });
            return result;
        });
    }
    /**
     * Shows a dialog with the unexpected error message
     */
    unexpectedError(error) {
        return __awaiter(this, void 0, void 0, function* () {
            aurelia_framework_1.LogManager.getLogger('app').info(`Unexpected error: ${error}`);
            const message = 'Er is een onverwachte fout opgetreden.';
            const result = yield this.message(message, common_dialog_1.CommonDialogType.Error);
            return result;
        });
    }
};
CommonDialogHelper = __decorate([
    aurelia_framework_1.autoinject
], CommonDialogHelper);
exports.CommonDialogHelper = CommonDialogHelper;
