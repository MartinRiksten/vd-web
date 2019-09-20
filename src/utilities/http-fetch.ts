import { HttpClient } from "aurelia-fetch-client";
import { autoinject } from "aurelia-framework";

@autoinject
export class HttpFetch {
    public static roleChange = 0;
    public isFetching = 0;

    /**
     * Returns a newly created instance
     */
    constructor(private readonly http: HttpClient) {
    }

    /**   * Posts the given data to the given url
     */
    public async fetchAsync(url: string, init?: object): Promise<Response> {
        const headers = new Headers({ "user-role": HttpFetch.roleChange.toString() });
        init = Object.assign({ method: "POST", headers }, init);
        this.isFetching++;
        try {
            const response = await this.http.fetch(url, init);
            return response;
        } finally {
            this.isFetching--;
        }
    }
}
