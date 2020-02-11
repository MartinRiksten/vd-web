export interface IAddonInfo {
    kind: string;
    title: string;
    variant: string;
    icon: string;
}
export declare class VdAddon {
    kind: string;
    addonName: string;
    clickHandler: (event: Event) => void;
    clickTarget: string | undefined;
    title: string;
    variant: string;
    icon: string;
    private types;
    bind(): void;
    getClass(): string;
    onClick(event: Event): void;
}
