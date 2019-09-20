import { valueConverter } from "aurelia-framework";

@valueConverter("upperCase")
export class UpperCaseValueConverter {
    public toView(value: string) {
        return !value ? value : value.toUpperCase();
    }

    public fromView(value: string) {
        return !value ? value : value.toUpperCase();
    }
}