export declare type FontWeight = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 'normal' | 'bold' | 'lighter' | 'bolder' | 'inherit' | 'initial' | 'unset';
export interface TextMetrics {
    unitsPerEm: number;
    ascender: number;
    descender: number;
}
export interface Font {
    identifier: string;
    fontFamily: string;
    fontWeight: FontWeight;
    fontStyle?: string;
    textMetrics: TextMetrics;
}
export interface WebFontAsset extends Font {
    fontURI: string;
    googleFamily?: string;
    format: 'woff' | 'woff2' | 'truetype' | 'opentype' | 'embedded-opentype' | 'svg';
    provider?: 'file';
}
export interface GoogleFontAsset extends Font {
    provider: 'google';
}
export declare type FontAsset = WebFontAsset | GoogleFontAsset;
/**
 * @ignore
 */
export declare function isWebFontAsset(asset: WebFontAsset | GoogleFontAsset): asset is WebFontAsset;
/**
 * @ignore
 */
export declare function isGoogleFontAsset(asset: WebFontAsset | GoogleFontAsset): asset is GoogleFontAsset;
