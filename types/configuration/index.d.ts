import { CanvasAction } from '../common/canvasAction';
import { Tool } from '../common/tool';
import { Omit } from '../common/utils';
import { AdjustmentConfiguration } from '../tools/adjustment';
import { BrushConfiguration } from '../tools/brush';
import { CustomToolConfiguration } from '../tools/custom';
import { FilterConfiguration } from '../tools/filter';
import { FocusConfiguration } from '../tools/focus';
import { FrameConfiguration } from '../tools/frame';
import { LibraryConfiguration } from '../tools/library';
import { OverlayConfiguration } from '../tools/overlay';
import { StickerConfiguration } from '../tools/sticker';
import { TextConfiguration } from '../tools/text';
import { TextDesignConfiguration } from '../tools/textdesign';
import { TransformConfiguration } from '../tools/transform';
import { CustomConfiguration } from './custom';
import { EngineConfiguration } from './engine';
import { ExportConfiguration } from './feature/export';
import { SnappingConfiguration } from './feature/snapping';
export declare type ExistingTheme = 'light' | 'dark';
export declare type ExistingLanguage = 'en' | 'de';
export declare type LayoutType = 'basic' | 'advanced';
export interface AssetResolver {
    /**
     * Configure assets item path
     * @example item: ./emoticons/imgly_sticker_emoticons_grin.svg, category: sticker
     * @example item: ./items/imgly_duotone_desert.jpg, category: filter
     */
    item?: (item: string, category: string) => string;
    /**
     * Change the final path result
     */
    path?: (fullPath: string, category: string, item?: string) => string;
}
/**
 * Configuration options and asset definitions for image editing tasks.
 */
export declare class Configuration {
    /**
     * The PESDK license. If no license (or an invalid license) is provided, the
     * engine will render a watermark over the preview and export output.
     */
    license: string;
    /** relevant only for AdvancedUI */
    order?: 'default' | 'reverse';
    /**
     * element querySelector - the element querySelector where the editor should be rendered to
     * DOMElement - The element the editor should be rendered to
     * if HTMLDivElement, component will be rendered to that container
     * This is a required field, no default value
     */
    container: string | HTMLDivElement;
    /**
     * The image that should be loaded and displayed initially
     * accepts url or HTMLImageElement or imagePath relative to assets folder
     * This is a required field, no default value
     */
    image: string | HTMLImageElement;
    /**
     * The layout that should be loaded
     * accepts url or 'advanced' | 'basic'
     * @example // Defaults to:
     * ```
     * 'advanced'
     * ```
     */
    layout?: 'advanced' | 'basic';
    /**
     * Defines the language that should be used to label the user interface.
     * @example // Defaults to:
     * ```
     * 'en'
     * ```
     */
    language?: ExistingLanguage | string;
    /**
     * Defines the theme that should be used to style the user interface.
     * @example // Defaults to:
     * ```
     * 'dark'
     * ```
     */
    theme?: ExistingTheme | string;
    /**
     * The base URL for all assets. Should be the absolute path to your assets directory
     * @example // Defaults to:
     * ```
     * assets/
     * ```
     */
    assetBaseUrl?: string;
    /**
     * Asset resolver helps dynamically change item path or concatenated full path
     */
    assetResolver?: AssetResolver;
    /**
     * Defines all allowed actions for the main screen that are displayed in the given order as buttons on the canvasBar.
     * @example // Defaults to:
     * ```
     * [CanvasAction.UNDO, CanvasAction.REDO, CanvasAction.CLOSE, CanvasAction.EXPORT]
     * ```
     */
    mainCanvasActions?: Array<CanvasAction.UNDO | CanvasAction.REDO | CanvasAction.CLOSE | CanvasAction.EXPORT | undefined>;
    /** Should a message be displayed when the image has been scaled down for performance reasons */
    displayResizeWarning?: boolean;
    /** Should a message be displayed when when Photoeditor SDK is exited with close event */
    displayCloseWarning?: boolean;
    /** Should a message be displayed when when Photoeditor SDK is exited with close event */
    displayCanvasRendererWarning?: boolean;
    /** Should the toolcontrolbartitle be displayed (advancedui only) */
    displayToolControlBarTitle?: boolean;
    /**
     * When set to `true`, the user is forced to crop the asset to one of the allowed crop ratios in
     * `transform.items` before being able to use other features of the editor.
     * The transform tool will only be presented if the image does not already fit one of the allowed
     * aspect ratios. It will be presented automatically, if the user changes the orientation of the asset
     * and the result does not match an allowed aspect ratio.
     *
     * @example // Defaults to:
     * ```
     * false
     * ```
     */
    forceCrop?: boolean;
    /**
     * Controls if the user can zoom the preview image.
     * @example // Defaults to:
     * ```
     * true
     * ```
     */
    enableZoom?: boolean;
    /**
     * Applicable only to Advanced UI
     * decides which tool to keep open at the beginning
     * @example // Defaults to:
     * ```
     * Tool.FILTER
     * ```
     */
    defaultTool?: Tool;
    /**
     * The tools to display in the main menu.
     * @example // Defaults to:
     * ```typescript
     * [
     *  Tool.LIBRARY,
     * [ Tool.TRANSFORM, Tool.FILTER, Tool.ADJUSTMENT ],
     * [ Tool.FOCUS, Tool.FRAME, Tool.OVERLAY ],
     * [ Tool.TEXT, Tool.TEXT_DESIGN, Tool.STICKER, Tool.BRUSH ],
     * ]
     * ```
     */
    tools?: Array<Tool | Tool[]>;
    /**
     * Configuration options for `Tool.FILTER`.
     */
    [Tool.FILTER]?: FilterConfiguration;
    /**
     * Configuration options for `Tool.FOCUS`.
     */
    [Tool.FOCUS]?: FocusConfiguration;
    /**
     * Configuration options for `Tool.ADUSTMENT`.
     */
    [Tool.ADJUSTMENT]?: AdjustmentConfiguration;
    /**
     * Configuration options for `Tool.LIBRARY`.
     */
    [Tool.LIBRARY]?: LibraryConfiguration;
    /**
     * Configuration options for `Tool.OVERLAY`.
     */
    [Tool.OVERLAY]?: OverlayConfiguration;
    /**
     * Configuration options for `Tool.STICKER`.
     */
    [Tool.STICKER]?: StickerConfiguration;
    /**
     * Configuration options for `Tool.TEXT`.
     */
    [Tool.TEXT]?: TextConfiguration;
    /**
     * Configuration options for `Tool.TEXT_DESIGN`.
     */
    [Tool.TEXT_DESIGN]?: TextDesignConfiguration;
    /**
     * Configuration options for `Tool.FRAME`.
     */
    [Tool.FRAME]?: FrameConfiguration;
    /**
     * Configuration options for `Tool.BRUSH`.
     */
    [Tool.BRUSH]?: BrushConfiguration;
    /**
     * Configuration options for `Tool.TRANSFORM`.
     */
    [Tool.TRANSFORM]?: TransformConfiguration;
    /**
     * Configuration options for `Tool.CUSTOM`
     */
    [Tool.CUSTOM]?: CustomToolConfiguration;
    /**
     * Global snapping options for all sprites, e.g., stickers, texts, and text designs.
     */
    snapping?: SnappingConfiguration;
    export?: ExportConfiguration;
    /**
     * AssetProvider is needed when standalone engine is being used,
     * in case of UIs, Editor does the work of creating assetProvider
     */
    engine?: Omit<Omit<EngineConfiguration, 'assetProvider'>, 'license'>;
    /**
     * Customization options.
     */
    custom?: CustomConfiguration;
}
