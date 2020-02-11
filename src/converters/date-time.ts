import moment from 'moment';
import 'moment/locale/nl';

/**
 * Value converter for a date time
 * @param value The value to convert 
 * @param option Either the format or a boolean indicating whether to show time
 * @returns The converted value
 */
export class DateValueConverter {
  public toView(value: string, option: boolean | string) {
    if (!value) {
      return value;
    }

    const data = moment(value).locale('nl');
    const result = data.isValid()
        ? typeof option === 'string'
            ? data.format(option)
            : option
                ?`${data.format('l')} ${data.format('H:mm')}` 
                : data.format('l')
        : value;
    
    return result;
  }
}
