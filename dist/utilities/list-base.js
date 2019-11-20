"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var list_helper_1 = require("../utilities/list-helper");
/**
 * Controller for the application view.
 */
var ListBase = /** @class */ (function () {
    function ListBase() {
        this.trigger = 0;
        this.currentList = [];
        this.count = 0;
        this.listHelper = new list_helper_1.ListHelper();
    }
    ListBase.prototype.bind = function () {
        var items = this.items;
        for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
            var item = items_1[_i];
            item._filterValues = [];
        }
    };
    /**
     * Order the list of work items
     * @param orderBy The name of the field to order by
     */
    ListBase.prototype.setOrder = function (orderBy) {
        this.order.ascending = this.order.by === orderBy ? !this.order.ascending : true;
        this.order.by = orderBy;
        this.trigger++;
    };
    /**
     * Event handler for row click events
     * @param event The mouse click event
     */
    ListBase.prototype.rowClick = function (item) {
        if (!!this.select) {
            this.select(item);
        }
        else {
            this.selected = item;
        }
    };
    /**
     * Gets the selected class
     * @param item The current item
     */
    ListBase.prototype.GetRowClass = function (item) {
        if (!this.selected && !!item) {
            this.selected = item;
        }
        return !this.select && this.selected === item ? 'table-success' : '';
    };
    /**
     * Gets the filtered and sorted list of items
     */
    ListBase.prototype.getCurrentList = function () {
        var result = this.items;
        if (!result) {
            this.count = 0;
            return [];
        }
        if (!!this.filter && result.length > 0) {
            result = this.listHelper.filter(result, this.filter);
        }
        if (!!this.order && result.length > 0) {
            result = this.listHelper.sort(result, this.order);
        }
        this.count = result.length;
        this.currentList = result;
        return result;
    };
    return ListBase;
}());
exports.ListBase = ListBase;
