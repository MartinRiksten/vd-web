export interface IButtonInfo {
    kind: string;
    label: string;
    variant: string;
    icon: string;
}
export declare class VdButton {
    kind: string;
    buttonId: string;
    clickHandler: () => void;
    label: string;
    variant: string;
    icon: string;
    clickTarget: string | undefined;
    buttonIf: boolean;
    buttonClass: string;
    private types;
    bind(): void;
    getButtonClass(): string;
    onClick(): void;
}
