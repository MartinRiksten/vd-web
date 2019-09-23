import { CommonDialogButton } from './common-dialog';
/**
 * Common dialog information container
 */
export declare class CommonDialogInfo {
    header: string;
    headerClass: string;
    buttons: CommonDialogButton[];
    symbolClass: string;
    /**
     * Initializes a new instance of the CommonDialogInfo class
     * @param header The header text
     * @param headerClass The additonal header class(es)
     * @param buttons The buttons
     * @param symbolClass The header symbol class
     */
    constructor(header: string, headerClass: string, buttons: CommonDialogButton[], symbolClass: string);
}
