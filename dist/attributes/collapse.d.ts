import { TaskQueue } from 'aurelia-task-queue';
export declare class CollapseCustomAttribute {
    private readonly element;
    private readonly taskQueue;
    value: boolean;
    constructor(element: Element, taskQueue: TaskQueue);
    attached(): void;
    detached(): void;
    valueChanged(): void;
}
