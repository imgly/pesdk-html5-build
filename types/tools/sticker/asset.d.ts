import { ExistingCategory } from '../../common/existingAsset';
import { ImageMimeType } from '../../configuration/feature/imageMimeType';
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
     * ```
     * '' empty string
     * ```
     */
    thumbnailURI?: string;
    /**
     * The sticker tint mode.
     * @example // Defaults to:
     * ```
     * 'none'
     * ```
     */
    tintMode?: TintMode;
    /**
     * The sticker resize mode.
     * @example // Defaults to:
     * ```
     * 'keepAspect'
     * ```
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
export declare type ExistingStickerCategory = ExistingCategory<StickerAsset>;
export interface UploadedStickerAsset extends Omit<Omit<StickerAsset, 'tintMode'>, 'resizeMode'> {
    type: ImageMimeType;
}
export interface UploadedSticker {
    identifier: string;
    stickerURI: string;
    file: File;
}
