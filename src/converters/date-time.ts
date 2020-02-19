import moment from 'moment';
import 'moment/locale/nl';

/**
 * Value converter for a date time
 * @param value The value to convert
 * @param option The format
 * @returns The converted value
 */
export class DateTimeValueConverter {
  public toView(value: string, option: string) {
    if (!value) {
      return value;
    }

    const data = moment(value).locale('nl');
    const result = data.isValid()
      ? typeof option === 'string'
        ? data.format(option)
        : data.hour() !== 0 || data.minute() !== 0 || data.second() !== 0
        ? `${data.format('l')} ${data.format('H:mm')}`
        : data.format('l')
      : value;

    return result;
  }
}
