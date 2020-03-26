import { DateInput } from "../utilities/date-input";

export class DateInputValueConverter {
    public toView(value: DateInput): string {
        const result = !value ? void 0 : value.text;
        return result;
    }

    public fromView(value: string): DateInput {
        const result = new DateInput(value);
        return result;
    }
}

