import { AdjustmentIdentifier } from './identifier';
import { Omit } from '../../common/utils';
export interface AdjustmentAsset {
    identifier: AdjustmentIdentifier;
}
export interface AdjustmentCategory {
    identifier: string;
    name: string;
    /**
     * An array of AdjustmentAssets that are part of this category.
     */
    items?: AdjustmentAsset[];
}
export declare type ExistingAdjustmentCategory = Omit<AdjustmentCategory, 'name'>;
