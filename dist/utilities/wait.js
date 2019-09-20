"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Wait {
    static for(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}
exports.Wait = Wait;
