import { json } from 'aurelia-fetch-client';
import { CommonDialogHelper } from '..';
import { HttpFetch } from './http-fetch';

export abstract class FetchBase {
  /**
   * Returns a newly created instance
   * @param http: The injected http fetch instance
   */
  protected constructor(private readonly http: HttpFetch, private readonly commonDialogHelper: CommonDialogHelper) {}

  /**
   * Posts the given data to the given url, and stores any returned errors.
   */
  protected async postAsync<T>(url: string, data?: any): Promise<IServiceResult<T>> {
    const body: Blob | object = !!data ? json(data) : data;
    const init = { method: 'POST', body };
    try {
      const response = await this.http.fetchAsync(url, init);
      if (!response.ok) {
        this.commonDialogHelper.unexpectedError(response.statusText);
        return { success: false, handled: true } as IServiceResult<T>;
      }

      const value = await response.json();
      const result = value as IServiceResult<T>;
      result.handled = false;
      return result;
    } catch (error) {
      this.commonDialogHelper.unexpectedError(error);
      return { success: false, handled: true, firstMessage: error } as IServiceResult<T>;
    }
  }

  /**
   * Gets the given data to the given url, and stores any returned errors.
   */
  protected async getAsync<T>(url: string): Promise<T> {
    const init = { method: 'GET' };
    try {
      const response = await this.http.fetchAsync(url, init);
      if (!response.ok) {
        this.commonDialogHelper.unexpectedError(response.statusText);
        return void 0;
      }

      const value = await response.json();
      const result = value as T;
      return result;
    } catch (error) {
      this.commonDialogHelper.unexpectedError(error);
      return void 0;
    }
  }

  /**
   * Gets the given data to the given url, and stores any returned errors.
   */
  private async doFetchAsync<T, R>(url: string, init: object): Promise<IServiceResult<T>> {
    try {
      const response = await this.http.fetchAsync(url, init);
      if (!response.ok) {
        this.commonDialogHelper.unexpectedError(response.statusText);
        return { success: false, handled: true } as IServiceResult<T>;
      }

      const value = await response.json();
      const result = value as IServiceResult<T>;
      result.handled = false;
      return result;
    } catch (error) {
      this.commonDialogHelper.unexpectedError(error);
      return { success: false, handled: true, firstMessage: error } as IServiceResult<T>;
    }
  }

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
