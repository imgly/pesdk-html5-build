declare type PatchImage = string | HTMLImageElement;
export declare type FrameRenderMode = 'repeat' | 'stretch';
export declare type FrameLayoutMode = 'horizontal-inside' | 'vertical-inside';
/** An image group for the 12-patch layout of a dynamic frame. */
export interface ImageGroup {
    /**
     * A URI for the start image.
     * If `null` there is no start image.
     * @example // Defaults to:
     * ```
     * null
     * ```
     */
    start?: PatchImage;
    mid: PatchImage | {
        /**
         * A URI for the middle image.
         */
        image: PatchImage;
        /**
         * The render mode for the middle image.
         * @example // Defaults to:
         * ```
         * 'repeat'
         * ```
         */
        mode: FrameRenderMode;
    };
    /**
     * A URI for the end image.
     * If `null` there is no end image.
     * @example // Defaults to:
     * ```
     * null
     * ```
     */
    end?: PatchImage;
}
export interface ImageGroups {
    /**
     * The top image group.
     * If `null` there is no top group.
     * @example // Defaults to:
     * ```
     * null
     * ```
     */
    top: ImageGroup;
    /**
     * The left image group.
     * If `null` there is no top group.
     * @example // Defaults to:
     * ```
     * null
     * ```
     */
    left: ImageGroup;
    /**
     * The right image group.
     * If `null` there is no top group.
     * @example // Defaults to:
     * ```
     * null
     * ```
     */
    right: ImageGroup;
    /**
     * The bottom image group.
     * If `null` there is no top group.
     * @example // Defaults to:
     * ```
     * null
     * ```
     */
    bottom: ImageGroup;
}
export interface FrameAsset {
    identifier: string;
    name: string;
    /**
     * The layout mode of the patches of the frame.
     * @example // Defaults to:
     * ```
     * 'horizontal-inside'
     * ```
     */
    layoutMode: FrameLayoutMode;
    tintable?: boolean;
    /** A URI for the thumbnailURI image of the frame. */
    thumbnailURI: string;
    /**
     * Images for the 12-patch layout of a dynamic frame that automatically adapts to
     * any output image resolution
     */
    imageGroups: ImageGroups;
}
export {};
