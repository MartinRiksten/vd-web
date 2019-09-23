"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const moment_1 = __importDefault(require("moment"));
require("moment/locale/nl");
class DateValueConverter {
    toView(value) {
        if (!value) {
            return value;
        }
        const data = moment_1.default(value).locale('nl');
        return data.isValid() ? `${data.format('l')} ${data.format('H:mm')}` : value;
    }
}
exports.DateValueConverter = DateValueConverter;
