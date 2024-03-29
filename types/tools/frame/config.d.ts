import { NamedColor, Color } from '../../common/color';
import { ExistingItem } from '../../common/existingAsset';
import { FrameAsset } from './asset';
export declare enum AdvancedFrameControlBarItem {
    RemoveFrameButton = "removeFrameButton",
    FrameOpacitySlider = "frameOpacitySlider",
    FrameSizeSlider = "frameSizeSlider",
    FrameColorList = "frameColorList",
    Separator = "separator",
    Items = "items",
    Expandable = "expandable"
}
export declare enum BasicFrameControlBarTabs {
    FrameSize = "frameSize",
    FrameOpacity = "frameOpacity",
    FrameColor = "frameColor"
}
export declare type FrameControlBarExpandable = {
    type: AdvancedFrameControlBarItem.Expandable;
    children: Array<Omit<Omit<AdvancedFrameControlBarItem, AdvancedFrameControlBarItem.Expandable>, AdvancedFrameControlBarItem.Items>>;
};
export declare class FrameConfiguration {
    /**
     * Defines all available frames.
     * New items can be mixed and matched with existing predefined ones.
     * `NONE` is always added for Basic UI
     * @example // Defaults to:
     * ```typescript
     * [
     *    { identifier: "imgly_frame_dia" },
     *    { identifier: "imgly_frame_art_decor" },
     *    { identifier: "imgly_frame_black_passepartout" },
     *    { identifier: "imgly_frame_wood_passepartout" },
     *    { identifier: "imgly_frame_lowpoly_shadow" },
     * ]
     * ```
     */
    items?: Array<FrameAsset | ExistingItem>;
    /**
     * Defines all available colors that can be applied to some frames.
     * The color picker is always added.
     */
    colors?: Array<NamedColor>;
    /**
     * color is represented as a number array which encodes as a single gray value or a RGB(A) tuple of floating point values where
     * each channel is defined in the range of `[0, 1]
     */
    defaultColor?: Color;
    /**
     * default:
     * [
     *  {
     *   type: 'expandable',
     *   children: [
     *    'removeFrameButton',
     *    'frameOpacitySlider',
     *    'frameSizeSlider',
     *    'frameColorList',
     *    'separator',
     *   ],
     *  },
     *  'items',
     * ]
     */
    advancedUIToolControlBarOrder?: Array<AdvancedFrameControlBarItem | FrameControlBarExpandable>;
    /**
     * default:
     * [
     *  'frameOpacity',
     *  'frameSize',
     *  'frameColor',
     * ]
     */
    basicUIToolControlBarTabsOrder?: BasicFrameControlBarTabs[];
}
