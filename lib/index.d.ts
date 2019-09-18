declare module "attributes/clipboard" {
    export class ClipboardCustomAttribute {
        private readonly element;
        constructor(element: Element);
        attached(): void;
        detached(): void;
        private handleClick;
        private valueChanged;
    }
}
declare module "attributes/draggable" {
    export class DraggableCustomAttribute {
        private startX;
        private startY;
        private readonly element;
        private selector;
        constructor(element: Element);
        attached(): void;
        private init;
        private pan;
    }
}
declare module "attributes/popover" {
    import { PopoverOption } from 'bootstrap';
    export class PopoverCustomAttribute {
        private readonly element;
        value: PopoverOption | undefined;
        constructor(element: Element);
        attached(): void;
        detached(): void;
    }
}
declare module "attributes/tooltip" {
    import { TaskQueue } from 'aurelia-task-queue';
    import { TooltipOption } from 'bootstrap';
    export class TooltipCustomAttribute {
        private readonly element;
        private readonly taskQueue;
        value: TooltipOption | undefined;
        constructor(element: Element, taskQueue: TaskQueue);
        attached(): void;
        detached(): void;
    }
}
declare module "components/bootstrap-select" {
    global {
        interface JQuery<TElement = HTMLElement> {
            selectpicker: (x?: string, y?: string) => string;
        }
    }
    export interface IBootstrapSelectOption {
        id: string;
        option: string;
        subtext: string;
    }
    export class BootstrapSelect {
        options: IBootstrapSelectOption[] | undefined;
        selected: string | undefined;
        displayName: string | undefined;
        picker: Element;
        attached(): void;
        selectedChanged(): void;
    }
}
declare module "components/vd-bool-icon" {
    export class VdBoolIcon {
        value: boolean;
        getIcon(value: boolean): "fa-check text-success" | "fa-times text-danger";
    }
}
declare module "components/vd-button" {
    export interface IButtonInfo {
        id: string;
        label: string;
        variant: string;
        icon: string;
    }
    export class VdButton {
        buttonId: string | undefined;
        info: IButtonInfo | undefined;
        click: (() => void) | undefined;
        private types;
        bind(): void;
    }
}
declare module "components/vd-data" {
    export class VdData {
        labelClass: string;
        dataClass: string;
        label: string | undefined;
        value: string | undefined;
    }
}
declare module "components/vd-route" {
    export class VdRoute {
        route: string | undefined;
        key: any;
        params: {
            id: string;
        } | undefined;
        bind(): void;
    }
}
declare module "components/vd-td" {
    export class VdTd {
        value: string | undefined;
    }
}
declare module "components/vd-td-abbrev" {
    import { PopoverOption } from "bootstrap/index";
    export class VdTdAbbrev {
        value: string;
        cutoff: number;
        short: string | undefined;
        abbrev: boolean;
        popoverOption: PopoverOption | undefined;
        bind(): void;
    }
}
declare module "components/vd-td-list" {
    import { PopoverOption } from "bootstrap/index";
    export class VdTdList {
        items: IValueList[] | undefined;
        getToggle(item: IValueList): string | undefined;
    }
    export interface IValueList {
        id: string;
        value: string;
        variant?: string;
        binding?: any;
        popoverOption?: PopoverOption;
    }
}
declare module "components/list-helper" {
    /**
     * Interface for ordering information
     */
    export interface IOrderInfo {
        by: string;
        ascending: boolean;
    }
    /**
     * Helper class for paing and sorting.
     */
    export class ListHelper<T> {
        /**
         * Sorts the given array
         * @param array The array to sort
         * @param order The sorting information
         */
        sort(array: T[], order: IOrderInfo): T[];
        /**
         * Filers the given array using the properties of both the items and the value.
         * @param array The array to filetr
         * @param filter The value containing the filters, or a single filter
         *        string: the value is split by a space and filtered on each part
         *        T: the array is filtered over each property of the filter
         * @param included The array op property names to include
         */
        filter(array: T[], filter: string | T, included?: string[]): T[];
        /**
         * Filters on a single property
         * @param array The array to filter
         * @param value The value to filter on
         * @param included The array op property names to include
         * @param property The property to filter on, or null when the filter applies to all properties
         */
        private filterOnProperty;
        /**
         * Compares the property values of the two objects
         * @param a The first object
         * @param b The second object
         * @param prop The name of the property to compare
         */
        private compare;
        /**
         * Compares two values
         * @param v1 The first value
         * @param v2 The second value
         */
        private compareValues;
        /**
         * determines whether the item satisfies the filter
         * @param item The item to test
         * @param value The value to filter on
         * @param included The array op property names to include
         * @param property The property to filter on, or null when the filter applies to all properties
         */
        private filterFunc;
        /**
         * determines whether the item satisfies the filter
         * @param item The item to test
         * @param value The value to filter
         * @param prop The name of the property to filter on
         */
        private filterSingle;
        /**
         * determines whether the item satisfies the filter
         * @param item The item to test
         * @param value The value to filter on all properties
         * @param included The array op property names to include
         */
        private filterAll;
    }
}
declare module "components/vd-th" {
    import { IOrderInfo } from "components/list-helper";
    export class VdTh {
        label: string | undefined;
        name: string | undefined;
        order: IOrderInfo | undefined;
        getClass(by: string, ascending: boolean): string;
    }
}
declare module "vd-web" {
    export * from "attributes/clipboard";
    export * from "attributes/draggable";
    export * from "attributes/popover";
    export * from "attributes/tooltip";
    export * from "components/bootstrap-select";
    export * from "components/vd-bool-icon";
    export * from "components/vd-button";
    export * from "components/vd-data";
    export * from "components/vd-route";
    export * from "components/vd-td";
    export * from "components/vd-td-abbrev";
    export * from "components/vd-td-list";
    export * from "components/vd-th";
}
