import { valueConverter } from "aurelia-framework";

@valueConverter("null")
export class NullValueConverter {
    public toView(value: any) {
        return !value ? "" : value;
    }
}