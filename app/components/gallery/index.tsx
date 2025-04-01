import React from "react";
import { GalleryProvider } from "~/components/gallery/GalleryContext";
import ThumbnailGallery from "~/components/gallery/ThumbnailGallery";
import ImageEditor from "~/components/gallery/ImageEditor";
import GalleryGrid from "~/components/gallery/GalleryGrid";
import ImageModal from "~/components/gallery/ImageModal";
import ErrorMessage from "~/components/gallery/ErrorMessage";
import { useGallery } from "~/components/gallery/GalleryContext";

// This component uses the context but is inside the provider
const GalleryContent = () => {
  const { images, selectedImage, expandedImage, expandImage, redirecting } =
    useGallery();

  // Show appropriate components based on state
  return (
    <div className="bg-background transition-colors">
      <div className="container mx-auto p-4">
        {redirecting && (
          <ErrorMessage
            message="No images found in the gallery."
            redirecting={true}
          />
        )}

        <ThumbnailGallery />

        {/* Only show either the editor or the grid, not both */}
        {selectedImage ? <ImageEditor /> : <GalleryGrid />}
      </div>
      <ImageModal image={expandedImage} onClose={() => expandImage(null)} />
    </div>
  );
};

// Main exported component
export default function Gallery(): JSX.Element {
  return (
    <GalleryProvider>
      <GalleryContent />
    </GalleryProvider>
  );
}
