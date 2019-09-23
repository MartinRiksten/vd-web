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
const aurelia_fetch_client_1 = require("aurelia-fetch-client");
class FetchBase {
    /**
     * Returns a newly created instance
     * @param http: The injected http fetch instance
     */
    constructor(http, commonDialogHelper) {
        this.http = http;
        this.commonDialogHelper = commonDialogHelper;
    }
    /**
     * Posts the given data to the given url, and stores any returned errors.
     */
    fetchAsync(url, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const body = !!data ? aurelia_fetch_client_1.json(data) : data;
            try {
                const response = yield this.http.fetchAsync(url, { method: 'POST', body });
                if (!response.ok) {
                    this.commonDialogHelper.unexpectedError(response.statusText);
                    return { success: false, handled: true };
                }
                const value = yield response.json();
                const result = value;
                result.handled = false;
                return result;
            }
            catch (error) {
                this.commonDialogHelper.unexpectedError(error);
                return { success: false, handled: true, firstMessage: error };
            }
        });
    }
}
exports.FetchBase = FetchBase;
