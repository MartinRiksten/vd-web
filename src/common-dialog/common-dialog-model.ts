import { CommonDialogType } from "./common-dialog";

/**
 * Model for the common dialog
 */
export class CommonDialogModel {
    /**
     * Initailizes anew instance of the CommonDialogModel class
     * @param type The type of the dialog
     * @param text The text for the dialog
     */
    constructor(public type: CommonDialogType,
        public text: string) { }
}