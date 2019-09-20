"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
const aurelia_pal_1 = require("aurelia-pal");
__export(require("./attributes/clipboard"));
__export(require("./attributes/draggable"));
__export(require("./attributes/popover"));
__export(require("./attributes/tooltip"));
__export(require("./components/bootstrap-select"));
__export(require("./components/vd-bool-icon"));
__export(require("./components/vd-button"));
__export(require("./components/vd-data"));
__export(require("./components/vd-route"));
__export(require("./components/vd-td"));
__export(require("./components/vd-td-abbrev"));
__export(require("./components/vd-td-list"));
__export(require("./components/vd-th"));
function configure(config) {
    const attributes = [
        "clipboard",
        "draggable",
        "popover",
        "tooltip"
    ];
    const components = [
        "bootstrap-select",
        "vd-bool-icon",
        "vd-button",
        "vd-data",
        "vd-td",
        "vd-td-abbrev",
        "vd-td-list",
        "vd-th",
        "vd-route"
    ];
    const converters = [
        "bool",
        "date",
        "encode-uri",
        "null",
        "uppercase"
    ];
    const resources = components.map(x => `./dist/components/${x}`)
        .concat(attributes.map(x => `./dist/attributes/${x}`))
        .concat(converters.map(x => `./dist/converters/${x}`))
        .map(x => aurelia_pal_1.PLATFORM.moduleName(x));
    config.globalResources(resources);
}
exports.configure = configure;
