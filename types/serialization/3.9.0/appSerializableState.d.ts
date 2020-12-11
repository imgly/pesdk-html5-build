import { Float2 } from '../../common/float2';
import { Size } from '../../common/size';
import { SpriteType } from '../../common/tool';
import { Mutable } from '../../common/utils';
import { ImageMimeType } from '../../configuration/feature/imageMimeType';
import { BlendMode } from '../../tools/overlay';
import { TintMode } from '../../tools/sticker';
import { AlignmentType } from '../../tools/text';
export declare type SerializableColor = [number, number, number, number];
export interface AdjustmentSerializableState {
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
export interface FilterSerializableState {
    intensity: number;
    identifier: string;
}
export interface FocusSerializableState {
    identifier: string;
    linear?: {
        start: Float2;
        end: Float2;
        blurRadius: number;
    };
    radial?: {
        center: Float2;
        radius: number;
        blurRadius: number;
    };
    mirrored?: {
        origin: Float2;
        rotation: number;
        size: number;
        blurRadius: number;
    };
    gaussian?: {
        blurRadius: number;
    };
}
export interface OverlaySerializableState {
    identifier: string;
    opacity: number;
    blendMode: BlendMode;
}
export interface FrameSerializableState {
    identifier: string;
    opacity: number;
    width: number;
    color: SerializableColor;
}
export interface TransformSerializableState {
    identifier?: string;
    start?: Mutable<Float2>;
    end?: Mutable<Float2>;
    rotation?: number;
    outputRotation?: number;
    flipHorizontally?: boolean;
    flipVertically?: boolean;
}
export interface SpriteSerializableState {
    spriteIdList: string[];
    common: {
        [key: string]: {
            order: number;
            tool: SpriteType;
            position: Float2;
            size?: Size;
            rotation: number;
            flipHorizontally: boolean;
            flipVertically: boolean;
        };
    };
    sticker: {
        [key: string]: {
            identifier: string;
            opacity: number;
            tintMode: TintMode;
            tintColor: SerializableColor;
        };
    };
    text: {
        [key: string]: {
            identifier: string;
            fontSize: number;
            alignment: AlignmentType;
            width: number;
            text: string;
            lineHeight: number;
            textColor: SerializableColor;
            backgroundColor: SerializableColor;
        };
    };
    textdesign: {
        [key: string]: {
            identifier: string;
            text: string;
            isInverted: boolean;
            seed: number;
            padding: number;
            width: number;
            color: SerializableColor;
        };
    };
}
export interface BrushSerializableState {
    strokes: Array<{
        path: {
            controlPoints: Float2[];
        };
        brush: {
            id: string;
            size: number;
            hardness: number;
            color: SerializableColor;
        };
    }>;
}
export interface SerializableCustomStickerAsset {
    identifier: string;
    name?: string;
    raster: {
        type: ImageMimeType.PNG | ImageMimeType.JPEG;
        data: string;
    };
    svg?: {
        data: string;
    };
}
export interface SerializableState {
    image?: {
        width: number;
        height: number;
        data?: string;
    };
    adjustment?: AdjustmentSerializableState;
    filter?: FilterSerializableState;
    overlay?: OverlaySerializableState;
    frame?: FrameSerializableState;
    focus?: FocusSerializableState;
    transform?: TransformSerializableState;
    sprite?: SpriteSerializableState;
    brush?: BrushSerializableState;
    customStickers?: SerializableCustomStickerAsset[];
}
export declare type DeserializeErrors = 'unsupportedVersion';
