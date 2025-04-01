import React from "react";
import ImagePreview from "~/components/gallery/ImagePreview";
import ImageDetails from "~/components/gallery/ImageDetails";
import ControlsCard from "~/components/gallery/ControlsCard";
import { useGallery } from "./GalleryContext";

export const ImageEditor: React.FC = () => {
  const { selectedImage, images, currentImageIndex } = useGallery();

  // Simply return null instead of showing an error when no image is selected
  if (!selectedImage || !images || images.length === 0) {
    return null;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
      {/* Image Preview - Takes 2/3 of the width on medium screens and up */}
      <div className="image-preview-container md:col-span-2">
        <ImagePreview />
      </div>

      {/* Controls and Details - Takes 1/3 of the width on medium screens and up */}
      <div className="md:col-span-1">
        {/* We're using a vertical stack layout within this column */}
        <div className="space-y-6">
          <ControlsCard />
          <ImageDetails />
        </div>
      </div>
    </div>
  );
};

export default ImageEditor;
