/// <reference types="react" />
import { CustomToolControlBarProps } from '../base/toolControlBar';
export interface CustomAdvancedToolControlBarProps extends CustomToolControlBarProps {
    reverse: boolean;
}
export declare type CustomAdvancedToolControlBar = React.ComponentType<CustomAdvancedToolControlBarProps>;
export interface CustomAdvancedToolControlSectionBarProps {
    show: boolean;
}
