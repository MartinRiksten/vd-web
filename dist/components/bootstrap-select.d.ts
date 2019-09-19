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
    options: IBootstrapSelectOption[] | undefined;
    selected: string | undefined;
    displayName: string | undefined;
    picker: Element;
    attached(): void;
    selectedChanged(): void;
}
