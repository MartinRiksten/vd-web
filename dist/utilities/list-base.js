"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const list_helper_1 = require("../utilities/list-helper");
/**
 * Controller for the application view.
 */
class ListBase {
    constructor() {
        this.trigger = 0;
        this.sorted = [];
        this.listHelper = new list_helper_1.ListHelper();
        // the columns that are shown in the table
        this.columns = [];
    }
    /**
     * Order the list of work items
     * @param orderBy The name of the field to order by
     */
    setOrder(orderBy) {
        this.order.ascending = this.order.by === orderBy ? !this.order.ascending : true;
        this.order.by = orderBy;
        this.trigger++;
    }
    /**
     * Event handler for row click events
     * @param event The mouse click event
     */
    rowClick(item) {
        if (!!this.select) {
            this.select(item);
        }
        else {
            this.selected = item;
        }
    }
    /**
     * Gets the selected class
     * @param item The current item
     */
    GetRowClass(item) {
        if (!this.selected && !!item) {
            this.selected = item;
        }
        return !this.select && this.selected === item ? 'table-success' : '';
    }
    /**
     * Gets the filtered list of work items
     */
    getSorted() {
        let result = this.items;
        if (!result) {
            return [];
        }
        if (!!this.filter) {
            if (this.columns.length === 0) {
                this.columns = $(this.table)
                    .find('th')
                    .get()
                    .map(x => $(x).attr('name') || '');
            }
            result = this.listHelper.filter(result, this.filter.filter, this.columns);
        }
        if (!!this.order) {
            result = this.listHelper.sort(result, this.order);
        }
        this.sorted = result;
        return result;
    }
}
exports.ListBase = ListBase;