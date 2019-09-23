import { CommonDialogType } from './common-dialog';
/**
 * Model for the common dialog
 */
export declare class CommonDialogModel {
    type: CommonDialogType;
    text: string;
    /**
     * Initailizes anew instance of the CommonDialogModel class
     * @param type The type of the dialog
     * @param text The text for the dialog
     */
    constructor(type: CommonDialogType, text: string);
}
