import { CustomToolControlBarProps } from '../base/toolControlBar';
export interface CustomBasicToolControlBarProps extends CustomToolControlBarProps {
    show: boolean;
}
export type CustomBasicToolControlBar = React.ComponentType<CustomBasicToolControlBarProps>;
