import { valueConverter } from 'aurelia-framework';

@valueConverter('locale')
export class LocaleValueConverter {
  public toView(value: string) {
    return !value ? value : value.toLocaleString();
  }
}
