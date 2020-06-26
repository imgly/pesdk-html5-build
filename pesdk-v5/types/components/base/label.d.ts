export interface CustomLabelProps {
    label: string;
    htmlFor?: string;
    isDisabled?: boolean;
    show?: boolean;
    className?: string;
    style?: {
        [key: string]: string;
    };
}
