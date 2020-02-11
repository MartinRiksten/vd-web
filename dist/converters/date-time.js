"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var moment_1 = __importDefault(require("moment"));
require("moment/locale/nl");
/**
 * Value converter for a date time
 * @param value The value to convert
 * @param option The format
 * @returns The converted value
 */
var DateTimeValueConverter = /** @class */ (function () {
    function DateTimeValueConverter() {
    }
    DateTimeValueConverter.prototype.toView = function (value, option) {
        if (!value) {
            return value;
        }
        var data = moment_1.default(value).locale('nl');
        var result = data.isValid()
            ? typeof option === 'string'
                ? data.format(option)
                : data.hour() !== 0 || data.minute() !== 0 || data.second() !== 0
                    ? data.format('l') + " " + data.format('H:mm')
                    : data.format('l')
            : value;
        return result;
    };
    return DateTimeValueConverter;
}());
exports.DateTimeValueConverter = DateTimeValueConverter;
