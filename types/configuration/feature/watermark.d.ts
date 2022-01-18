export declare enum AlignmentMode {
    CENTER = "center",
    TOP_LEFT = "top-left",
    TOP_RIGHT = "top-right",
    BOTTOM_LEFT = "bottom-left",
    BOTTOM_RIGHT = "bottom-right"
}
export declare class WatermarkConfiguration {
    /**
     * The image which should be displayed as a watermark.
     *
     * The string can be a URL to an external image, a relative path based on the assets folder, or a valid image dataURI.
     */
    watermarkURI?: string;
    /**
     * Position the watermark inside the image area.
     * Except for `center` the watermark corner will be placed in the correspoding corner of the image based on the `inset`.
     * e.g. `TOP_LEFT` will position the top left corner of the watermark in the top left corner of the image.
     */
    alignment?: AlignmentMode;
    /**
     * Inset the watermark by a relative amount of pixels.
     * The pixel amount is calculated by multiplying the `inset` value with the smaller side of the cropped image.
     * e.g. specifying a value of 0.1 would mean an inset of 10px if the smallest side is 100px wide
     */
    inset?: number;
    /**
     * Size of the watermark relative to the smaller image side.
     * The larger side of the watermark will be the same size as the smaller side of the cropped image multiplied with the `size`.
     * e.g. specifying a value of 0.25 would mean that the larger side of the watermark is 25px if the smallest side of the image is 100px wide
     */
    size?: number;
}
