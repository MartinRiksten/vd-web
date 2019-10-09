"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
const aurelia_pal_1 = require("aurelia-pal");
const common_dialogs_1 = require("./common-dialog/common-dialogs");
__export(require("./attributes/clipboard"));
__export(require("./attributes/draggable"));
__export(require("./attributes/popover"));
__export(require("./attributes/tooltip"));
__export(require("./common-dialog/common-dialog"));
__export(require("./common-dialog/common-dialog-helper"));
__export(require("./common-dialog/common-dialog-info"));
__export(require("./common-dialog/common-dialog-model"));
__export(require("./common-dialog/common-dialogs"));
__export(require("./components/bootstrap-select"));
__export(require("./components/vd-bool-icon"));
__export(require("./components/vd-button"));
__export(require("./components/vd-data"));
__export(require("./components/vd-data-link"));
__export(require("./components/vd-filter-input"));
__export(require("./components/vd-route"));
__export(require("./components/vd-td-abbrev"));
__export(require("./components/vd-td-bool-icon"));
__export(require("./components/vd-td-list"));
__export(require("./components/vd-td"));
__export(require("./components/vd-textbox"));
__export(require("./components/vd-th"));
__export(require("./configuration/configuration"));
__export(require("./configuration/configuration-factory"));
__export(require("./converters/bool"));
__export(require("./converters/date"));
__export(require("./converters/encode-uri"));
__export(require("./converters/null"));
__export(require("./converters/uppercase"));
__export(require("./utilities/alert-helper"));
__export(require("./utilities/fetch-base"));
__export(require("./utilities/http-fetch"));
__export(require("./utilities/input-file-reader"));
__export(require("./utilities/list-base"));
__export(require("./utilities/list-helper"));
__export(require("./utilities/service-base"));
__export(require("./utilities/wait"));
__export(require("./validation/bootstrap-renderer"));
__export(require("./validation/popover-renderer"));
function configure(config) {
    const attributes = ['clipboard', 'draggable', 'popover', 'tooltip'];
    const bindings = ['async'];
    const components = [
        'bootstrap-select',
        'vd-bool-icon',
        'vd-button',
        'vd-data',
        'vd-data-link',
        'vd-filter-input',
        'vd-td',
        'vd-td-abbrev',
        'vd-td-bool-icon',
        'vd-textbox',
        'vd-td-list',
        'vd-th',
        'vd-route',
    ];
    const converters = ['bool', 'date', 'encode-uri', 'null', 'uppercase'];
    const basePath = './dist';
    const resources = components
        .map(x => `${basePath}/components/${x}`)
        .concat(attributes.map(x => `${basePath}/attributes/${x}`))
        .concat(bindings.map(x => `${basePath}/bindings/${x}`))
        .concat(converters.map(x => `${basePath}/converters/${x}`))
        .map(x => aurelia_pal_1.PLATFORM.moduleName(x));
    config.globalResources(resources);
    common_dialogs_1.CommonDialogs.configure();
}
exports.configure = configure;
