"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Helper class for paing and sorting.
 */
var ListHelper = /** @class */ (function () {
    function ListHelper() {
    }
    /**
     * Sorts the given array
     * @param array The array to sort
     * @param order The sorting information
     */
    ListHelper.prototype.sort = function (array, order) {
        var _this = this;
        if (!order) {
            return array;
        }
        var result = array.sort(function (a, b) { return _this.compare(a, b, order.by) * (order.ascending ? 1 : -1); });
        return result;
    };
    /**
     * Filers the given array using the properties of both the items and the value.
     * @param items The array to filter
     * @param filter The value containing the filters, or a single filter
     *        string: the value is split by a space and filtered on each part
     *        T: the array is filtered over each property of the filter
     * @param included The array op property names to include
     */
    ListHelper.prototype.filter = function (items, filter) {
        var _this = this;
        if (!filter || items.length === 0 || !items[0]._filterValues) {
            return items;
        }
        var list = filter.split(' ');
        var result = items;
        list.forEach(function (current) {
            result = result.filter(function (item) { return _this.filterFunc(item, current); });
        });
        return result;
    };
    /**
     * determines whether the item satisfies the filter
     * @param item The item to test
     * @param value The value to filter on
     * @param included The array op property names to include
     * @param property The property to filter on, or null when the filter applies to all properties
     */
    ListHelper.prototype.filterFunc = function (item, value) {
        for (var _i = 0, _a = item._filterValues; _i < _a.length; _i++) {
            var current = _a[_i];
            var result = current != null &&
                current
                    .toString()
                    .toLowerCase()
                    .indexOf(value.toLowerCase()) > -1;
            if (result) {
                return true;
            }
        }
        return false;
    };
    /**
     * Compares the property values of the two objects
     * @param a The first object
     * @param b The second object
     * @param prop The name of the property to compare
     */
    ListHelper.prototype.compare = function (a, b, prop) {
        var propA = a;
        var propB = b;
        for (var _i = 0, _a = prop.split("."); _i < _a.length; _i++) {
            var item = _a[_i];
            propA = !propA ? null : propA[item];
            propB = !propB ? null : propB[item];
        }
        var result = false;
        if (propA == null || propB == null) {
            result = propA == null ? propB == null ? 0 : -1 : 1;
        }
        else {
            if (typeof propA === "boolean") {
                result = propA === propB ? 0 : propA ? 1 : -1;
            }
            if (propA instanceof Date) {
                propA = propA.getTime();
                propB = propB.getTime();
            }
        }
        result = result === false ? this.compareValues(propA, propB) : result;
        if (result === 0 && prop !== "id") {
            return this.compare(a, b, "id");
        }
        return result;
    };
    /**
     * Compares two values
     * @param v1 The first value
     * @param v2 The second value
     */
    ListHelper.prototype.compareValues = function (v1, v2) {
        var result = v1 < v2 ? -1 : v1 > v2 ? 1 : 0;
        return result;
    };
    return ListHelper;
}());
exports.ListHelper = ListHelper;
