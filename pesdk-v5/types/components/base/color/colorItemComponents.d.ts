/// <reference types="react" />
export interface ColorItemBaseProps {
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    disabled: boolean;
    className?: string;
    style?: {
        [key: string]: string;
    };
    children?: React.ReactNode;
}
export interface ColorItemBackgroundProps {
    color: string;
    className?: string;
    style?: {
        [key: string]: string;
    };
}
export interface ColorItemTiledBackgroundProps {
    url: string;
    className?: string;
    style?: {
        [key: string]: string;
    };
}
export interface ColorItemActiveOverlayProps {
    isActive: boolean;
    className?: string;
    style?: {
        [key: string]: string;
    };
}
