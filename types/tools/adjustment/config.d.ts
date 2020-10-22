import { ExistingAdjustmentCategory, AdjustmentCategory } from './asset';
export declare class AdjustmentConfiguration {
    /**
     * Defines all allowed adjustment tools. The adjustment tool buttons are always shown in the given order.
     * @example // Defaults to:
     * ```typescript
     * [{
     *    identifier: 'basic',
     *    items: [
     *      {identifier: AdjustmentIdentifier.BRIGHTNESS}, {identifier: AdjustmentIdentifier.SATURATION},
     *      {identifier: AdjustmentIdentifier.CONTRAST}, {identifier: AdjustmentIdentifier.GAMMA},
     *    ]
     * }, {
     *    identifier: 'refinements',
     *    items: [
     *      {identifier: AdjustmentIdentifier.CLARITY}, {identifier: AdjustmentIdentifier.EXPOSURE},
     *      {identifier: AdjustmentIdentifier.SHADOWS}, {identifier: AdjustmentIdentifier.HIGHLIGHTS},
     *      {identifier: AdjustmentIdentifier.WHITES}, {identifier: AdjustmentIdentifier.BLACKS},
     *      {identifier: AdjustmentIdentifier.TEMPERATURE}, {identifier: AdjustmentIdentifier.SHARPNESS},
     *    ],
     * }]
     * ```
     */
    categories?: Array<AdjustmentCategory | ExistingAdjustmentCategory>;
    /**
     * Whether categories should be flattened which effectively hides the categories.
     * If this is enabled all adjustments will be shown in the top-level of the adjust selection tool
     * orderer according to their parent category.
     * @example // Defaults to:
     * ```
     * false
     * ```
     */
    flattenCategories?: boolean;
}
