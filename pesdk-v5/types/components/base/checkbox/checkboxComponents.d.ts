/// <reference types="react" />
export interface CheckboxBaseProps {
    children: React.ReactNode;
    className?: string;
    style?: {
        [key: string]: string;
    };
}
export interface CheckboxCheckMarkProps {
    onClick: (e?: React.MouseEvent<HTMLDivElement>) => void;
    isChecked: boolean;
    isDisabled?: boolean;
    className?: string;
    style?: {
        [key: string]: string;
    };
}
export interface CheckboxInputProps {
    id: string;
    disabled?: boolean;
    checked?: boolean;
    onChange?: (e?: React.ChangeEvent<HTMLDivElement>) => void;
    className?: string;
    style?: {
        [key: string]: string;
    };
}
