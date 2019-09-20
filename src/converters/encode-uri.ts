import { valueConverter } from "aurelia-framework";

@valueConverter("encodeUri")
export class EncodeUriValueConverter {
    public toView(value: any) {
        return !value ? "" : encodeURIComponent(value);
    }
}