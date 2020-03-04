"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
var ToastRenderer = /** @class */ (function () {
    function ToastRenderer() {
        this.toastContainers = new Map();
    }
    ToastRenderer.prototype.render = function (controller, options) {
        // this._mixinControllerMethods(controller);
        var viewSlot = this.createToastContainer(options);
        controller.view.bind(options);
        viewSlot.add(controller.view);
    };
    ToastRenderer.prototype.createToastContainer = function (options) {
        var position = options.position;
        if (this.toastContainers.has(position)) {
            return this.toastContainers.get(position);
        }
        var containerElement = document.createElement('div');
        containerElement.id = 'toast-container';
        containerElement.classList.add(options.position);
        containerElement.setAttribute('aria-live', 'polite');
        containerElement.setAttribute('role', 'alert');
        document.body.insertBefore(containerElement, document.body.firstChild);
        var toastContainerViewSlot = new aurelia_framework_1.ViewSlot(containerElement, true);
        this.toastContainers.set(position, toastContainerViewSlot);
        return toastContainerViewSlot;
    };
    return ToastRenderer;
}());
exports.ToastRenderer = ToastRenderer;
