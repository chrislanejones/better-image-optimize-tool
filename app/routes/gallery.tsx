import { useState, useEffect } from "react";
import { Link } from "@remix-run/react";
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

  useEffect(() => {
    // Retrieve images from sessionStorage that were saved on the previous page
    console.log("Gallery component mounted, retrieving stored images");
    const storedImages = sessionStorage.getItem("uploadedImages");

    if (storedImages) {
      try {
        const parsedImages = JSON.parse(storedImages);
        console.log(`Found ${parsedImages.length} images in storage`);
        setImages(parsedImages);

        // Select first image by default if available
        if (parsedImages.length > 0) {
          setSelectedImage(parsedImages[0]);
        }
      } catch (error) {
        console.error("Error parsing stored images:", error);
      }
    } else {
      console.log("No images found in storage");
    }
  }, []);

  const handleImageSelect = (image: ImageData): void => {
    setSelectedImage(image);
  };

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8">
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-center">Photo Gallery</CardTitle>
        </CardHeader>

        <CardContent>
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
                  onClick={() => handleImageSelect(image)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      handleImageSelect(image);
                    }
                  }}
                  tabIndex={0}
                  role="button"
                  aria-label={`Select image ${image.name}`}
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
              <div className="polaroid w-72 h-auto mx-auto md:mx-0">
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
              </div>
            </div>
          )}

          <div className="mt-4">
            <Button variant="secondary" className="w-full sm:w-auto" asChild>
              <Link to="/">Back to Upload</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
