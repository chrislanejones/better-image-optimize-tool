import { useState, useEffect } from "react";
import { Link, useNavigate } from "@remix-run/react"; // Import useNavigate here
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "~/components/ui/Card";
import { Button } from "~/components/ui/Button";

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
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    // Retrieve images from sessionStorage that were saved on the previous page
    console.log("Gallery component mounted, retrieving stored images");
    const storedImages = sessionStorage.getItem("uploadedImages");

    if (storedImages) {
      try {
        const parsedImages = JSON.parse(storedImages);
        console.log(`Found ${parsedImages.length} images in storage`);

        if (parsedImages.length === 0) {
          setLoadError(
            "No images were found. Please upload some images first."
          );
          return;
        }

        setImages(parsedImages);

        // Select first image by default if available
        if (parsedImages.length > 0) {
          setSelectedImage(parsedImages[0]);
          setCurrentImageIndex(0);
        }
      } catch (error) {
        console.error("Error parsing stored images:", error);
        setLoadError(
          "There was an error loading your images. Please try uploading them again."
        );
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
    <div className="max-w-4xl mx-auto p-4 md:p-8">
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-center">Photo Gallery</CardTitle>
        </CardHeader>

        <CardContent>
          {/* Error message display */}
          {loadError && (
            <div className="mb-6 p-4 bg-amber-50 border border-amber-200 text-amber-700 rounded-md">
              <div className="flex items-center">
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
            </div>
          )}

          {/* Image navigation buttons */}
          {images.length > 1 && selectedImage && !loadError && (
            <div className="flex justify-between items-center mb-4">
              <Button
                variant="secondary"
                onClick={navigatePrevious}
                aria-label="Previous image"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
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
              <span className="text-sm text-slate-500">
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
                  className="h-5 w-5"
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
          )}

          {/* Image row at the top */}
          <div className="flex gap-4 overflow-x-auto p-4 bg-slate-100 rounded-lg mb-6 min-h-24 items-center scrollbar-thin">
            {images.length > 0 ? (
              images.map((image, index) => (
                <div
                  key={index}
                  className={`flex-none w-20 h-20 rounded overflow-hidden cursor-pointer transition-all hover:-translate-y-1 ${
                    selectedImage === image
                      ? "border-2 border-blue-600 shadow-md"
                      : "border-2 border-transparent"
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
              <div className="w-full text-center text-slate-500">
                <p>No images uploaded</p>
              </div>
            )}
          </div>

          {/* Selected image display */}
          {selectedImage && (
            <div className="flex flex-col md:flex-row gap-8 mb-8">
              <div className="w-72 h-auto mx-auto md:mx-0">
                <div className="h-64 w-full overflow-hidden bg-slate-100 mb-4">
                  <img
                    src={selectedImage.url}
                    alt={selectedImage.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="text-center">
                  <p className="text-sm text-slate-600 truncate">
                    {selectedImage.name}
                  </p>
                </div>
              </div>
              <div className="flex-1 bg-slate-50 p-6 rounded-lg border border-slate-200">
                <h3 className="text-lg font-medium text-slate-800 mb-4">
                  Image Details
                </h3>
                <p className="my-3">
                  <span className="font-medium">File name:</span>{" "}
                  {selectedImage.name}
                </p>
                <p className="my-3">
                  <span className="font-medium">Type:</span>{" "}
                  {selectedImage.type}
                </p>
                <p className="my-3">
                  <span className="font-medium">Size:</span>{" "}
                  {Math.round(selectedImage.size / 1024)} KB
                </p>

                <div className="mt-6 flex gap-3">
                  <Button
                    variant="primary"
                    onClick={downloadImage}
                    className="flex items-center gap-2"
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
                </div>
              </div>
            </div>
          )}

          <div className="mt-4 flex justify-between">
            <Button variant="secondary" className="w-full sm:w-auto" asChild>
              <Link to="/">Back to Upload</Link>
            </Button>

            {/* Clear all button */}
            {images.length > 0 && (
              <Button
                variant="outline"
                className="w-full sm:w-auto ml-2"
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
    </div>
  );
}
