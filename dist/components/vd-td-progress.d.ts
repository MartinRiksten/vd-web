import { IFilterable } from "../utilities/list-helper";
import { VdTd } from "./vd-td";
export declare class VdTdProgress extends VdTd {
    value: string;
    instance: IFilterable;
    hideValue: boolean;
    getWidthStyle(value: number): string;
}
