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

export const GalleryContent: React.FC = () => {
  const { images, selectedImage, expandedImage, expandImage, redirecting } =
    useGallery();

  // Show a single empty state message when there are no images
  if (images.length === 0 && !redirecting) {
    return (
      <div className="container mx-auto p-4">
        <Card className="mb-6 p-8">
          <div className="flex flex-col items-center justify-center text-center">
            <UploadCloud size={48} className="text-muted-foreground mb-4" />
            <h2 className="text-xl font-semibold mb-2">No Images Available</h2>
            <p className="text-muted-foreground mb-6">
              Start by uploading images from the upload page
            </p>
            <Button variant="primary" asChild>
              <Link to="/">
                <Upload className="mr-2 h-4 w-4" />
                Go to Upload
              </Link>
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  // If redirecting, show the redirecting message
  if (redirecting) {
    return (
      <div className="container mx-auto p-4">
        <ErrorMessage
          message="No images found in the gallery."
          redirecting={true}
        />
      </div>
    );
  }

  return (
    <div className="bg-background transition-colors">
      <div className="container mx-auto p-4">
        {/* Only render these components when there are images */}
        <ThumbnailGallery />
        {selectedImage ? <ImageEditor /> : <GalleryGrid />}
      </div>

      <ImageModal image={expandedImage} onClose={() => expandImage(null)} />
    </div>
  );
};

export default GalleryContent;
