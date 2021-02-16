import { TaskQueue } from 'aurelia-task-queue';
import { TooltipOption } from 'bootstrap';
export declare class TooltipCustomAttribute {
    private readonly element;
    private readonly taskQueue;
    private valueValue;
    value: TooltipOption;
    constructor(element: Element, taskQueue: TaskQueue);
    attached(): void;
    detached(): void;
    valueChanged(): void;
    private finalize;
    private initialize;
}
