import { autoinject, customAttribute } from "aurelia-framework";
import { TaskQueue } from "aurelia-task-queue";
import { TooltipOption } from "bootstrap";
import $ from "jquery";

@autoinject
@customAttribute("tooltip")
export class TooltipCustomAttribute {
    public value: TooltipOption | undefined;

    constructor(private readonly element: Element,
        private readonly taskQueue: TaskQueue) {
    }

    public attached(): void {
        if (!this.value) {
            return;
        }

        var option = this.value;
        this.taskQueue.queueTask(() => {
            $(this.element).tooltip(option);
        });
    }

    public detached(): void {
        if (!this.value) {
            return;
        }

        $(this.element).tooltip("dispose");
    }
}
