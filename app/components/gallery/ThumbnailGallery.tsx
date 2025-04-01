import React, { useState } from "react";
import { Link } from "@remix-run/react";
import { Card, CardHeader, CardContent } from "~/components/ui/Card";
import { Button } from "~/components/ui/Button";
import {
  ArrowLeftToLine,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  X,
  Maximize,
  UploadCloud,
  User,
} from "lucide-react";
import { ThemeToggle } from "~/components/ThemeToggle";
import { useGallery } from "./GalleryContext";

export const ThumbnailGallery: React.FC = () => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const {
    images,
    selectedImage,
    currentImageIndex,
    selectImage,
    removeImage,
    expandImage,
    clearAllImages,
    navigateNext,
    navigatePrevious,
    currentPage,
    totalPages,
    changePage,
  } = useGallery();

  const totalImages = images.length;

  return (
    <header className="mb-6">
      <Card>
        <CardHeader className="px-6 py-4">
          <div className="grid grid-cols-3 items-center w-full">
            {/* Left aligned: Back button and Clear All */}
            <div className="flex items-center gap-2 justify-self-start">
              <Button variant="secondary" size="sm" asChild>
                <Link to="/">
                  <ArrowLeftToLine className="mr-1 h-4 w-4" />
                  Back to Upload
                </Link>
              </Button>

              {images.length > 0 && (
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={clearAllImages}
                >
                  Clear All
                </Button>
              )}
            </div>

            {/* Center aligned: Pagination - only show when there's a selected image */}
            <div className="justify-self-center flex items-center">
              {selectedImage && (
                <div className="flex items-center">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => selectImage(images[0], 0)}
                    aria-label="First image"
                    disabled={currentImageIndex === 0}
                    className="mr-1"
                  >
                    <ChevronsLeft className="h-4 w-4" />
                  </Button>

                  <Button
                    variant="outline"
                    size="sm"
                    onClick={navigatePrevious}
                    aria-label="Previous image"
                    disabled={currentImageIndex === 0}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>

                  <span className="text-sm text-muted-foreground px-3">
                    Image {currentImageIndex + 1} of {totalImages}
                  </span>

                  <Button
                    variant="outline"
                    size="sm"
                    onClick={navigateNext}
                    aria-label="Next image"
                    disabled={currentImageIndex === totalImages - 1}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>

                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      selectImage(images[totalImages - 1], totalImages - 1)
                    }
                    aria-label="Last image"
                    disabled={currentImageIndex === totalImages - 1}
                    className="ml-1"
                  >
                    <ChevronsRight className="h-4 w-4" />
                  </Button>
                </div>
              )}
            </div>

            {/* Right aligned: Theme toggle and User icon */}
            <div className="flex items-center gap-2 justify-self-end">
              <ThemeToggle />
              <Button variant="secondary" size="sm">
                <User size={18} />
              </Button>
            </div>
          </div>
        </CardHeader>

        <CardContent>
          <div className="flex gap-4 overflow-x-auto p-4 min-h-24 items-center scrollbar-thin well rounded-md">
            {images.length > 0 ? (
              images.map((image, index) => (
                <div
                  key={index}
                  className={`relative flex-none w-20 h-20 rounded cursor-pointer transition-all hover:-translate-y-1 ${
                    selectedImage === image
                      ? "ring-2 ring-primary shadow-md"
                      : "ring-2 ring-transparent"
                  }`}
                  onClick={() => selectImage(image, index)}
                  onMouseEnter={() => setHoverIndex(index)}
                  onMouseLeave={() => setHoverIndex(null)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      selectImage(image, index);
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
                    className="w-full h-full object-cover rounded"
                  />

                  {/* Hover controls */}
                  {hoverIndex === index && (
                    <>
                      {/* Expand button */}
                      <button
                        className="absolute top-0 left-0 p-1 bg-black/50 text-white rounded-br"
                        onClick={(e) => {
                          e.stopPropagation();
                          expandImage(image);
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
                          removeImage(index);
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
              <div className="w-full flex flex-col items-center justify-center text-muted-foreground py-6 space-y-2">
                <UploadCloud size={24} />
                <p>Drag & drop images here or upload from the home page</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </header>
  );
};

export default ThumbnailGallery;
