declare enum ExportFormat {
    IMAGE = "image",
    DATA_URL = "data-url",
    BLOB = "blob",
    MSBLOB = "ms-blob"
}
/**
 * @ignore
 */
declare type ImageExportType = HTMLImageElement;
/**
 * @ignore
 */
declare type DataURLExportType = string;
/**
 * @ignore
 */
declare type BLOBExportType = Blob;
export type { ImageExportType, DataURLExportType, BLOBExportType };
export { ExportFormat };
