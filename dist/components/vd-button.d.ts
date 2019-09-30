export interface IButtonInfo {
    id: string;
    label: string;
    variant: string;
    icon: string;
}
export declare class VdButton {
    buttonId: string;
    click: (() => void);
    label: string;
    variant: string;
    icon: string;
    private info;
    private types;
    bind(): void;
}
