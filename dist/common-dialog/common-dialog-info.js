"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Common dialog information container
 */
var CommonDialogInfo = /** @class */ (function () {
    /**
     * Initializes a new instance of the CommonDialogInfo class
     * @param header The header text
     * @param headerClass The additonal header class(es)
     * @param buttons The buttons
     * @param symbolClass The header symbol class
     */
    function CommonDialogInfo(header, headerClass, buttons, symbolClass) {
        if (buttons === void 0) { buttons = []; }
        this.header = header;
        this.headerClass = headerClass;
        this.buttons = buttons;
        this.symbolClass = symbolClass;
    }
    return CommonDialogInfo;
}());
exports.CommonDialogInfo = CommonDialogInfo;
