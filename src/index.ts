import { FrameworkConfiguration } from 'aurelia-framework';
import { PLATFORM } from 'aurelia-pal';
import { CommonDialogs } from './common-dialog/common-dialogs';
import { Config } from './configuration/config';

export * from './attributes/clipboard';
export * from './attributes/class-delay';
export * from './attributes/collapse';
export * from './attributes/draggable';
export * from './attributes/popover';
export * from './attributes/tooltip';
export * from './bindings/async';
export * from './common-dialog/common-dialog';
export * from './common-dialog/common-dialog-helper';
export * from './common-dialog/common-dialog-info';
export * from './common-dialog/common-dialog-model';
export * from './common-dialog/common-dialogs';
export * from './components/bootstrap-select';
export * from './components/vd-bool-icon';
export * from './components/vd-button';
export * from './components/vd-addon';
export * from './components/vd-filter-input';
export * from './components/vd-form-checkbox';
export * from './components/vd-form-data';
export * from './components/vd-form-input';
export * from './components/vd-form-link';
export * from './components/vd-form-select';
export * from './components/vd-form-textbox';
export * from './components/vd-route';
export * from './components/vd-td-abbrev';
export * from './components/vd-td-bool-icon';
export * from './components/vd-td-checkbox';
export * from './components/vd-td-list';
export * from './components/vd-td-progress';
export * from './components/vd-td';
export * from './components/vd-th';
export * from './configuration/configuration';
export * from './configuration/configuration-factory';
export * from './converters/bool';
export * from './converters/date';
export * from './converters/encode-uri';
export * from './converters/null';
export * from './converters/uppercase';
export * from './utilities/alert-helper';
export * from './utilities/busy';
export * from './utilities/fetch-base';
export * from './utilities/http-fetch';
export * from './utilities/input-file-reader';
export * from './utilities/list-base';
export * from './utilities/list-helper';
export * from './utilities/service-base';
export * from './utilities/wait';
export * from './validation/bootstrap-renderer';
export * from './validation/popover-renderer';

export function configure(config: FrameworkConfiguration) {
  const attributes = ['clipboard', 'class-delay', 'collapse', 'draggable', 'popover', 'tooltip'];
  const bindings = ['async'];
  const components = [
    'bootstrap-select',
    'vd-bool-icon',
    'vd-button',
    "vd-addon",
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
    'vd-td-list',
    'vd-td-progress',
    'vd-th',
    'vd-route',
  ];
  const converters = ['bool', 'date', 'date-time', 'encode-uri', 'null', 'uppercase'];

  const basePath = './dist';
  const resources = components
    .map(x => `${basePath}/components/${x}`)
    .concat(attributes.map(x => `${basePath}/attributes/${x}`))
    .concat(bindings.map(x => `${basePath}/bindings/${x}`))
    .concat(converters.map(x => `${basePath}/converters/${x}`))
    .map(x => PLATFORM.moduleName(x));
  config.globalResources(resources);

  CommonDialogs.configure();
  Config.configure();
}
