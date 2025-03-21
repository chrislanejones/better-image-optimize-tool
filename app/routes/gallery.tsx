import { useState, useEffect } from "react";
import { Link, useNavigate } from "@remix-run/react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
  CardDescription,
} from "~/components/ui/Card";
import { Button } from "~/components/ui/Button";
import { ThemeToggle } from "~/components/theme-toggle";
import { retrieveFileData } from "~/utils/fileUtils";

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

  return (
    <div className="min-h-screen bg-background transition-colors">
      {/* Header with theme toggle */}
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-foreground">Photo Gallery</h1>
          <ThemeToggle />
        </div>
      </header>

      <main className="container mx-auto p-4 md:p-8">
        {/* Error message display */}
        {loadError && (
          <Card className="mb-6">
            <CardContent className="p-4">
              <div className="flex items-center text-amber-700 dark:text-amber-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                <div>
                  <p>{loadError}</p>
                  <p className="text-sm mt-1">Redirecting to upload page...</p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Navigation Controls Card */}
        {images.length > 1 && selectedImage && !loadError && (
          <Card className="mb-6">
            <CardContent className="p-4">
              <div className="flex justify-between items-center">
                <Button
                  variant="secondary"
                  onClick={navigatePrevious}
                  aria-label="Previous image"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Previous
                </Button>
                <span className="text-sm text-muted-foreground">
                  Image {currentImageIndex + 1} of {images.length}
                </span>
                <Button
                  variant="secondary"
                  onClick={navigateNext}
                  aria-label="Next image"
                >
                  Next
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Thumbnail Gallery Card */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Thumbnail Gallery</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4 overflow-x-auto pb-2 px-1 min-h-24 items-center scrollbar-thin bg-slate-100 dark:bg-slate-800 rounded-md p-4">
              {images.length > 0 ? (
                images.map((image, index) => (
                  <div
                    key={index}
                    className={`flex-none w-20 h-20 rounded overflow-hidden cursor-pointer transition-all hover:-translate-y-1 ${
                      selectedImage === image
                        ? "ring-2 ring-primary shadow-md"
                        : "ring-2 ring-transparent"
                    }`}
                    onClick={() => handleImageSelect(image, index)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        handleImageSelect(image, index);
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

        {/* Selected Image Display and Details Cards */}
        {selectedImage && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {/* Image Preview Card */}
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Image Preview</CardTitle>
                <CardDescription className="truncate">
                  {selectedImage.name}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-slate-100 dark:bg-slate-800 rounded-md flex items-center justify-center p-2 h-64 md:h-72 lg:h-96">
                  <img
                    src={selectedImage.url}
                    alt={selectedImage.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Image Details Card */}
            <Card>
              <CardHeader>
                <CardTitle>Image Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-1">
                    File name
                  </h3>
                  <p className="break-words">{selectedImage.name}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-1">
                    Type
                  </h3>
                  <p>{selectedImage.type}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-1">
                    Size
                  </h3>
                  <p>{Math.round(selectedImage.size / 1024)} KB</p>
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  variant="primary"
                  onClick={downloadImage}
                  className="flex items-center gap-2 w-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                  Download
                </Button>
              </CardFooter>
            </Card>
          </div>
        )}

        {/* Action Buttons Card */}
        <Card>
          <CardContent className="p-4">
            <div className="flex flex-wrap gap-4">
              <Button variant="secondary" asChild>
                <Link to="/">Back to Upload</Link>
              </Button>

              {/* Clear all button */}
              {images.length > 0 && (
                <Button
                  variant="outline"
                  onClick={() => {
                    sessionStorage.removeItem("uploadedImages");
                    setImages([]);
                    setSelectedImage(null);
                  }}
                >
                  Clear All
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </main>

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
