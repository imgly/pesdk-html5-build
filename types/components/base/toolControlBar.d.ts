/// <reference types="react" />
import { Tool } from '../../common/tool';
export interface CustomToolControlBarProps {
    tool: Tool;
    style?: React.CSSProperties;
    className?: string;
    children?: React.ReactNode;
}
