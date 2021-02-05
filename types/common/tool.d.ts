/** List of Image editing tools. */
export declare enum Tool {
    /** A tool to add a default list of input images. */
    LIBRARY = "library",
    ART_FILTER = "artFilter",
    /** A tool to apply an transformation, such as cropping or rotation. */
    TRANSFORM = "transform",
    /** A tool to apply an image filter effect. */
    FILTER = "filter",
    /** A tool to apply an image filter effect. */
    ADJUSTMENT = "adjustment",
    /** A tool to add blur. */
    FOCUS = "focus",
    /** A tool to add stickers. */
    STICKER = "sticker",
    /** A tool to add texts. */
    TEXT = "text",
    /** A tool to add text designs. */
    TEXT_DESIGN = "textdesign",
    /** A tool to add an overlay. */
    OVERLAY = "overlay",
    /** A tool to add a frame. */
    FRAME = "frame",
    /** A tool to add a frame. */
    BRUSH = "brush",
    /** Custom tool */
    CUSTOM = "customTool"
}
export declare type SpriteType = Tool.STICKER | Tool.TEXT | Tool.TEXT_DESIGN;
