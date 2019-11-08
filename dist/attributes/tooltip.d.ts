import { TaskQueue } from 'aurelia-task-queue';
import { TooltipOption } from 'bootstrap';
export declare class TooltipCustomAttribute {
    private readonly element;
    private readonly taskQueue;
    value: TooltipOption;
    constructor(element: Element, taskQueue: TaskQueue);
    attached(): void;
    detached(): void;
}
