/// <reference types="react" />
import { Tool } from '../../../common/tool';
export interface CustomSliderProps {
    tool: Tool;
    identifier?: string;
    label: string;
    value?: number;
    min?: number;
    max?: number;
    step?: number | string;
    snap?: number;
    decimal?: number;
    divider?: number;
    suffix?: string;
    showInput?: boolean;
    showLabel?: boolean;
    centerSlider?: boolean;
    adjust?: boolean;
    'aria-hidden'?: boolean;
    isDisabled?: boolean;
    onChange: (val: number) => void;
    onMouseUp?: (val: number) => void;
    onTouchEnd?: (val: number) => void;
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
}
export declare type CustomSlider = React.ComponentType<CustomSliderProps>;
