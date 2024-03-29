import { CanvasAction } from '../../common/canvasAction';
import { NamedColor, Color } from '../../common/color';
import { ExistingItem } from '../../common/existingAsset';
import { FontAsset } from './asset';
export declare enum AdvancedTextControlBarItem {
    NewTextButton = "newTextButton",
    FontFamilyDropdown = "fontFamilyDropdown",
    FontSizeInput = "fontSizeInput",
    TextAligmentList = "textAlignmentList",
    Separator = "separator",
    Inline = "inline",
    TextColorList = "textColorList",
    BackgroundColorList = "backgroundColorList",
    LineSpacingSlider = "lineSpacingSlider"
}
export declare enum BasicTextControlBarTabs {
    FontSize = "fontSize",
    TextAligment = "textAlignment",
    TextColor = "textColor",
    BackgroundColor = "backgroundColor",
    LineSpacing = "lineSpacing"
}
export declare type TextControlBarInline = {
    type: AdvancedTextControlBarItem.Inline;
    children: Array<AdvancedTextControlBarItem.FontSizeInput | AdvancedTextControlBarItem.TextAligmentList>;
};
export declare class TextConfiguration {
    /**
     * Defines all available fonts.
     * New items can be mixed and matched with existing predefined ones.
     * @example // Defaults to:
     * ```typescript
     * [
     *   { 'imgly_font_open_sans_bold' },
     *   { 'imgly_font_aleo_bold' },
     *   { 'imgly_font_amaticsc' },
     *   { 'imgly_font_archivo_black' },
     *   { 'imgly_font_bungee_inline' },
     *   { 'imgly_font_carter_one' },
     *   { 'imgly_font_codystar' },
     *   { 'imgly_font_fira_sans_regular' },
     *   { 'imgly_font_krona_one' },
     *   { 'imgly_font_kumar_one_outline' },
     *   { 'imgly_font_lexend_bold' },
     *   { 'imgly_font_lobster' },
     *   { 'imgly_font_molle' },
     *   { 'imgly_font_monoton' },
     *   { 'imgly_font_nixie_one' },
     *   { 'imgly_font_notable' },
     *   { 'imgly_font_ostrich_sans_black' },
     *   { 'imgly_font_ostrich_sans_bold' },
     *   { 'imgly_font_oswald_semi_bold' },
     *   { 'imgly_font_outfit_bold' },
     *   { 'imgly_font_palanquin_dark_semi_bold' },
     *   { 'imgly_font_poppins' },
     *   { 'imgly_font_permanent_marker' },
     *   { 'imgly_font_roboto_black_italic' },
     *   { 'imgly_font_roboto_light_italic' },
     *   { 'imgly_font_sancreek' },
     *   { 'imgly_font_stint_ultra_expanded' },
     *   { 'imgly_font_trash_hand' },
     *   { 'imgly_font_vt323' },
     *   { 'imgly_font_yeseva_one' },
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
     * Whether the user can use emojis as text input. Emojis are not cross-platform compatible.
     * If you use the serialization feature to share edits across different platforms,
     * emojis will be rendered with the system's local set of emojis and will appear differently.
     */
    allowEmojis?: boolean;
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
     * color is represented as a number array which encodes as a single gray value or a RGB(A) tuple of floating point values where
     * each channel is defined in the range of `[0, 1]
     */
    defaultColor?: Color;
    /**
     * Defines all available colors that can be applied to text background.
     * The color picker is always added.
     */
    backgroundColors?: Array<NamedColor>;
    /**
     * color is represented as a number array which encodes as a single gray value or a RGB(A) tuple of floating point values where
     * each channel is defined in the range of `[0, 1]
     */
    defaultBackgroundColor?: Color;
    /**
     * a text is normally created automatically when it is called. This option can prevent the creation
     */
    addDefaultTextOnEnter?: boolean;
    /**
     * default:
     * [
     * 'newTextButton',
     * 'fontFamilyDropdown',
     * { type: 'inline', children: ['fontSizeInput', 'textAlignmentList'] },
     * 'separator',
     * 'textColorList',
     * 'backgroundColorList',
     * 'separator',
     * 'lineSpacingSlider',
     * ];
     */
    advancedUIToolControlBarOrder?: Array<AdvancedTextControlBarItem | TextControlBarInline>;
    /**
     * default:
     * [
     *  'fontSize',
     *  'textAlignment',
     *  'textColor',
     *  'backgroundColor',
     *  'lineSpacing',
     * ]
     */
    basicUIToolControlBarTabsOrder?: BasicTextControlBarTabs[];
}
