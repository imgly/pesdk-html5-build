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
};
