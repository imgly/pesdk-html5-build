import { CustomToolbarProps } from '../base/toolbar';
export interface CustomAdvancedToolbarProps extends CustomToolbarProps {
    reverse: boolean;
}
export type CustomAdvancedToolbar = React.ComponentType<CustomAdvancedToolbarProps>;
