import { RenderInstruction, ValidationRenderer } from 'aurelia-validation';
export declare class PopoverRenderer implements ValidationRenderer {
    findById: boolean;
    focusFirst: boolean;
    dashedId: boolean;
    formatMessage: (message: string, popover: JQuery<Element>) => string;
    render(instruction: RenderInstruction): void;
    private findFromElement;
    private findElementById;
}
