/// <reference types="react" />
export interface CustomSearchProps {
    onChange?(value: string): void;
    onKeyDown?(e: React.KeyboardEvent<HTMLButtonElement>): void;
    placeholder: string;
    className?: string;
    style?: React.CSSProperties;
}
