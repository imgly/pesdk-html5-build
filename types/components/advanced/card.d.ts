/// <reference types="react" />
import type { Tool } from '../../common/tool';
export declare enum CardType {
    LARGE = "large",
    MEDIUM = "medium",
    SMALL = "small"
}
export interface CustomCardProps {
    tool: Tool;
    label: string;
    role?: string;
    image?: string;
    'aria-label'?: string;
    'aria-expanded'?: boolean;
    isActive?: boolean;
    type: CardType;
    isDisabled?: boolean;
    onClick: (e?: React.MouseEvent<HTMLButtonElement>) => void;
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
}
export declare type CustomCard = React.ComponentType<CustomCardProps>;
