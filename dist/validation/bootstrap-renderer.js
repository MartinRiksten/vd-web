"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BootstrapRenderer {
    constructor() {
        this.findById = true;
        this.focusFirst = false;
        this.dashedId = true;
    }
    render(instruction) {
        for (let { result, elements } of instruction.unrender) {
            if (this.findById && elements.length === 0 && !!result.propertyName) {
                elements = this.findElementById(result.propertyName.toString());
            }
            for (const element of elements) {
                this.remove(element, result);
            }
        }
        for (let { result, elements } of instruction.render) {
            if (this.findById && elements.length === 0 && !!result.propertyName) {
                elements = this.findElementById(result.propertyName.toString());
            }
            let first = true;
            for (const element of elements) {
                this.add(element, result);
                if (this.focusFirst && first && !result.valid) {
                    first = false;
                    $(element).focus();
                }
            }
        }
    }
    add(element, result) {
        if (result.valid) {
            return;
        }
        const $element = $(element);
        $element.addClass('is-invalid');
        $element.one('keypress', () => {
            $element.removeClass('is-invalid');
        });
    }
    remove(element, result) {
        if (result.valid) {
            return;
        }
        const $element = $(element);
        $element.removeClass('is-invalid');
    }
    findElementById(id) {
        const name = this.dashedId
            ? id.replace(/^[a-z]|[A-Z]/g, (s, i) => (i === 0 ? s.toLowerCase() : `-${s.toLowerCase()}`))
            : id.toString().toLowerCase();
        const selector = `#${name}`;
        return $(selector).get();
    }
}
exports.BootstrapRenderer = BootstrapRenderer;
