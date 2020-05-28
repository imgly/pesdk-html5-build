/**
 * Options which define conditions for when an image is automatically
 * downscaled by the engine.
 * Images that are larger than the maximum size that the engine can handle
 * on the currently executing platform are downscaled automatically.
 */
export interface ImageDownscaleOptions {
    /**
     * Images whose sizes exceed these megapixel limits will be downscaled by the engine.
     */
    maxMegaPixels?: {
        desktop: number;
        mobile: number;
    };
    maxDimensions?: {
        height: number;
        width: number;
    };
}
