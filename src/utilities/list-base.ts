import { IFilterable, IOrderInfo, ListHelper } from '../utilities/list-helper';

/**
 * Controller for the application view.
 */
export class ListBase<T extends IFilterable> {
  public select: ((x: T) => void) | undefined;
  public filter: string;
  public items!: T[];
  public order!: IOrderInfo;
  public trigger = 0;
  public currentList: T[] = [];
  public count = 0;

  protected selected: T | undefined;
  protected listHelper = new ListHelper<T>();

  public bind() {
    const items = this.items;
    for (const item of items) {
      item._filterValues = [];
    }
  }

  /**
   * Order the list of work items
   * @param orderBy The name of the field to order by
   */
  public setOrder(orderBy: string): void {
    this.order.ascending = this.order.by === orderBy ? !this.order.ascending : true;
    this.order.by = orderBy;
    this.trigger++;
  }

  /**
   * Event handler for row click events
   * @param event The mouse click event
   */
  public rowClick(item: T) {
    if (!!this.select) {
      this.select(item);
    } else {
      this.selected = item;
    }
  }

  /**
   * Gets the selected class
   * @param item The current item
   */
  public GetRowClass(item: T) {
    if (!this.selected && !!item) {
      this.selected = item;
    }

    return !this.select && this.selected === item ? 'table-success' : '';
  }

  /**
   * Gets the filtered and sorted list of items
   */
  public getCurrentList(): T[] {
    let result = this.items.slice();

    if (!!this.filter && result.length > 0) {
      result = this.listHelper.filter(result, this.filter);
    }

    if (!!this.order && result.length > 0) {
      result = this.listHelper.sort(result, this.order);
    }

    this.count = result.length;
    this.currentList = result;
    return result;
  }
}

export interface IFilter {
  filter: string;
}
