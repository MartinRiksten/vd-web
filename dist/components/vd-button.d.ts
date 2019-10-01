export interface IButtonInfo {
    kind: string;
    label: string;
    variant: string;
    icon: string;
}
export declare class VdButton {
    kind: string;
    id: string;
    click: (() => void);
    label: string;
    variant: string;
    icon: string;
    clickTarget: string | undefined;
    private types;
    bind(): void;
    onClick(): void;
}
