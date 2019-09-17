import { autoinject, bindable, customAttribute } from "aurelia-framework";
import Hammer from "hammerjs";

@autoinject
@customAttribute("draggable")
export class DraggableCustomAttribute {

    private startX = 0;
    private startY = 0;
    private readonly element: any;
    @bindable({ primaryProperty: true }) private selector: string = '';

    constructor(element: Element) {
        this.element = element;
    }

    public attached() {
        const target = this.element.querySelector(this.selector);
        target.addEventListener("mousedown", (event: any) => this.init(event), false);
        const manager = new Hammer.Manager(target);
        manager.add(new Hammer.Pan({ direction: Hammer.DIRECTION_ALL, threshold: 0 }));
        manager.on("pan", (e: HammerInput) => this.pan(e));
    }

    private init(event: HammerInput) {
        const rect = this.element.getBoundingClientRect();
        this.startX = rect.x | rect.left;
        this.startY = rect.y | rect.top;
        if (!this.element.style.top) {
            this.element.style.top = this.startY + "px";
            this.element.style.left = this.startX + "px";
            this.element.style.marginTop = "0";
            this.element.style.position = "absolute";
        }
    }

    private pan(e: HammerInput) {
        this.element.style.top = (this.startY + e.deltaY) + "px";
        this.element.style.left = (this.startX + e.deltaX) + "px";
    }
} 