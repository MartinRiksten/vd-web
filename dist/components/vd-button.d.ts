export interface IButtonInfo {
    kind: string;
    displayName: string;
    variant: string;
    icon: string;
}
export declare class VdButton {
    kind: string;
    buttonId: string;
    clickHandler: (event: Event) => void;
    displayName: string;
    variant: string;
    icon: string;
    clickTarget: string | undefined;
    buttonIf: boolean;
    buttonClass: string;
    private types;
    bind(): void;
    getClass(): string;
    onClick(): void;
}
