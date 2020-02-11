import moment from 'moment';
import 'moment/locale/nl';

export class DateValueConverter {
  public toView(value: string) {
    if (!value) {
      return value;
    }

    const data = moment(value).locale('nl');
    return data.isValid() ? data.format('l') : value;
  }
}
