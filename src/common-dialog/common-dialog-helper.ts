﻿import { DialogCancelResult, DialogOpenResult, DialogService } from 'aurelia-dialog';
import { autoinject, LogManager } from 'aurelia-framework';

import { CommonDialog, CommonDialogType } from './common-dialog';
import { CommonDialogModel } from './common-dialog-model';

/**
 * Helper class for common dialogs.
 */
@autoinject
export class CommonDialogHelper {

  public static message = 'Er is een onverwachte fout opgetreden.';

  /**
   * Initializes a new instance of the CommonDialogs class
   * @param dialogService The injected dialog service
   */
  constructor(private readonly dialogService: DialogService) {}

  /**
   * Shows a dialog with a yes/no question
   * @param question The question for the user
   */
  public async confirm(question: string, cancellable: boolean): Promise<DialogOpenResult | DialogCancelResult> {
    const model = cancellable
      ? new CommonDialogModel(CommonDialogType.ConfirmationCancel, question)
      : new CommonDialogModel(CommonDialogType.Confirmation, question);
    const result = await this.dialogService.open({ viewModel: CommonDialog, model });
    return result;
  }

  /**
   * Shows a dialog with an error message
   * @param message The message to show
   */
  public async message(message: string, dialogType: CommonDialogType): Promise<DialogOpenResult> {
    const model = new CommonDialogModel(dialogType, message);
    const result = await this.dialogService.open({ viewModel: CommonDialog, model });
    return result as DialogOpenResult;
  }

  /**
   * Shows a dialog with the unexpected error message
   */
  public async error(error: string): Promise<DialogOpenResult> {
    const result = await this.message(error, CommonDialogType.Error);
    return result;
  }

  /**
   * Shows a dialog with the unexpected error message
   */
  public async unexpectedError(error: string): Promise<DialogOpenResult> {
    LogManager.getLogger('app').info(`Unexpected error: ${error}`);
    const result = await this.message(CommonDialogHelper.message, CommonDialogType.Error);
    return result;
  }
}
