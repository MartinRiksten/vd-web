import { VdTd } from './vd-td';
export declare class VdTdLink extends VdTd<string> {
    static defaultIcon: string;
    showIcon: boolean;
    href: string;
    icon: string;
    clickTarget: string | undefined;
    clickHandler: (event: Event) => void;
    target: string;
    onClick(event: Event): void;
}
