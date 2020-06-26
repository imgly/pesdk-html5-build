/// <reference types="react" />
export interface CustomButtonProps {
    label?: string;
    ariaLabel?: string;
    icon?: React.ReactNode;
    isDisabled?: boolean;
    isActive?: boolean;
    style?: {
        [key: string]: string;
    };
    className?: string;
    onClick: (e?: React.MouseEvent<HTMLButtonElement>) => void;
    children?: React.ReactNode;
}
export declare type CustomButton = React.ComponentType<CustomButtonProps>;
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
    textAlignment?: CustomButton;
}
