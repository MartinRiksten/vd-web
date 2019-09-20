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
Object.defineProperty(exports, "__esModule", { value: true });
const wait_1 = require("../utilities/wait");
/**
 * Helper for showing alerts
 */
class AlertHelper {
    show(message, options) {
        return __awaiter(this, void 0, void 0, function* () {
            options = Object.assign(Object.assign({}, AlertHelper.DEFAULTS), options);
            const id = `static-alert-${AlertHelper.id++}`;
            const template = `<div id="${id}" class="static-alert fade text-center alert-${AlertHelper.count++}"><div class="alert ${options.style}" role="alert">${message}</div></div>`;
            $("body").prepend(template);
            const alert = $(`#${id}`);
            yield wait_1.Wait.for(options.delay);
            alert.addClass("in");
            yield wait_1.Wait.for(options.duration);
            alert.removeClass("in");
            AlertHelper.count--;
            yield wait_1.Wait.for(100);
            alert.remove();
        });
    }
}
exports.AlertHelper = AlertHelper;
AlertHelper.DEFAULTS = { style: "alert-success", delay: 10, duration: 3500 };
AlertHelper.id = 0;
AlertHelper.count = 0;
