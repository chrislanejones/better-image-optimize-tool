import React from "react";
import { Link } from "@remix-run/react";
import { Card } from "~/components/ui/Card";
import { Button } from "~/components/ui/Button";
import { UploadCloud, Upload } from "lucide-react";
import ThumbnailGallery from "~/components/gallery/ThumbnailGallery";
import ImageEditor from "~/components/gallery/ImageEditor";
import GalleryGrid from "~/components/gallery/GalleryGrid";
import ImageModal from "~/components/gallery/ImageModal";
import ErrorMessage from "~/components/gallery/ErrorMessage";
import { useGallery } from "./GalleryContext";

const GalleryContent = () => {
  const { images, selectedImage, expandedImage, expandImage, redirecting } =
    useGallery();

  console.log("GalleryContent rendering", {
    images,
    selectedImage,
    redirecting,
  });

  // Show a simple error boundary
  try {
    return (
      <div className="bg-background transition-colors">
        <div className="container mx-auto p-4">
          {redirecting ? (
            <ErrorMessage
              message="No images found in the gallery."
              redirecting={true}
            />
          ) : images.length === 0 ? (
            <div className="text-center p-8 bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-4">No Images Available</h2>
              <p className="mb-4">Please upload some images first.</p>
              <a
                href="/"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Go to Upload Page
              </a>
            </div>
          ) : (
            <>
              <ThumbnailGallery />
              {selectedImage ? <ImageEditor /> : <GalleryGrid />}
            </>
          )}
        </div>
        {expandedImage && (
          <ImageModal image={expandedImage} onClose={() => expandImage(null)} />
        )}
      </div>
    );
  } catch (error) {
    console.error("Error rendering GalleryContent:", error);
    return (
      <div className="container mx-auto p-4 text-center">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          <h2 className="text-xl font-bold">Error Loading Gallery</h2>
          <p className="mt-2">
            {error instanceof Error ? error.message : "Unknown error"}
          </p>
          <p className="mt-4">
            <a href="/" className="underline">
              Return to Upload Page
            </a>
          </p>
        </div>
      </div>
    );
  }
};

export default GalleryContent;
