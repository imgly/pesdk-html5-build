import { CanvasAction } from '../../common/canvasAction';
import { CategoryHeaderType } from '../../common/categoryHeaderTypes';
import { NamedColor, Color } from '../../common/color';
import { StickerCategory, ExistingStickerCategory, TintMode } from './asset';
export declare class StickerConfiguration {
    /**
     * Defines all available stickers. Each sticker must be assigned to a category.
     * New items and categories can be mixed and matched with existing predefined ones.
     * @example // Defaults to:
     * ```typescript
     * [
     *   { identifier: "imgly_sticker_category_emoticons", items: [
     *     { identifier: "imgly_sticker_emoticons_grin" },
     *     { identifier: "imgly_sticker_emoticons_laugh" },
     *     { identifier: "imgly_sticker_emoticons_smile" },
     *     { identifier: "imgly_sticker_emoticons_wink" },
     *     { identifier: "imgly_sticker_emoticons_tongue_out_wink" },
     *     { identifier: "imgly_sticker_emoticons_angel" },
     *     { identifier: "imgly_sticker_emoticons_kisses" },
     *     { identifier: "imgly_sticker_emoticons_loving" },
     *     { identifier: "imgly_sticker_emoticons_kiss" },
     *     { identifier: "imgly_sticker_emoticons_wave" },
     *     { identifier: "imgly_sticker_emoticons_nerd" },
     *     { identifier: "imgly_sticker_emoticons_cool" },
     *     { identifier: "imgly_sticker_emoticons_blush" },
     *     { identifier: "imgly_sticker_emoticons_duckface" },
     *     { identifier: "imgly_sticker_emoticons_furious" },
     *     { identifier: "imgly_sticker_emoticons_angry" },
     *     { identifier: "imgly_sticker_emoticons_steaming_furious" },
     *     { identifier: "imgly_sticker_emoticons_sad" },
     *     { identifier: "imgly_sticker_emoticons_anxious" },
     *     { identifier: "imgly_sticker_emoticons_cry" },
     *     { identifier: "imgly_sticker_emoticons_sobbing" },
     *     { identifier: "imgly_sticker_emoticons_loud_cry" },
     *     { identifier: "imgly_sticker_emoticons_wide_grin" },
     *     { identifier: "imgly_sticker_emoticons_impatient" },
     *     { identifier: "imgly_sticker_emoticons_tired" },
     *     { identifier: "imgly_sticker_emoticons_asleep" },
     *     { identifier: "imgly_sticker_emoticons_sleepy" },
     *     { identifier: "imgly_sticker_emoticons_deceased" },
     *     { identifier: "imgly_sticker_emoticons_attention" },
     *     { identifier: "imgly_sticker_emoticons_question" },
     *     { identifier: "imgly_sticker_emoticons_not_speaking_to_you" },
     *     { identifier: "imgly_sticker_emoticons_sick" },
     *     { identifier: "imgly_sticker_emoticons_pumpkin" },
     *     { identifier: "imgly_sticker_emoticons_boxer" },
     *     { identifier: "imgly_sticker_emoticons_idea" },
     *     { identifier: "imgly_sticker_emoticons_smoking" },
     *     { identifier: "imgly_sticker_emoticons_beer" },
     *     { identifier: "imgly_sticker_emoticons_skateboard" },
     *     { identifier: "imgly_sticker_emoticons_guitar" },
     *     { identifier: "imgly_sticker_emoticons_music" },
     *     { identifier: "imgly_sticker_emoticons_sunbathing" },
     *     { identifier: "imgly_sticker_emoticons_hippie" },
     *     { identifier: "imgly_sticker_emoticons_humourous" },
     *     { identifier: "imgly_sticker_emoticons_hitman" },
     *     { identifier: "imgly_sticker_emoticons_harry_potter" },
     *     { identifier: "imgly_sticker_emoticons_business" },
     *     { identifier: "imgly_sticker_emoticons_batman" },
     *     { identifier: "imgly_sticker_emoticons_skull" },
     *     { identifier: "imgly_sticker_emoticons_ninja" },
     *     { identifier: "imgly_sticker_emoticons_masked" },
     *     { identifier: "imgly_sticker_emoticons_alien" },
     *     { identifier: "imgly_sticker_emoticons_wrestler" },
     *     { identifier: "imgly_sticker_emoticons_devil" },
     *     { identifier: "imgly_sticker_emoticons_star" },
     *     { identifier: "imgly_sticker_emoticons_baby_chicken" },
     *     { identifier: "imgly_sticker_emoticons_rabbit" },
     *     { identifier: "imgly_sticker_emoticons_pig" },
     *     { identifier: "imgly_sticker_emoticons_chicken" },
     *   ]},
     *   { identifier: "imgly_sticker_category_shapes", items: [
     *     { identifier: "imgly_sticker_shapes_badge_01" },
     *     { identifier: "imgly_sticker_shapes_badge_04" },
     *     { identifier: "imgly_sticker_shapes_badge_12" },
     *     { identifier: "imgly_sticker_shapes_badge_06" },
     *     { identifier: "imgly_sticker_shapes_badge_13" },
     *     { identifier: "imgly_sticker_shapes_badge_36" },
     *     { identifier: "imgly_sticker_shapes_badge_08" },
     *     { identifier: "imgly_sticker_shapes_badge_11" },
     *     { identifier: "imgly_sticker_shapes_badge_35" },
     *     { identifier: "imgly_sticker_shapes_badge_28" },
     *     { identifier: "imgly_sticker_shapes_badge_32" },
     *     { identifier: "imgly_sticker_shapes_badge_15" },
     *     { identifier: "imgly_sticker_shapes_badge_20" },
     *     { identifier: "imgly_sticker_shapes_badge_18" },
     *     { identifier: "imgly_sticker_shapes_badge_19" },
     *     { identifier: "imgly_sticker_shapes_arrow_02" },
     *     { identifier: "imgly_sticker_shapes_arrow_03" },
     *     { identifier: "imgly_sticker_shapes_spray_01" },
     *     { identifier: "imgly_sticker_shapes_spray_04" },
     *     { identifier: "imgly_sticker_shapes_spray_03" },
     *   ]},
     * ]
     * ```
     */
    categories?: Array<StickerCategory | ExistingStickerCategory>;
    /**
     * Defines all allowed actions for the sticker tool menu. Only buttons
     * for allowed actions are visible and shown in the given order.
     * @example // Defaults to:
     * ```
     * [CanvasAction.BRING_TO_FRONT, CanvasAction.DUPLICATE, CanvasAction.DELETE]
     * ```
     */
    canvasActions?: Array<CanvasAction.BRING_TO_FRONT | CanvasAction.DUPLICATE | CanvasAction.DELETE | CanvasAction.FLIP>;
    /**
     * Whether categories should be flattened which effectively hides the categories.
     * If this is enabled all filters will be shown in the top-level of the filter selection tool
     * orderer according to their parent category.
     * @example // Defaults to:
     * ```
     * false
     * ```
     */
    flattenCategories?: boolean;
    /**
     * Decide if the categories should be grouped in a collapsible section or should be grouped under a text heading.
     */
    categoryHeaderType?: CategoryHeaderType;
    /**
     * Defines all available colors that can be applied to stickers with a `tintMode`.
     * The color picker is always added.
     */
    colors?: Array<NamedColor>;
    /**
     * color is represented as a number array which encodes as a single gray value or a RGB(A) tuple of floating point values where
     * each channel is defined in the range of `[0, 1]
     */
    defaultTintColor?: Color;
    enableCustomUpload?: boolean;
    customStickerTintMode?: TintMode;
}
