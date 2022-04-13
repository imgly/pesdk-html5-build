import type { ImageSchema, MetaSchema, Operation } from '../3.9.0/schema';
import type { SerializableCustomStickerAsset } from './appSerializableState';
export type { SerializationColor, ImageSchema, MetaSchema, FilterOperationOptions, FiltersOperation, RadialFocusOperationOptions, RadialFocusOperation, GaussianFocusOperationOptions, GaussianFocusOperation, MirroredFocusOperationOptions, MirroredFocusOperation, LinearFocusOperationOptions, LinearFocusOperation, FocusOptions, FocusOperation, AdjustmentsOperationOptions, AdjustmentsOperation, TransformOperationOptions, TransformOperation, OrientationOperationOptions, OrientationOperation, OverlayOperationOptions, OverlayOperation, FrameOperationOptions, FrameOperation, StickerOperationOptions, StickerOperation, TextOperationOptions, TextOperation, BrushOperationOptions, BrushOperation, TextDesignOperationOptions, TextDesignOperation, SpriteOptions, SpriteOperation, Operation, } from '../3.9.0/schema';
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
