import { CategoryHeaderType } from '../../common/categoryHeaderTypes';
import { FilterCategory, ExistingFilterCategory } from './asset';
export declare class FilterConfiguration {
    /**
     * Defines all available filters. Each filter must be assigned to a category.
     * `NONE` is always added in Basic UI
     * New items and categories can be mixed and matched with existing predefined ones.
     * @example // Defaults to:
     * ```typescript
     * [
     *   { identifier: "imgly_filter_category_duotone", items: [
     *     { identifier: "imgly_duotone_desert" },
     *     { identifier: "imgly_duotone_peach" },
     *     { identifier: "imgly_duotone_clash" },
     *     { identifier: "imgly_duotone_plum" },
     *     { identifier: "imgly_duotone_breezy" },
     *     { identifier: "imgly_duotone_deepblue" },
     *     { identifier: "imgly_duotone_frog" },
     *     { identifier: "imgly_duotone_sunset" },
     *   ]},
     *   { identifier: "imgly_filter_category_bw", items: [
     *     { identifier: "imgly_lut_ad1920" },
     *     { identifier: "imgly_lut_bw" },
     *     { identifier: "imgly_lut_x400" },
     *     { identifier: "imgly_lut_litho" },
     *     { identifier: "imgly_lut_sepiahigh" },
     *     { identifier: "imgly_lut_plate" },
     *     { identifier: "imgly_lut_sin" },
     *   ]},
     *   { identifier: "imgly_filter_category_vintage", items: [
     *     { identifier: "imgly_lut_blues" },
     *     { identifier: "imgly_lut_front" },
     *     { identifier: "imgly_lut_texas" },
     *     { identifier: "imgly_lut_celsius" },
     *     { identifier: "imgly_lut_cool" },
     *   ]},
     *   { identifier: "imgly_filter_category_smooth", items: [
     *     { identifier: "imgly_lut_chest" },
     *     { identifier: "imgly_lut_winter" },
     *     { identifier: "imgly_lut_kdynamic" },
     *     { identifier: "imgly_lut_fall" },
     *     { identifier: "imgly_lut_lenin" },
     *     { identifier: "imgly_lut_pola669" },
     *   ]},
     *   { identifier: "imgly_filter_category_cold", items: [
     *     { identifier: "imgly_lut_elder" },
     *     { identifier: "imgly_lut_orchid" },
     *     { identifier: "imgly_lut_bleached" },
     *     { identifier: "imgly_lut_bleachedblue" },
     *     { identifier: "imgly_lut_breeze" },
     *     { identifier: "imgly_lut_blueshadows" },
     *   ]},
     *   { identifier: "imgly_filter_category_warm", items: [
     *     { identifier: "imgly_lut_sunset" },
     *     { identifier: "imgly_lut_eighties" },
     *     { identifier: "imgly_lut_evening" },
     *     { identifier: "imgly_lut_k2" },
     *     { identifier: "imgly_lut_nogreen" },
     *   ]},
     *   { identifier: "imgly_filter_category_legacy", items: [
     *     { identifier: "imgly_lut_ancient" },
     *     { identifier: "imgly_lut_cottoncandy" },
     *     { identifier: "imgly_lut_classic" },
     *     { identifier: "imgly_lut_colorful" },
     *     { identifier: "imgly_lut_creamy" },
     *     { identifier: "imgly_lut_fixie" },
     *     { identifier: "imgly_lut_food" },
     *     { identifier: "imgly_lut_fridge" },
     *     { identifier: "imgly_lut_glam" },
     *     { identifier: "imgly_lut_gobblin" },
     *     { identifier: "imgly_lut_highcontrast" },
     *     { identifier: "imgly_lut_highcarb" },
     *     { identifier: "imgly_lut_k1" },
     *     { identifier: "imgly_lut_k6" },
     *     { identifier: "imgly_lut_keen" },
     *     { identifier: "imgly_lut_lomo" },
     *     { identifier: "imgly_lut_lomo100" },
     *     { identifier: "imgly_lut_lucid" },
     *     { identifier: "imgly_lut_mellow" },
     *     { identifier: "imgly_lut_neat" },
     *     { identifier: "imgly_lut_pale" },
     *     { identifier: "imgly_lut_pitched" },
     *     { identifier: "imgly_lut_polasx" },
     *     { identifier: "imgly_lut_pro400" },
     *     { identifier: "imgly_lut_quozi" },
     *     { identifier: "imgly_lut_settled" },
     *     { identifier: "imgly_lut_seventies" },
     *     { identifier: "imgly_lut_soft" },
     *     { identifier: "imgly_lut_steel" },
     *     { identifier: "imgly_lut_summer" },
     *     { identifier: "imgly_lut_tender" },
     *     { identifier: "imgly_lut_twilight" },
     *   ]},
     * ]
     * ```
     */
    categories?: Array<FilterCategory | ExistingFilterCategory>;
    /**
     * Whether categories should be flattened which effectively hides the categories.
     * If this is enabled all filters will be shown in the top-level of the filter selection tool
     * orderes according to their parent category.
     * @example // Defaults to:
     * ```
     * false
     * ```
     */
    flattenCategories?: boolean;
    /**
     * Decide if the categories should be grouped in a collapsible section or should be grouped under a text heading.
     */
    categoryHeaderType?: CategoryHeaderType;
    /**
     * Controls if the user can load the preview thumbnail for every filter.
     * @example // Defaults to:
     * ```
     * true
     * ```
     */
    enablePreviewThumbnails?: boolean;
}
