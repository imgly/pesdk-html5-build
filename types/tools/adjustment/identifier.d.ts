export declare enum AdjustmentIdentifier {
    BRIGHTNESS = "brightness",
    CONTRAST = "contrast",
    SATURATION = "saturation",
    CLARITY = "clarity",
    SHADOWS = "shadows",
    HIGHLIGHTS = "highlights",
    EXPOSURE = "exposure",
    GAMMA = "gamma",
    BLACKS = "blacks",
    WHITES = "whites",
    TEMPERATURE = "temperature",
    SHARPNESS = "sharpness"
}
type AdjustmentIdentifierKeys = Record<AdjustmentIdentifier, boolean>;
export declare const AdjustmentIdentifierKeys: AdjustmentIdentifierKeys;
export {};
