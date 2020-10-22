import { ExistingItem } from '../../common/existingAsset';
import { OverlayAsset } from './asset';
export declare class OverlayConfiguration {
    /**
     * Defines all available overlays.
     * New items can be mixed and matched with existing predefined ones.
     * `NONE` is always added in Basic UI
     * @example // Defaults to:
     * ```typescript
     * [
     *   { identifier: "imgly_overlay_golden" },
     *   { identifier: "imgly_overlay_lightleak1" },
     *   { identifier: "imgly_overlay_rain" },
     *   { identifier: "imgly_overlay_mosaic" },
     *   { identifier: "imgly_overlay_vintage" },
     *   { identifier: "imgly_overlay_paper" },
     *   { identifier: "imgly_overlay_bokeh" },
     *   { identifier: "imgly_overlay_hearts" },
     *   { identifier: "imgly_overlay_lightleak2" },
     *   { identifier: "imgly_overlay_wood" },
     *   { identifier: "imgly_overlay_chop" },
     *   { identifier: "imgly_overlay_metal" },
     *   { identifier: "imgly_overlay_painting" },
     *   { identifier: "imgly_overlay_grain" },
     *   { identifier: "imgly_overlay_clouds" },
     *   { identifier: "imgly_overlay_wall1" },
     *   { identifier: "imgly_overlay_wall2" },
     * ]
     * ```
     */
    items: Array<OverlayAsset | ExistingItem>;
}
