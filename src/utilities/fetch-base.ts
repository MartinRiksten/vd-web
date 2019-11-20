import { json } from 'aurelia-fetch-client';
import { CommonDialogHelper } from '..';
import { HttpFetch } from './http-fetch';
import { IFilter } from './list-base';

export abstract class FetchBase {
  /**
   * Returns a newly created instance
   * @param http: The injected http fetch instance
   */
  protected constructor(private readonly http: HttpFetch, private readonly commonDialogHelper: CommonDialogHelper) {}

  /**
   * Posts the given data to the given url, and stores any returned errors.
   */
  protected async postAsync<T>(url: string, data?: any, options?: IFetchOptions): Promise<IServiceResult<T>> {
    const body: Blob | object = !!data ? json(data) : data;
    const init = { method: 'POST', body };
    try {
      const response = await this.http.fetchAsync(url, init);
      if (!response.ok) {
        return this.handleUnexpectedError(response.statusText, options);
      }

      const value = await response.json();
      const result = value as IServiceResult<T>;
      result.handled = false;
      return result;
    } catch (error) {
      return this.handleUnexpectedError(error, options);
    }
  }

  /**
   * Gets the given data to the given url, and stores any returned errors.
   */
  protected async getAsync<T>(url: string, options?: IFetchOptions): Promise<T> {
    const init = { method: 'GET' };
    try {
      const response = await this.http.fetchAsync(url, init);
      if (!response.ok) {
        this.handleUnexpectedError<T>(response.statusText, options)
        return void 0;;
      }

      const value = await response.json();
      const result = value as T;
      return result;
    } catch (error) {
       this.handleUnexpectedError<T>(error, options);
       return void 0;
    }
  }

  /**
   * Gets the given data to the given url, and stores any returned errors.
   */
  private async doFetchAsync<T, R>(url: string, init: object, options: IFetchOptions): Promise<IServiceResult<T>> {
    try {
      const response = await this.http.fetchAsync(url, init);
      if (!response.ok) {
        return this.handleUnexpectedError(response.statusText, options);
      }

      const value = await response.json();
      const result = value as IServiceResult<T>;
      result.handled = false;
      return result;
    } catch (error) {
      return this.handleUnexpectedError(error, options);
    }
  }

  private handleUnexpectedError<T>(error: string, options: IFetchOptions): IServiceResult<T> {
    const handle = !options || !options.ignoreErrors;
    if (handle) {
      this.commonDialogHelper.unexpectedError(error);
    }

    return { success: false, handled: handle, firstMessage: { message: error } } as IServiceResult<T>;
  }

}

export interface IFetchOptions {
  ignoreErrors: boolean;
}

/**
 * Interface for service error information.
 */
export interface IMessageInfo {
  fieldName: string;
  message: string;
  number: number;
  code: string;
}

/**
 * Interface for basic service result information.
 */
export interface IServiceResultBase {
  success: boolean;
  handled?: boolean;
  messages?: IMessageInfo[];
  firstMessage?: IMessageInfo;
}

/**
 * Interface for service result information.
 * @extends IServiceResultBase
 */
export interface IServiceResult<T> extends IServiceResultBase {
  data?: T;
}
