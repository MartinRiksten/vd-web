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
        const formGroup = $(element).closest('.form-group');
        formGroup.addClass('has-error');
        $(element).one('keypress', () => {
            formGroup.removeClass('has-error');
        });
    }
    remove(element, result) {
        if (result.valid) {
            return;
        }
        const formGroup = $(element).closest('.form-group');
        formGroup.removeClass('has-error');
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
