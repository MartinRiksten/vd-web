import 'moment/locale/nl';
/**
 * Value converter for a date time
 * @param value The value to convert
 * @param option Either the format or a boolean indicating whether to show time
 * @returns The converted value
 */
export declare class DateValueConverter {
    toView(value: string, option: boolean | string): string;
}
