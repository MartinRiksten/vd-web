"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var moment_1 = __importDefault(require("moment"));
var DateInput = /** @class */ (function () {
    function DateInput(value) {
        this.text = value instanceof Date ? this.fromDate(value) : value;
    }
    Object.defineProperty(DateInput.prototype, "value", {
        get: function () {
            return this.toDate(this.text);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateInput.prototype, "isValid", {
        get: function () {
            if (!this.text) {
                return true;
            }
            if (!DateInput.regex.test(this.text)) {
                return false;
            }
            var momentResult = moment_1.default(this.text, DateInput.format);
            var result = momentResult.isValid();
            return result;
        },
        enumerable: true,
        configurable: true
    });
    DateInput.prototype.fromDate = function (value) {
        var momentResult = !value ? void 0 : moment_1.default(value);
        var result = !momentResult || !momentResult.isValid() ? void 0 : momentResult.format(DateInput.format);
        return result;
    };
    DateInput.prototype.toDate = function (value) {
        var momentResult = !value ? void 0 : moment_1.default(value, DateInput.format);
        var result = !momentResult || !momentResult.isValid() ? void 0 : momentResult.toDate();
        return result;
    };
    DateInput.useText = !window.chrome;
    DateInput.domFormat = "YYYY-MM-DD";
    DateInput.textFormat = "DD-MM-YYYY";
    DateInput.format = DateInput.useText ? DateInput.textFormat : DateInput.domFormat;
    DateInput.domRegex = /^[0-9]{4}-[0-9]{1,2}-[0-9]{1,2}$/i;
    DateInput.textRegex = /^[0-9]{1,2}-[0-9]{1,2}-[0-9]{4}$/i;
    DateInput.regex = DateInput.useText ? DateInput.textRegex : DateInput.domRegex;
    return DateInput;
}());
exports.DateInput = DateInput;
