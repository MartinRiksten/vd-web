"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var date_input_1 = require("../utilities/date-input");
var DateInputValueConverter = /** @class */ (function () {
    function DateInputValueConverter() {
    }
    DateInputValueConverter.prototype.toView = function (value) {
        var result = !value ? void 0 : value.text;
        return result;
    };
    DateInputValueConverter.prototype.fromView = function (value) {
        var result = new date_input_1.DateInput(value);
        return result;
    };
    return DateInputValueConverter;
}());
exports.DateInputValueConverter = DateInputValueConverter;
