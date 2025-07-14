import { CustomToolLocale } from '../../configuration/custom/language';
export interface CustomToolProps {
    language: CustomToolLocale;
}
export type CustomToolbar = React.ElementType<CustomToolProps>;
export declare class CustomToolConfiguration {
    icon: React.ElementType;
    toolControlBar: CustomToolbar;
    measurements?: {
        advancedUIToolControlBar?: {
            width?: number;
        };
    };
}
