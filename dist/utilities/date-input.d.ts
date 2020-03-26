export declare class DateInput {
    static useTextDates: boolean;
    static domFormat: string;
    static textFormat: string;
    static format: string;
    static domRegex: RegExp;
    static textRegex: RegExp;
    static regex: RegExp;
    text: string;
    constructor(value: Date | string);
    readonly value: Date;
    readonly isValid: boolean;
    private fromDate;
    private toDate;
}
