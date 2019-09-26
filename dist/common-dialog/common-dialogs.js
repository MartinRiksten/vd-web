"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_dialog_1 = require("./common-dialog");
const common_dialog_info_1 = require("./common-dialog-info");
/**
 * Container for common dialog information
 */
class CommonDialogs {
    /**
     * Initailizes the common dialog information container
     */
    static configure() {
        CommonDialogs.types.set(common_dialog_1.CommonDialogType.Information, new common_dialog_info_1.CommonDialogInfo('Informatie', 'alert-info', [common_dialog_1.CommonDialogButton.Ok], 'fas fa-1_5x fa-info-circle'));
        CommonDialogs.types.set(common_dialog_1.CommonDialogType.Confirmation, new common_dialog_info_1.CommonDialogInfo('Bevestiging', 'alert-info', [common_dialog_1.CommonDialogButton.Yes, common_dialog_1.CommonDialogButton.No], 'fas fa-1_5x fa-question-circle'));
        CommonDialogs.types.set(common_dialog_1.CommonDialogType.ConfirmationCancel, new common_dialog_info_1.CommonDialogInfo('Bevestiging', 'alert-info', [common_dialog_1.CommonDialogButton.Yes, common_dialog_1.CommonDialogButton.No, common_dialog_1.CommonDialogButton.Cancel], 'fas fa-1_5x fa-question-circle'));
        CommonDialogs.types.set(common_dialog_1.CommonDialogType.Warning, new common_dialog_info_1.CommonDialogInfo('Waarschuwing', 'alert-warning', [common_dialog_1.CommonDialogButton.Ok], 'fas fa-1_5x fa-exclamation-triangle'));
        CommonDialogs.types.set(common_dialog_1.CommonDialogType.Error, new common_dialog_info_1.CommonDialogInfo('Fout', 'alert-danger', [common_dialog_1.CommonDialogButton.Ok], 'fas fa-1_5x fa-times-circle'));
        CommonDialogs.types.set(common_dialog_1.CommonDialogType.Success, new common_dialog_info_1.CommonDialogInfo('Succes', 'alert-success', [common_dialog_1.CommonDialogButton.Ok], 'fas fa-1_5x fa-check'));
        CommonDialogs.buttons.set('ok', common_dialog_1.CommonDialogButton.Ok);
        CommonDialogs.buttons.set('cancel', common_dialog_1.CommonDialogButton.Cancel);
        CommonDialogs.buttons.set('yes', common_dialog_1.CommonDialogButton.Yes);
        CommonDialogs.buttons.set('no', common_dialog_1.CommonDialogButton.No);
    }
}
exports.CommonDialogs = CommonDialogs;
/**
 * A map containing the dialog information per dialog type
 */
CommonDialogs.types = new Map();
/**
 * A mapn containing the enumeration button value for each button name
 */
CommonDialogs.buttons = new Map();
