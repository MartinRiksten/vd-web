export interface IAddonInfo {
    kind: string;
    append: boolean;
    title: string;
    variant: string;
    icon: string;
}
export declare class VdAddon {
    kind: string;
    addonName: string;
    append: boolean;
    clickHandler: (event: Event) => void;
    clickTarget: string | undefined;
    title: string;
    variant: string;
    icon: string;
    private types;
    bind(): void;
    getGroupClass(): "input-group-append" | "input-group-prepend";
    getClass(): string;
    onClick(): void;
}
