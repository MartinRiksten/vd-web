import { json } from "aurelia-fetch-client";

import { CommonDialogHelper } from "..";
import { FetchBase, IServiceResult } from "./fetch-base";
import { HttpFetch } from "./http-fetch";


/**
 * base class for list services.
 */
export abstract class ServiceBase<TModel> extends FetchBase {
    /**
     * A place to store some data
     */
    public data: any = {};

    /**
     * Returns a newly created instance
     * @param http: The injected http fetch instance
     */
    protected constructor(http: HttpFetch,
        commonDialogHelper: CommonDialogHelper) {
        super(http, commonDialogHelper);
    }

    /**
     * Loads an object from the given url.
     * @param url: The url for the operation
     * @param data: The id of the instance to load
     */
    protected async searchBaseAsync(url: string, id?: string | object): Promise<IServiceResult<TModel[]>> {
        const data = typeof id === "string" || id instanceof String ? { id } : id;
        const result = !!id
            ? await this.fetchAsync<TModel[]>(url, data)
            : await this.fetchAsync<TModel[]>(url);
        return result;
    }

    /**
     * Loads an object from the given url.
     * @param url: The url for the operation
     * @param data: The id of the instance to load
     */
    protected async loadBaseAsync(url: string, id?: string | object): Promise<IServiceResult<TModel>> {
        const data = typeof id === "string" || id instanceof String ? { id } : id;
        const result = !!id
            ? await this.fetchAsync<TModel>(url, data)
            : await this.fetchAsync<TModel>(url);
        return result;
    }

    /**
     * Deletes the item from the list by sending the id to given url.
     * @param url: The url for the operation
     * @param data: The id of the instance to delete
     */
    protected async deleteBaseAsync(url: string, id: string): Promise<IServiceResult<boolean>> {
        const result = await this.fetchAsync<boolean>(url, { id });
        return result;
    }

    /**
     * Saves or adds the item by sending the item to given url.
     * @param url: The url for the operation
     * @param model: The model to save
     */
    protected async saveBaseAsync(url: string, item: TModel): Promise<IServiceResult<TModel>> {
        const result = await this.fetchAsync<TModel>(url, item);
        return result;
    }
}

/**
 * Interface for identifyable objects.
 */
export interface IIdentifiable<T> {
    id?: T;
}

