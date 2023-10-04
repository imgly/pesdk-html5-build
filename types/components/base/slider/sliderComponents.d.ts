/// <reference types="react" />
import { CustomLabelProps } from '../label';
export interface SliderTrackProps {
    id: string;
    label: string;
    value?: number;
    min?: number;
    max?: number;
    step?: number | string;
    adjust?: boolean;
    showInput?: boolean;
    'aria-hidden'?: boolean;
    isDisabled?: boolean;
    onChange: (val: number) => void;
    onMouseUp?: (val: number) => void;
    onTouchEnd?: (val: number) => void;
    className?: string;
    style?: React.CSSProperties;
}
export interface SliderInputProps {
    id: string;
    'aria-label'?: string;
    value?: number;
    decimal?: number;
    divider?: number;
    min?: number;
    max?: number;
    suffix?: string;
    isDisabled?: boolean;
    'aria-hidden'?: boolean;
    onChange: (val: number) => void;
    onMouseUp?: (val: number) => void;
    onTouchEnd?: (val: number) => void;
    className?: string;
    style?: React.CSSProperties;
}
export interface SliderContainerProps {
    children: React.ReactNode;
    centerSlider?: boolean;
    className?: string;
    style?: React.CSSProperties;
}
export interface SliderBaseProps {
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}
export declare type SliderLabelProps = CustomLabelProps;
