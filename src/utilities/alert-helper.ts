import { Wait } from '../utilities/wait';

/**
 * Helper for showing alerts
 */
export class AlertHelper {
  public static DEFAULTS: IAlertOptions = { variant: 'alert-success', delay: 10, duration: 3500 };
  public static StackAlerts = true;
  private static id = 0;
  private static count = 0;

  public async show(message: string, options?: IAlertOptions): Promise<void> {
    options = { ...AlertHelper.DEFAULTS, ...options };
    const id = `static-alert-${AlertHelper.id++}`;
    const stackClass = AlertHelper.StackAlerts ? `alert-${AlertHelper.count++}` : "alert-0";
    const template = `<div id="${id}" class="static-alert fade text-center ${stackClass}"><div class="alert alert-sm shadow rounded ${options.variant}" role="alert">${message}</div></div>`;
    $('body').prepend(template);
    const alert = $(`#${id}`);

    await Wait.for(options.delay);
    alert.addClass('show');
    await Wait.for(options.duration);
    alert.removeClass('show');
    if (AlertHelper.count > 0) {
      AlertHelper.count--;
    }

    await Wait.for(100);
    alert.remove();
  }
}

export interface IAlertOptions {
  variant?: string;
  delay?: number;
  duration?: number;
}
