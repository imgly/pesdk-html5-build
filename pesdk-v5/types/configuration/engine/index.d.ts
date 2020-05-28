import { AssetProvider } from './assetProvider';
import { ImageDownscaleOptions } from './downscaleOptions';
export declare type CrossOriginType = 'anonymous' | 'use-credentials' | '';
/**
 * Configuration options which have to be provided when creating a new Engine.
 */
export interface EngineConfiguration {
    /**
     * The PESDK license. If no license (or an invalid license) is provided, the
     * engine will render a watermark over the preview and export output.
     */
    license: string;
    /**
     * Specifies which cross origin flag is set when resources are loaded.
     */
    crossOrigin?: CrossOriginType;
    /**
     * Specifies the conditions under which the input image should be downscaled
     * by the image.
     */
    downscaleOptions?: ImageDownscaleOptions;
    /**
     * The asset provider which the engine should use to load all assets.
     */
    assetProvider?: AssetProvider;
}
