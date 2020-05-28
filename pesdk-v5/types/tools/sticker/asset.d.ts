import { ExistingCategory } from '../../common/existingAsset';
export declare type TintMode = 'none' | 'solid' | 'colorized';
export declare type ResizeMode = 'keepAspect' | 'unrestricted';
export interface StickerAsset {
    identifier: string;
    name: string;
    stickerURI: string;
    /**
     * A URI for the thumbnailURI image of the sticker.
     * If `undefined` the thumbnailURI will be automatically generated form the `stickerURI`.
     * @example // Defaults to:
     * '' empty string
     */
    thumbnailURI?: string;
    /**
     * The sticker tint mode.
     * @example // Defaults to:
     * 'none'
     */
    tintMode?: TintMode;
    /**
     * The sticker resize mode.
     * @example // Defaults to:
     * 'keepAspect'
     */
    resizeMode?: ResizeMode;
}
export interface CustomStickerAsset {
    identifier: string;
    name: string;
    /**
     * these assets are generated from uploaded user files
     * so insted of URIs here, we work with raw image data
     */
    sticker: string;
    /**
     * A URI for the thumbnailURI image of the sticker.
     * If `null` the thumbnailURI will be automatically generated form the `stickerURI`.
     * @example // Defaults to:
     * '' empty string
     */
    thumbnailURI?: string;
    /**
     * The sticker tint mode.
     * @example // Defaults to:
     * 'none'
     */
    tintMode?: TintMode;
    /**
     * The sticker resize mode.
     * @example // Defaults to:
     * 'keepAspect'
     */
    resizeMode?: ResizeMode;
}
export interface StickerCategory {
    identifier: string;
    name: string;
    thumbnailURI: string;
    /**
     * An array of StickerAssets that are part of this category.
     */
    items: StickerAsset[];
}
export interface CustomStickerCategory {
    identifier: string;
    name: string;
    /**
     *  these assets are generated from uploaded user files
     * so insted of URIs here, we work with raw image data,
     */
    thumbnail: string;
    /**
     * An array of StickerAssets that are part of this category.
     */
    items: CustomStickerAsset[];
}
export declare type ExistingStickerCategory = ExistingCategory<StickerAsset>;
export declare function isStickerAssetDynamic(sticker: StickerAsset | CustomStickerAsset): sticker is CustomStickerAsset;
export declare function isStickerCategoryDynamic(sticker: StickerCategory | CustomStickerCategory): sticker is CustomStickerCategory;
