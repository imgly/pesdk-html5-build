/// <reference types="react" />
import { CustomToolLocale } from '../..';
export interface CustomToolProps {
    language: CustomToolLocale;
}
export declare type CustomToolbar = React.ElementType<CustomToolProps>;
export declare class CustomToolConfiguration {
    icon: React.ReactNode;
    toolControlBar: CustomToolbar;
}
