import { DialogCancelableOperationResult, DialogController } from 'aurelia-dialog';
import { autoinject } from 'aurelia-framework';
import { CommonDialogInfo } from './common-dialog-info';
import { CommonDialogModel } from './common-dialog-model';
import { CommonDialogs } from './common-dialogs';

/**
 * Controller for the common-dialog component
 */
@autoinject
export class CommonDialog {
  
  /**
   * The model for dialog
   */
  private model!: CommonDialogModel;

  /**
   * The information about the dialog appearance
   */
  private info!: CommonDialogInfo;

  /**
   * Initializes a new instance of the CommonDialog class
   * @param controller The injected dialog controller
   */
  constructor(public controller: DialogController) {
  }

  /**
   *
   * Called by the aurelia framework
   * @param model
   */
  public activate(model: CommonDialogModel) {
    this.model = model;
    const info = CommonDialogs.types.get(this.model.type);
    if (!!info) {
      this.info = info;
    }
  }

  /**
   * Indicates wheter the given button must be shown
   * @param name The button name
   */
  public showButton(name: string): boolean {
    const button = CommonDialogs.buttons.get(name);
    const result = (!!button || button === 0) && this.info.buttons.indexOf(button) >= 0;
    return result;
  }

  /**
   * Handles the successful closing of the modal window by pressing the button ok
   */
  public async ok(): Promise<DialogCancelableOperationResult> {
    const result = await this.controller.ok(true);
    return result;
  }

  /**
   * Handles the unsuccesful closing of the modal window by pressing the button cancel
   */
  public async cancel(): Promise<DialogCancelableOperationResult> {
    const result = await this.controller.cancel(false);
    return result;
  }

  /**
   * Handles the successful closing of the modal window by pressing the button yes
   */
  public async yes(): Promise<DialogCancelableOperationResult> {
    const result = await this.controller.ok(true);
    return result;
  }

  /**
   * Handles the unsuccesful closing of the modal window by pressing the button no
   */
  public async no(): Promise<DialogCancelableOperationResult> {
    const result = await this.controller.ok(false);
    return result;
  }
}

/**
 * Enumeration of common dialog types
 */
export enum CommonDialogType {
  Information,
  Confirmation,
  ConfirmationCancel,
  Warning,
  Error,
  Success,
}

/**
 * Enumeration of buttons that may appear on a common dialog
 */
export enum CommonDialogButton {
  Ok,
  Cancel,
  Yes,
  No,
}
