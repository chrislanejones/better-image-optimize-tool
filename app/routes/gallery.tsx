import React, { useState, useEffect, useRef } from "react";
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

  const imageElementRef = useRef<HTMLImageElement | null>(null);
  const navigate = useNavigate();

  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);
  const totalPages = Math.ceil(images.length / imagesPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  useEffect(() => {
    const storedImages = retrieveFileData();
    if (storedImages && storedImages.length > 0) {
      setImages(storedImages);
      setSelectedImage(storedImages[0]);
      setCurrentImageIndex(0);
    } else {
      setTimeout(() => navigate("/"), 1000);
    }
  }, [navigate]);

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

  const clearAllImages = (): void => {
    clearAllImagesFromStorage();
    setImages([]);
    setSelectedImage(null);
  };

  const removeImage = (index: number): void => {
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

  const expandImage = (image: ImageData): void => setExpandedImage(image);

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

  const toggleCropMode = (): void => {
    setCropMode(!cropMode);
    if (cropMode) setCropRect(null);
  };

  const applyCrop = async (): Promise<void> => {
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

  const handleDimensionsChange = async (
    width: number,
    height: number
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

  const cancelChanges = (): void => {
    if (selectedImage) {
      const img = new Image();
      img.onload = () => (imageElementRef.current = img);
      img.src = selectedImage.url;
      setCropMode(false);
      setCropRect(null);
      setFormatOption("original");
      setCompressionLevel(90);
    }
  };

  const saveEditedImage = (editedBlob: Blob): void => {
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

  const areImagesEqual = (
    img1: ImageData | null,
    img2: ImageData | null
  ): boolean => {
    if (!img1 || !img2) return img1 === img2;
    return (
      img1.url === img2.url &&
      img1.name === img2.name &&
      img1.size === img2.size &&
      img1.type === img2.type
    );
  };

  return (
    <div className="bg-background transition-colors">
      <div className="container mx-auto p-4">
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

        {selectedImage && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
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
                onDownload={() => selectedImage && downloadImage(selectedImage)}
              />
              <ImageDetails
                originalImage={images[currentImageIndex]}
                editedImage={
                  areImagesEqual(selectedImage, images[currentImageIndex])
                    ? undefined
                    : selectedImage
                }
              />
            </div>
          </div>
        )}

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
      <ImageModal
        image={expandedImage}
        onClose={() => setExpandedImage(null)}
      />
    </div>
  );
}
