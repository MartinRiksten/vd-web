import { RenderInstruction, ValidationRenderer } from "aurelia-validation";
export declare class BootstrapRenderer implements ValidationRenderer {
    findById: boolean;
    focusFirst: boolean;
    dashedId: boolean;
    render(instruction: RenderInstruction): void;
    private add;
    private remove;
    private findElementById;
}
