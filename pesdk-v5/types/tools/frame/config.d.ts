import { FrameAsset } from './asset';
import { ExistingItem } from '../../common/existingAsset';
export declare class FrameConfiguration {
    /**
     * Defines all available frames.
     * New items can be mixed and matched with existing predefined ones.
     * `NONE` is always added for Basic UI
     * @example // Defaults to:
     * [
     *    { identifier: "imgly_frame_dia" },
     *    { identifier: "imgly_frame_art_decor" },
     *    { identifier: "imgly_frame_black_passepartout" },
     *    { identifier: "imgly_frame_wood_passepartout" },
     *    { identifier: "imgly_frame_lowpoly_shadow" },
     * ]
     */
    items?: Array<FrameAsset | ExistingItem>;
}
