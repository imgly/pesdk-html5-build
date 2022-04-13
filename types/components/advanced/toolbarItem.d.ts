/// <reference types="react" />
import type { Tool } from '../../common/tool';
export interface CustomToolbarItemProps {
    tool: Tool;
    label: string;
    icon: React.ReactNode;
    isActive: boolean;
    isReverse: boolean;
    isDisabled: boolean;
    onClick: (e?: any) => void;
    style?: React.CSSProperties;
    className?: string;
}
export declare type CustomAdvancedToolbarItem = React.ComponentType<CustomToolbarItemProps>;
