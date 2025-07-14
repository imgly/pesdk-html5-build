import { Omit } from '../../common/utils';
import { AdjustmentIdentifier } from './identifier';
export interface AdjustmentAsset {
    identifier: AdjustmentIdentifier;
}
export interface AdjustmentCategory {
    identifier: string;
    name: string;
    /**
     * An array of AdjustmentAssets that are part of this category.
     */
    items: AdjustmentAsset[];
}
export type ExistingAdjustmentCategory = Omit<AdjustmentCategory, 'name'>;
