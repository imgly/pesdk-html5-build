/// <reference types="react" />
import { Tool } from '../../common/tool';
import { AlignmentType } from '../../tools/text';
export interface CustomButtonProps {
    label?: string;
    ariaLabel?: string;
    icon?: React.ReactNode;
    isDisabled?: boolean;
    fullWidth?: boolean;
    isActive?: boolean;
    style?: React.CSSProperties;
    className?: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    children?: React.ReactNode;
}
export interface CustomTextAlignmentButtonProps extends CustomButtonProps {
    tool: AlignmentType;
}
export interface CustomToolControlBarButtonProps extends CustomButtonProps {
    tool: Tool;
}
export declare type CustomButton = React.ComponentType<CustomButtonProps>;
export declare type CustomTextAlignmentButton = React.ComponentType<CustomTextAlignmentButtonProps>;
export declare type CustomToolControlBarPrimaryButton = React.ComponentType<CustomToolControlBarButtonProps>;
export interface CustomButtons {
    mainCanvasActionUndo?: CustomButton;
    mainCanvasActionRedo?: CustomButton;
    mainCanvasActionExport?: CustomButton;
    mainCanvasActionClose?: CustomButton;
    canvasActionEdit?: CustomButton;
    canvasActionBringToFront?: CustomButton;
    canvasActionDuplicate?: CustomButton;
    canvasActionDelete?: CustomButton;
    canvasActionInvert?: CustomButton;
    canvasActionFlip?: CustomButton;
    transformActionFlipHorizontal?: CustomButton;
    transformActionFlipVertical?: CustomButton;
    transformActionRotateClockwise?: CustomButton;
    transformActionRotateAntiClockwise?: CustomButton;
    textAlignment?: CustomTextAlignmentButton;
    toolControlBarPrimaryButton?: CustomToolControlBarPrimaryButton;
    toolControlBarSecondaryButton?: CustomToolControlBarPrimaryButton;
}
