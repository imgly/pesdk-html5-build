declare enum ExportFormat {
    IMAGE = "image",
    DATA_URL = "data-url",
    BLOB = "blob",
    MSBLOB = "ms-blob"
}
/**
 * @ignore
 */
type ImageExportType = HTMLImageElement;
/**
 * @ignore
 */
type DataURLExportType = string;
/**
 * @ignore
 */
type BLOBExportType = Blob;
export type { ImageExportType, DataURLExportType, BLOBExportType };
export { ExportFormat };
