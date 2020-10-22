import { CategoryHeaderType } from '../../common/categoryHeaderTypes';
import { TransformCategory, ExistingTransformCategory } from './asset';
export declare class TransformConfiguration {
    /**
     * Defines all allowed crop aspect ratios. The crop ratio cards are shown in the given order.
     * @example // Defaults to:
     * ```typescript
     *[{
     *  "identifier": "imgly_transforms_common",
     *  "items": [
     *    { "identifier": "imgly_transform_common_custom" },
     *    { "identifier": "imgly_transform_common_square" },
     *    { "identifier": "imgly_transform_common_4" },
     *    { "identifier": "imgly_transform_common_16" },
     *    { "identifier": "imgly_transform_common_3" },
     *    { "identifier": "imgly_transform_common_9" },
     *  ]
     *}, {
     *  "identifier": "imgly_transforms_facebook",
     *    "items": [
     *      { "identifier": "imgly_transform_facebook_profile" },
     *      { "identifier": "imgly_transform_facebook_title" },
     *      { "identifier": "imgly_transform_facebook_post" },
     *  ]
     *}, {
     *  "identifier": "imgly_transforms_instagram",
     *    "items": [
     *      { "identifier": "imgly_transform_instagram_story" },
     *      { "identifier": "imgly_transform_instagram_landscape" },
     *      { "identifier": "imgly_transform_instagram_portrait" },
     *      { "identifier": "imgly_transform_instagram_square" },
     *  ]
     *}, {
     *  "identifier": "imgly_transforms_twitter",
     *    "items": [
     *      { "identifier": "imgly_transform_twitter_profile" },
     *      { "identifier": "imgly_transform_twitter_title" },
     *      { "identifier": "imgly_transform_twitter_post" },
     *  ]
     *}]
     * ```
     */
    categories?: Array<TransformCategory | ExistingTransformCategory>;
    /**
     * Decides whether rotation is enabled
     * @example // Defaults to:
     * ```
     * true
     * ```
     */
    enableRotation?: boolean;
    /**
     * Decides whether flip is enabled
     * @example // Defaults to:
     * ```
     * true
     * ```
     */
    enableFlip?: boolean;
    /**
     * Whether categories should be flattened which effectively hides the categories.
     * If this is enabled all crop ratios will be shown in the top-level of the transform selection tool
     * ordered according to their parent category.
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
}
