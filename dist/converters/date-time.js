"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var moment_1 = __importDefault(require("moment"));
require("moment/locale/nl");
var DateValueConverter = /** @class */ (function () {
    function DateValueConverter() {
    }
    DateValueConverter.prototype.toView = function (value) {
        if (!value) {
            return value;
        }
        var data = moment_1.default(value).locale("nl");
        return data.isValid() ? data.format("l") : value;
    };
    return DateValueConverter;
}());
exports.DateValueConverter = DateValueConverter;
