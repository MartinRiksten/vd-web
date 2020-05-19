import { IFilterable, IOrderInfo, ListHelper } from '../utilities/list-helper';
/**
 * Controller for the application view.
 */
export declare class ListBase<T extends IFilterable> {
    select: ((x: T) => void) | undefined;
    filter: string;
    items: T[];
    order: IOrderInfo;
    trigger: number;
    currentList: T[];
    count: number;
    protected selected: T | undefined;
    protected listHelper: ListHelper<T>;
    bind(): void;
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
    getRowClass(item: T): string;
    getCellClass(item: T): "" | "selector";
    /**
     * Gets the filtered and sorted list of items
     */
    getCurrentList(): T[];
}
export interface IFilter {
    filter: string;
}
