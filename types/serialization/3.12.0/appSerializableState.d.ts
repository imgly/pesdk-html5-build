import { ImageMimeType } from '../../configuration/feature/imageMimeType';
import type { AdjustmentSerializableState, FilterSerializableState, FocusSerializableState, OverlaySerializableState, FrameSerializableState, TransformSerializableState, SpriteSerializableState, BrushSerializableState } from '../3.9.0/appSerializableState';
export type { SerializableColor, AdjustmentSerializableState, FilterSerializableState, FocusSerializableState, OverlaySerializableState, FrameSerializableState, TransformSerializableState, SpriteSerializableState, BrushSerializableState, DeserializeErrors, } from '../3.9.0/appSerializableState';
export interface SerializableCustomStickerAsset {
    identifier: string;
    name?: string;
    raster: {
        type: ImageMimeType.PNG | ImageMimeType.JPEG | ImageMimeType.GIF;
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
