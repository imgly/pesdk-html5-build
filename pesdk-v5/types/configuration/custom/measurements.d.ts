/**
 * The values will accept the pixel amount as a number
 */
export declare type CustomMeasurements = {
    advancedUIToolbar?: {
        width?: number;
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
};
