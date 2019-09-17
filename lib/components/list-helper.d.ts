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
export declare class ListHelper<T> {
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
