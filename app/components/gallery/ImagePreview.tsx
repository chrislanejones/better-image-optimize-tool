import React, { useRef } from "react";
import { CardWithBorderTitle } from "~/components/ui/Card";
import { useGallery } from "./GalleryContext";

export const ImagePreview: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const {
    selectedImage,
    cropMode,
    cropRect,
    handleCropStart,
    handleCropMove,
    handleCropEnd,
  } = useGallery();

  if (!selectedImage) return null;

  // Handle crop start
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cropMode || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    handleCropStart(x, y);
  };

  // Handle crop drag
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cropMode || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    handleCropMove(x, y);
  };

  // Handle crop end
  const handleMouseUp = () => {
    if (!cropMode) return;
    handleCropEnd();
  };

  // Using CardWithBorderTitle instead of Card with CardHeader
  return (
    <CardWithBorderTitle
      title={
        <>
          <span className="text-lg font-semibold leading-none tracking-tight">
            Image Preview
          </span>
          <span className="block text-sm text-slate-500 dark:text-slate-300 truncate mt-1">
            {selectedImage.name}
          </span>
        </>
      }
      contentClassName="p-4"
    >
      <div
        ref={containerRef}
        className={`rounded-md flex items-center justify-center p-2 h-80 md:h-96 lg:h-[500px] xl:h-[600px] relative ${
          cropMode ? "cursor-crosshair" : ""
        }`}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <img
          src={selectedImage.url}
          alt={selectedImage.name}
          className="max-w-full max-h-full object-contain"
        />

        {/* Crop overlay */}
        {cropMode && cropRect && (
          <div
            className="absolute border-2 border-white bg-black bg-opacity-30"
            style={{
              left: cropRect.x + "px",
              top: cropRect.y + "px",
              width: cropRect.width + "px",
              height: cropRect.height + "px",
            }}
          ></div>
        )}
      </div>
    </CardWithBorderTitle>
  );
};

export default ImagePreview;
