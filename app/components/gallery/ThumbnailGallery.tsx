import React, { useState } from "react";
import { Link } from "@remix-run/react";
import { Card, CardHeader, CardTitle, CardContent } from "~/components/ui/Card";
import { Button } from "~/components/ui/Button";
import {
  ArrowLeftToLine,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  X,
  Maximize,
} from "lucide-react";

interface ImageData {
  name: string;
  type: string;
  size: number;
  url: string;
}

interface ThumbnailGalleryProps {
  images: ImageData[];
  selectedImage: ImageData | null;
  onSelectImage: (image: ImageData, index: number) => void;
  onRemoveImage: (index: number) => void;
  onExpandImage: (image: ImageData) => void;
  onClearAll: () => void;
  onNext: () => void;
  onPrevious: () => void;
  currentIndex: number;
  totalImages: number;
}

export const ThumbnailGallery: React.FC<ThumbnailGalleryProps> = ({
  images,
  selectedImage,
  onSelectImage,
  onRemoveImage,
  onExpandImage,
  onClearAll,
  onNext,
  onPrevious,
  currentIndex,
  totalImages,
}) => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  return (
    <Card className="mb-6">
      <CardHeader className="px-6 py-4">
        <div className="grid grid-cols-3 items-center w-full">
          {/* Left aligned: Back button and Clear All */}
          <div className="flex items-center gap-2 justify-self-start">
            <Button variant="outline" size="sm" asChild>
              <Link to="/">
                <ArrowLeftToLine className="mr-1 h-4 w-4" />
                Back to Upload
              </Link>
            </Button>

            {images.length > 0 && (
              <Button variant="destructive" size="sm" onClick={onClearAll}>
                Clear All
              </Button>
            )}
          </div>

          {/* Center aligned: Title */}
          <CardTitle className="justify-self-center">
            Thumbnail Gallery
          </CardTitle>

          {/* Right aligned: Navigation */}
          {images.length > 1 && (
            <div className="flex items-center gap-2 justify-self-end">
              <Button
                variant="default"
                size="sm"
                onClick={() => onSelectImage(images[0], 0)}
                aria-label="First image"
                disabled={currentIndex === 0}
              >
                <ChevronsLeft className="h-4 w-4" />
              </Button>

              <Button
                variant="default"
                size="sm"
                onClick={onPrevious}
                aria-label="Previous image"
                disabled={currentIndex === 0}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>

              <span className="text-md text-muted-foreground">
                Image {currentIndex + 1} of {totalImages}
              </span>

              <Button
                variant="default"
                size="sm"
                onClick={onNext}
                aria-label="Next image"
                disabled={currentIndex === totalImages - 1}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>

              <Button
                variant="default"
                size="sm"
                onClick={() =>
                  onSelectImage(images[totalImages - 1], totalImages - 1)
                }
                aria-label="Last image"
                disabled={currentIndex === totalImages - 1}
              >
                <ChevronsRight className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex gap-4 overflow-x-auto p-4 min-h-24 items-center scrollbar-thin bg-slate-100 dark:bg-slate-900 rounded-md">
          {images.length > 0 ? (
            images.map((image, index) => (
              <div
                key={index}
                className={`relative flex-none w-20 h-20 rounded cursor-pointer transition-all hover:-translate-y-1 ${
                  selectedImage === image
                    ? "ring-2 ring-primary shadow-md"
                    : "ring-2 ring-transparent"
                }`}
                onClick={() => onSelectImage(image, index)}
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    onSelectImage(image, index);
                  }
                }}
                tabIndex={0}
                role="button"
                aria-label={`Select image ${image.name}`}
                aria-selected={selectedImage === image}
              >
                <img
                  src={image.url}
                  alt={image.name}
                  className="w-full h-full object-cover"
                />

                {/* Hover controls */}
                {hoverIndex === index && (
                  <>
                    {/* Expand button */}
                    <button
                      className="absolute top-0 left-0 p-1 bg-black/50 text-white rounded-br"
                      onClick={(e) => {
                        e.stopPropagation();
                        onExpandImage(image);
                      }}
                      aria-label="Expand image"
                    >
                      <Maximize className="h-4 w-4" />
                    </button>

                    {/* Remove button */}
                    <button
                      className="absolute top-0 right-0 p-1 bg-black/50 text-white rounded-bl"
                      onClick={(e) => {
                        e.stopPropagation();
                        onRemoveImage(index);
                      }}
                      aria-label="Remove image"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </>
                )}
              </div>
            ))
          ) : (
            <div className="w-full text-center text-muted-foreground py-4">
              <p>No images uploaded</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ThumbnailGallery;
