import { CommonDialogButton, CommonDialogType } from './common-dialog';
import { CommonDialogInfo } from './common-dialog-info';

/**
 * Container for common dialog information
 */
export class CommonDialogs {
  /**
   * A map containing the dialog information per dialog type
   */
  public static types = new Map<CommonDialogType, CommonDialogInfo>();

  /**
   * A mapn containing the enumeration button value for each button name
   */
  public static buttons = new Map<string, CommonDialogButton>();

  /**
   * Initailizes the common dialog information container
   */
  public static configure(): void {
    CommonDialogs.types.set(
      CommonDialogType.Information,
      new CommonDialogInfo('Informatie', 'alert-info', [CommonDialogButton.Ok], 'fas fa-1_5x fa-info-circle'),
    );
    CommonDialogs.types.set(
      CommonDialogType.Confirmation,
      new CommonDialogInfo(
        'Bevestiging',
        'alert-info',
        [CommonDialogButton.Yes, CommonDialogButton.No],
        'fas fa-1_5x fa-question-circle',
      ),
    );
    CommonDialogs.types.set(
      CommonDialogType.ConfirmationCancel,
      new CommonDialogInfo(
        'Bevestiging',
        'alert-info',
        [CommonDialogButton.Yes, CommonDialogButton.No, CommonDialogButton.Cancel],
        'fas fa-1_5x fa-question-circle',
      ),
    );
    CommonDialogs.types.set(
      CommonDialogType.Warning,
      new CommonDialogInfo(
        'Waarschuwing',
        'alert-warning',
        [CommonDialogButton.Ok],
        'fas fa-1_5x fa-exclamation-triangle',
      ),
    );
    CommonDialogs.types.set(
      CommonDialogType.Error,
      new CommonDialogInfo('Fout', 'alert-danger', [CommonDialogButton.Ok], 'fas fa-1_5x fa-times-circle'),
    );
    CommonDialogs.types.set(
      CommonDialogType.Success,
      new CommonDialogInfo('Succes', 'alert-success', [CommonDialogButton.Ok], 'fas fa-1_5x fa-check'),
    );

    CommonDialogs.buttons.set('ok', CommonDialogButton.Ok);
    CommonDialogs.buttons.set('cancel', CommonDialogButton.Cancel);
    CommonDialogs.buttons.set('yes', CommonDialogButton.Yes);
    CommonDialogs.buttons.set('no', CommonDialogButton.No);
  }
}
