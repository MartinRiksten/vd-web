import { CommonDialogHelper } from '..';
import { HttpFetch } from './http-fetch';
export declare abstract class FetchBase {
    private readonly http;
    private readonly commonDialogHelper;
    /**
     * Returns a newly created instance
     * @param http: The injected http fetch instance
     */
    protected constructor(http: HttpFetch, commonDialogHelper: CommonDialogHelper);
    /**
     * Posts the given data to the given url, and stores any returned errors.
     */
    protected postAsync<T>(url: string, data?: any, options?: IFetchOptions): Promise<IServiceResult<T>>;
    /**
     * Gets the given data to the given url, and stores any returned errors.
     */
    protected getAsync<T>(url: string, options?: IFetchOptions): Promise<T>;
    /**
     * Gets the given data to the given url, and stores any returned errors.
     */
    private doFetchAsync;
    private handleUnexpectedError;
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
