/// <reference types="react" />
export interface CustomButtonProps {
    label?: string;
    icon?: React.ReactNode;
    isDisabled?: boolean;
    onClick: (e?: React.MouseEvent<HTMLButtonElement>) => void;
}
export declare type CustomButton = React.ElementType<CustomButtonProps>;
export interface CustomButtons {
    mainCanvasActionUndo: CustomButton;
    mainCanvasActionRedo: CustomButton;
    mainCanvasActionExport: CustomButton;
    mainCanvasActionClose: CustomButton;
    canvasActionEdit: CustomButton;
    canvasActionBringToFront: CustomButton;
    canvasActionDuplicate: CustomButton;
    canvasActionDelete: CustomButton;
    canvasActionInvert: CustomButton;
    canvasActionFlip: CustomButton;
    transformActionFlipHorizontal: CustomButton;
    transformActionFlipVertical: CustomButton;
    transformActionRotateClockwise: CustomButton;
    transformActionRotateAntiClockwise: CustomButton;
}
