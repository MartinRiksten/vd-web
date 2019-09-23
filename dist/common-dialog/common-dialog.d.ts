import { DialogCancelableOperationResult, DialogController } from 'aurelia-dialog';
import { CommonDialogModel } from './common-dialog-model';
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
     * @param name The button name
     */
    showButton(name: string): boolean;
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
 * Enumeration of buttons that may appear on a common dialog
 */
export declare enum CommonDialogButton {
    Ok = 0,
    Cancel = 1,
    Yes = 2,
    No = 3
}
