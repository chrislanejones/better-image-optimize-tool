import { useState, useEffect, useRef } from "react";
import { useNavigate } from "@remix-run/react";
import { ThemeToggle } from "~/components/ThemeToggle";
import { retrieveFileData } from "~/utils/fileUtils";
import ThumbnailGallery from "~/components/gallery/ThumbnailGallery";
import ImagePreview from "~/components/gallery/ImagePreview";
import ImageDetails from "~/components/gallery/ImageDetails";
import ErrorMessage from "~/components/gallery/ErrorMessage";
import ImageModal from "~/components/gallery/ImageModal";
import ControlsCard from "~/components/gallery/ControlsCard";
import ImageControlBar from "~/components/gallery/ImageControlBar";

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
  const [loadError, setLoadError] = useState<string | null>(null);
  const [expandedImage, setExpandedImage] = useState<ImageData | null>(null);

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

  useEffect(() => {
    // Retrieve images from sessionStorage
    console.log("Gallery component mounted, retrieving stored images");
    const storedImages = retrieveFileData();

    if (storedImages) {
      console.log(`Found ${storedImages.length} images in storage`);

      if (storedImages.length === 0) {
        setLoadError("No images were found. Please upload some images first.");
        return;
      }

      setImages(storedImages);

      // Select first image by default if available
      if (storedImages.length > 0) {
        setSelectedImage(storedImages[0]);
        setCurrentImageIndex(0);
      }
    } else {
      console.log("No images found in storage");
      setLoadError("No images were found. Please upload some images first.");

      // Auto redirect back to upload page after a short delay
      const timer = setTimeout(() => {
        navigate("/");
      }, 2000);

      // Clear the timeout if the component unmounts
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

  // Function to download the current image
  const downloadImage = (): void => {
    if (!selectedImage) return;

    // Create an invisible anchor element
    const a = document.createElement("a");
    a.href = selectedImage.url;
    a.download = selectedImage.name;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  // Function to clear all images
  const clearAllImages = (): void => {
    sessionStorage.removeItem("uploadedImages");
    setImages([]);
    setSelectedImage(null);
  };

  // Function to remove an image
  const removeImage = (index: number): void => {
    const newImages = [...images];
    newImages.splice(index, 1);

    // Update state and storage
    setImages(newImages);

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

    // Update storage
    if (newImages.length > 0) {
      sessionStorage.setItem("uploadedImages", JSON.stringify(newImages));
    } else {
      sessionStorage.removeItem("uploadedImages");
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
  const applyCrop = (): void => {
    if (!cropRect || !imageElementRef.current || !selectedImage) return;

    // Get reference to the preview container to calculate scale
    const previewContainer = document.querySelector(".image-preview-container");
    if (!previewContainer) return;

    // Calculate scaling factor
    const displayWidth = previewContainer.clientWidth;
    const scaleX = imageElementRef.current.naturalWidth / displayWidth;

    // Create a new canvas with the cropped dimensions
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas dimensions to cropped size
    canvas.width = cropRect.width * scaleX;
    canvas.height = cropRect.height * scaleX;

    // Draw the cropped portion of the image
    ctx.drawImage(
      imageElementRef.current,
      cropRect.x * scaleX,
      cropRect.y * scaleX,
      cropRect.width * scaleX,
      cropRect.height * scaleX,
      0,
      0,
      canvas.width,
      canvas.height
    );

    // Convert to blob and save
    canvas.toBlob(
      (blob) => {
        if (blob) {
          saveEditedImage(blob);
        }
      },
      formatOption === "webp" ? "image/webp" : "image/jpeg",
      compressionLevel / 100
    );

    // Exit crop mode
    setCropMode(false);
    setCropRect(null);
  };

  // Apply all changes (format and compression)
  const applyChanges = (): void => {
    if (!imageElementRef.current || !selectedImage) return;

    // Create a canvas at the original image size
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = imageElementRef.current.naturalWidth;
    canvas.height = imageElementRef.current.naturalHeight;

    // Draw the image at full size
    ctx.drawImage(imageElementRef.current, 0, 0);

    // Convert to blob with selected format and compression
    canvas.toBlob(
      (blob) => {
        if (blob) {
          saveEditedImage(blob);
        }
      },
      formatOption === "webp" ? "image/webp" : "image/jpeg",
      compressionLevel / 100
    );
  };

  // Apply dimension changes
  const handleDimensionsChange = (
    width: number,
    height: number,
    maintainAspectRatio: boolean
  ): void => {
    if (!imageElementRef.current || !selectedImage) return;

    // Create a canvas with the new dimensions
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = width;
    canvas.height = height;

    // Draw the image at the new size
    ctx.drawImage(imageElementRef.current, 0, 0, width, height);

    // Convert to blob and save
    canvas.toBlob(
      (blob) => {
        if (blob) {
          saveEditedImage(blob);
        }
      },
      formatOption === "webp" ? "image/webp" : "image/jpeg",
      compressionLevel / 100
    );
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

    // Create a new URL for the edited image
    const newUrl = URL.createObjectURL(editedBlob);

    // Determine new file extension based on format
    let newName = selectedImage.name;
    if (formatOption !== "original") {
      // Remove old extension and add new one
      const baseName = selectedImage.name.split(".").slice(0, -1).join(".");
      newName = `${baseName}.${formatOption === "webp" ? "webp" : "jpg"}`;
    }

    // Create new image data
    const newImage: ImageData = {
      name: newName,
      type: formatOption === "webp" ? "image/webp" : "image/jpeg",
      size: editedBlob.size,
      url: newUrl,
    };

    // Update the image in the array
    const newImages = [...images];
    newImages[currentImageIndex] = newImage;

    // Update state and storage
    setImages(newImages);
    setSelectedImage(newImage);
    sessionStorage.setItem("uploadedImages", JSON.stringify(newImages));

    // Reload the image for further editing
    const img = new Image();
    img.onload = () => {
      imageElementRef.current = img;
    };
    img.src = newUrl;
  };

  return (
    <div className="bg-background transition-colors">
      {/* Header with theme toggle */}
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-foreground">Photo Gallery</h1>
          <ThemeToggle />
        </div>
      </header>

      <main className="container mx-auto p-4">
        {/* Error message display */}
        {loadError && <ErrorMessage message={loadError} redirecting={true} />}

        {/* Thumbnail Gallery with integrated navigation */}
        {selectedImage && (
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
          />
        )}

        {/* Control bar - NEW COMPONENT */}
        {selectedImage && (
          <ImageControlBar
            formatOption={formatOption}
            onFormatChange={setFormatOption}
            compressionLevel={compressionLevel}
            onCompressionChange={setCompressionLevel}
            cropMode={cropMode}
            onToggleCrop={toggleCropMode}
            hasCropSelection={cropRect !== null}
            onApplyCrop={applyCrop}
            onApplyChanges={applyChanges}
            onCancelChanges={cancelChanges}
            onDownload={downloadImage}
          />
        )}

        {/* Selected Image Display and Controls */}
        {selectedImage && (
          <>
            {/* Image Preview */}
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

              {/* Controls Card */}
              <div className="md:col-span-1">
                <ControlsCard
                  image={selectedImage}
                  onDimensionsChange={handleDimensionsChange}
                />

                {/* Image Details Card */}
                <ImageDetails
                  originalImage={images[currentImageIndex]}
                  editedImage={
                    selectedImage !== images[currentImageIndex]
                      ? selectedImage
                      : undefined
                  }
                />
              </div>
            </div>
          </>
        )}
      </main>

      {/* Image Modal for expanded view */}
      <ImageModal
        image={expandedImage}
        onClose={() => setExpandedImage(null)}
      />

      {/* Footer */}
      <footer className="border-t border-border py-6 mt-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground text-sm">
          <p>
            © {new Date().getFullYear()} Photo Gallery. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
