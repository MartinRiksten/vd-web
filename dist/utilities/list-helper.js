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
     * @param items The array to filter
     * @param filter The value containing the filters, or a single filter
     *        string: the value is split by a space and filtered on each part
     *        T: the array is filtered over each property of the filter
     * @param included The array op property names to include
     */
    filter(items, filter) {
        if (!filter) {
            return items;
        }
        const list = filter.split(' ');
        let result = items;
        list.forEach(current => {
            result = result.filter((item) => this.filterFunc(item, current));
        });
        return result;
    }
    /**
     * determines whether the item satisfies the filter
     * @param item The item to test
     * @param value The value to filter on
     * @param included The array op property names to include
     * @param property The property to filter on, or null when the filter applies to all properties
     */
    filterFunc(item, value) {
        for (const current of item._filterValues) {
            const result = current != null &&
                current
                    .toString()
                    .toLowerCase()
                    .indexOf(value.toLowerCase()) > -1;
            if (result) {
                return true;
            }
        }
        return false;
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
        for (const item of prop.split('.')) {
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
        if (result === 0 && prop !== 'id') {
            return this.compare(a, b, 'id');
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
}
exports.ListHelper = ListHelper;
