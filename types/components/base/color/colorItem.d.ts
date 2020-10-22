/// <reference types="react" />
export interface CustomColorItemProps {
    color: string;
    label: string;
    isActive: boolean;
    isDisabled: boolean;
    tiledBackgroundUrl: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
}
export declare type CustomColorItem = React.ComponentType<CustomColorItemProps>;
