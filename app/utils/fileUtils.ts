import { FileData } from "~/routes/_index";

/**
 * Processes files and returns valid image files
 * @param files Files to validate
 * @returns Only the image files from the provided files array
 */
export const filterImageFiles = (files: File[]): File[] => {
  return files.filter((file) => file.type.startsWith("image/"));
};

/**
 * Creates FileData objects from File objects
 * @param files Files to convert
 * @returns Array of FileData objects
 */
export const createFileData = (files: File[]): FileData[] => {
  return files.map((file) => ({
    name: file.name,
    type: file.type,
    size: file.size,
    url: URL.createObjectURL(file),
  }));
};

/**
 * Creates a File object from a clipboard paste event
 * @param blob Blob from clipboard
 * @returns File object with timestamp-based name
 */
export const createFileFromPaste = (blob: Blob): File => {
  const timestamp = new Date().toISOString().replace(/:/g, "-");
  return new File([blob], `pasted-image-${timestamp}.png`, {
    type: blob.type,
  });
};

/**
 * Stores file data in session storage
 * @param fileData Array of FileData objects
 */
export const storeFileData = (fileData: FileData[]): void => {
  sessionStorage.setItem("uploadedImages", JSON.stringify(fileData));
};

/**
 * Retrieves file data from session storage
 * @returns Array of FileData objects or null if nothing is stored
 */
export const retrieveFileData = (): FileData[] | null => {
  const storedData = sessionStorage.getItem("uploadedImages");
  return storedData ? JSON.parse(storedData) : null;
};
