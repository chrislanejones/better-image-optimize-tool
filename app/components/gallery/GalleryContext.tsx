import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
} from "react";
import { useNavigate } from "@remix-run/react";
import {
  retrieveFileData,
  clearAllImagesFromStorage,
  updateImagesInStorage,
  processImage,
  cropImage,
  resizeImage,
  createEditedFileData,
  downloadImage,
  DrawingPoint,
  DrawingPath,
  mergeDrawingsWithImage,
  clearDrawingCanvas,
} from "~/utils/uploadUtils";

interface ImageData {
  name: string;
  type: string;
  size: number;
  url: string;
}

interface CropRect {
  x: number;
  y: number;
  width: number;
  height: number;
}

interface GalleryContextType {
  // State
  images: ImageData[];
  selectedImage: ImageData | null;
  currentImageIndex: number;
  expandedImage: ImageData | null;
  redirecting: boolean;
  cropMode: boolean;
  cropRect: CropRect | null;
  formatOption: string;
  compressionLevel: number;
  currentPage: number;
  totalPages: number;
  imagesPerPage: number;
  editorBarActive: boolean;
  activeTool: string | null;
  markerColor: string;
  markerSize: number;

  // Actions
  selectImage: (image: ImageData, index: number) => void;
  navigateNext: () => void;
  navigatePrevious: () => void;
  clearAllImages: () => void;
  removeImage: (index: number) => void;
  expandImage: (image: ImageData | null) => void;
  toggleCropMode: () => void;
  handleCropStart: (x: number, y: number) => void;
  handleCropMove: (x: number, y: number) => void;
  handleCropEnd: () => void;
  applyCrop: () => Promise<void>;
  applyChanges: () => Promise<void>;
  handleDimensionsChange: (
    width: number,
    height: number,
    maintainAspectRatio: boolean
  ) => Promise<void>;
  setFormatOption: (format: string) => void;
  setCompressionLevel: (level: number) => void;
  cancelChanges: () => void;
  changePage: (page: number) => void;
  toggleEditorBar: () => void;

  // Drawing functionality
  setActiveTool: (tool: string | null) => void;
  setMarkerColor: (color: string) => void;
  setMarkerSize: (size: number) => void;
  startDrawing: (x: number, y: number, color: string, size: number) => void;
  continueDrawing: (x: number, y: number) => void;
  endDrawing: () => void;
  clearDrawings: () => void;
  applyDrawings: () => Promise<void>;
  undoDrawing: () => void;
  redoDrawing: () => void;
}

const GalleryContext = createContext<GalleryContextType | undefined>(undefined);

export function useGallery() {
  const context = useContext(GalleryContext);
  if (!context) {
    throw new Error("useGallery must be used within a GalleryProvider");
  }
  return context;
}

export function GalleryProvider({ children }: { children: React.ReactNode }) {
  // State from gallery.tsx
  const [images, setImages] = useState<ImageData[]>([]);
  const [selectedImage, setSelectedImage] = useState<ImageData | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [expandedImage, setExpandedImage] = useState<ImageData | null>(null);
  const [redirecting, setRedirecting] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const imagesPerPage = 9;

  // Image editing state
  const [cropMode, setCropMode] = useState<boolean>(false);
  const [cropStartX, setCropStartX] = useState<number | null>(null);
  const [cropStartY, setCropStartY] = useState<number | null>(null);
  const [cropRect, setCropRect] = useState<CropRect | null>(null);
  const [formatOption, setFormatOption] = useState<string>("original");
  const [compressionLevel, setCompressionLevel] = useState<number>(90);

  // Editor bar and drawing state
  const [editorBarActive, setEditorBarActive] = useState<boolean>(false);
  const [activeTool, setActiveTool] = useState<string | null>("crop");
  const [markerColor, setMarkerColor] = useState<string>("#FF0000");
  const [markerSize, setMarkerSize] = useState<number>(5);
  const [isDrawing, setIsDrawing] = useState<boolean>(false);
  const [currentDrawingPoints, setCurrentDrawingPoints] = useState<
    DrawingPoint[]
  >([]);
  const [drawingPaths, setDrawingPaths] = useState<DrawingPath[]>([]);
  const [undoStack, setUndoStack] = useState<DrawingPath[]>([]);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imageElementRef = useRef<HTMLImageElement | null>(null);
  const navigate = useNavigate();

  const totalPages = Math.ceil(images.length / imagesPerPage);

  // Load images on component mount
  useEffect(() => {
    const storedImages = retrieveFileData();
    if (storedImages && storedImages.length > 0) {
      setImages(storedImages);
      setSelectedImage(storedImages[0]);
      setCurrentImageIndex(0);
    } else {
      setRedirecting(true);
      setTimeout(() => navigate("/"), 8000);
    }
  }, [navigate]);

  // Update image reference when selected image changes
  useEffect(() => {
    if (selectedImage) {
      const img = new Image();
      img.onload = () => (imageElementRef.current = img);
      img.src = selectedImage.url;

      setCropMode(false);
      setCropRect(null);
      setFormatOption("original");
      setCompressionLevel(90);
    }
  }, [selectedImage]);

  // GalleryContext actions
  const selectImage = (image: ImageData, index: number) => {
    // Prevent image selection when editor bar is active
    if (editorBarActive) return;

    setSelectedImage(image);
    setCurrentImageIndex(index);

    // Reset drawing state when selecting a new image
    setDrawingPaths([]);
    setUndoStack([]);
    setCurrentDrawingPoints([]);
  };

  const navigateNext = () => {
    // Prevent navigation when editor bar is active
    if (images.length === 0 || editorBarActive) return;
    const nextIndex = (currentImageIndex + 1) % images.length;
    setSelectedImage(images[nextIndex]);
    setCurrentImageIndex(nextIndex);
  };

  const navigatePrevious = () => {
    // Prevent navigation when editor bar is active
    if (images.length === 0 || editorBarActive) return;
    const prevIndex = (currentImageIndex - 1 + images.length) % images.length;
    setSelectedImage(images[prevIndex]);
    setCurrentImageIndex(prevIndex);
  };

  const clearAllImages = () => {
    clearAllImagesFromStorage();
    setImages([]);
    setSelectedImage(null);
  };

  const removeImage = (index: number) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
    updateImagesInStorage(newImages);

    if (currentImageIndex === index) {
      if (newImages.length > 0) {
        const newIndex = Math.min(index, newImages.length - 1);
        setSelectedImage(newImages[newIndex]);
        setCurrentImageIndex(newIndex);
      } else setSelectedImage(null);
    } else if (currentImageIndex > index)
      setCurrentImageIndex(currentImageIndex - 1);
  };

  const expandImage = (image: ImageData | null) => setExpandedImage(image);

  const handleCropStart = (x: number, y: number) => {
    setCropStartX(x);
    setCropStartY(y);
    setCropRect(null);
  };

  const handleCropMove = (x: number, y: number) => {
    if (cropStartX === null || cropStartY === null) return;
    setCropRect({
      x: Math.min(cropStartX, x),
      y: Math.min(cropStartY, y),
      width: Math.abs(x - cropStartX),
      height: Math.abs(y - cropStartY),
    });
  };

  const handleCropEnd = () => {
    setCropStartX(null);
    setCropStartY(null);
  };

  const toggleCropMode = () => {
    setCropMode(!cropMode);
    if (cropMode) setCropRect(null);
  };

  const applyCrop = async () => {
    if (!cropRect || !imageElementRef.current || !selectedImage) return;
    const previewContainer = document.querySelector(".image-preview-container");
    if (!previewContainer) return;

    try {
      const editedBlob = await cropImage(
        imageElementRef.current,
        cropRect,
        formatOption,
        compressionLevel,
        previewContainer
      );
      saveEditedImage(editedBlob);
      setCropMode(false);
      setCropRect(null);
    } catch (error) {
      console.error("Error applying crop:", error);
    }
  };

  const applyChanges = async () => {
    if (!imageElementRef.current || !selectedImage) return;
    try {
      const editedBlob = await processImage(
        imageElementRef.current,
        formatOption,
        compressionLevel
      );
      saveEditedImage(editedBlob);
    } catch (error) {
      console.error("Error applying changes:", error);
    }
  };

  const handleDimensionsChange = async (
    width: number,
    height: number,
    maintainAspectRatio: boolean
  ) => {
    if (!imageElementRef.current || !selectedImage) return;
    try {
      const editedBlob = await resizeImage(
        imageElementRef.current,
        width,
        height,
        formatOption,
        compressionLevel
      );
      saveEditedImage(editedBlob);
    } catch (error) {
      console.error("Error resizing image:", error);
    }
  };

  const cancelChanges = () => {
    if (!selectedImage || currentImageIndex >= images.length) return;

    // Reset to the original image
    const originalImage = images[currentImageIndex];
    setSelectedImage(originalImage);

    // Reset image in reference
    const img = new Image();
    img.onload = () => (imageElementRef.current = img);
    img.src = originalImage.url;

    // Reset all editing states
    setCropMode(false);
    setCropRect(null);
    setFormatOption("original");
    setCompressionLevel(90);

    console.log("Changes cancelled - reset to original image");
  };

  const saveEditedImage = (editedBlob: Blob) => {
    if (!selectedImage) return;
    const newImage = createEditedFileData(
      selectedImage,
      editedBlob,
      formatOption
    );
    const newImages = [...images];
    newImages[currentImageIndex] = newImage;
    setImages(newImages);
    setSelectedImage(newImage);
    updateImagesInStorage(newImages);

    const img = new Image();
    img.onload = () => (imageElementRef.current = img);
    img.src = newImage.url;
  };

  const changePage = (page: number) => setCurrentPage(page);

  // Toggle editor bar
  const toggleEditorBar = () => {
    setEditorBarActive(!editorBarActive);
    // If turning off editor bar, also turn off crop mode
    if (editorBarActive) {
      setCropMode(false);
      setCropRect(null);
    } else {
      // Reset active tool when activating the editor
      setActiveTool("crop");
    }
  };

  // Tool management
  const handleSetActiveTool = (tool: string | null) => {
    // If switching to crop, turn on crop mode
    if (tool === "crop") {
      setCropMode(true);
    } else if (activeTool === "crop" && tool !== "crop") {
      // If switching away from crop, turn off crop mode
      setCropMode(false);
      setCropRect(null);
    }

    setActiveTool(tool);
  };

  // Drawing functionality
  const startDrawing = (x: number, y: number, color: string, size: number) => {
    if (!activeTool || activeTool === "crop") return;

    setIsDrawing(true);
    const newPoint = { x, y, color: markerColor, size: markerSize };
    setCurrentDrawingPoints([newPoint]);
  };

  const continueDrawing = (x: number, y: number) => {
    if (!isDrawing || !activeTool || activeTool === "crop") return;

    const lastPoint = currentDrawingPoints[currentDrawingPoints.length - 1];
    if (!lastPoint) return;

    const newPoint = { x, y, color: lastPoint.color, size: lastPoint.size };
    setCurrentDrawingPoints((prev) => [...prev, newPoint]);
  };

  const endDrawing = () => {
    if (!isDrawing || !activeTool || activeTool === "crop") return;

    setIsDrawing(false);

    if (currentDrawingPoints.length > 1) {
      // Add new path to paths array
      const newPath: DrawingPath = {
        points: [...currentDrawingPoints],
        tool: activeTool,
      };

      setDrawingPaths((prev) => [...prev, newPath]);

      // Clear undo stack when adding new drawings
      setUndoStack([]);
    }

    setCurrentDrawingPoints([]);
  };

  const clearDrawings = () => {
    // Save current paths to undo stack before clearing
    if (drawingPaths.length > 0) {
      setUndoStack((prev) => [...prev, ...drawingPaths]);
    }

    setDrawingPaths([]);

    if (canvasRef.current) {
      clearDrawingCanvas(canvasRef.current);
    }
  };

  const undoDrawing = () => {
    if (drawingPaths.length === 0) return;

    // Pop the last path and add to undo stack
    const updatedPaths = [...drawingPaths];
    const removedPath = updatedPaths.pop();

    if (removedPath) {
      setDrawingPaths(updatedPaths);
      setUndoStack((prev) => [...prev, removedPath]);

      // Redraw all paths after undo
      if (canvasRef.current) {
        clearDrawingCanvas(canvasRef.current);
        updatedPaths.forEach((path) => {
          if (canvasRef.current) {
            // TODO: Draw the path
          }
        });
      }
    }
  };

  const redoDrawing = () => {
    if (undoStack.length === 0) return;

    // Pop the last path from undo stack and add back to drawing paths
    const updatedUndoStack = [...undoStack];
    const restoredPath = updatedUndoStack.pop();

    if (restoredPath) {
      setUndoStack(updatedUndoStack);
      setDrawingPaths((prev) => [...prev, restoredPath]);

      // Draw the restored path
      if (canvasRef.current) {
        // TODO: Draw the path
      }
    }
  };

  const applyDrawings = async () => {
    if (!imageElementRef.current || !canvasRef.current || !selectedImage)
      return;

    try {
      const editedBlob = await mergeDrawingsWithImage(
        imageElementRef.current,
        canvasRef.current,
        formatOption,
        compressionLevel
      );

      saveEditedImage(editedBlob);
      setDrawingPaths([]);
      setUndoStack([]);
    } catch (error) {
      console.error("Error applying drawings:", error);
    }
  };

  const contextValue = {
    // State
    images,
    selectedImage,
    currentImageIndex,
    expandedImage,
    redirecting,
    cropMode,
    cropRect,
    formatOption,
    compressionLevel,
    currentPage,
    totalPages,
    imagesPerPage,
    editorBarActive,
    activeTool,
    markerColor,
    markerSize,

    // Actions
    selectImage,
    navigateNext,
    navigatePrevious,
    clearAllImages,
    removeImage,
    expandImage,
    toggleCropMode,
    handleCropStart,
    handleCropMove,
    handleCropEnd,
    applyCrop,
    applyChanges,
    handleDimensionsChange,
    setFormatOption,
    setCompressionLevel,
    cancelChanges,
    changePage,
    toggleEditorBar,

    // Drawing functionality
    setActiveTool: handleSetActiveTool,
    setMarkerColor,
    setMarkerSize,
    startDrawing,
    continueDrawing,
    endDrawing,
    clearDrawings,
    applyDrawings,
    undoDrawing,
    redoDrawing,
  };

  return (
    <GalleryContext.Provider value={contextValue}>
      {children}
    </GalleryContext.Provider>
  );
}
