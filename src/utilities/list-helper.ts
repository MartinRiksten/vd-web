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
  public sort(array: T[], order: IOrderInfo): T[] {
    if (!order) {
      return array;
    }

    const result = array.sort((a: T, b: T) => this.compare(a, b, order.by) * (order.ascending ? 1 : -1));
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
  public filter(array: T[], filter: string | T, included?: string[]): T[] {
    if (!filter) {
      return array;
    }

    if (typeof filter === 'string') {
      const list = (filter as string).split(' ');
      let stringResult = array;
      list.forEach(current => {
        stringResult = stringResult.filter((item: T) => this.filterFunc(item, current, included));
      });
      return stringResult;
    }

    const filterObject = filter;
    let result = array;
    for (const property in filterObject) {
      if (Object.keys(filterObject).indexOf(property) >= 0) {
        const current = filterObject as any;
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
  private filterOnProperty(array: T[], value: string, included?: string[], property?: string): T[] {
    if (value == null || value.length === 0) {
      return array;
    }

    const result = array.filter((item: T) => this.filterFunc(item, value, included, property));
    return result;
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
  private compareValues(v1: any, v2: any): number {
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
  private filterFunc(item: any, value: string, included?: string[], property?: string): boolean {
    const result = property == null ? this.filterAll(item, value, included) : this.filterSingle(item, value, property);
    return result;
  }

  /**
   * determines whether the item satisfies the filter
   * @param item The item to test
   * @param value The value to filter
   * @param prop The name of the property to filter on
   */
  private filterSingle(item: any, value: string, prop: string): boolean {
    let current = item as any;
    for (const part of prop.split('.')) {
      current = current[part];
    }

    const result =
      current != null &&
      current
        .toString()
        .toLowerCase()
        .indexOf(value.toLowerCase()) > -1;
    return result;
  }

  /**
   * determines whether the item satisfies the filter
   * @param item The item to test
   * @param value The value to filter on all properties
   * @param included The array op property names to include
   */
  private filterAll(item: any, value: string, included?: string[]): boolean {
    for (const property in item) {
      if (
        item.hasOwnProperty(property) &&
        (typeof included === 'undefined' || included.filter(x => !!x && x.startsWith(property)).length > 0)
      ) {
        const current = item[property];
        if (
          (typeof current === 'object' &&
            this.filterAll(
              current,
              value,
              typeof included === 'undefined'
                ? included
                : included.filter(x => !!x && x.startsWith(property + '.')).map(x => x.substr(property.length + 1)),
            )) ||
          this.filterSingle(item, value, property)
        ) {
          return true;
        }
      }
    }

    return false;
  }
}
