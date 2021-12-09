import { LibraryProvider } from './provider';
export declare class ExampleLibraryProvider extends LibraryProvider {
    loadData(): Promise<any>;
    getCategories(): Promise<any>;
    searchImages(query: string): Promise<any>;
}
