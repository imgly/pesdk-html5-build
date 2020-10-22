/// <reference types="react" />
import { CustomCardProps } from './card';
interface LibraryItemCardProps extends CustomCardProps {
    authorName?: string;
    authorAvatar?: string;
}
export interface AdvancedItemCardProps {
    library: LibraryItemCardProps;
    filter: CustomCardProps;
    sticker: CustomCardProps;
    text: CustomCardProps;
    textdesign: CustomCardProps;
    transform: CustomCardProps;
    focus: CustomCardProps;
    frame: CustomCardProps;
    overlay: CustomCardProps;
}
export declare type CustomItemCardProps<T extends keyof AdvancedItemCardProps = keyof AdvancedItemCardProps> = AdvancedItemCardProps[T];
export declare type CustomItemCard<T extends keyof AdvancedItemCardProps = keyof AdvancedItemCardProps> = React.ComponentType<CustomItemCardProps<T>>;
export {};
