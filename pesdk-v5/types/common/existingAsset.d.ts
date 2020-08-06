export interface ExistingItem {
    identifier: string;
}
/**
 * @ignore
 * Currently differentiation between Custom Item and Existing Item is based on
 * availability of attribute name
 */
export declare function isExistingItem(item: any): item is ExistingItem;
export interface ExistingCategory<T> extends ExistingItem {
    /**
     * Items of the category which can be existing or new defined tools with categories.
     * If `null` the referenced existing category will keep its predefined items.
     * @example // Defaults to:
     * ```
     * null
     * ```
     */
    items?: Array<T | ExistingItem>;
}
/**
 * @ignore
 * Currently differentiation between Custom Category and Existing Category is based on
 * availability of attribute name
 */
export declare function isExistingCategory(category: any): category is ExistingCategory<any>;
