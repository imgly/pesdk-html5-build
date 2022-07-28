/// <reference types="react" />
import { CustomToolLocale } from '../../configuration/custom/language';
export interface CustomToolProps {
    language: CustomToolLocale;
}
export declare type CustomToolbar = React.ElementType<CustomToolProps>;
export declare class CustomToolConfiguration {
    icon: React.ElementType;
    toolControlBar: CustomToolbar;
    measurements?: {
        advancedUIToolControlBar?: {
            width?: number;
        };
    };
}
