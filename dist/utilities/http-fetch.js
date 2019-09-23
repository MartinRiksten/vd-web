"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var HttpFetch_1;
Object.defineProperty(exports, "__esModule", { value: true });
const aurelia_fetch_client_1 = require("aurelia-fetch-client");
const aurelia_framework_1 = require("aurelia-framework");
let HttpFetch = HttpFetch_1 = class HttpFetch {
    /**
     * Returns a newly created instance
     */
    constructor(http) {
        this.http = http;
        this.isFetching = 0;
    }
    /**   * Posts the given data to the given url
     */
    fetchAsync(url, init) {
        return __awaiter(this, void 0, void 0, function* () {
            const headers = new Headers({ 'user-role': HttpFetch_1.roleChange.toString() });
            init = Object.assign({ method: 'POST', headers }, init);
            this.isFetching++;
            try {
                const response = yield this.http.fetch(url, init);
                return response;
            }
            finally {
                this.isFetching--;
            }
        });
    }
};
HttpFetch.roleChange = 0;
HttpFetch = HttpFetch_1 = __decorate([
    aurelia_framework_1.autoinject,
    __metadata("design:paramtypes", [aurelia_fetch_client_1.HttpClient])
], HttpFetch);
exports.HttpFetch = HttpFetch;
