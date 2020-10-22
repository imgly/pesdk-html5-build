import { ExistingFocusItem } from './asset';
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
}
