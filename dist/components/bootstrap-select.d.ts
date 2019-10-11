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
    options: IBootstrapSelectOption[];
    selected: string;
    displayName: string;
    picker: Element;
    attached(): void;
    optionsChanged(): void;
    selectedChanged(): void;
}
