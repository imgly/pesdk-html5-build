import { CustomToolbarProps } from '../base/toolbar';
export interface CustomBasicToolbarProps extends CustomToolbarProps {
    show: boolean;
}
export type CustomBasicToolbar = React.ComponentType<CustomBasicToolbarProps>;
