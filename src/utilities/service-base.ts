import { autoinject } from 'aurelia-framework';

import { CommonDialogHelper } from '..';
import { FetchBase, IFetchOptions, IServiceResult } from './fetch-base';
import { HttpFetch } from './http-fetch';

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
  protected constructor(http: HttpFetch, dialog: CommonDialogHelper) {
    super(http, dialog);
  }

  /**
   * Loads an object from the given url.
   * @param url: The url for the operation
   * @param id: The id of the instance to load
   */
  protected async searchBaseAsync(
    url: string,
    id?: string | object,
    options?: IFetchOptions,
  ): Promise<IServiceResult<TModel[]>> {
    const data = !id ? void 0 : typeof id === 'string' || id instanceof String ? { id } : id;
    const result = await this.postAsync<TModel[]>(url, data, options);
    return result;
  }

  /**
   * Gets a file from the given url.
   * @param url: The url for the operation
   * @param data: The id of the instance to load
   */
  protected async getBaseAsync(url: string, options?: IFetchOptions): Promise<IServiceResult<TModel>> {
    const result = await this.getAsync<TModel>(url, options);
    return result;
  }

  /**
   * Loads an object from the given url.
   * @param url: The url for the operation
   * @param data: The id of the instance to load
   */
  protected async loadBaseAsync(
    url: string,
    id?: string | object,
    options?: IFetchOptions,
  ): Promise<IServiceResult<TModel>> {
    const data = !id ? void 0 : typeof id === 'string' || id instanceof String ? { id } : id;
    const result = await this.postAsync<TModel>(url, data, options);
    return result;
  }

  /**
   * Deletes the item from the list by sending the id to given url.
   * @param url: The url for the operation
   * @param data: The id of the instance to delete
   */
  protected async deleteBaseAsync(url: string, id: string, options?: IFetchOptions): Promise<IServiceResult<boolean>> {
    const result = await this.postAsync<boolean>(url, { id }, options);
    return result;
  }

  /**
   * Saves or adds the item by sending the item to given url.
   * @param url: The url for the operation
   * @param model: The model to save
   */
  protected async saveBaseAsync(url: string, item: TModel, options?: IFetchOptions): Promise<IServiceResult<TModel>> {
    const result = await this.postAsync<TModel>(url, item, options);
    return result;
  }
}

/**
 * Interface for identifyable objects.
 */
export interface IIdentifiable<T> {
  id?: T;
}
