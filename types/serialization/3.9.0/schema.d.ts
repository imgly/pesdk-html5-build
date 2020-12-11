import { Float2 } from '../../common/float2';
import { SerializableCustomStickerAsset, SerializableColor } from './appSerializableState';
export interface SerializationColor {
    rgba: SerializableColor;
}
declare type NormalizedNumber = number;
declare type PositiveNumber = number;
export interface ImageSchema {
    type?: string;
    data?: string;
    width: number;
    height: number;
}
export interface MetaSchema {
    platform: 'html5';
    version: string;
    createdAt: string;
}
export interface FilterOperationOptions {
    intensity: NormalizedNumber;
    identifier: string;
}
export interface FiltersOperation {
    type: 'filter';
    options: FilterOperationOptions;
}
export interface RadialFocusOperationOptions {
    start: Float2;
    end: Float2;
    gradientRadius: PositiveNumber;
    blurRadius: PositiveNumber;
}
export interface RadialFocusOperation {
    type: 'radial';
    options: RadialFocusOperationOptions;
}
export interface GaussianFocusOperationOptions {
    blurRadius: PositiveNumber;
}
export interface GaussianFocusOperation {
    type: 'gaussian';
    options: GaussianFocusOperationOptions;
}
export interface MirroredFocusOperationOptions {
    start: Float2;
    end: Float2;
    size: PositiveNumber;
    blurRadius: PositiveNumber;
    gradientSize: PositiveNumber;
}
export interface MirroredFocusOperation {
    type: 'mirrored';
    options: MirroredFocusOperationOptions;
}
export interface LinearFocusOperationOptions {
    start: Float2;
    end: Float2;
    blurRadius: PositiveNumber;
}
export interface LinearFocusOperation {
    type: 'linear';
    options: LinearFocusOperationOptions;
}
export declare type FocusOptions = RadialFocusOperation | MirroredFocusOperation | LinearFocusOperation | GaussianFocusOperation;
export interface FocusOperation {
    type: 'focus';
    options: FocusOptions;
}
export interface AdjustmentsOperationOptions {
    brightness: number;
    saturation: number;
    contrast: number;
    exposure: number;
    shadows: number;
    highlights: number;
    clarity: number;
    gamma: number;
    whites: number;
    blacks: number;
    temperature: number;
    sharpness: number;
}
export interface AdjustmentsOperation {
    type: 'adjustments';
    options: AdjustmentsOperationOptions;
}
export interface TransformOperationOptions {
    start: Float2;
    end: Float2;
    dimensions?: Float2;
    rotation: number;
    meta?: {
        identifier?: string;
        [key: string]: any;
    };
}
export interface TransformOperation {
    type: 'transform';
    options: TransformOperationOptions;
}
export interface OrientationOperationOptions {
    rotation: number;
    flipVertically: boolean;
    flipHorizontally: boolean;
}
export interface OrientationOperation {
    type: 'orientation';
    options: OrientationOperationOptions;
}
export interface OverlayOperationOptions {
    identifier: string;
    intensity: NormalizedNumber;
    blendMode: string;
}
export interface OverlayOperation {
    type: 'overlay';
    options: OverlayOperationOptions;
}
export interface FrameOperationOptions {
    identifier: string;
    alpha: NormalizedNumber;
    size: PositiveNumber;
    tintColor: SerializationColor;
}
export interface FrameOperation {
    type: 'frame';
    options: FrameOperationOptions;
}
export interface StickerOperationOptions {
    identifier: string;
    dimensions: Float2;
    position: Float2;
    flipVertically: boolean;
    flipHorizontally: boolean;
    tintMode?: string;
    tintColor?: SerializationColor;
    rotation?: number;
    alpha?: NormalizedNumber;
}
export interface StickerOperation {
    type: 'sticker';
    options: StickerOperationOptions;
}
export interface TextOperationOptions {
    text: string;
    fontSize: PositiveNumber;
    lineHeight: number;
    fontIdentifier: string;
    alignment: string;
    color: SerializationColor;
    backgroundColor?: SerializationColor;
    position: Float2;
    rotation?: number;
    maxWidth: PositiveNumber;
    flipVertically: boolean;
    flipHorizontally: boolean;
}
export interface TextOperation {
    type: 'text';
    options: TextOperationOptions;
}
interface BrushPath {
    points: Float2[];
    brush: {
        size: PositiveNumber;
        color: SerializationColor;
        hardness: NormalizedNumber;
    };
}
export interface BrushOperationOptions {
    paths: BrushPath[];
}
export interface BrushOperation {
    type: 'brush';
    options: BrushOperationOptions;
}
export interface TextDesignOperationOptions {
    text: string;
    identifier: string;
    width: PositiveNumber;
    inverted: boolean;
    seed: number;
    color: SerializationColor;
    position: Float2;
    rotation?: number;
    flipVertically: boolean;
    flipHorizontally: boolean;
    padding?: PositiveNumber;
}
export interface TextDesignOperation {
    type: 'textdesign';
    options: TextDesignOperationOptions;
}
export declare type SpriteOptions = FrameOperation | OverlayOperation | StickerOperation | TextOperation | BrushOperation | TextDesignOperation;
export interface SpriteOperation {
    type: 'sprite';
    options: {
        sprites: SpriteOptions[];
    };
}
export declare type Operation = FiltersOperation | AdjustmentsOperation | FocusOperation | SpriteOperation | TransformOperation | OrientationOperation;
export interface AssetLibraryInterface {
    assets: {
        stickers: SerializableCustomStickerAsset[];
    };
}
export interface SerialisationSchema {
    version: string;
    image: ImageSchema;
    meta: MetaSchema;
    operations: Operation[];
    assetLibrary?: AssetLibraryInterface;
}
export {};
