import { TaskQueue } from 'aurelia-framework';
declare global {
    interface JQuery<TElement = HTMLElement> {
        selectpicker: (x?: string, y?: string) => string;
    }
}
export interface IBootstrapSelectOption {
    id: string;
    option: string;
    subtext: string;
}
export declare class BootstrapSelect {
    private readonly taskQueue;
    options: IBootstrapSelectOption[];
    selected: string;
    displayName: string;
    inputId: string;
    width: string;
    virtualScroll: number;
    picker: Element;
    constructor(taskQueue: TaskQueue);
    attached(): void;
    optionsChanged(): void;
    selectedChanged(newValue: string, oldValue: string): void;
}
