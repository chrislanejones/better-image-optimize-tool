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
 * Stores file data in local storage
 * @param fileData Array of FileData objects
 */
export const storeFileData = (fileData: FileData[]): void => {
  localStorage.setItem("uploadedImages", JSON.stringify(fileData));
};

/**
 * Retrieves file data from local storage
 * @returns Array of FileData objects or null if nothing is stored
 */
export const retrieveFileData = (): FileData[] | null => {
  const storedData = localStorage.getItem("uploadedImages");
  return storedData ? JSON.parse(storedData) : null;
};

/**
 * Clears all images from local storage
 */
export const clearAllImagesFromStorage = (): void => {
  localStorage.removeItem("uploadedImages");
};

/**
 * Updates images in local storage
 * @param images Updated array of FileData objects
 */
export const updateImagesInStorage = (images: FileData[]): void => {
  if (images.length > 0) {
    localStorage.setItem("uploadedImages", JSON.stringify(images));
  } else {
    localStorage.removeItem("uploadedImages");
  }
};

/**
 * Processes an image with format and compression settings
 * @param image Original image element
 * @param formatOption Output format (original, jpeg, webp)
 * @param compressionLevel Quality level (0-100)
 * @returns Promise that resolves to a Blob of the processed image
 */
export const processImage = (
  image: HTMLImageElement,
  formatOption: string,
  compressionLevel: number
): Promise<Blob> => {
  return new Promise((resolve, reject) => {
    // Create a canvas at the original image size
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      reject(new Error("Failed to get canvas context"));
      return;
    }

    canvas.width = image.naturalWidth;
    canvas.height = image.naturalHeight;

    // Draw the image at full size
    ctx.drawImage(image, 0, 0);

    // Determine the output mime type
    const mimeType =
      formatOption === "webp"
        ? "image/webp"
        : formatOption === "jpeg"
        ? "image/jpeg"
        : image.src.startsWith("data:")
        ? image.src.split(",")[0].split(":")[1].split(";")[0]
        : "image/jpeg";

    // Convert to blob with selected format and compression
    canvas.toBlob(
      (blob) => {
        if (blob) {
          resolve(blob);
        } else {
          reject(new Error("Failed to create blob from canvas"));
        }
      },
      mimeType,
      compressionLevel / 100
    );
  });
};

/**
 * Creates a cropped version of an image
 * @param image Original image element
 * @param cropRect Crop rectangle coordinates and dimensions
 * @param formatOption Output format
 * @param compressionLevel Quality level (0-100)
 * @param container Reference container element for scale calculation
 * @returns Promise that resolves to a Blob of the cropped image
 */
export const cropImage = (
  image: HTMLImageElement,
  cropRect: { x: number; y: number; width: number; height: number },
  formatOption: string,
  compressionLevel: number,
  container: Element
): Promise<Blob> => {
  return new Promise((resolve, reject) => {
    // Calculate scaling factor
    const displayWidth = container.clientWidth;
    const scaleX = image.naturalWidth / displayWidth;

    // Create a new canvas with the cropped dimensions
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      reject(new Error("Failed to get canvas context"));
      return;
    }

    // Set canvas dimensions to cropped size
    canvas.width = cropRect.width * scaleX;
    canvas.height = cropRect.height * scaleX;

    // Draw the cropped portion of the image
    ctx.drawImage(
      image,
      cropRect.x * scaleX,
      cropRect.y * scaleX,
      cropRect.width * scaleX,
      cropRect.height * scaleX,
      0,
      0,
      canvas.width,
      canvas.height
    );

    // Determine the output mime type
    const mimeType = formatOption === "webp" ? "image/webp" : "image/jpeg";

    // Convert to blob and save
    canvas.toBlob(
      (blob) => {
        if (blob) {
          resolve(blob);
        } else {
          reject(new Error("Failed to create blob from canvas"));
        }
      },
      mimeType,
      compressionLevel / 100
    );
  });
};

/**
 * Resizes an image to new dimensions
 * @param image Original image element
 * @param width New width
 * @param height New height
 * @param formatOption Output format
 * @param compressionLevel Quality level (0-100)
 * @returns Promise that resolves to a Blob of the resized image
 */
export const resizeImage = (
  image: HTMLImageElement,
  width: number,
  height: number,
  formatOption: string,
  compressionLevel: number
): Promise<Blob> => {
  return new Promise((resolve, reject) => {
    // Create a canvas with the new dimensions
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      reject(new Error("Failed to get canvas context"));
      return;
    }

    canvas.width = width;
    canvas.height = height;

    // Draw the image at the new size
    ctx.drawImage(image, 0, 0, width, height);

    // Determine the output mime type
    const mimeType = formatOption === "webp" ? "image/webp" : "image/jpeg";

    // Convert to blob and save
    canvas.toBlob(
      (blob) => {
        if (blob) {
          resolve(blob);
        } else {
          reject(new Error("Failed to create blob from canvas"));
        }
      },
      mimeType,
      compressionLevel / 100
    );
  });
};

/**
 * Creates a new FileData object from an edited image blob
 * @param originalImage Original FileData object
 * @param editedBlob Edited blob
 * @param formatOption Format option that was applied
 * @returns New FileData object
 */
export const createEditedFileData = (
  originalImage: FileData,
  editedBlob: Blob,
  formatOption: string
): FileData => {
  const newUrl = URL.createObjectURL(editedBlob);

  // Determine new file extension based on format
  let newName = originalImage.name;
  if (formatOption !== "original") {
    // Remove old extension and add new one
    const baseName = originalImage.name.split(".").slice(0, -1).join(".");
    newName = `${baseName}.${formatOption === "webp" ? "webp" : "jpg"}`;
  }

  // Create new image data
  return {
    name: newName,
    type: formatOption === "webp" ? "image/webp" : "image/jpeg",
    size: editedBlob.size,
    url: newUrl,
  };
};

/**
 * Downloads an image
 * @param image FileData object to download
 */
export const downloadImage = (image: FileData): void => {
  // Create an invisible anchor element
  const a = document.createElement("a");
  a.href = image.url;
  a.download = image.name;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};
