import React from "react";
import { Card } from "~/components/ui/Card";

interface ImageData {
  name: string;
  type: string;
  size: number;
  url: string;
}

interface ImageDetailsProps {
  originalImage: ImageData;
  editedImage?: ImageData;
}

export const ImageDetails: React.FC<ImageDetailsProps> = ({
  originalImage,
  editedImage,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Original Image Details */}
      <div className="relative mt-6">
        {/* Border title */}
        <div className="absolute -top-3 left-4 px-2 bg-white dark:bg-slate-900 z-10">
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
      <div className="relative mt-6">
        {/* Border title */}
        <div className="absolute -top-3 left-4 px-2 bg-white dark:bg-slate-900 z-10">
          <h3 className="text-base font-semibold">Edited Image</h3>
        </div>

        <Card className="pt-6">
          <div className="p-6 space-y-4">
            {editedImage ? (
              <>
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
              </>
            ) : (
              <p className="text-muted-foreground text-center">
                No edits made to the image
              </p>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ImageDetails;
