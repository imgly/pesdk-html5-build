import { ExistingFocusItem } from './asset';
export declare enum AdvancedFocusControlBarItem {
    RemoveFocusButton = "removeFocusButton",
    FocusIntensitySlider = "focusIntensitySlider",
    Expandable = "expandable",
    Separator = "separator",
    Items = "items"
}
export declare enum BasicFocusControlBarTabs {
    FocusIntensity = "focusIntensity"
}
export declare type FocusControlBarExpandable = {
    type: AdvancedFocusControlBarItem.Expandable;
    children: Array<AdvancedFocusControlBarItem.RemoveFocusButton | AdvancedFocusControlBarItem.FocusIntensitySlider | AdvancedFocusControlBarItem.Separator>;
};
export declare class FocusConfiguration {
    /**
     * Defines all allowed focus tools. The focus tool buttons are shown in the given order.
     * `NONE` is always added in Basic UI
     * @example // Defaults to:
     * ```typescript
     * [
     *  { identifier: FocusTool.RADIAL },
     *  { identifier: FocusTool.MIRRORED },
     *  { identifier: FocusTool.LINEAR },
     *  { identifier: FocusTool.GAUSSIAN },
     * ]
     * ```
     */
    items?: ExistingFocusItem[];
    /**
     * default:
     * [
     *  {
     *   type: 'expandable',
     *   children: [
     *    'removeFocusButton',
     *    'focusIntensitySlider',
     *    'separator',
     *   ],
     *  },
     *  'items',
     * ]
     */
    advancedUIToolControlBarOrder?: Array<AdvancedFocusControlBarItem | FocusControlBarExpandable>;
    /**
     * default:
     * [
     *  'focusIntensity',
     * ]
     */
    basicUIToolControlBarTabsOrder?: BasicFocusControlBarTabs[];
}
