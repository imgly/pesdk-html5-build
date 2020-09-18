/// <reference types="react" />
import { InfoLocale, ErrorLocale, WarningLocale } from '../../../configuration/custom/language';
export declare type ModalIdentifier = keyof ErrorLocale | keyof WarningLocale | keyof InfoLocale | 'inputText';
export declare enum ModalType {
    ERROR = "error",
    WARNING = "warning",
    INFO = "info",
    TEXT_EDIT = "textEdit"
}
export interface CustomDialogProps {
    isVisible?: boolean;
    identifier: ModalIdentifier;
    type: ModalType;
    height?: string;
    width?: string;
    position: {
        x: number;
        y: number;
    };
    confirmLabel?: string;
    dismissLabel?: string;
    headerLabel?: string;
    bodyLabel?: string;
    isConfirmDisabled?: boolean;
    isDismissDisabled?: boolean;
    handleClose: () => void;
    handleConfirm?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
    handleDismiss?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
    className?: string;
    style?: React.CSSProperties;
    header?: React.ReactNode;
    body?: React.ReactNode;
    footer?: React.ReactNode;
    children?: React.ReactNode;
}
export declare type CustomDialog = React.ComponentType<CustomDialogProps>;
