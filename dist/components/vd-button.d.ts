export interface IButtonInfo {
    kind: string;
    label: string;
    variant: string;
    icon: string;
}
export declare class VdButton {
    kind: string;
    buttonId: string;
    click: () => void;
    label: string;
    variant: string;
    icon: string;
    clickTarget: string | undefined;
    if: boolean;
    private types;
    bind(): void;
    onClick(): void;
}
