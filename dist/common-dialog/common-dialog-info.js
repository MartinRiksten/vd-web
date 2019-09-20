"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Common dialog information container
 */
class CommonDialogInfo {
    /**
     * Initializes a new instance of the CommonDialogInfo class
     * @param header The header text
     * @param headerClass The additonal header class(es)
     * @param buttons The buttons
     * @param symbolClass The header symbol class
     */
    constructor(header, headerClass, buttons = [], symbolClass) {
        this.header = header;
        this.headerClass = headerClass;
        this.buttons = buttons;
        this.symbolClass = symbolClass;
    }
}
exports.CommonDialogInfo = CommonDialogInfo;
