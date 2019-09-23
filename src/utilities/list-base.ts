import { IOrderInfo, ListHelper } from '../utilities/list-helper';

/**
 * Controller for the application view.
 */
export class ListBase<T> {
  public select: ((x: T) => void) | undefined;
  public filter: IFilter | undefined;
  public items: T[] | undefined;
  public order!: IOrderInfo;
  public trigger = 0;
  public sorted: T[] = [];

  protected selected: T | undefined;
  protected listHelper = new ListHelper<T>();
  protected table!: Element;

  // the columns that are shown in the table
  private columns: string[] = [];

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
   * Gets the filtered list of work items
   */
  public getSorted(): T[] {
    let result = this.items;
    if (!result) {
      return [];
    }

    if (!!this.filter) {
      if (this.columns.length === 0) {
        this.columns = $(this.table)
          .find('th')
          .get()
          .map<string>(x => $(x as any).attr('name') || '');
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

export interface IFilter {
  filter: string;
}
