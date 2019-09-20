import { HttpClient } from "aurelia-fetch-client";
export declare class HttpFetch {
    private readonly http;
    static roleChange: number;
    isFetching: number;
    /**
     * Returns a newly created instance
     */
    constructor(http: HttpClient);
    /**   * Posts the given data to the given url
     */
    fetchAsync(url: string, init?: object): Promise<Response>;
}
