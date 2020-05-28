import { FontAsset } from './asset';
import { CanvasAction } from '../../common/canvasAction';
import { ExistingItem } from '../../common/existingAsset';
export declare class TextConfiguration {
    /**
     * Defines all available fonts.
     * New items can be mixed and matched with existing predefined ones.
     * @example // Defaults to:
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
     */
    fonts?: Array<FontAsset | ExistingItem>;
    /**
     * Defines all allowed actions for the sticker tool menu. Only buttons
     * for allowed actions are visible and shown in the given order.
     * @example // Defaults to:
     * [CanvasAction.EDIT, CanvasAction.BRING_TO_FRONT, CanvasAction.DUPLICATE, CanvasAction.DELETE]
     */
    canvasActions?: Array<CanvasAction.EDIT | CanvasAction.BRING_TO_FRONT | CanvasAction.DUPLICATE | CanvasAction.DELETE>;
}
