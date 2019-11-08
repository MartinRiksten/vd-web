/**
 * Interface for ordering information
 */
export interface IOrderInfo {
  by: string;
  ascending: boolean;
}

export interface IFilterable {
  _filterValues: unknown[];
}

/**
 * Helper class for paing and sorting.
 */
export class ListHelper<T extends IFilterable> {
  /**
   * Sorts the given array
   * @param array The array to sort
   * @param order The sorting information
   */
  public sort(array: T[], order: IOrderInfo): T[] {
    if (!order) {
      return array;
    }

    const result = array.sort((a: T, b: T) => this.compare(a, b, order.by) * (order.ascending ? 1 : -1));
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
  public filter(items: T[], filter: string): T[] {
    if (!filter || items.length === 0 || !items[0]._filterValues) {
      return items;
    }

    const list = filter.split(' ');
    let result = items;
    list.forEach(current => {
      result = result.filter((item: T) => this.filterFunc(item, current));
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
  private filterFunc(item: T, value: string): boolean {
    for (const current of item._filterValues) {
      const result =
        current != null &&
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
  private compare(a: any, b: any, prop: string): number {
    let propA = a;
    let propB = b;
    for (const item of prop.split(".")) {
        propA = !propA ? null : propA[item];
        propB = !propB ? null : propB[item];
    }

    let result: number | boolean = false;

    if (propA == null || propB == null) {
        result = propA == null ? propB == null ? 0 : -1 : 1;
    } else {
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

    return result as number;
}

  /**
   * Compares two values
   * @param v1 The first value
   * @param v2 The second value
   */
  private compareValues(v1: any, v2: any): number {
    const result = v1 < v2 ? -1 : v1 > v2 ? 1 : 0;
    return result;
  }
}
