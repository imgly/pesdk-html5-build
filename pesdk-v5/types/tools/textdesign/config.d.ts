import { CanvasAction } from '../../common/canvasAction';
import { ExistingItem } from '../../common/existingAsset';
export declare class TextDesignConfiguration {
    /**
     * Defines all available text designs.
     * New items can be mixed and matched with existing predefined ones.
     * @example // Defaults to:
     * [
     *   { identifier: "imgly_text_design_blocks" },
     *   { identifier: "imgly_text_design_rotated" },
     *   { identifier: "imgly_text_design_blocks_light" },
     *   { identifier: "imgly_text_design_equal_width" },
     *   { identifier: "imgly_text_design_masked" },
     *   { identifier: "imgly_text_design_celebrate" },
     *   { identifier: "imgly_text_design_sunshine" },
     *   { identifier: "imgly_text_design_masked_badge" },
     *   { identifier: "imgly_text_design_blocks_condensed" },
     *   { identifier: "imgly_text_design_celebrate_simple" },
     *   { identifier: "imgly_text_design_equal_width_fat" },
     *   { identifier: "imgly_text_design_watercolor" },
     *   { identifier: "imgly_text_design_particles" },
     *   { identifier: "imgly_text_design_masked_speech_bubble" },
     *   { identifier: "imgly_text_design_masked_speech_bubble_comic" },
     *   { identifier: "imgly_text_design_multiline" },
     * ]
     */
    items: ExistingItem[];
    /**
     * Defines all allowed actions for the sticker tool menu. Only buttons
     * for allowed actions are visible and shown in the given order.
     * @example // Defaults to:
     * [CanvasAction.EDIT, CanvasAction.DUPLICATE, CanvasAction.DELETE, CanvasAction.INVERT]
     */
    canvasActions?: Array<CanvasAction.EDIT | CanvasAction.BRING_TO_FRONT | CanvasAction.DUPLICATE | CanvasAction.DELETE | CanvasAction.INVERT>;
}
