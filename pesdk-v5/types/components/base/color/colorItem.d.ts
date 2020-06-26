/// <reference types="react" />
export interface CustomColorItemProps {
    color: string;
    label: string;
    isActive: boolean;
    isDisabled: boolean;
    tiledBackgroundUrl: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    className?: string;
    style?: {
        [key: string]: string;
    };
    children?: React.ReactNode;
}
export declare type CustomColorItem = React.ComponentType<CustomColorItemProps>;
