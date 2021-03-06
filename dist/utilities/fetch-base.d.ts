import { CommonDialogHelper } from '..';
import { HttpFetch } from './http-fetch';
export declare abstract class FetchBase {
    private readonly http;
    protected readonly dialog: CommonDialogHelper;
    isFetching: boolean;
    /**
     * Returns a newly created instance
     * @param http: The injected http fetch instance
     */
    protected constructor(http: HttpFetch, dialog: CommonDialogHelper);
    /**
     * Posts the given data to the given url, and stores any returned errors.
     */
    protected postAsync<T>(url: string, data?: any, options?: IFetchOptions): Promise<IServiceResult<T>>;
    /**
     * Gets the given data to the given url, and stores any returned errors.
     */
    protected getAsync<T>(url: string, options?: IFetchOptions): Promise<T>;
    protected handleUnexpectedError<T>(error: string, options: IFetchOptions, result?: IServiceResult<T>): Promise<IServiceResult<T>>;
}
export interface IFetchOptions {
    ignoreErrors?: boolean;
    ignoreErrorsWhen?: () => boolean;
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
