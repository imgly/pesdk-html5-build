import type { Tool } from '../../../common/tool';
export interface CustomCheckboxProps {
    tool: Tool;
    label: string;
    value: boolean;
    isDisabled?: boolean;
    onClick: (e?: React.SyntheticEvent) => void;
    checkMarkPosition?: 'left' | 'right';
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
}
export type CustomCheckbox = React.ComponentType<CustomCheckboxProps>;
