import { CommonDialogButton, CommonDialogType } from './common-dialog';
import { CommonDialogInfo } from './common-dialog-info';
/**
 * Container for common dialog information
 */
export declare class CommonDialogs {
    /**
     * A map containing the dialog information per dialog type
     */
    static types: Map<CommonDialogType, CommonDialogInfo>;
    /**
     * A mapn containing the enumeration button value for each button name
     */
    static buttons: Map<string, CommonDialogButton>;
}
