import { CategoryHeaderType } from '../../common/categoryHeaderTypes';
import { LibraryProvider } from './provider';
export declare class LibraryConfiguration {
    enableWebcam?: boolean;
    enableUpload?: boolean;
    provider?: typeof LibraryProvider;
    /**
     * Whether categories should be flattened which effectively hides the categories.
     * If this is enabled all images will be shown in the top-level of the library selection tool
     * orderes according to their parent category.
     * @example // Defaults to:
     * ```
     * false
     * ```
     */
    flattenCategories?: boolean;
    /**
     * Decide if the categories should be grouped in a collapsible section or should be grouped under a text heading.
     */
    categoryHeaderType?: CategoryHeaderType;
}
