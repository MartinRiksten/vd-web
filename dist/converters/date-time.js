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
 * @param option Either the format or a boolean indicating whether to show time
 * @returns The converted value
 */
var DateValueConverter = /** @class */ (function () {
    function DateValueConverter() {
    }
    DateValueConverter.prototype.toView = function (value, option) {
        if (!value) {
            return value;
        }
        var data = moment_1.default(value).locale('nl');
        var result = data.isValid()
            ? typeof option === 'string'
                ? data.format(option)
                : option
                    ? data.format('l') + " " + data.format('H:mm')
                    : data.format('l')
            : value;
        return result;
    };
    return DateValueConverter;
}());
exports.DateValueConverter = DateValueConverter;
