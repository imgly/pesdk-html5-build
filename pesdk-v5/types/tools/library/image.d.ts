export declare class LibraryImage {
    category: string;
    thumbUrl: string;
    rawUrl: string;
    thumbImage: HTMLImageElement;
    constructor(image: {
        title: string;
        thumbUrl: string;
        rawUrl: string;
    });
    loadThumbImage(crossOrigin?: string): Promise<{}>;
    getThumbImage(): string;
}
