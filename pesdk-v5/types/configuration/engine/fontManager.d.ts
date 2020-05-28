import { FontAsset } from '../../tools/text';
export interface FontManager {
    isFontLoaded(identifier: string): boolean;
    loadFontWithIdentifier(identifier: string, inject?: boolean): Promise<void>;
    loadFontsWithIdentifiers(identifiers: string[]): Promise<void>;
    getFontWithId(identifier: string): FontAsset;
}
