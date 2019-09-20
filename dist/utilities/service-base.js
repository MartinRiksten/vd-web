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
const fetch_base_1 = require("./fetch-base");
/**
 * base class for list services.
 */
class ServiceBase extends fetch_base_1.FetchBase {
    /**
     * Returns a newly created instance
     * @param http: The injected http fetch instance
     */
    constructor(http, commonDialogHelper) {
        super(http, commonDialogHelper);
        /**
         * A place to store some data
         */
        this.data = {};
    }
    /**
     * Loads an object from the given url.
     * @param url: The url for the operation
     * @param data: The id of the instance to load
     */
    searchBaseAsync(url, id) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = typeof id === "string" || id instanceof String ? { id } : id;
            const result = !!id
                ? yield this.fetchAsync(url, data)
                : yield this.fetchAsync(url);
            return result;
        });
    }
    /**
     * Loads an object from the given url.
     * @param url: The url for the operation
     * @param data: The id of the instance to load
     */
    loadBaseAsync(url, id) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = typeof id === "string" || id instanceof String ? { id } : id;
            const result = !!id
                ? yield this.fetchAsync(url, data)
                : yield this.fetchAsync(url);
            return result;
        });
    }
    /**
     * Deletes the item from the list by sending the id to given url.
     * @param url: The url for the operation
     * @param data: The id of the instance to delete
     */
    deleteBaseAsync(url, id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.fetchAsync(url, { id });
            return result;
        });
    }
    /**
     * Saves or adds the item by sending the item to given url.
     * @param url: The url for the operation
     * @param model: The model to save
     */
    saveBaseAsync(url, item) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.fetchAsync(url, item);
            return result;
        });
    }
}
exports.ServiceBase = ServiceBase;
