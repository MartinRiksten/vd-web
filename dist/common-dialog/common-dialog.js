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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_dialog_1 = require("aurelia-dialog");
var aurelia_framework_1 = require("aurelia-framework");
var common_dialogs_1 = require("./common-dialogs");
/**
 * Controller for the common-dialog component
 */
var CommonDialog = /** @class */ (function () {
    /**
     * Initializes a new instance of the CommonDialog class
     * @param controller The injected dialog controller
     */
    function CommonDialog(controller) {
        this.controller = controller;
    }
    /**
     *
     * Called by the aurelia framework
     * @param model
     */
    CommonDialog.prototype.activate = function (model) {
        this.model = model;
        var info = common_dialogs_1.CommonDialogs.types.get(this.model.type);
        if (!!info) {
            this.info = info;
        }
    };
    /**
     * Indicates wheter the given button must be shown
     * @param name The button name
     */
    CommonDialog.prototype.showButton = function (name) {
        var button = common_dialogs_1.CommonDialogs.buttons.get(name);
        var result = !!button && this.info.buttons.indexOf(button) >= 0;
        return result;
    };
    /**
     * Handles the successful closing of the modal window by pressing the button ok
     */
    CommonDialog.prototype.ok = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.controller.ok(true)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * Handles the unsuccesful closing of the modal window by pressing the button cancel
     */
    CommonDialog.prototype.cancel = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.controller.cancel(false)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * Handles the successful closing of the modal window by pressing the button yes
     */
    CommonDialog.prototype.yes = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.controller.ok(true)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * Handles the unsuccesful closing of the modal window by pressing the button no
     */
    CommonDialog.prototype.no = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.controller.ok(false)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    CommonDialog = __decorate([
        aurelia_framework_1.autoinject,
        __metadata("design:paramtypes", [aurelia_dialog_1.DialogController])
    ], CommonDialog);
    return CommonDialog;
}());
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
