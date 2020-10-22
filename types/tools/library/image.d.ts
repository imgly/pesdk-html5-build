export declare class LibraryImage {
    title: string;
    category: string | undefined;
    thumbUrl: string;
    rawUrl: string;
    authorName: string | undefined;
    authorAvatar: string | undefined;
    thumbImage: HTMLImageElement;
    constructor(image: {
        title: string;
        thumbUrl: string;
        rawUrl: string;
        category?: string;
        authorName?: string;
        authorAvatar?: string;
    });
    loadThumbImage(crossOrigin?: string): Promise<unknown>;
    getThumbImage(): string;
}
