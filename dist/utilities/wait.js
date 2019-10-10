"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Wait = /** @class */ (function () {
    function Wait() {
    }
    Wait.for = function (ms) {
        return new Promise(function (resolve) { return setTimeout(resolve, ms); });
    };
    return Wait;
}());
exports.Wait = Wait;
