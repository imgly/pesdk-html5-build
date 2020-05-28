export declare class LibraryProvider {
    data: any;
    constructor(data: any);
    loadJSON(url: string): Promise<any>;
    getCategories(): Promise<any[]>;
    searchImages(_: string): Promise<any[]>;
}
