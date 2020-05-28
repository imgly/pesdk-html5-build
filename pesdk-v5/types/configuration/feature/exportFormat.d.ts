declare enum ExportFormat {
    IMAGE = "image",
    DATA_URL = "data-url",
    BLOB = "blob",
    MSBLOB = "ms-blob"
}
declare type ImageExportType = HTMLImageElement;
declare type DataURLExportType = string;
declare type BLOBExportType = Blob;
export { ExportFormat, ImageExportType, DataURLExportType, BLOBExportType };
