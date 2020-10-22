/**
 * You can customize your PhotoEditorSDK color theme with the following customisations
 * You can use an existing color theme ('dark'/ 'light') 'dark' by default
 *
 * User Interface
 *
 * ![Sections](../images/sections.png "Sections")
 * 1. Toolbar
 * 2. Tool Control Bar
 * 3. Canvas Action Bar
 * 4. Sprites Canvas bar
 * 5. Canvas Container
 */
/**
 * UI can be customised on 3 levels
 * Shape
 * Typegraphy
 * Color
 */
/** Color strings can be hex, rgb, rgba, hsl and gradients */
interface Font {
    fontFamily: string;
    /**
     * Most users load font while initialising their app
     * In that case, they can choose to skip loading it again
     */
    skipLoading?: boolean;
}
export interface WebFont extends Font {
    fontURI: string;
    format: 'woff' | 'woff2' | 'truetype' | 'opentype' | 'embedded-opentype' | 'svg';
    provider: 'file';
}
export interface GoogleFont extends Font {
    provider: 'google';
}
export interface ThemeInterface {
    shape?: {
        /**
         * Border Radius for small sized components
         * Color Selection, Checkbox
         */
        radiusSmall?: number;
        /**
         * Border Radius for medium sized components
         * Button, Tooltip, Cards, Dropdown, Color Picker, Input
         */
        radiusMedium?: number;
        /**
         * Border Radius for large sized components
         * Modal
         */
        radiusLarge?: number;
    };
    typography?: WebFont | GoogleFont;
    /** Base Colors */
    /** Overall foreground color. This color is used if not overriden by a component */
    background?: string;
    /** Overall background color. This color is used if not overriden by a component */
    foreground?: string;
    /** Overall outline color for focused elements. This color is only used if not overridden by a component */
    focusOutlineColor?: string;
    primary?: string;
    warning?: string;
    error?: string;
    success?: string;
    /** Scrollbar handle color, track color is transparent */
    scrollbar?: {
        handleColor?: string;
    };
    /** Portals */
    modal?: {
        background?: string;
        bodyForeground?: string;
        headerForeground?: string;
        backdrop?: string;
    };
    tooltip?: {
        background?: string;
        foreground?: string;
    };
    webcam?: {
        backdrop?: string;
        floatButton?: string;
        background?: string;
    };
    /** Components */
    /** Button colors in different states */
    /** https://material.io/components/buttons/ */
    button?: {
        /** High Emphasis button - primary variant e.g.: Export button */
        containedPrimaryBackground?: string;
        containedPrimaryForeground?: string;
        /** Medium Emphasis button - primary variant e.g.: New Text, Text Design, Upload on toolControlBar */
        outlinedPrimaryBackground?: string;
        outlinedPrimaryForeground?: string;
        /** Medium Emphasis button - secondary variant e.g.: Remove Filter, Overlay, Shuffle Text Design */
        outlinedSecondaryBackground?: string;
        outlinedSecondaryForeground?: string;
        outlinedInactiveOverlayColor?: string;
        outlinedBorderColor?: string;
        /** Low Emphasis button - primary variant e.g.: primary button in modal */
        textPrimaryForeground?: string;
        /** Low Emphasis button - secondary variant e.g.: secondary button in modal, undo, redo, Carousel navigators, alignment buttons */
        textSecondaryForeground?: string;
        textInactiveOpacity?: string;
        /** States */
        activeForeground?: string;
        hoverOverlayColor?: string;
    };
    card?: {
        background?: string;
        foreground?: string;
        /** card in PESDK usually has a label */
        labelForeground?: string;
        labelBackground?: string;
        /** states */
        activeBorderColor?: string;
        activeOverlayColor?: string;
        inactiveOverlayColor?: string;
        hoverOverlayColor?: string;
    };
    /** Input Elements */
    checkbox?: {
        background?: string;
        foreground?: string;
        /** States */
        activeForeground?: string;
        activeBackground?: string;
        inactiveOpacity?: string;
        hoverOpacity?: string;
    };
    dropdown?: {
        background?: string;
        foreground?: string;
        borderColor?: string;
        caretColor?: string;
        listBackground?: string;
        listBorderColor?: string;
        listForeground?: string;
        /**
         * According to material design
         * shadows are applied for dark theme
         * they don't really work for light theme
         */
        listShadow?: string;
        /** States */
        listItemHoverBackground?: string;
        hoverBorderColor?: string;
        inactiveOpacity?: string;
    };
    textInput?: {
        foreground?: string;
        background?: string;
        borderColor?: string;
        /** States */
        hoverBorderColor?: string;
        inactiveOpacity?: string;
    };
    slider?: {
        trackColor?: string;
        thumbBackground?: string;
        thumbBorderColor?: string;
        /** States */
        activeTrackColor?: string;
        inactiveOpacity?: string;
        hoverOpacity?: string;
    };
    selectColor?: {
        activeBorderColor?: string;
        inactiveOpacity?: string;
    };
    colorPicker?: {
        listBackground?: string;
        listShadow?: string;
        /** control color, eg: thumb color  */
        controlsColor?: string;
        inputBorderColor?: string;
    };
    colorItem?: {
        borderRadius?: string;
        margin?: string;
    };
    /** relevant only for Basic UI */
    tabTitle?: {
        background?: string;
        foreground?: string;
        /** States */
        activeForeground?: string;
        activeBackground?: string;
        activeBorderColor?: string;
    };
    /** App sections */
    toolbar?: {
        foreground?: string;
        background?: string;
        activeBackground?: string;
        activeForeground?: string;
        borderColor?: string;
        border?: string;
    };
    toolControlBar?: {
        background?: string;
        borderColor?: string;
        /** The shadow can be used to create a better seperation between control bar and the canvas */
        shadow?: string;
        separatorColor?: string;
        titleForeground?: string;
        inputLabelForeground?: string;
        inputLabelInactiveOpacity?: string;
    };
    /**
     * top bar in advanced UI
     */
    mainCanvasActionBar?: {
        background?: string;
        foreground?: string;
        borderColor?: string;
    };
    canvasActionBar?: {
        /** Button Group e.g.: Sprite Actions */
        background?: string;
        foreground?: string;
        separatorColor?: string;
        borderRadius?: number;
    };
    canvas?: {
        background?: string;
        /** control color, eg: knob or crop control color  */
        controlsColor?: string;
        /** control outline color, eg: sprite or focus border */
        controlsOutline?: string;
        /** backdrop color in crop */
        cropBackdrop?: string;
    };
    snapping?: {
        positionGuideColor?: string;
        rotationGuideColor?: string;
    };
    transform?: {
        crops?: {
            main?: string;
            highlight?: string;
            shadow?: string;
        };
    };
}
export interface CustomThemes {
    [key: string]: ThemeInterface;
}
export {};
