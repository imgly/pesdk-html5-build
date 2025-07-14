import { CustomToolControlBarProps } from '../base/toolControlBar';
export interface CustomAdvancedToolControlBarProps extends CustomToolControlBarProps {
    reverse: boolean;
}
export type CustomAdvancedToolControlBar = React.ComponentType<CustomAdvancedToolControlBarProps>;
export interface CustomAdvancedToolControlSectionBarProps {
    show: boolean;
    children?: React.ReactNode;
}
