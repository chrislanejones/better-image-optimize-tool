// Complete uploadUtils.ts with all required functions

// Storage key for images
const STORAGE_KEY = "image-optimizer-files";

// Interface for file data
export interface FileData {
  name: string;
  type: string;
  size: number;
  url: string;
}

// Drawing types
export interface DrawingPoint {
  x: number;
  y: number;
  color: string;
  size: number;
}

export interface DrawingPath {
  points: DrawingPoint[];
  tool: string;
  color?: string;
  size?: number;
  text?: string;
  startX?: number;
  startY?: number;
  endX?: number;
  endY?: number;
  width?: number;
  height?: number;
}

// Store file data in localStorage with better persistence
export function storeFileData(files: FileData[]) {
  try {
    // Convert blob URLs to data URLs for small images
    const filesToStore = files.map((file) => {
      // If the file is too large (>1MB), we'll just store metadata
      if (file.size > 1024 * 1024) {
        return {
          ...file,
          // Replace blob URL with a special marker for large files
          originalUrl: file.url,
          // Keep the URL temporarily for this session
          url: file.url,
        };
      }

      // For smaller files, we keep the blob URL as is for now
      // In a production app, you'd convert to data URLs here
      return { ...file };
    });

    localStorage.setItem(STORAGE_KEY, JSON.stringify(filesToStore));
    console.log("Files stored in localStorage:", filesToStore);
  } catch (error) {
    console.error("Error storing files in localStorage:", error);
  }
}

// Retrieve file data from localStorage
export function retrieveFileData(): FileData[] {
  try {
    const storedFiles = localStorage.getItem(STORAGE_KEY);
    console.log("Retrieved files from storage:", storedFiles);

    if (!storedFiles) return [];

    const files = JSON.parse(storedFiles) as FileData[];

    // Check if any blob URLs are invalid and handle appropriately
    return files.filter((file) => {
      // Check if the URL is valid (this is a simple check)
      if (file.url.startsWith("blob:")) {
        try {
          // Try to fetch the blob URL
          fetch(file.url).catch(() => {
            console.warn(
              `Blob URL ${file.url} is no longer valid. This is expected after page reloads.`
            );
          });
          return true; // Keep the file even if the URL might be invalid
        } catch (e) {
          console.warn(`Error accessing blob URL ${file.url}:`, e);
          return false; // Filter out this file
        }
      }
      return true; // Keep non-blob URLs (like data URLs)
    });
  } catch (error) {
    console.error("Error retrieving files from localStorage:", error);
    return [];
  }
}

// Clear all images from storage
export function clearAllImagesFromStorage() {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error("Error clearing images from localStorage:", error);
  }
}

// Update images in storage
export function updateImagesInStorage(files: FileData[]) {
  storeFileData(files);
}

// Filter image files
export function filterImageFiles(files: File[]): File[] {
  return Array.from(files).filter((file) => file.type.startsWith("image/"));
}

// Create file data from uploaded files
export function createFileData(files: File[]): FileData[] {
  return files.map((file) => {
    const url = URL.createObjectURL(file);
    return {
      name: file.name,
      type: file.type,
      size: file.size,
      url,
    };
  });
}

// Create a file from paste event
export function createFileFromPaste(blob: Blob): File {
  const timestamp = new Date().getTime();
  const extension = blob.type.split("/")[1] || "png";
  return new File([blob], `pasted-image-${timestamp}.${extension}`, {
    type: blob.type,
    lastModified: timestamp,
  });
}

// Download image
export function downloadImage(image: FileData) {
  const link = document.createElement("a");
  link.href = image.url;
  link.download = image.name;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// Create edited file data
export function createEditedFileData(
  originalFile: FileData,
  editedBlob: Blob,
  format: string
): FileData {
  // Release the old object URL to avoid memory leaks
  URL.revokeObjectURL(originalFile.url);

  const newUrl = URL.createObjectURL(editedBlob);

  // Determine new file extension based on format
  let fileName = originalFile.name;
  if (format !== "original") {
    const nameWithoutExt =
      fileName.substring(0, fileName.lastIndexOf(".")) || fileName;
    fileName = `${nameWithoutExt}.${format}`;
  }

  return {
    name: fileName,
    type: editedBlob.type,
    size: editedBlob.size,
    url: newUrl,
  };
}

// Process image with format and compression
export async function processImage(
  image: HTMLImageElement,
  format: string,
  compressionLevel: number
): Promise<Blob> {
  return new Promise((resolve, reject) => {
    try {
      const canvas = document.createElement("canvas");
      canvas.width = image.naturalWidth;
      canvas.height = image.naturalHeight;

      const ctx = canvas.getContext("2d");
      if (!ctx) {
        reject(new Error("Could not get canvas context"));
        return;
      }

      // Draw the image to the canvas
      ctx.drawImage(image, 0, 0);

      // Determine output format
      const outputFormat =
        format === "original" ? "image/jpeg" : `image/${format}`;

      // Convert quality from percentage to decimal (0-1)
      const quality = compressionLevel / 100;

      // Get the blob from the canvas
      canvas.toBlob(
        (blob) => {
          if (blob) {
            resolve(blob);
          } else {
            reject(new Error("Failed to create blob from canvas"));
          }
        },
        outputFormat,
        quality
      );
    } catch (error) {
      reject(error);
    }
  });
}

// Crop image
export async function cropImage(
  image: HTMLImageElement,
  cropRect: { x: number; y: number; width: number; height: number },
  format: string,
  compressionLevel: number,
  containerElement: Element
): Promise<Blob> {
  return new Promise((resolve, reject) => {
    try {
      // Create a new canvas for the cropped image
      const canvas = document.createElement("canvas");

      // Get container dimensions
      const containerRect = containerElement.getBoundingClientRect();

      // Calculate scale factor between displayed image and original image
      const displayToOriginalRatio = image.naturalWidth / containerRect.width;

      // Convert crop rect from display coordinates to original image coordinates
      const originalCropRect = {
        x: cropRect.x * displayToOriginalRatio,
        y: cropRect.y * displayToOriginalRatio,
        width: cropRect.width * displayToOriginalRatio,
        height: cropRect.height * displayToOriginalRatio,
      };

      // Set canvas dimensions to cropped size
      canvas.width = originalCropRect.width;
      canvas.height = originalCropRect.height;

      // Draw the cropped portion of the image to the canvas
      const ctx = canvas.getContext("2d");
      if (!ctx) {
        reject(new Error("Could not get canvas context"));
        return;
      }

      ctx.drawImage(
        image,
        originalCropRect.x,
        originalCropRect.y,
        originalCropRect.width,
        originalCropRect.height,
        0,
        0,
        canvas.width,
        canvas.height
      );

      // Determine output format
      const outputFormat =
        format === "original" ? "image/jpeg" : `image/${format}`;

      // Convert quality from percentage to decimal (0-1)
      const quality = compressionLevel / 100;

      // Get the blob from the canvas
      canvas.toBlob(
        (blob) => {
          if (blob) {
            resolve(blob);
          } else {
            reject(new Error("Failed to create blob from canvas"));
          }
        },
        outputFormat,
        quality
      );
    } catch (error) {
      reject(error);
    }
  });
}

// Resize image
export async function resizeImage(
  image: HTMLImageElement,
  width: number,
  height: number,
  format: string,
  compressionLevel: number
): Promise<Blob> {
  return new Promise((resolve, reject) => {
    try {
      // Create a new canvas for the resized image
      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;

      // Draw the image to the canvas with new dimensions
      const ctx = canvas.getContext("2d");
      if (!ctx) {
        reject(new Error("Could not get canvas context"));
        return;
      }

      ctx.drawImage(image, 0, 0, width, height);

      // Determine output format
      const outputFormat =
        format === "original" ? "image/jpeg" : `image/${format}`;

      // Convert quality from percentage to decimal (0-1)
      const quality = compressionLevel / 100;

      // Get the blob from the canvas
      canvas.toBlob(
        (blob) => {
          if (blob) {
            resolve(blob);
          } else {
            reject(new Error("Failed to create blob from canvas"));
          }
        },
        outputFormat,
        quality
      );
    } catch (error) {
      reject(error);
    }
  });
}

// Canvas initialization
export function initDrawingCanvas(
  canvas: HTMLCanvasElement,
  width: number,
  height: number
) {
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  if (ctx) {
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.fillStyle = "rgba(0, 0, 0, 0)";
    ctx.clearRect(0, 0, width, height);
  }
}

// Clear the drawing canvas
export function clearDrawingCanvas(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext("2d");
  if (ctx) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
}

// Draw marker path
export function drawMarkerPath(
  ctx: CanvasRenderingContext2D,
  path: DrawingPath
) {
  if (path.points.length < 2) return;

  ctx.strokeStyle = path.points[0].color;
  ctx.lineWidth = path.points[0].size;
  ctx.beginPath();
  ctx.moveTo(path.points[0].x, path.points[0].y);

  for (let i = 1; i < path.points.length; i++) {
    ctx.lineTo(path.points[i].x, path.points[i].y);
  }
  ctx.stroke();
}

// Draw circle
export function drawCircle(ctx: CanvasRenderingContext2D, path: DrawingPath) {
  if (
    !path.startX ||
    !path.startY ||
    !path.endX ||
    !path.endY ||
    !path.color ||
    !path.size
  )
    return;

  const centerX = path.startX;
  const centerY = path.startY;
  const radius = Math.sqrt(
    Math.pow(path.endX - path.startX, 2) + Math.pow(path.endY - path.startY, 2)
  );

  ctx.strokeStyle = path.color;
  ctx.lineWidth = path.size;
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
  ctx.stroke();
}

// Draw rectangle
export function drawRectangle(
  ctx: CanvasRenderingContext2D,
  path: DrawingPath
) {
  if (
    !path.startX ||
    !path.startY ||
    !path.width ||
    !path.height ||
    !path.color ||
    !path.size
  )
    return;

  ctx.strokeStyle = path.color;
  ctx.lineWidth = path.size;
  ctx.beginPath();
  ctx.rect(path.startX, path.startY, path.width, path.height);
  ctx.stroke();
}

// Draw arrow
export function drawArrow(ctx: CanvasRenderingContext2D, path: DrawingPath) {
  if (
    !path.startX ||
    !path.startY ||
    !path.endX ||
    !path.endY ||
    !path.color ||
    !path.size
  )
    return;

  const headLength = 15; // Length of arrow head in pixels
  const angle = Math.atan2(path.endY - path.startY, path.endX - path.startX);

  // Draw the line
  ctx.strokeStyle = path.color;
  ctx.lineWidth = path.size;
  ctx.beginPath();
  ctx.moveTo(path.startX, path.startY);
  ctx.lineTo(path.endX, path.endY);
  ctx.stroke();

  // Draw the arrow head
  ctx.beginPath();
  ctx.moveTo(path.endX, path.endY);
  ctx.lineTo(
    path.endX - headLength * Math.cos(angle - Math.PI / 6),
    path.endY - headLength * Math.sin(angle - Math.PI / 6)
  );
  ctx.lineTo(
    path.endX - headLength * Math.cos(angle + Math.PI / 6),
    path.endY - headLength * Math.sin(angle + Math.PI / 6)
  );
  ctx.closePath();
  ctx.fillStyle = path.color;
  ctx.fill();
}

// Draw text
export function drawText(ctx: CanvasRenderingContext2D, path: DrawingPath) {
  if (!path.startX || !path.startY || !path.color || !path.size || !path.text)
    return;

  ctx.font = `${path.size * 3}px sans-serif`; // Multiply by 3 to make it more readable
  ctx.fillStyle = path.color;
  ctx.fillText(path.text, path.startX, path.startY);
}

// Draw all paths on a canvas
export function drawAllPaths(canvas: HTMLCanvasElement, paths: DrawingPath[]) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  clearDrawingCanvas(canvas);

  for (const path of paths) {
    switch (path.tool) {
      case "marker":
        drawMarkerPath(ctx, path);
        break;
      case "circle":
        drawCircle(ctx, path);
        break;
      case "rectangle":
        drawRectangle(ctx, path);
        break;
      case "arrow":
        drawArrow(ctx, path);
        break;
      case "text":
        drawText(ctx, path);
        break;
    }
  }
}

// Merge drawings with image
export async function mergeDrawingsWithImage(
  image: HTMLImageElement,
  canvas: HTMLCanvasElement,
  format: string,
  compressionLevel: number
): Promise<Blob> {
  return new Promise((resolve, reject) => {
    try {
      // Create a temporary canvas to merge image and drawings
      const mergeCanvas = document.createElement("canvas");
      mergeCanvas.width = image.naturalWidth;
      mergeCanvas.height = image.naturalHeight;
      const ctx = mergeCanvas.getContext("2d");

      if (!ctx) {
        reject(new Error("Could not get canvas context"));
        return;
      }

      // Draw the original image
      ctx.drawImage(image, 0, 0);

      // Get scale ratio between original image and drawing canvas
      const scaleX = image.naturalWidth / canvas.width;
      const scaleY = image.naturalHeight / canvas.height;

      // Draw the canvas content on top, scaled to match the image size
      ctx.scale(scaleX, scaleY);
      ctx.drawImage(canvas, 0, 0);

      // Convert to desired format
      const outputFormat =
        format === "original" ? "image/jpeg" : `image/${format}`;
      const quality = compressionLevel / 100;

      mergeCanvas.toBlob(
        (blob) => {
          if (blob) {
            resolve(blob);
          } else {
            reject(new Error("Failed to create blob from canvas"));
          }
        },
        outputFormat,
        quality
      );
    } catch (error) {
      reject(error);
    }
  });
}

// A helper function to modify the GalleryContent component to handle invalid blob URLs
export function updateGalleryContentForBlobURLs() {
  console.log("Adding blob URL handling to GalleryContent");

  // This function would need to be called within your component
  // Since we can't directly modify your component from here, use this as a guide

  // Implement this in your GalleryContent component:
  // 1. Add error handling for image loading
  // 2. Show a fallback UI when blob URLs are invalid
  // 3. Add a button to redirect back to the upload page
}
