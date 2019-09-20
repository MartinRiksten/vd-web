import { IOrderInfo, ListHelper } from "../utilities/list-helper";
/**
 * Controller for the application view.
 */
export declare class ListBase<T> {
    select: ((x: T) => void) | undefined;
    filter: IFilter | undefined;
    items: T[] | undefined;
    order: IOrderInfo;
    trigger: number;
    sorted: T[];
    protected selected: T | undefined;
    protected listHelper: ListHelper<T>;
    protected table: Element;
    private columns;
    /**
     * Order the list of work items
     * @param orderBy The name of the field to order by
     */
    setOrder(orderBy: string): void;
    /**
     * Event handler for row click events
     * @param event The mouse click event
     */
    rowClick(item: T): void;
    /**
     * Gets the selected class
     * @param item The current item
     */
    GetRowClass(item: T): "" | "table-success";
    /**
     * Gets the filtered list of work items
     */
    getSorted(): T[];
}
export interface IFilter {
    filter: string;
}
