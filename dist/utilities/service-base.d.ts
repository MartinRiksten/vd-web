import { CommonDialogHelper } from '..';
import { FetchBase, IServiceResult } from './fetch-base';
import { HttpFetch } from './http-fetch';
/**
 * base class for list services.
 */
export declare abstract class ServiceBase<TModel> extends FetchBase {
    /**
     * A place to store some data
     */
    data: any;
    /**
     * Returns a newly created instance
     * @param http: The injected http fetch instance
     */
    protected constructor(http: HttpFetch, commonDialogHelper: CommonDialogHelper);
    /**
     * Loads an object from the given url.
     * @param url: The url for the operation
     * @param data: The id of the instance to load
     */
    protected searchBaseAsync(url: string, id?: string | object): Promise<IServiceResult<TModel[]>>;
    /**
     * Loads an object from the given url.
     * @param url: The url for the operation
     * @param data: The id of the instance to load
     */
    protected loadBaseAsync(url: string, id?: string | object): Promise<IServiceResult<TModel>>;
    /**
     * Deletes the item from the list by sending the id to given url.
     * @param url: The url for the operation
     * @param data: The id of the instance to delete
     */
    protected deleteBaseAsync(url: string, id: string): Promise<IServiceResult<boolean>>;
    /**
     * Saves or adds the item by sending the item to given url.
     * @param url: The url for the operation
     * @param model: The model to save
     */
    protected saveBaseAsync(url: string, item: TModel): Promise<IServiceResult<TModel>>;
}
/**
 * Interface for identifyable objects.
 */
export interface IIdentifiable<T> {
    id?: T;
}