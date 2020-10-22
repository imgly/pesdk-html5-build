import { LibraryCategory } from './category';
import { LibraryImage } from './image';
export declare class LibraryProvider {
    data: any;
    loadJSON(url: string): Promise<any>;
    getCategories(): Promise<LibraryCategory[]>;
    searchImages(_: string): Promise<LibraryImage[]>;
}
