import { NamedColor, Color } from '../../common/color';
export declare enum AdvancedBrushControlBarItem {
    RemoveBrushButton = "removeBrushButton",
    BrushColorList = "brushColorList",
    BrushSizeSlider = "brushSizeSlider",
    BrushHardnessSlider = "brushHardnessSlider",
    Expandable = "expandable",
    Separator = "separator"
}
export declare enum BasicBrushControlBarTabs {
    BrushSize = "brushSize",
    BrushHardness = "brushHardness",
    BrushColor = "brushColor"
}
export declare type BrushControlBarExpandable = {
    type: AdvancedBrushControlBarItem.Expandable;
    children: Array<Omit<AdvancedBrushControlBarItem, AdvancedBrushControlBarItem.Expandable>>;
};
export declare class BrushConfiguration {
    /**
     * Defines all available colors that can be applied to the brush.
     * The color picker is always added.
     */
    colors?: Array<NamedColor>;
    defaultSize?: NonNullable<number>;
    defaultHardness?: NonNullable<number>;
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
     *    'removeBrushButton',
     *    'separator',
     *   ],
     *  },
     *  'brushHardnessSlider',
     *  'brushSizeSlider',
     *  'brushColorList',
     * ]
     */
    advancedUIToolControlBarOrder?: Array<AdvancedBrushControlBarItem | BrushControlBarExpandable>;
    /**
     * default:
     * [
     *  'brushColor',
     *  'brushSize',
     *  'brushHardness',
     * ]
     */
    basicUIToolControlBarTabsOrder?: BasicBrushControlBarTabs[];
}
