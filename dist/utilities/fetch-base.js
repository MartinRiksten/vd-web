"use strict";
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
var aurelia_fetch_client_1 = require("aurelia-fetch-client");
var common_dialog_1 = require("../common-dialog/common-dialog");
var FetchBase = /** @class */ (function () {
    /**
     * Returns a newly created instance
     * @param http: The injected http fetch instance
     */
    function FetchBase(http, dialog, alert) {
        this.http = http;
        this.dialog = dialog;
        this.alert = alert;
        this.isFetching = false;
    }
    /**
     * Posts the given data to the given url, and stores any returned errors.
     */
    FetchBase.prototype.postAsync = function (url, data, options) {
        return __awaiter(this, void 0, void 0, function () {
            var body, init, response, value, result, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        body = !!data ? aurelia_fetch_client_1.json(data) : data;
                        init = { method: 'POST', body: body };
                        this.isFetching = true;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 8, 10, 11]);
                        return [4 /*yield*/, this.http.fetchAsync(url, init)];
                    case 2:
                        response = _a.sent();
                        if (!!response.ok) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.handleUnexpectedError(response.statusText, options)];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4: return [4 /*yield*/, response.json()];
                    case 5:
                        value = _a.sent();
                        result = value;
                        if (!!result.success) return [3 /*break*/, 7];
                        return [4 /*yield*/, this.handleUnexpectedError(result.firstMessage.message, options, result)];
                    case 6: return [2 /*return*/, _a.sent()];
                    case 7: return [2 /*return*/, result];
                    case 8:
                        error_1 = _a.sent();
                        return [4 /*yield*/, this.handleUnexpectedError(error_1, options)];
                    case 9: return [2 /*return*/, _a.sent()];
                    case 10:
                        this.isFetching = false;
                        return [7 /*endfinally*/];
                    case 11: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Gets the given data to the given url, and stores any returned errors.
     */
    FetchBase.prototype.getAsync = function (url, options) {
        return __awaiter(this, void 0, void 0, function () {
            var init, response, value, result, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        init = { method: 'GET' };
                        this.isFetching = true;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, 5, 6]);
                        return [4 /*yield*/, this.http.fetchAsync(url, init)];
                    case 2:
                        response = _a.sent();
                        if (!response.ok) {
                            this.handleUnexpectedError(response.statusText, options);
                            return [2 /*return*/, void 0];
                        }
                        return [4 /*yield*/, response.json()];
                    case 3:
                        value = _a.sent();
                        result = value;
                        return [2 /*return*/, result];
                    case 4:
                        error_2 = _a.sent();
                        this.handleUnexpectedError(error_2, options);
                        return [2 /*return*/, void 0];
                    case 5:
                        this.isFetching = false;
                        return [7 /*endfinally*/];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    FetchBase.prototype.handleUnexpectedError = function (error, options, result) {
        var useAlert = !!result && !!result.firstMessage && !!options && !!options.alertErrorsWhen && options.alertErrorsWhen(result);
        var useDialog = !!result && !!result.firstMessage && !!options && !!options.showErrorsWhen && options.showErrorsWhen(result);
        var unexpected = !useAlert && !useDialog && (!options || (!options.ignoreErrors && (!options.ignoreErrorsWhen || !options.ignoreErrorsWhen(result))));
        if (useAlert) {
            this.alert.show(result.firstMessage.message);
        }
        if (useDialog) {
            this.dialog.message(result.firstMessage.message, common_dialog_1.CommonDialogType.Error);
        }
        if (unexpected) {
            this.dialog.unexpectedError(error);
        }
        if (!result) {
            return { success: false, handled: unexpected || useAlert || useDialog, firstMessage: { message: error } };
        }
        result.handled = unexpected || useAlert || useDialog;
        return result;
    };
    return FetchBase;
}());
exports.FetchBase = FetchBase;
