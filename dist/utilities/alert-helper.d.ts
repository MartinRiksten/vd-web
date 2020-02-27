/**
 * Helper for showing alerts
 */
export declare class AlertHelper {
    static DEFAULTS: IAlertOptions;
    static StackAlerts: boolean;
    private static id;
    private static count;
    show(message: string, options?: IAlertOptions): Promise<void>;
}
export interface IAlertOptions {
    variant?: string;
    delay?: number;
    duration?: number;
}
