import moment from "moment";

export class DateInput {
    public static useText = !(window as any).chrome;
    public static domFormat = "YYYY-MM-DD";
    public static textFormat = "DD-MM-YYYY";
    public static format = DateInput.useText ? DateInput.textFormat : DateInput.domFormat;
    public static domRegex = /^[0-9]{4}-[0-9]{1,2}-[0-9]{1,2}$/i;
    public static textRegex = /^[0-9]{1,2}-[0-9]{1,2}-[0-9]{4}$/i;
    public static regex = DateInput.useText ? DateInput.textRegex : DateInput.domRegex;

    public text: string;

    constructor(value: Date | string) {
        this.text = value instanceof Date ? this.fromDate(value) : value;
    }

    public get value(): Date {
        return this.toDate(this.text);
    }

    public get isValid(): boolean {
        if (!this.text) {
            return true;
        }

        if (!DateInput.regex.test(this.text)) {
            return false;
        }

        const momentResult = moment(this.text, DateInput.format);
        const result = momentResult.isValid();
        return result;
    }

    private fromDate(value: Date): string {
        const momentResult = !value ? void 0 : moment(value);
        const result = !momentResult || !momentResult.isValid() ? void 0 : momentResult.format(DateInput.format);
        return result;
    }

    private toDate(value: string): Date {
        const momentResult = !value ? void 0 : moment(value, DateInput.format);
        const result = !momentResult || !momentResult.isValid() ? void 0 : momentResult.toDate();
        return result;
    }
}
