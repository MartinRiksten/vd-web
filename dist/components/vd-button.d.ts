export interface IButtonInfo {
    kind: string;
    label: string;
    variant: string;
    icon: string;
}
export declare class VdButton {
    kind: string;
    buttonId: string;
    clickHandler: (event: Event) => void;
    label: string;
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
