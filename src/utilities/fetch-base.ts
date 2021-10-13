import { json } from 'aurelia-fetch-client';
import { CommonDialogHelper } from '..';
import { HttpFetch } from './http-fetch';

export abstract class FetchBase {
  public isFetching = false;

  /**
   * Returns a newly created instance
   * @param http: The injected http fetch instance
   */
  protected constructor(private readonly http: HttpFetch, 
    protected readonly dialog: CommonDialogHelper) {
    }

  /**
   * Posts the given data to the given url, and stores any returned errors.
   */
  protected async postAsync<T>(url: string, data?: any, options?: IFetchOptions): Promise<IServiceResult<T>> {
    const body: Blob | object = !!data ? json(data) : data;
    const init = { method: 'POST', body };
    this.isFetching = true;
    try {
      const response = await this.http.fetchAsync(url, init);
      if (!response.ok) {
        return await this.handleUnexpectedError(response.statusText, options);
      }

      const value = await response.json();
      const result = value as IServiceResult<T>;

      if (!result.success) {
        return await this.handleUnexpectedError(result.firstMessage.message, options, result);
      }

      return result;
    } catch (error) {
      return await this.handleUnexpectedError(error, options);
    } finally {
      this.isFetching = false;
    }
  }

  /**
   * Gets the given data to the given url, and stores any returned errors.
   */
  protected async getAsync<T>(url: string, options?: IFetchOptions): Promise<T> {
    const init = { method: 'GET' };
    this.isFetching = true;
    try {
      const response = await this.http.fetchAsync(url, init);
      if (!response.ok) {
        await this.handleUnexpectedError<T>(response.statusText, options);
        return void 0;
      }

      const value = await response.json();
      const result = value as T;
      return result;
    } catch (error) {
      await this.handleUnexpectedError<T>(error, options);
      return void 0;
    } finally {
      this.isFetching = false;
    }
  }

  protected async handleUnexpectedError<T>(error: string, options: IFetchOptions, result?: IServiceResult<T>): Promise<IServiceResult<T>> {
    const handle = !options || (!options.ignoreErrors && (!options.ignoreErrorsWhen || !options.ignoreErrorsWhen(result)));
    if (handle) {
      await this.dialog.unexpectedError(error);
    }

    if (!result) {
      return { success: false, handled: handle, firstMessage: { message: error } } as IServiceResult<T>;
    }

    result.handled = handle;
    return result;
  }
}

export interface IFetchOptions {
  ignoreErrors?: boolean;
  ignoreErrorsWhen?: (result: IServiceResultBase) => boolean;
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
