import { DuoToneFilterAsset, LUTFilterAsset } from '../../tools/filter';
import { FrameAsset } from '../../tools/frame';
import { FontManager } from './fontManager';
declare type AssetCategory = 'filter' | 'overlay' | 'font' | 'sticker' | 'textdesign' | 'frame';
/**
 * @ignore
 */
export interface AssetProvider {
    getPath(category: string, dirtyItem?: string): string;
    getAssetSource(category: AssetCategory, identifier: string): string;
    getDuotoneFilterAsset(identifier: string): DuoToneFilterAsset | undefined;
    getLUTFilterAsset(identifier: string): LUTFilterAsset | undefined;
    getFontManager(): FontManager;
    getFrameAsset(identifier: string): FrameAsset | undefined;
}
export {};
