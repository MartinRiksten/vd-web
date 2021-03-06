"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_pal_1 = require("aurelia-pal");
var common_dialogs_1 = require("./common-dialog/common-dialogs");
var config_1 = require("./configuration/config");
__export(require("./attributes/clipboard"));
__export(require("./attributes/class-delay"));
__export(require("./attributes/collapse"));
__export(require("./attributes/drag-with"));
__export(require("./attributes/popover"));
__export(require("./attributes/tooltip"));
__export(require("./bindings/async"));
__export(require("./common-dialog/common-dialog"));
__export(require("./common-dialog/common-dialog-helper"));
__export(require("./common-dialog/common-dialog-info"));
__export(require("./common-dialog/common-dialog-model"));
__export(require("./common-dialog/common-dialogs"));
__export(require("./components/bootstrap-select"));
__export(require("./components/toast"));
__export(require("./components/vd-bool-icon"));
__export(require("./components/vd-button"));
__export(require("./components/vd-addon"));
__export(require("./components/vd-filter-input"));
__export(require("./components/vd-form-checkbox"));
__export(require("./components/vd-form-data"));
__export(require("./components/vd-form-input"));
__export(require("./components/vd-form-link"));
__export(require("./components/vd-form-select"));
__export(require("./components/vd-form-textbox"));
__export(require("./components/vd-route"));
__export(require("./components/vd-td-abbrev"));
__export(require("./components/vd-td-bool-icon"));
__export(require("./components/vd-td-checkbox"));
__export(require("./components/vd-td-link"));
__export(require("./components/vd-td-list"));
__export(require("./components/vd-td-progress"));
__export(require("./components/vd-td"));
__export(require("./components/vd-th"));
__export(require("./configuration/configuration"));
__export(require("./configuration/configuration-factory"));
__export(require("./converters/bool"));
__export(require("./converters/date-input"));
__export(require("./converters/date-time"));
__export(require("./converters/encode-uri"));
__export(require("./converters/locale"));
__export(require("./converters/null"));
__export(require("./converters/uppercase"));
__export(require("./utilities/alert-helper"));
__export(require("./utilities/busy"));
__export(require("./utilities/date-input"));
__export(require("./utilities/fetch-base"));
__export(require("./utilities/http-fetch"));
__export(require("./utilities/input-file-reader"));
__export(require("./utilities/list-base"));
__export(require("./utilities/list-helper"));
__export(require("./utilities/service-base"));
__export(require("./utilities/toast-renderer"));
__export(require("./utilities/toast-service"));
__export(require("./utilities/toast-utilities"));
__export(require("./utilities/wait"));
__export(require("./validation/bootstrap-renderer"));
__export(require("./validation/popover-renderer"));
function configure(config) {
    var attributes = ['clipboard', 'class-delay', 'collapse', 'drag-with', 'popover', 'tooltip'];
    var bindings = ['async'];
    var components = [
        'bootstrap-select',
        'toast',
        'vd-bool-icon',
        'vd-button',
        'vd-addon',
        'vd-filter-input',
        'vd-form-checkbox',
        'vd-form-data',
        'vd-form-link',
        'vd-form-select',
        'vd-form-textbox',
        'vd-td',
        'vd-td-abbrev',
        'vd-td-bool-icon',
        'vd-td-checkbox',
        'vd-td-link',
        'vd-td-list',
        'vd-td-progress',
        'vd-th',
        'vd-route',
    ];
    var converters = ['bool', 'date-input', 'date-time', 'encode-uri', 'locale', 'null', 'uppercase'];
    var basePath = './dist';
    var resources = components
        .map(function (x) { return basePath + "/components/" + x; })
        .concat(attributes.map(function (x) { return basePath + "/attributes/" + x; }))
        .concat(bindings.map(function (x) { return basePath + "/bindings/" + x; }))
        .concat(converters.map(function (x) { return basePath + "/converters/" + x; }))
        .map(function (x) { return aurelia_pal_1.PLATFORM.moduleName(x); });
    config.globalResources(resources);
    common_dialogs_1.CommonDialogs.configure();
    config_1.Config.configure();
}
exports.configure = configure;
