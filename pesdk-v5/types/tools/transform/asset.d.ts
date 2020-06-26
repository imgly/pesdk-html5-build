import { ExistingCategory } from '../../common/existingAsset';
export interface TransformCategory {
    identifier: string;
    name: string;
    items: CropRatio[];
    thumbnailURI?: string;
}
export interface CropRatio {
    identifier: string;
    name: string;
    thumbnailURI: string;
    ratio?: number | '*';
    dimensions?: {
        x: number;
        y: number;
    };
    forceDimensions?: boolean;
    lockDimensions?: boolean;
}
export declare type ExistingTransformCategory = ExistingCategory<CropRatio>;
