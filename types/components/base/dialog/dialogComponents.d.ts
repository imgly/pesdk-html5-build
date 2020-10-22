/// <reference types="react" />
import { ModalType } from './dialog';
export interface DialogHeaderProps {
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}
export interface DialogBodyProps {
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}
export interface DialogFooterProps {
    type: ModalType;
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}
export interface DialogBaseProps {
    isVisible: boolean;
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}
export interface DialogBackdropProps {
    className?: string;
    style?: React.CSSProperties;
}
export interface DialogContainerProps {
    left: number;
    top: number;
    height: string;
    width: string;
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}
export interface DialogSpinnerProps {
    className?: string;
    style?: React.CSSProperties;
}
