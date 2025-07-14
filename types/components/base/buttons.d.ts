import type { Tool } from '../../common/tool';
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
export type CustomButton = React.ComponentType<CustomButtonProps>;
export type CustomTextAlignmentButton = React.ComponentType<CustomTextAlignmentButtonProps>;
export type CustomToolControlBarPrimaryButton = React.ComponentType<CustomToolControlBarButtonProps>;
export interface CustomButtons {
    mainCanvasActionUndo?: CustomButton | null;
    mainCanvasActionRedo?: CustomButton | null;
    mainCanvasActionExport?: CustomButton | null;
    mainCanvasActionClose?: CustomButton | null;
    canvasActionEdit?: CustomButton | null;
    canvasActionBringToFront?: CustomButton | null;
    canvasActionDuplicate?: CustomButton | null;
    canvasActionDelete?: CustomButton | null;
    canvasActionInvert?: CustomButton | null;
    canvasActionFlip?: CustomButton | null;
    transformActionFlipHorizontal?: CustomButton | null;
    transformActionFlipVertical?: CustomButton | null;
    transformActionRotateClockwise?: CustomButton | null;
    transformActionRotateAntiClockwise?: CustomButton | null;
    textAlignment?: CustomTextAlignmentButton | null;
    toolControlBarPrimaryButton?: CustomToolControlBarPrimaryButton | null;
    toolControlBarSecondaryButton?: CustomToolControlBarPrimaryButton | null;
}
