/**
 * Helper for showing alerts
 */
export declare class AlertHelper {
    static DEFAULTS: IAlertOptions;
    private static id;
    private static count;
    show(message: string, options?: IAlertOptions): Promise<void>;
}
export interface IAlertOptions {
    style: string;
    delay: number;
    duration: number;
}
