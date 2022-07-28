/// <reference types="react" />
export declare type DropdownListItem = {
    value: string;
    label: string;
    [key: string]: any;
};
export interface DropdownProps {
    isDisabled?: boolean;
    selectedItem: string;
    list: DropdownListItem[];
    onSelect: (e: string) => any;
    label: string;
    style?: React.CSSProperties;
    itemStyle?: (item: DropdownListItem) => React.CSSProperties | React.CSSProperties;
}
export interface DropdownCaretProps {
    rotation?: number;
}
