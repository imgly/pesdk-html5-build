import { NamedColor } from '../../common/color';
export declare class BrushConfiguration {
    /**
     * Defines all available colors that can be applied to the brush.
     * The color picker is always added.
     */
    colors?: Array<NamedColor>;
    defaultSize?: NonNullable<number>;
    defaultHardness?: NonNullable<number>;
}
