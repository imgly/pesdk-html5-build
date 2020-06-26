/// <reference types="react" />
export interface CustomLoaderProps {
    show: boolean;
    heading: string;
    body: string;
    position?: {
        x: number;
        y: number;
    };
    className?: string;
}
export declare type CustomLoader = React.ComponentType<CustomLoaderProps>;
