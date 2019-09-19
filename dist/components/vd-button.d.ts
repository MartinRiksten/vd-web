export interface IButtonInfo {
    id: string;
    label: string;
    variant: string;
    icon: string;
}
export declare class VdButton {
    buttonId: string | undefined;
    info: IButtonInfo | undefined;
    click: (() => void) | undefined;
    private types;
    bind(): void;
}
