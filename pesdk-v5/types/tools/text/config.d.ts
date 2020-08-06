import { FontAsset } from './asset';
import { NamedColor } from '../../common/color';
import { CanvasAction } from '../../common/canvasAction';
import { ExistingItem } from '../../common/existingAsset';
export declare class TextConfiguration {
    /**
     * Defines all available fonts.
     * New items can be mixed and matched with existing predefined ones.
     * @example // Defaults to:
     * ```typescript
     * [
     *   { identifier: "imgly_font_open_sans_bold" },
     *   { identifier: "imgly_font_aleo_bold" },
     *   { identifier: "imgly_font_amaticsc" },
     *   { identifier: "imgly_font_bernier_regular" },
     *   { identifier: "imgly_font_cheque_regular" },
     *   { identifier: "imgly_font_gagalin_regular" },
     *   { identifier: "imgly_font_hagin_caps_thin" },
     *   { identifier: "imgly_font_intro_inline" },
     *   { identifier: "imgly_font_lobster" },
     *   { identifier: "imgly_font_nexa_script" },
     *   { identifier: "imgly_font_ostrich_sans_black" },
     *   { identifier: "imgly_font_ostrich_sans_bold" },
     *   { identifier: "imgly_font_panton_blackitalic_caps" },
     *   { identifier: "imgly_font_panton_lightitalic_caps" },
     *   { identifier: "imgly_font_perfograma" },
     *   { identifier: "imgly_font_trash_hand" },
     * ]
     * ```
     */
    fonts?: Array<FontAsset | ExistingItem>;
    /**
     * Defines all allowed actions for the sticker tool menu. Only buttons
     * for allowed actions are visible and shown in the given order.
     * @example // Defaults to:
     * ```
     * [CanvasAction.EDIT, CanvasAction.BRING_TO_FRONT, CanvasAction.DUPLICATE, CanvasAction.DELETE]
     * ```
     */
    canvasActions?: Array<CanvasAction.EDIT | CanvasAction.BRING_TO_FRONT | CanvasAction.DUPLICATE | CanvasAction.DELETE>;
    /**
     * Add an optional maximum amount of letters for the text
     */
    maxCharacterLimit?: number;
    /**
     * Every time the text gets too long, the editor scale the font size to a pleasant size.
     * If this is enabled the scaling for the font size is disabled
     * @example // Defaults to:
     * ```
     * false
     * ```
     */
    disableAutoScaling?: boolean;
    /**
     * Add an optional minimal font size for the auto scaling
     */
    minFontSizeForAutoScaling?: number;
    /**
     * Defines all available colors that can be applied to text.
     * The color picker is always added.
     */
    colors?: Array<NamedColor>;
    /**
     * Defines all available colors that can be applied to text background.
     * The color picker is always added.
     */
    backgroundColors?: Array<NamedColor>;
}
