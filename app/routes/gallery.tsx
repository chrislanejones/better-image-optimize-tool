import { useState, useEffect, useRef } from "react";
import { useNavigate } from "@remix-run/react";
import {
  retrieveFileData,
  clearAllImagesFromStorage,
  updateImagesInStorage,
  processImage,
  cropImage,
  resizeImage,
  createEditedFileData,
} from "~/utils/fileUtils";
import ThumbnailGallery from "~/components/gallery/ThumbnailGallery";
import ImagePreview from "~/components/gallery/ImagePreview";
import ImageDetails from "~/components/gallery/ImageDetails";
import ImageModal from "~/components/gallery/ImageModal";
import ControlsCard from "~/components/gallery/ControlsCard";

interface ImageData {
  name: string;
  type: string;
  size: number;
  url: string;
}

export default function Gallery(): JSX.Element {
  const [images, setImages] = useState<ImageData[]>([]);
  const [selectedImage, setSelectedImage] = useState<ImageData | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [expandedImage, setExpandedImage] = useState<ImageData | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const imagesPerPage = 9;

  // Image editing state
  const [cropMode, setCropMode] = useState<boolean>(false);
  const [cropStartX, setCropStartX] = useState<number | null>(null);
  const [cropStartY, setCropStartY] = useState<number | null>(null);
  const [cropRect, setCropRect] = useState<{
    x: number;
    y: number;
    width: number;
    height: number;
  } | null>(null);
  const [formatOption, setFormatOption] = useState<string>("original");
  const [compressionLevel, setCompressionLevel] = useState<number>(90);

  // Reference to the original image for processing
  const imageElementRef = useRef<HTMLImageElement | null>(null);

  const navigate = useNavigate();

  // Calculate pagination
  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);
  const totalPages = Math.ceil(images.length / imagesPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  useEffect(() => {
    // Load images from localStorage
    const storedImages = retrieveFileData();

    if (storedImages && storedImages.length > 0) {
      setImages(storedImages);
      setSelectedImage(storedImages[0]);
      setCurrentImageIndex(0);
    } else if (storedImages && storedImages.length === 0) {
      setImages([]);
      setSelectedImage(null);
    } else {
      // No images found, redirect to upload page
      const timer = setTimeout(() => {
        navigate("/");
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [navigate]);

  // Load the current image for editing when it changes
  useEffect(() => {
    if (selectedImage) {
      const img = new Image();
      img.onload = () => {
        imageElementRef.current = img;
      };
      img.src = selectedImage.url;

      // Reset editing state
      setCropMode(false);
      setCropRect(null);
      setFormatOption("original");
      setCompressionLevel(90);
    }
  }, [selectedImage]);

  // Image selection and navigation
  const handleImageSelect = (image: ImageData, index: number): void => {
    setSelectedImage(image);
    setCurrentImageIndex(index);
  };

  const navigateNext = (): void => {
    if (images.length === 0) return;
    const nextIndex = (currentImageIndex + 1) % images.length;
    setSelectedImage(images[nextIndex]);
    setCurrentImageIndex(nextIndex);
  };

  const navigatePrevious = (): void => {
    if (images.length === 0) return;
    const prevIndex = (currentImageIndex - 1 + images.length) % images.length;
    setSelectedImage(images[prevIndex]);
    setCurrentImageIndex(prevIndex);
  };

  // Gallery management functions
  const clearAllImages = (): void => {
    clearAllImagesFromStorage();
    setImages([]);
    setSelectedImage(null);
  };

  const removeImage = (index: number): void => {
    const newImages = [...images];
    newImages.splice(index, 1);

    // Update state and storage
    setImages(newImages);
    updateImagesInStorage(newImages);

    // If removing the selected image, select another image
    if (currentImageIndex === index) {
      if (newImages.length > 0) {
        const newIndex = Math.min(index, newImages.length - 1);
        setSelectedImage(newImages[newIndex]);
        setCurrentImageIndex(newIndex);
      } else {
        setSelectedImage(null);
      }
    } else if (currentImageIndex > index) {
      // If removing an image before the selected one, adjust the index
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  // Function to expand an image
  const expandImage = (image: ImageData): void => {
    setExpandedImage(image);
  };

  // Crop handling functions
  const handleCropStart = (x: number, y: number): void => {
    setCropStartX(x);
    setCropStartY(y);
    setCropRect(null);
  };

  const handleCropMove = (x: number, y: number): void => {
    if (cropStartX === null || cropStartY === null) return;

    setCropRect({
      x: Math.min(cropStartX, x),
      y: Math.min(cropStartY, y),
      width: Math.abs(x - cropStartX),
      height: Math.abs(y - cropStartY),
    });
  };

  const handleCropEnd = (): void => {
    setCropStartX(null);
    setCropStartY(null);
  };

  // Toggle crop mode
  const toggleCropMode = (): void => {
    setCropMode(!cropMode);
    if (cropMode) {
      // Exiting crop mode, clear crop rectangle
      setCropRect(null);
    }
  };

  // Apply crop
  const applyCrop = async (): Promise<void> => {
    if (!cropRect || !imageElementRef.current || !selectedImage) return;

    // Get reference to the preview container to calculate scale
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

      // Exit crop mode
      setCropMode(false);
      setCropRect(null);
    } catch (error) {
      console.error("Error applying crop:", error);
    }
  };

  // Apply all changes (format and compression)
  const applyChanges = async (): Promise<void> => {
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

  // Apply dimension changes
  const handleDimensionsChange = async (
    width: number,
    height: number,
    maintainAspectRatio: boolean
  ): Promise<void> => {
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

  // Reset all changes
  const cancelChanges = (): void => {
    // Just reload the current image to reset all edits
    if (selectedImage) {
      const img = new Image();
      img.onload = () => {
        imageElementRef.current = img;
      };
      img.src = selectedImage.url;

      // Reset editing state
      setCropMode(false);
      setCropRect(null);
      setFormatOption("original");
      setCompressionLevel(90);
    }
  };

  // Save edited image
  const saveEditedImage = (editedBlob: Blob): void => {
    if (!selectedImage) return;

    // Create new file data from edited blob
    const newImage = createEditedFileData(
      selectedImage,
      editedBlob,
      formatOption
    );

    // Update the image in the array
    const newImages = [...images];
    newImages[currentImageIndex] = newImage;

    // Update state and storage
    setImages(newImages);
    setSelectedImage(newImage);
    updateImagesInStorage(newImages);

    // Reload the image for further editing
    const img = new Image();
    img.onload = () => {
      imageElementRef.current = img;
    };
    img.src = newImage.url;
  };

  return (
    <div className="bg-background transition-colors">
      {/* Gallery Content */}
      <div className="container mx-auto p-4">
        {/* Thumbnail Gallery with integrated navigation */}
        <ThumbnailGallery
          images={images}
          selectedImage={selectedImage}
          onSelectImage={handleImageSelect}
          onRemoveImage={removeImage}
          onExpandImage={expandImage}
          onClearAll={clearAllImages}
          onNext={navigateNext}
          onPrevious={navigatePrevious}
          currentIndex={currentImageIndex}
          totalImages={images.length}
          onChangePage={paginate}
          currentPage={currentPage}
          totalPages={totalPages}
        />

        {/* Selected Image Display and Controls */}
        {selectedImage && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
            {/* Image Preview */}
            <div className="image-preview-container md:col-span-3">
              <ImagePreview
                image={selectedImage}
                cropMode={cropMode}
                cropRect={cropRect}
                onCropStart={handleCropStart}
                onCropMove={handleCropMove}
                onCropEnd={handleCropEnd}
              />
            </div>

            {/* Controls Card */}
            <div className="md:col-span-1">
              <ControlsCard
                image={selectedImage}
                cropMode={cropMode}
                formatOption={formatOption}
                compressionLevel={compressionLevel}
                onToggleCrop={toggleCropMode}
                onFormatChange={setFormatOption}
                onCompressionChange={setCompressionLevel}
                onDimensionsChange={handleDimensionsChange}
                onApplyChanges={applyChanges}
                onCancelChanges={cancelChanges}
                hasCropSelection={cropRect !== null}
                onApplyCrop={applyCrop}
              />
            </div>
          </div>
        )}

        {/* Grid view of images for the current page */}
        {images.length > 0 && !selectedImage && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {currentImages.map((image, index) => (
              <div
                className="relative cursor-pointer bg-card rounded overflow-hidden"
                key={index}
                onClick={() =>
                  handleImageSelect(image, indexOfFirstImage + index)
                }
              >
                <img
                  src={image.url}
                  alt={`Gallery image ${indexOfFirstImage + index + 1}`}
                  className="w-full h-64 object-cover rounded shadow-sm"
                />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Image Modal for expanded view */}
      <ImageModal
        image={expandedImage}
        onClose={() => setExpandedImage(null)}
      />
    </div>
  );
}
