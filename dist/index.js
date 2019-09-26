"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
const aurelia_pal_1 = require("aurelia-pal");
const common_dialogs_1 = require("./common-dialog/common-dialogs");
__export(require("./common-dialog/common-dialog"));
__export(require("./common-dialog/common-dialog-helper"));
__export(require("./common-dialog/common-dialog-info"));
__export(require("./common-dialog/common-dialog-model"));
__export(require("./common-dialog/common-dialogs"));
__export(require("./components/bootstrap-select"));
__export(require("./components/vd-td-list"));
__export(require("./configuration/configuration"));
__export(require("./configuration/configuration-factory"));
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
    const components = [
        'bootstrap-select',
        'vd-bool-icon',
        'vd-button',
        'vd-data',
        'vd-td',
        'vd-td-abbrev',
        'vd-td-list',
        'vd-th',
        'vd-route',
    ];
    const converters = ['bool', 'date', 'encode-uri', 'null', 'uppercase'];
    const resources = components
        .map(x => `./dist/components/${x}`)
        .concat(attributes.map(x => `./dist/attributes/${x}`))
        .concat(converters.map(x => `./dist/converters/${x}`))
        .map(x => aurelia_pal_1.PLATFORM.moduleName(x));
    config.globalResources(resources);
    common_dialogs_1.CommonDialogs.configure();
}
exports.configure = configure;
