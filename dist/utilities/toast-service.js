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
var aurelia_framework_1 = require("aurelia-framework");
var toast_renderer_1 = require("./toast-renderer");
var toast_utilities_1 = require("./toast-utilities");
var defaults = {
    position: 'toast-top-right',
    startingZIndex: 1000
};
var ToastType = {
    Error: 'error',
    Info: 'info',
    Success: 'success',
    Warning: 'warning'
};
var ToastService = /** @class */ (function () {
    function ToastService(container, compositionEngine, renderer) {
        this.container = container;
        this.compositionEngine = compositionEngine;
        this.renderer = renderer;
        this.containers = new Map();
        this.toasts = [];
    }
    ToastService.prototype.error = function (message, title, options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.notify(ToastType.Error, message, title, options)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ToastService.prototype.info = function (message, title, options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.notify(ToastType.Info, message, title, options)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ToastService.prototype.success = function (message, title, options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.notify(ToastType.Success, message, title, options)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ToastService.prototype.warning = function (message, title, options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.notify(ToastType.Warning, message, title, options)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ToastService.prototype.clearAll = function () {
        var length = this.toasts.length;
        while (length--) {
            var toast = this.toasts.pop();
            toast.remove();
        }
        this.containers.forEach(function (value) { return value.remove(); });
        this.containers.clear();
    };
    ToastService.prototype.clearLast = function () {
        var toast = this.toasts.pop();
        toast.remove();
    };
    ToastService.prototype.notify = function (type, message, title, options) {
        return __awaiter(this, void 0, void 0, function () {
            var childContainer, instruction, controllerInstruction, canActivate, controller;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (title === undefined && typeof message !== 'string') {
                            options = message;
                        }
                        options = Object.assign({}, defaults, options, { message: message, title: title, type: type });
                        childContainer = this.container.createChild();
                        instruction = { childContainer: childContainer, container: this.container, model: options.model, viewModel: 'components/toast' };
                        return [4 /*yield*/, toast_utilities_1.getViewModel(instruction, this.compositionEngine)];
                    case 1:
                        controllerInstruction = _a.sent();
                        return [4 /*yield*/, toast_utilities_1.invokeLifecycle(controllerInstruction.viewModel, 'canActivate', options.model)];
                    case 2:
                        canActivate = _a.sent();
                        if (!canActivate) {
                            return [2 /*return*/, null];
                        }
                        return [4 /*yield*/, this.compositionEngine.createController(controllerInstruction)];
                    case 3:
                        controller = _a.sent();
                        controller.automate();
                        this.renderer.render(controller, options);
                        return [2 /*return*/];
                }
            });
        });
    };
    ToastService = __decorate([
        aurelia_framework_1.autoinject,
        __metadata("design:paramtypes", [aurelia_framework_1.Container,
            aurelia_framework_1.CompositionEngine,
            toast_renderer_1.ToastRenderer])
    ], ToastService);
    return ToastService;
}());
exports.ToastService = ToastService;
