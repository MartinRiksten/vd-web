export interface IButtonInfo {
    kind: string;
    displayName: string;
    variant: string;
    icon: string;
}
export declare class VdButton {
    static DefaultClass: string;
    kind: string;
    buttonId: string;
    clickHandler: (event: Event) => void;
    displayName: string;
    variant: string;
    icon: string;
    clickTarget: string | undefined;
    buttonIf: boolean;
    buttonClass: string;
    disabled: boolean;
    private types;
    bind(): void;
    getClass(): string;
    onClick(event: Event): void;
}
