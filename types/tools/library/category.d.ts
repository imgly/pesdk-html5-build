export declare class LibraryCategory {
    name: string;
    coverImage: HTMLImageElement;
    coverImageUrl: string;
    constructor(image: {
        name: string;
        coverImageUrl: string;
    });
    loadCoverImage(crossOrigin?: string): Promise<unknown>;
}
