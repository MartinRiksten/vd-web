"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Model for the common dialog
 */
class CommonDialogModel {
    /**
     * Initailizes anew instance of the CommonDialogModel class
     * @param type The type of the dialog
     * @param text The text for the dialog
     */
    constructor(type, text) {
        this.type = type;
        this.text = text;
    }
}
exports.CommonDialogModel = CommonDialogModel;
