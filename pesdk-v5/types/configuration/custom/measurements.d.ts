export declare type FontType = 'uppercase' | 'capitalize' | 'lowercase' | 'none';
export interface FontSystemOption {
    size?: number;
    letterSpacing?: number;
    case?: FontType;
}
export interface FontSystemInterface {
    /** ToolControlBar title */
    headline1?: FontSystemOption;
    /** Dialog title, ToolControlBar subtitles */
    headline2?: FontSystemOption;
    /** Carousel, input text, dropdown text, modal body */
    body?: FontSystemOption;
    /** Card labels, input labels, tooltip */
    label?: FontSystemOption;
    /** Basic ui card label */
    basicUICardLabel?: FontSystemOption;
    /** Contained Buttons and Button base class */
    button1?: FontSystemOption;
    /** Text button, dropdown items, canvas action buttons */
    button2?: FontSystemOption;
    basicUITabLabel?: FontSystemOption;
}
/**
 * The values will accept the pixel amount as a number
 */
export declare type CustomMeasurements = {
    advancedUIToolbar?: {
        width?: number;
        marginBottom?: number;
    };
    advancedUIToolControlBar?: {
        width?: number;
        marginBottom?: number;
    };
    basicUIToolbar?: {
        openHeight?: number;
        closeHeight?: number;
    };
    mainCanvasActionBar?: {
        height?: number;
    };
    canvas?: {
        /** This value can be used in combination with an opaque
         * mainCanvasActionBar.background color to prevent
         * canvas elements to be hidden behind the mainCanvasActionBar  */
        marginTop?: number;
    };
    colorItem?: {
        size?: number;
    };
    fontSystem?: FontSystemInterface;
};
