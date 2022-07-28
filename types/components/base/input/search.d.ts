/// <reference types="react" />
export interface CustomSearchProps {
    value?: string;
    onChange?(value: string): void;
    onKeyDown?(e: React.KeyboardEvent<HTMLButtonElement>): void;
    placeholder: string;
    className?: string;
    style?: React.CSSProperties;
}
