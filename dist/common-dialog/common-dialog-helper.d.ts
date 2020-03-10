import { DialogCancelResult, DialogOpenResult, DialogService } from 'aurelia-dialog';
import { CommonDialogType } from './common-dialog';
/**
 * Helper class for common dialogs.
 */
export declare class CommonDialogHelper {
    private readonly dialogService;
    /**
     * Initializes a new instance of the CommonDialogs class
     * @param dialogService The injected dialog service
     */
    constructor(dialogService: DialogService);
    /**
     * Shows a dialog with a yes/no question
     * @param question The question for the user
     */
    confirm(question: string, cancellable: boolean): Promise<DialogOpenResult | DialogCancelResult>;
    /**
     * Shows a dialog with an error message
     * @param message The message to show
     */
    message(message: string, dialogType: CommonDialogType): Promise<DialogOpenResult>;
    /**
     * Shows a dialog with the unexpected error message
     */
    error(error: string): Promise<DialogOpenResult>;
    /**
     * Shows a dialog with the unexpected error message
     */
    unexpectedError(error: string): Promise<DialogOpenResult>;
}
