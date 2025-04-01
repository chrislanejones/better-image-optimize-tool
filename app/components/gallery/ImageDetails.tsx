import React from "react";
import { Card } from "~/components/ui/Card";
import { useGallery } from "./GalleryContext";

interface ImageData {
  name: string;
  type: string;
  size: number;
  url: string;
}

export const ImageDetails: React.FC = () => {
  const { images, selectedImage, currentImageIndex } = useGallery();

  if (!selectedImage || !images[currentImageIndex]) return null;

  const originalImage = images[currentImageIndex];
  const isEdited = originalImage.url !== selectedImage.url;
  const editedImage = isEdited ? selectedImage : undefined;

  return (
    <div className="space-y-6">
      {/* Original Image Details */}
      <div className="relative mt-6">
        {/* Border title */}
        <div className="absolute -top-3 left-4 px-2 bg-background z-10">
          <h3 className="text-base font-semibold">Original Image</h3>
        </div>

        <Card className="pt-6">
          <div className="p-6 space-y-4">
            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-1">
                File name
              </h3>
              <p className="break-words">{originalImage.name}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-1">
                Type
              </h3>
              <p>{originalImage.type}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-1">
                Size
              </h3>
              <p>{Math.round(originalImage.size / 1024)} KB</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Edited Image Details */}
      {editedImage && (
        <div className="relative mt-6">
          {/* Border title */}
          <div className="absolute -top-3 left-4 px-2 bg-background z-10">
            <h3 className="text-base font-semibold">Edited Image</h3>
          </div>

          <Card className="pt-6">
            <div className="p-6 space-y-4">
              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-1">
                  File name
                </h3>
                <p className="break-words">{editedImage.name}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-1">
                  Type
                </h3>
                <p>{editedImage.type}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-1">
                  Size
                </h3>
                <p>{Math.round(editedImage.size / 1024)} KB</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-1">
                  Reduction
                </h3>
                <p className="text-green-600 dark:text-green-400">
                  {Math.round(
                    (1 - editedImage.size / originalImage.size) * 100
                  )}
                  % smaller
                </p>
              </div>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
};

export default ImageDetails;
