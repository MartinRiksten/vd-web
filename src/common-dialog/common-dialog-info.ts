import { CommonDialogButton } from './common-dialog';

/**
 * Common dialog information container
 */
export class CommonDialogInfo {
  /**
   * Initializes a new instance of the CommonDialogInfo class
   * @param header The header text
   * @param headerClass The additonal header class(es)
   * @param buttons The buttons
   * @param symbolClass The header symbol class
   */
  constructor(
    public header: string,
    public headerClass: string,
    public buttons: CommonDialogButton[] = [],
    public symbolClass: string,
  ) {}
}
