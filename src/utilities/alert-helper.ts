import { Wait } from "../utilities/wait";

/**
 * Helper for showing alerts
 */
export class AlertHelper {

    public static DEFAULTS: IAlertOptions = { style: "alert-success", delay: 10, duration: 3500 };
    private static id = 0;
    private static count = 0;

    public async show(message: string, options?: IAlertOptions): Promise<void> {

        options = { ...AlertHelper.DEFAULTS, ...options };
        const id = `static-alert-${AlertHelper.id++}`;
        const template = `<div id="${id}" class="static-alert fade text-center alert-${AlertHelper.count++}"><div class="alert ${options.style}" role="alert">${message}</div></div>`;
        $("body").prepend(template);
        const alert = $(`#${id}`);

        await Wait.for(options.delay);
        alert.addClass("in");
        await Wait.for(options.duration);
        alert.removeClass("in");
        AlertHelper.count--;
        await Wait.for(100);
        alert.remove();
    }
}

export interface IAlertOptions {
    style: string;
    delay: number;
    duration: number;
}