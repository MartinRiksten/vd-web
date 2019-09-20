import { DialogCancelableOperationResult, DialogController } from "aurelia-dialog";
/**
 * Controller for the common-dialog component
 */
export declare class CommonDialog {
    controller: DialogController;
    /**
     * The model for dialog
     */
    private model;
    /**
     * The information about the dialog appearance
     */
    private info;
    /**
     * Initializes a new instance of the CommonDialog class
     * @param controller The injected dialog controller
     */
    constructor(controller: DialogController);
    /**
     *
     * Called by the aurelia framework
     * @param model
     */
    activate(model: CommonDialogModel): void;
    /**
     * Indicates wheter the given button must be shown
     * @param button The button name
     */
    showButton(button: string): boolean;
    /**
     * Handles the successful closing of the modal window by pressing the button ok
     */
    ok(): Promise<DialogCancelableOperationResult>;
    /**
     * Handles the unsuccesful closing of the modal window by pressing the button cancel
     */
    cancel(): Promise<DialogCancelableOperationResult>;
    /**
     * Handles the successful closing of the modal window by pressing the button yes
     */
    yes(): Promise<DialogCancelableOperationResult>;
    /**
     * Handles the unsuccesful closing of the modal window by pressing the button no
     */
    no(): Promise<DialogCancelableOperationResult>;
}
/**
 * Enumeration of common dialog types
 */
export declare enum CommonDialogType {
    Information = 0,
    Confirmation = 1,
    ConfirmationCancel = 2,
    Warning = 3,
    Error = 4,
    Success = 5
}
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
/**
 * Enumeration of buttons that may appear on a common dialog
 */
export declare enum CommonDialogButton {
    Ok = 0,
    Cancel = 1,
    Yes = 2,
    No = 3
}
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
