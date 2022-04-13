/// <reference types="react" />
import { CustomToolbarProps } from '../base/toolbar';
export interface CustomAdvancedToolbarProps extends CustomToolbarProps {
    reverse: boolean;
}
export declare type CustomAdvancedToolbar = React.ComponentType<CustomAdvancedToolbarProps>;
