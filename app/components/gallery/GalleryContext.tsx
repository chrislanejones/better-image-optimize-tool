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
    setSelectedImage(image);
    setCurrentImageIndex(index);
  };

  const navigateNext = () => {
    if (images.length === 0) return;
    const nextIndex = (currentImageIndex + 1) % images.length;
    setSelectedImage(images[nextIndex]);
    setCurrentImageIndex(nextIndex);
  };

  const navigatePrevious = () => {
    if (images.length === 0) return;
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
  };

  return (
    <GalleryContext.Provider value={contextValue}>
      {children}
    </GalleryContext.Provider>
  );
}
