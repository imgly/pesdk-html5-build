/// <reference types="react" />
import { Tool } from '../../common/tool';
export interface CustomCardProps {
    tool: Tool;
    label: string;
    image: string;
    isActive?: boolean;
    onClick: (e?: React.MouseEvent<HTMLButtonElement>) => void;
}
export declare type CustomCard = React.ElementType<CustomCardProps>;
