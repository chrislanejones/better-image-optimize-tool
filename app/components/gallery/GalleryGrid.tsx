import React from "react";
import { useGallery } from "./GalleryContext";

export const GalleryGrid: React.FC = () => {
  const { images, selectedImage, selectImage, currentPage, imagesPerPage } =
    useGallery();

  // No selected image but also no images to display
  if (images.length === 0) {
    return null; // Don't show anything, main empty state is handled by GalleryContent
  }

  // If there's a selected image, don't render the grid
  if (selectedImage) return null;

  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {currentImages.map((image, index) => (
        <div
          className="relative cursor-pointer bg-card rounded overflow-hidden"
          key={index}
          onClick={() => selectImage(image, indexOfFirstImage + index)}
        >
          <img
            src={image.url}
            alt={`Gallery image ${indexOfFirstImage + index + 1}`}
            className="w-full h-64 object-cover rounded shadow-sm"
          />
        </div>
      ))}
    </div>
  );
};

export default GalleryGrid;
