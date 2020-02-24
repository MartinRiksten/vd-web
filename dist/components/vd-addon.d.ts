export interface IAddonInfo {
    kind: string;
    title: string;
    variant: string;
    icon: string;
    clickable: boolean;
}
export declare class VdAddon {
    kind: string;
    addonName: string | undefined;
    clickHandler: (event: Event) => void;
    clickTarget: string | undefined;
    title: string | undefined;
    variant: string;
    icon: string;
    clickable: boolean | undefined;
    type: string;
    private types;
    bind(): void;
    getClass(): string;
    getClickableClass(): "" | "cursor-pointer";
    onClick(event: Event): void;
}
