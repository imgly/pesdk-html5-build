import { Tool } from '../../common/tool';
export interface ModalLocale {
    heading?: string;
    body?: string;
}
export interface ActionModalLocale extends ModalLocale {
    buttonYes?: string;
    buttonNo?: string;
    headingDelimiter?: string;
}
export interface SpriteHistoryBase {
    add?: string;
    resize?: string;
    position?: string;
    rotation?: string;
    delete?: string;
    order?: string;
}
export interface LanguageInterface {
    common?: CommonLocale;
    mainCanvasActions?: MainCanvasActionsLocale;
    infoModals?: InfoLocale;
    errorModals?: ErrorLocale;
    warningModals?: WarningLocale;
    [Tool.LIBRARY]?: Partial<LibraryLocale>;
    [Tool.FILTER]?: Partial<FilterLocale>;
    [Tool.ADJUSTMENT]?: Partial<AdjustmentsLocale>;
    [Tool.FOCUS]?: Partial<FocusLocale>;
    [Tool.OVERLAY]?: Partial<OverlayLocale>;
    [Tool.STICKER]?: Partial<StickerLocale>;
    [Tool.TEXT]?: Partial<TextLocale>;
    [Tool.TEXT_DESIGN]?: Partial<TextDesignLocale>;
    [Tool.FRAME]?: Partial<FrameLocale>;
    [Tool.TRANSFORM]?: Partial<TransformLocale>;
    [Tool.BRUSH]?: Partial<BrushLocale>;
    [Tool.CUSTOM]?: Partial<CustomToolLocale>;
}
export interface CommonLocale {
    error?: string;
    warning?: string;
    color?: ColorLocale;
}
export interface MainCanvasActionsLocale {
    buttonExport?: string;
    buttonUndo?: string;
    buttonRedo?: string;
    buttonClose?: string;
}
export interface InfoLocale {
    loading?: ActionModalLocale;
    exporting?: ActionModalLocale;
    resizing?: ActionModalLocale;
    saving?: ActionModalLocale;
    loadingFonts?: ActionModalLocale;
    stickerLoading?: ActionModalLocale;
}
export interface ErrorLocale {
    imageLoading?: ActionModalLocale;
    rendering?: ActionModalLocale;
    fontLoading?: ActionModalLocale;
    webcamUnavailable?: ActionModalLocale;
    invalidFileType?: ActionModalLocale;
    stickerLoading?: ActionModalLocale;
    unexpectedError?: ActionModalLocale;
}
export interface WarningLocale {
    imageResized?: ActionModalLocale;
    discardChanges?: ActionModalLocale;
    unsavedChanges?: ActionModalLocale;
    unsupportedSerializationVersion?: ActionModalLocale;
    unsupportedWebGLRenderer?: ActionModalLocale;
}
export interface LibraryLocale {
    title?: string;
    controls?: {
        buttonUpload?: string;
        buttonWebcamOpen?: string;
        buttonWebcamClose?: string;
        placeholderSearch?: string;
        noResults?: string;
    };
}
export interface FilterLocale {
    title?: string;
    controls?: {
        buttonReset?: string;
        sliderIntensity?: string;
    };
    categories?: {
        imgly_filter_category_duotone?: string;
        imgly_filter_category_bw?: string;
        imgly_filter_category_vintage?: string;
        imgly_filter_category_smooth?: string;
        imgly_filter_category_cold?: string;
        imgly_filter_category_warm?: string;
        imgly_filter_category_legacy?: string;
    };
    items?: {
        imgly_lut_celsius?: string;
        imgly_lut_chest?: string;
        imgly_lut_fixie?: string;
        imgly_lut_fridge?: string;
        imgly_lut_front?: string;
        imgly_lut_k2?: string;
        imgly_lut_mellow?: string;
        imgly_lut_sin?: string;
        imgly_lut_texas?: string;
        imgly_lut_ad1920?: string;
        imgly_lut_ancient?: string;
        imgly_lut_bleached?: string;
        imgly_lut_bleachedblue?: string;
        imgly_lut_blues?: string;
        imgly_lut_blueshadows?: string;
        imgly_lut_breeze?: string;
        imgly_lut_bw?: string;
        imgly_lut_classic?: string;
        imgly_lut_colorful?: string;
        imgly_lut_cool?: string;
        imgly_lut_cottoncandy?: string;
        imgly_lut_creamy?: string;
        imgly_lut_eighties?: string;
        imgly_lut_elder?: string;
        imgly_lut_evening?: string;
        imgly_lut_fall?: string;
        imgly_lut_food?: string;
        imgly_lut_glam?: string;
        imgly_lut_gobblin?: string;
        imgly_lut_highcarb?: string;
        imgly_lut_highcontrast?: string;
        imgly_lut_k1?: string;
        imgly_lut_k6?: string;
        imgly_lut_kdynamic?: string;
        imgly_lut_keen?: string;
        imgly_lut_lenin?: string;
        imgly_lut_litho?: string;
        imgly_lut_lomo?: string;
        imgly_lut_lomo100?: string;
        imgly_lut_lucid?: string;
        imgly_lut_neat?: string;
        imgly_lut_nogreen?: string;
        imgly_lut_orchid?: string;
        imgly_lut_pale?: string;
        imgly_lut_pitched?: string;
        imgly_lut_plate?: string;
        imgly_lut_pola669?: string;
        imgly_lut_polasx?: string;
        imgly_lut_pro400?: string;
        imgly_lut_quozi?: string;
        imgly_lut_sepiahigh?: string;
        imgly_lut_settled?: string;
        imgly_lut_seventies?: string;
        imgly_lut_soft?: string;
        imgly_lut_steel?: string;
        imgly_lut_summer?: string;
        imgly_lut_sunset?: string;
        imgly_lut_tender?: string;
        imgly_lut_twilight?: string;
        imgly_lut_winter?: string;
        imgly_lut_x400?: string;
        imgly_duotone_desert?: string;
        imgly_duotone_peach?: string;
        imgly_duotone_clash?: string;
        imgly_duotone_plum?: string;
        imgly_duotone_breezy?: string;
        imgly_duotone_deepblue?: string;
        imgly_duotone_frog?: string;
        imgly_duotone_sunset?: string;
    };
}
export interface AdjustmentsLocale {
    title?: string;
    controls?: {
        buttonReset?: string;
    };
    categories?: {
        basics?: string;
        refinements?: string;
    };
    items?: {
        brightness?: string;
        saturation?: string;
        contrast?: string;
        sharpness?: string;
        gamma?: string;
        clarity?: string;
        exposure?: string;
        shadows?: string;
        highlights?: string;
        whites?: string;
        blacks?: string;
        temperature?: string;
    };
}
export interface FocusLocale {
    title?: string;
    controls?: {
        buttonReset?: string;
        sliderIntensity?: string;
    };
    items?: {
        radial?: string;
        mirrored?: string;
        linear?: string;
        gaussian?: string;
    };
    /**
     * @ignore
     */
    history?: {
        focusPosition?: string;
        focusSize?: string;
    };
}
export interface OverlayLocale {
    title?: string;
    controls?: {
        buttonReset?: string;
        sliderOpacity?: string;
        carouselBlendMode?: string;
        blendModeNormal?: string;
        blendModeOverlay?: string;
        blendModeHardLight?: string;
        blendModeSoftLight?: string;
        blendModeMultiply?: string;
        blendModeDarken?: string;
        blendModeLighten?: string;
        blendModeScreen?: string;
        blendModeColorBurn?: string;
        tabOpacity?: string;
        tabBlendMode?: string;
    };
    items?: {
        imgly_overlay_bokeh?: string;
        imgly_overlay_chop?: string;
        imgly_overlay_clouds?: string;
        imgly_overlay_golden?: string;
        imgly_overlay_grain?: string;
        imgly_overlay_hearts?: string;
        imgly_overlay_lightleak1?: string;
        imgly_overlay_lightleak2?: string;
        imgly_overlay_metal?: string;
        imgly_overlay_mosaic?: string;
        imgly_overlay_painting?: string;
        imgly_overlay_paper?: string;
        imgly_overlay_rain?: string;
        imgly_overlay_vintage?: string;
        imgly_overlay_wall1?: string;
        imgly_overlay_wall2?: string;
        imgly_overlay_wood?: string;
    };
}
export interface StickerLocale {
    title?: string;
    controls?: {
        buttonUpload?: string;
        sliderOpacity?: string;
        selectColor?: string;
        tabColor?: string;
        tabOpacity?: string;
    };
    categories?: {
        imgly_sticker_emoticons?: string;
        imgly_sticker_shapes?: string;
        imgly_sticker_custom?: string;
    };
    items?: {
        imgly_sticker_emoticons_alien?: string;
        imgly_sticker_emoticons_angel?: string;
        imgly_sticker_emoticons_angry?: string;
        imgly_sticker_emoticons_anxious?: string;
        imgly_sticker_emoticons_asleep?: string;
        imgly_sticker_emoticons_attention?: string;
        imgly_sticker_emoticons_baby_chicken?: string;
        imgly_sticker_emoticons_batman?: string;
        imgly_sticker_emoticons_beer?: string;
        imgly_sticker_emoticons_black?: string;
        imgly_sticker_emoticons_blue?: string;
        imgly_sticker_emoticons_blush?: string;
        imgly_sticker_emoticons_boxer?: string;
        imgly_sticker_emoticons_business?: string;
        imgly_sticker_emoticons_chicken?: string;
        imgly_sticker_emoticons_cool?: string;
        imgly_sticker_emoticons_cry?: string;
        imgly_sticker_emoticons_deceased?: string;
        imgly_sticker_emoticons_devil?: string;
        imgly_sticker_emoticons_duckface?: string;
        imgly_sticker_emoticons_furious?: string;
        imgly_sticker_emoticons_grin?: string;
        imgly_sticker_emoticons_guitar?: string;
        imgly_sticker_emoticons_harry_potter?: string;
        imgly_sticker_emoticons_hippie?: string;
        imgly_sticker_emoticons_hitman?: string;
        imgly_sticker_emoticons_humourous?: string;
        imgly_sticker_emoticons_idea?: string;
        imgly_sticker_emoticons_impatient?: string;
        imgly_sticker_emoticons_kiss?: string;
        imgly_sticker_emoticons_kisses?: string;
        imgly_sticker_emoticons_laugh?: string;
        imgly_sticker_emoticons_loud_cry?: string;
        imgly_sticker_emoticons_loving?: string;
        imgly_sticker_emoticons_masked?: string;
        imgly_sticker_emoticons_music?: string;
        imgly_sticker_emoticons_nerd?: string;
        imgly_sticker_emoticons_ninja?: string;
        imgly_sticker_emoticons_not_speaking_to_you?: string;
        imgly_sticker_emoticons_pig?: string;
        imgly_sticker_emoticons_pumpkin?: string;
        imgly_sticker_emoticons_question?: string;
        imgly_sticker_emoticons_rabbit?: string;
        imgly_sticker_emoticons_sad?: string;
        imgly_sticker_emoticons_sick?: string;
        imgly_sticker_emoticons_skateboard?: string;
        imgly_sticker_emoticons_skull?: string;
        imgly_sticker_emoticons_sleepy?: string;
        imgly_sticker_emoticons_smile?: string;
        imgly_sticker_emoticons_smoking?: string;
        imgly_sticker_emoticons_sobbing?: string;
        imgly_sticker_emoticons_star?: string;
        imgly_sticker_emoticons_steaming_furious?: string;
        imgly_sticker_emoticons_sunbathing?: string;
        imgly_sticker_emoticons_tired?: string;
        imgly_sticker_emoticons_tongue_out_wink?: string;
        imgly_sticker_emoticons_wave?: string;
        imgly_sticker_emoticons_wide_grin?: string;
        imgly_sticker_emoticons_wink?: string;
        imgly_sticker_emoticons_wrestler?: string;
        imgly_sticker_shapes_arrow_02?: string;
        imgly_sticker_shapes_arrow_03?: string;
        imgly_sticker_shapes_badge_01?: string;
        imgly_sticker_shapes_badge_11?: string;
        imgly_sticker_shapes_badge_12?: string;
        imgly_sticker_shapes_badge_13?: string;
        imgly_sticker_shapes_badge_15?: string;
        imgly_sticker_shapes_badge_18?: string;
        imgly_sticker_shapes_badge_19?: string;
        imgly_sticker_shapes_badge_20?: string;
        imgly_sticker_shapes_badge_28?: string;
        imgly_sticker_shapes_badge_32?: string;
        imgly_sticker_shapes_badge_35?: string;
        imgly_sticker_shapes_badge_36?: string;
        imgly_sticker_shapes_badge_04?: string;
        imgly_sticker_shapes_badge_06?: string;
        imgly_sticker_shapes_badge_08?: string;
        imgly_sticker_shapes_spray_01?: string;
        imgly_sticker_shapes_spray_03?: string;
        imgly_sticker_shapes_spray_04?: string;
    };
    canvasActions?: {
        buttonDelete?: string;
        buttonBringToFront?: string;
        buttonDuplicate?: string;
        buttonFlipHorizontal?: string;
        buttonFlipVertical?: string;
    };
    /**
     * @ignore
     */
    history?: {
        color?: string;
        opacity?: string;
        flip?: string;
    } & SpriteHistoryBase;
}
export interface TextLocale {
    title?: string;
    controls?: {
        buttonNew?: string;
        dropdownFontFamily?: string;
        textFontSize?: string;
        selectAlignment?: string;
        selectFontColor?: string;
        selectBackgroundColor?: string;
        sliderLineSpacing?: string;
        tabColor?: string;
        tabBgColor?: string;
        tabAlignment?: string;
        tabLineHeight?: string;
        tabFontSize?: string;
    };
    canvasControls?: {
        placeholderText?: string;
        buttonSave?: string;
        buttonClose?: string;
        inputText?: string;
    };
    canvasActions?: {
        buttonEdit?: string;
        buttonDelete?: string;
        buttonBringToFront?: string;
        buttonDuplicate?: string;
    };
    /**
     * @ignore
     */
    history?: {
        alignment?: string;
        textColor?: string;
        backgroundColor?: string;
        fontFamily?: string;
        fontStyle?: string;
        lineSpacing?: string;
        width?: string;
        edit?: string;
    } & SpriteHistoryBase;
}
export interface TextDesignLocale {
    title?: string;
    controls?: {
        buttonNew?: string;
        buttonShuffle?: string;
        selectColor?: string;
        tabColor?: string;
        tabShuffle?: string;
    };
    canvasControls?: {
        placeholderText?: string;
        buttonSave?: string;
        buttonClose?: string;
        inputText?: string;
    };
    canvasActions?: {
        buttonEdit?: string;
        buttonInvert?: string;
        buttonDelete?: string;
        buttonBringToFront?: string;
        buttonDuplicate?: string;
    };
    /**
     * @ignore
     */
    history?: {
        color?: string;
        shuffle?: string;
        invert?: string;
        padding?: string;
        edit?: string;
    } & SpriteHistoryBase;
}
export interface FrameLocale {
    title?: string;
    controls?: {
        buttonReset?: string;
        sliderOpacity?: string;
        sliderSize?: string;
        selectColor?: string;
        tabColor?: string;
        tabOpacity?: string;
        tabSize?: string;
    };
    items?: {
        imgly_frame_dia?: string;
        imgly_frame_art_decor?: string;
        imgly_frame_black_passepartout?: string;
        imgly_frame_lowpoly_shadow?: string;
        imgly_frame_wood_passepartout?: string;
    };
}
export interface TransformLocale {
    title?: string;
    controls?: {
        buttonReset?: string;
        checkboxKeepResolution?: string;
        inputCropSize?: string;
        inputHeight?: string;
        inputWidth?: string;
        tabFlipAndRotate?: string;
        tabResolution?: string;
        tabCropSize?: string;
    };
    categories?: {
        imgly_transforms_common?: string;
        imgly_transforms_facebook?: string;
        imgly_transforms_twitter?: string;
        imgly_transforms_instagram?: string;
    };
    items?: {
        imgly_transform_common_custom?: string;
        imgly_transform_common_square?: string;
        imgly_transform_common_4?: string;
        imgly_transform_common_16?: string;
        imgly_transform_common_3?: string;
        imgly_transform_common_9?: string;
        imgly_transform_facebook_profile?: string;
        imgly_transform_facebook_title?: string;
        imgly_transform_facebook_post?: string;
        imgly_transform_instagram_story?: string;
        imgly_transform_instagram_landscape?: string;
        imgly_transform_instagram_portrait?: string;
        imgly_transform_instagram_square?: string;
        imgly_transform_twitter_profile?: string;
        imgly_transform_twitter_title?: string;
        imgly_transform_twitter_post?: string;
    };
    transformActions?: {
        buttonFlipHorizontal?: string;
        buttonFlipVertical?: string;
        buttonRotateClockwise?: string;
        buttonRotateAntiClockwise?: string;
    };
}
export interface BrushLocale {
    title?: string;
    controls?: {
        buttonReset?: string;
        sliderSize?: string;
        sliderHardness?: string;
        selectColor?: string;
        tabSize?: string;
        tabHardness?: string;
        tabColor?: string;
    };
    /**
     * @ignore
     */
    history?: {
        brushStroke?: string;
    };
}
export interface CustomToolLocale {
    [key: string]: string;
}
export interface ColorPickerLocale {
    hex?: string;
    r?: string;
    g?: string;
    b?: string;
    sliderHue?: string;
    sliderOpacity?: string;
}
export interface ColorLocale {
    title?: string;
    colorPicker?: ColorPickerLocale;
}
export interface CustomLanguages {
    [key: string]: LanguageInterface;
}
