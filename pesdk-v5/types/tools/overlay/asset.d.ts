import { BlendMode } from './blendMode';
export interface OverlayAsset {
    identifier: string;
    name: string;
    /** The default blend mode that is used to apply the overlay. */
    defaultBlendMode: BlendMode;
    /** A URI for the overlay image. */
    overlayURI: string;
    /**
     * A URI for the thumbnailURI image of the overlay.
     * If `null` the thumbnailURI will be automatically generated form the `overlayURI`.
     * @example // Defaults to:
     * ```
     * null
     * ```
     */
    thumbnailURI: string;
}
