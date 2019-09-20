import { RenderInstruction, ValidationRenderer } from "aurelia-validation";
export declare class PopoverRenderer implements ValidationRenderer {
    findById: boolean;
    focusFirst: boolean;
    dashedId: boolean;
    render(instruction: RenderInstruction): void;
    private findElementById;
}
