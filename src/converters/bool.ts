import { valueConverter } from 'aurelia-framework';

@valueConverter('bool')
export class BoolValueConverter {
  public toView(value: any) {
    return value === true ? 'Ja' : value === false ? 'Nee' : "";
  }
}
