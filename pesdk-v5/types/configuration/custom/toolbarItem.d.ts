/// <reference types="react" />
export interface CustomToolbarItemProps {
    tool: string;
    label: string;
    icon: React.ReactNode;
    isActive: boolean;
    onClick: (e?: any) => void;
}
export declare type CustomAdvancedToolbarItem = React.ElementType<CustomToolbarItemProps>;
