var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define("attributes/clipboard", ["require", "exports", "aurelia-framework"], function (require, exports, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let ClipboardCustomAttribute = class ClipboardCustomAttribute {
        constructor(element) {
            this.element = element;
        }
        attached() {
            // Loop over any child elements and disable the click events. For example if you put this on a button,
            // and then put a span / image icon it breaks the click event.
            this.element.childNodes.forEach(e => {
                const style = e.style;
                if (style) {
                    style.pointerEvents = 'none';
                }
            });
            this.element.addEventListener('click', this.handleClick);
        }
        detached() {
            this.element.removeEventListener('click', this.handleClick);
        }
        handleClick($event) {
            const text = $event.srcElement.getAttribute('text');
            if (document.queryCommandSupported('copy') && text) {
                const textarea = document.createElement('textarea');
                textarea.style.display = 'none !important;';
                textarea.value = text;
                document.body.appendChild(textarea);
                textarea.select();
                document.execCommand('Copy');
                document.body.removeChild(textarea);
            }
        }
        valueChanged(newValue) {
            this.element.setAttribute('text', newValue);
        }
    };
    ClipboardCustomAttribute = __decorate([
        aurelia_framework_1.autoinject,
        aurelia_framework_1.customAttribute('clipboard')
    ], ClipboardCustomAttribute);
    exports.ClipboardCustomAttribute = ClipboardCustomAttribute;
});
define("attributes/draggable", ["require", "exports", "aurelia-framework", "hammerjs"], function (require, exports, aurelia_framework_2, hammerjs_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    hammerjs_1 = __importDefault(hammerjs_1);
    let DraggableCustomAttribute = class DraggableCustomAttribute {
        constructor(element) {
            this.startX = 0;
            this.startY = 0;
            this.selector = '';
            this.element = element;
        }
        attached() {
            const target = this.element.querySelector(this.selector);
            target.addEventListener('mousedown', (event) => this.init(event), false);
            const manager = new hammerjs_1.default.Manager(target);
            manager.add(new hammerjs_1.default.Pan({ direction: hammerjs_1.default.DIRECTION_ALL, threshold: 0 }));
            manager.on('pan', (e) => this.pan(e));
        }
        init(event) {
            const rect = this.element.getBoundingClientRect();
            /* tslint:disable */
            this.startX = rect.x | rect.left;
            this.startY = rect.y | rect.top;
            /* tslint:enable */
            if (!this.element.style.top) {
                this.element.style.top = this.startY + 'px';
                this.element.style.left = this.startX + 'px';
                this.element.style.marginTop = '0';
                this.element.style.position = 'absolute';
            }
        }
        pan(e) {
            this.element.style.top = this.startY + e.deltaY + 'px';
            this.element.style.left = this.startX + e.deltaX + 'px';
        }
    };
    __decorate([
        aurelia_framework_2.bindable({ primaryProperty: true })
    ], DraggableCustomAttribute.prototype, "selector", void 0);
    DraggableCustomAttribute = __decorate([
        aurelia_framework_2.autoinject,
        aurelia_framework_2.customAttribute('draggable')
    ], DraggableCustomAttribute);
    exports.DraggableCustomAttribute = DraggableCustomAttribute;
});
define("attributes/popover", ["require", "exports", "aurelia-framework", "jquery"], function (require, exports, aurelia_framework_3, jquery_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    jquery_1 = __importDefault(jquery_1);
    let PopoverCustomAttribute = class PopoverCustomAttribute {
        constructor(element) {
            this.element = element;
        }
        attached() {
            if (!this.value) {
                return;
            }
            jquery_1.default(this.element).popover(this.value);
        }
        detached() {
            if (!this.value) {
                return;
            }
            jquery_1.default(this.element).popover('dispose');
        }
    };
    PopoverCustomAttribute = __decorate([
        aurelia_framework_3.autoinject,
        aurelia_framework_3.customAttribute('popover')
    ], PopoverCustomAttribute);
    exports.PopoverCustomAttribute = PopoverCustomAttribute;
});
define("attributes/tooltip", ["require", "exports", "aurelia-framework", "jquery"], function (require, exports, aurelia_framework_4, jquery_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    jquery_2 = __importDefault(jquery_2);
    let TooltipCustomAttribute = class TooltipCustomAttribute {
        constructor(element, taskQueue) {
            this.element = element;
            this.taskQueue = taskQueue;
        }
        attached() {
            if (!this.value) {
                return;
            }
            const option = this.value;
            this.taskQueue.queueTask(() => {
                jquery_2.default(this.element).tooltip(option);
            });
        }
        detached() {
            if (!this.value) {
                return;
            }
            jquery_2.default(this.element).tooltip('dispose');
        }
    };
    TooltipCustomAttribute = __decorate([
        aurelia_framework_4.autoinject,
        aurelia_framework_4.customAttribute('tooltip')
    ], TooltipCustomAttribute);
    exports.TooltipCustomAttribute = TooltipCustomAttribute;
});
define("components/bootstrap-select", ["require", "exports", "aurelia-framework"], function (require, exports, aurelia_framework_5) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let BootstrapSelect = class BootstrapSelect {
        constructor() {
            this.picker = new Element;
        }
        attached() {
            if (!!this.displayName) {
                $(this.picker).data("live-search-placeholder", this.displayName);
            }
            $(this.picker).selectpicker();
            $(this.picker).selectpicker("val", this.selected);
            $(this.picker).on("changed.bs.select", () => {
                this.selected = $(this.picker).selectpicker("val");
            });
        }
        selectedChanged() {
            $(this.picker).selectpicker("val", this.selected);
        }
    };
    __decorate([
        aurelia_framework_5.bindable
    ], BootstrapSelect.prototype, "options", void 0);
    __decorate([
        aurelia_framework_5.bindable
    ], BootstrapSelect.prototype, "selected", void 0);
    __decorate([
        aurelia_framework_5.bindable
    ], BootstrapSelect.prototype, "displayName", void 0);
    BootstrapSelect = __decorate([
        aurelia_framework_5.autoinject
    ], BootstrapSelect);
    exports.BootstrapSelect = BootstrapSelect;
});
define("components/vd-bool-icon", ["require", "exports", "aurelia-framework"], function (require, exports, aurelia_framework_6) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let VdBoolIcon = class VdBoolIcon {
        constructor() {
            this.value = false;
        }
        getIcon(value) {
            return value ? "fa-check text-success" : "fa-times text-danger";
        }
    };
    __decorate([
        aurelia_framework_6.bindable
    ], VdBoolIcon.prototype, "value", void 0);
    VdBoolIcon = __decorate([
        aurelia_framework_6.autoinject
    ], VdBoolIcon);
    exports.VdBoolIcon = VdBoolIcon;
});
define("components/vd-button", ["require", "exports", "aurelia-framework"], function (require, exports, aurelia_framework_7) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let VdButton = class VdButton {
        constructor() {
            this.types = [
                { id: "ok", label: "OK", variant: "btn-primary", icon: "fas fa-check" },
                { id: "cancel", label: "Annuleren", variant: "btn-light", icon: "fas fa-times" },
                { id: "yes", label: "Ja", variant: "btn-primary", icon: "fas fa-check" },
                { id: "no", label: "Nee", variant: "btn-light", icon: "fas fa-times" }
            ];
        }
        bind() {
            this.info = !this.info ? this.types.find(x => x.id === this.buttonId) : this.info;
        }
    };
    __decorate([
        aurelia_framework_7.bindable
    ], VdButton.prototype, "buttonId", void 0);
    __decorate([
        aurelia_framework_7.bindable
    ], VdButton.prototype, "info", void 0);
    __decorate([
        aurelia_framework_7.bindable
    ], VdButton.prototype, "click", void 0);
    VdButton = __decorate([
        aurelia_framework_7.autoinject
    ], VdButton);
    exports.VdButton = VdButton;
});
define("components/vd-data", ["require", "exports", "aurelia-framework"], function (require, exports, aurelia_framework_8) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let VdData = class VdData {
        constructor() {
            this.labelClass = "col-6";
            this.dataClass = "col-6";
        }
    };
    __decorate([
        aurelia_framework_8.bindable
    ], VdData.prototype, "labelClass", void 0);
    __decorate([
        aurelia_framework_8.bindable
    ], VdData.prototype, "dataClass", void 0);
    __decorate([
        aurelia_framework_8.bindable
    ], VdData.prototype, "label", void 0);
    __decorate([
        aurelia_framework_8.bindable
    ], VdData.prototype, "value", void 0);
    VdData = __decorate([
        aurelia_framework_8.autoinject
    ], VdData);
    exports.VdData = VdData;
});
define("components/vd-route", ["require", "exports", "aurelia-framework"], function (require, exports, aurelia_framework_9) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let VdRoute = class VdRoute {
        bind() {
            this.params = { id: this.key };
        }
    };
    __decorate([
        aurelia_framework_9.bindable
    ], VdRoute.prototype, "route", void 0);
    __decorate([
        aurelia_framework_9.bindable
    ], VdRoute.prototype, "key", void 0);
    VdRoute = __decorate([
        aurelia_framework_9.autoinject
    ], VdRoute);
    exports.VdRoute = VdRoute;
});
define("components/vd-td", ["require", "exports", "aurelia-framework"], function (require, exports, aurelia_framework_10) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let VdTd = class VdTd {
    };
    __decorate([
        aurelia_framework_10.bindable
    ], VdTd.prototype, "value", void 0);
    VdTd = __decorate([
        aurelia_framework_10.autoinject
    ], VdTd);
    exports.VdTd = VdTd;
});
define("components/vd-td-abbrev", ["require", "exports", "aurelia-framework"], function (require, exports, aurelia_framework_11) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let VdTdAbbrev = class VdTdAbbrev {
        constructor() {
            this.value = "";
            this.cutoff = 25;
            this.abbrev = false;
        }
        bind() {
            this.abbrev = !!this.value && this.value.length > this.cutoff;
            this.short = this.abbrev ? this.value.substr(0, this.cutoff) : this.value;
            this.popoverOption = !this.abbrev
                ? void 0
                : {
                    container: "body",
                    content: () => this.value,
                    html: false,
                    placement: "right",
                    trigger: "hover"
                };
        }
    };
    __decorate([
        aurelia_framework_11.bindable
    ], VdTdAbbrev.prototype, "value", void 0);
    __decorate([
        aurelia_framework_11.bindable
    ], VdTdAbbrev.prototype, "cutoff", void 0);
    VdTdAbbrev = __decorate([
        aurelia_framework_11.autoinject
    ], VdTdAbbrev);
    exports.VdTdAbbrev = VdTdAbbrev;
});
define("components/vd-td-list", ["require", "exports", "aurelia-framework"], function (require, exports, aurelia_framework_12) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let VdTdList = class VdTdList {
        getToggle(item) {
            return !item.popoverOption ? void 0 : "popover";
        }
    };
    __decorate([
        aurelia_framework_12.bindable
    ], VdTdList.prototype, "items", void 0);
    VdTdList = __decorate([
        aurelia_framework_12.autoinject
    ], VdTdList);
    exports.VdTdList = VdTdList;
});
define("components/list-helper", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Helper class for paing and sorting.
     */
    class ListHelper {
        /**
         * Sorts the given array
         * @param array The array to sort
         * @param order The sorting information
         */
        sort(array, order) {
            if (!order) {
                return array;
            }
            const result = array.sort((a, b) => this.compare(a, b, order.by) * (order.ascending ? 1 : -1));
            return result;
        }
        /**
         * Filers the given array using the properties of both the items and the value.
         * @param array The array to filetr
         * @param filter The value containing the filters, or a single filter
         *        string: the value is split by a space and filtered on each part
         *        T: the array is filtered over each property of the filter
         * @param included The array op property names to include
         */
        filter(array, filter, included) {
            if (!filter) {
                return array;
            }
            if (typeof filter === "string") {
                const list = filter.split(" ");
                let stringResult = array;
                list.forEach(current => { stringResult = stringResult.filter((item) => this.filterFunc(item, current, included)); });
                return stringResult;
            }
            const filterObject = filter;
            let result = array;
            for (const property in filterObject) {
                if (filterObject.hasOwnProperty(property)) {
                    const current = filterObject;
                    result = this.filterOnProperty(result, current[property], included, property);
                }
            }
            return result;
        }
        /**
         * Filters on a single property
         * @param array The array to filter
         * @param value The value to filter on
         * @param included The array op property names to include
         * @param property The property to filter on, or null when the filter applies to all properties
         */
        filterOnProperty(array, value, included, property) {
            if (value == null || value.length === 0) {
                return array;
            }
            const result = array.filter((item) => this.filterFunc(item, value, included, property));
            return result;
        }
        /**
         * Compares the property values of the two objects
         * @param a The first object
         * @param b The second object
         * @param prop The name of the property to compare
         */
        compare(a, b, prop) {
            let propA = a;
            let propB = b;
            for (const item of prop.split(".")) {
                propA = propA[item];
                propB = propB[item];
            }
            if (propA == null && propB == null) {
                return 0;
            }
            if (propA == null) {
                return -1;
            }
            if (propB == null) {
                return 1;
            }
            if (propA instanceof Date) {
                propA = propA.getTime();
                propB = propB.getTime();
            }
            const result = this.compareValues(propA, propB);
            if (result === 0 && prop !== "id") {
                return this.compare(a, b, "id");
            }
            return result;
        }
        /**
         * Compares two values
         * @param v1 The first value
         * @param v2 The second value
         */
        compareValues(v1, v2) {
            const result = v1 < v2 ? -1 : v1 > v2 ? 1 : 0;
            return result;
        }
        /**
         * determines whether the item satisfies the filter
         * @param item The item to test
         * @param value The value to filter on
         * @param included The array op property names to include
         * @param property The property to filter on, or null when the filter applies to all properties
         */
        filterFunc(item, value, included, property) {
            const result = property == null
                ? this.filterAll(item, value, included)
                : this.filterSingle(item, value, property);
            return result;
        }
        /**
         * determines whether the item satisfies the filter
         * @param item The item to test
         * @param value The value to filter
         * @param prop The name of the property to filter on
         */
        filterSingle(item, value, prop) {
            let current = item;
            for (const part of prop.split(".")) {
                current = current[part];
            }
            const result = current != null && current.toString().toLowerCase().indexOf(value.toLowerCase()) > -1;
            return result;
        }
        /**
         * determines whether the item satisfies the filter
         * @param item The item to test
         * @param value The value to filter on all properties
         * @param included The array op property names to include
         */
        filterAll(item, value, included) {
            for (const property in item) {
                if (item.hasOwnProperty(property) && (typeof included === "undefined" || included.filter(x => x.startsWith(property)).length > 0)) {
                    const current = item[property];
                    if ((typeof current === "object" && this.filterAll(current, value, typeof included === "undefined"
                        ? included
                        : included.filter(x => x.startsWith(property + ".")).map(x => x.substr(property.length + 1)))) || this.filterSingle(item, value, property)) {
                        return true;
                    }
                }
            }
            return false;
        }
    }
    exports.ListHelper = ListHelper;
});
define("components/vd-th", ["require", "exports", "aurelia-framework"], function (require, exports, aurelia_framework_13) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let VdTh = class VdTh {
        getClass(by, ascending) {
            const result = !!this.order && by === this.name
                ? ascending
                    ? "fas fa-caret-up"
                    : "fas fa-caret-down"
                : "fas fa-caret-up invisible";
            return result;
        }
    };
    __decorate([
        aurelia_framework_13.bindable
    ], VdTh.prototype, "label", void 0);
    __decorate([
        aurelia_framework_13.bindable
    ], VdTh.prototype, "name", void 0);
    __decorate([
        aurelia_framework_13.bindable
    ], VdTh.prototype, "order", void 0);
    VdTh = __decorate([
        aurelia_framework_13.autoinject
    ], VdTh);
    exports.VdTh = VdTh;
});
define("index", ["require", "exports", "attributes/clipboard", "attributes/draggable", "attributes/popover", "attributes/tooltip", "components/bootstrap-select", "components/vd-bool-icon", "components/vd-button", "components/vd-data", "components/vd-route", "components/vd-td", "components/vd-td-abbrev", "components/vd-td-list", "components/vd-th"], function (require, exports, clipboard_1, draggable_1, popover_1, tooltip_1, bootstrap_select_1, vd_bool_icon_1, vd_button_1, vd_data_1, vd_route_1, vd_td_1, vd_td_abbrev_1, vd_td_list_1, vd_th_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(clipboard_1);
    __export(draggable_1);
    __export(popover_1);
    __export(tooltip_1);
    __export(bootstrap_select_1);
    __export(vd_bool_icon_1);
    __export(vd_button_1);
    __export(vd_data_1);
    __export(vd_route_1);
    __export(vd_td_1);
    __export(vd_td_abbrev_1);
    __export(vd_td_list_1);
    __export(vd_th_1);
    class VdWebInitializer {
        constructor() {
            this.customAttributes = [
                "clipboard",
                "draggable",
                "popover",
                "tooltip"
            ];
            this.components = [
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
        }
        configure(aurelia) {
            const resources = this.components.map(x => `components/${x}`)
                .concat(this.customAttributes.map(x => `attributes/${x}`));
            aurelia.use.standardConfiguration().globalResources(resources);
        }
    }
    exports.VdWebInitializer = VdWebInitializer;
});
