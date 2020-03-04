"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
function getViewModel(instruction, compositionEngine) {
    if (typeof instruction.viewModel === 'function') {
        instruction.viewModel = aurelia_framework_1.Origin.get(instruction.viewModel).moduleId;
    }
    else if (typeof instruction.viewModel === 'string') {
        return compositionEngine.ensureViewModel(instruction);
    }
    return Promise.resolve(instruction);
}
exports.getViewModel = getViewModel;
function invokeLifecycle(instance, name, model) {
    if (typeof instance[name] !== 'function') {
        return Promise.resolve(true);
    }
    var result = instance[name](model);
    if (result instanceof Promise) {
        return result;
    }
    if (result !== null && result !== undefined) {
        return Promise.resolve(result);
    }
    return Promise.resolve(true);
}
exports.invokeLifecycle = invokeLifecycle;
