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

// Drawing interface
export interface DrawingPoint {
  x: number;
  y: number;
  color: string;
  size: number;
}

export interface DrawingPath {
  points: DrawingPoint[];
  tool: string;
}

/**
 * Initializes a drawing canvas by setting up the canvas
 * @param canvas Canvas element
 * @param width Canvas width
 * @param height Canvas height
 */
export const initDrawingCanvas = (
  canvas: HTMLCanvasElement,
  width: number,
  height: number
): void => {
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  if (ctx) {
    ctx.clearRect(0, 0, width, height);
  }
};

/**
 * Draws a path on the canvas
 * @param canvas Canvas element
 * @param path Drawing path with points
 */
export const drawPath = (
  canvas: HTMLCanvasElement,
  path: DrawingPath
): void => {
  const ctx = canvas.getContext("2d");
  if (!ctx || path.points.length < 2) return;

  // Different drawing behavior based on tool
  switch (path.tool) {
    case "marker":
      drawMarkerPath(ctx, path.points);
      break;
    case "circle":
      if (path.points.length >= 2) {
        drawCircle(ctx, path.points[0], path.points[path.points.length - 1]);
      }
      break;
    case "rectangle":
      if (path.points.length >= 2) {
        drawRectangle(ctx, path.points[0], path.points[path.points.length - 1]);
      }
      break;
    case "arrow":
      if (path.points.length >= 2) {
        drawArrow(ctx, path.points[0], path.points[path.points.length - 1]);
      }
      break;
    case "text":
      // Text is handled separately
      break;
    default:
      drawMarkerPath(ctx, path.points);
  }
};

/**
 * Draws a marker path on the canvas
 * @param ctx Canvas 2D context
 * @param points Array of drawing points
 */
export const drawMarkerPath = (
  ctx: CanvasRenderingContext2D,
  points: DrawingPoint[]
): void => {
  if (points.length < 2) return;

  ctx.beginPath();
  ctx.moveTo(points[0].x, points[0].y);

  for (let i = 1; i < points.length; i++) {
    const p1 = points[i - 1];
    const p2 = points[i];

    // Set line style for this segment
    ctx.strokeStyle = p1.color;
    ctx.lineWidth = p1.size;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    // Draw line
    ctx.lineTo(p2.x, p2.y);
    ctx.stroke();

    // Start a new path if the color or size changes
    if (
      i < points.length - 1 &&
      (p2.color !== points[i + 1].color || p2.size !== points[i + 1].size)
    ) {
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(p2.x, p2.y);
    }
  }

  ctx.stroke();
};

/**
 * Draws a circle on the canvas
 * @param ctx Canvas 2D context
 * @param start Starting point (center)
 * @param end Ending point (edge)
 */
export const drawCircle = (
  ctx: CanvasRenderingContext2D,
  start: DrawingPoint,
  end: DrawingPoint
): void => {
  const radius = Math.sqrt(
    Math.pow(end.x - start.x, 2) + Math.pow(end.y - start.y, 2)
  );

  ctx.beginPath();
  ctx.arc(start.x, start.y, radius, 0, 2 * Math.PI);
  ctx.strokeStyle = start.color;
  ctx.lineWidth = start.size;
  ctx.stroke();
};

/**
 * Draws a rectangle on the canvas
 * @param ctx Canvas 2D context
 * @param start Starting point (top-left)
 * @param end Ending point (bottom-right)
 */
export const drawRectangle = (
  ctx: CanvasRenderingContext2D,
  start: DrawingPoint,
  end: DrawingPoint
): void => {
  const width = end.x - start.x;
  const height = end.y - start.y;

  ctx.beginPath();
  ctx.rect(start.x, start.y, width, height);
  ctx.strokeStyle = start.color;
  ctx.lineWidth = start.size;
  ctx.stroke();
};

/**
 * Draws an arrow on the canvas
 * @param ctx Canvas 2D context
 * @param start Starting point
 * @param end Ending point
 */
export const drawArrow = (
  ctx: CanvasRenderingContext2D,
  start: DrawingPoint,
  end: DrawingPoint
): void => {
  // Arrow properties
  const headLength = 15;
  const headAngle = Math.PI / 6; // 30 degrees

  // Calculate angle
  const angle = Math.atan2(end.y - start.y, end.x - start.x);

  // Draw line
  ctx.beginPath();
  ctx.moveTo(start.x, start.y);
  ctx.lineTo(end.x, end.y);
  ctx.strokeStyle = start.color;
  ctx.lineWidth = start.size;
  ctx.stroke();

  // Draw arrow head
  ctx.beginPath();
  ctx.moveTo(end.x, end.y);
  ctx.lineTo(
    end.x - headLength * Math.cos(angle - headAngle),
    end.y - headLength * Math.sin(angle - headAngle)
  );
  ctx.moveTo(end.x, end.y);
  ctx.lineTo(
    end.x - headLength * Math.cos(angle + headAngle),
    end.y - headLength * Math.sin(angle + headAngle)
  );
  ctx.stroke();
};

/**
 * Draws text on the canvas
 * @param ctx Canvas 2D context
 * @param point Point to place text
 * @param text Text to draw
 * @param fontSize Font size (optional, default 16)
 */
export const drawText = (
  ctx: CanvasRenderingContext2D,
  point: DrawingPoint,
  text: string,
  fontSize: number = 16
): void => {
  ctx.font = `${fontSize}px Arial`;
  ctx.fillStyle = point.color;
  ctx.fillText(text, point.x, point.y);
};

/**
 * Clears the drawing canvas
 * @param canvas Canvas element
 */
export const clearDrawingCanvas = (canvas: HTMLCanvasElement): void => {
  const ctx = canvas.getContext("2d");
  if (ctx) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
};

/**
 * Merges drawings with an image
 * @param image Original image element
 * @param drawingCanvas Canvas with drawings
 * @param formatOption Output format
 * @param compressionLevel Quality level (0-100)
 * @returns Promise that resolves to a Blob of the image with drawings
 */
export const mergeDrawingsWithImage = (
  image: HTMLImageElement,
  drawingCanvas: HTMLCanvasElement,
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

    // Draw the original image
    ctx.drawImage(image, 0, 0);

    // Calculate scale factors
    const scaleX = image.naturalWidth / drawingCanvas.width;
    const scaleY = image.naturalHeight / drawingCanvas.height;

    // Draw the scaled drawing canvas on top
    ctx.save();
    ctx.scale(scaleX, scaleY);
    ctx.drawImage(drawingCanvas, 0, 0);
    ctx.restore();

    // Determine the output mime type
    const mimeType =
      formatOption === "webp"
        ? "image/webp"
        : formatOption === "jpeg"
        ? "image/jpeg"
        : "image/png";

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
