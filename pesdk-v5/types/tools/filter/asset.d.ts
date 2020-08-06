import { ExistingCategory } from '../../common/existingAsset';
export interface FilterAsset {
    identifier: string;
    name: string;
    thumbnailURI: string;
    defaultIntensity?: number;
}
/** A duotone image filter. */
export interface DuoToneFilterAsset extends FilterAsset {
    /** The duotone color that is mapped to light colors of the input image. */
    lightColor: string;
    /** The duotone color that is mapped to dark colors of the input image. */
    darkColor: string;
}
/** A look up table (LUT) image filter. */
export interface LUTFilterAsset extends FilterAsset {
    /**
     * The path to the 3D LUT image.
     */
    lutURI: string;
    /**
     * The number of horizontal tiles in the LUT image.
     * Defaults to 5.
     */
    horizontalTileCount?: number;
    /**
     * The number of vertical tiles in the LUT image.
     * Defaults to 5.
     */
    verticalTileCount?: number;
}
export interface FilterCategory {
    identifier: string;
    name: string;
    /**
     * A URI for the thumbnail image of the category. If `null` the category will not have a thumbnail
     * image which won't be required if `flattenCategories` is enabled for the `Tool.FILTER`.
     * @example // Defaults to:
     * ```
     * '' empty string
     * ```
     */
    thumbnailURI: string;
    /**
     * An array of FilterAssets that are part of this category
     */
    items: Array<DuoToneFilterAsset | LUTFilterAsset>;
}
/**
 * @ignore
 */
export declare function isDuoToneFilterAsset(asset: LUTFilterAsset | DuoToneFilterAsset): asset is DuoToneFilterAsset;
/**
 * @ignore
 */
export declare function isLUTFilterAsset(asset: LUTFilterAsset | DuoToneFilterAsset): asset is LUTFilterAsset;
export declare type ExistingFilterCategory = ExistingCategory<DuoToneFilterAsset | LUTFilterAsset>;
