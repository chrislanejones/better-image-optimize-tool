import React, { useRef } from "react";
import { CardWithBorderTitle } from "~/components/ui/Card";

interface ImageData {
  name: string;
  type: string;
  size: number;
  url: string;
}

interface ImagePreviewProps {
  image: ImageData;
  cropMode: boolean;
  cropRect: { x: number; y: number; width: number; height: number } | null;
  onCropStart: (x: number, y: number) => void;
  onCropMove: (x: number, y: number) => void;
  onCropEnd: () => void;
}

export const ImagePreview: React.FC<ImagePreviewProps> = ({
  image,
  cropMode,
  cropRect,
  onCropStart,
  onCropMove,
  onCropEnd,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Handle crop start
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cropMode || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    onCropStart(x, y);
  };

  // Handle crop drag
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cropMode || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    onCropMove(x, y);
  };

  // Handle crop end
  const handleMouseUp = () => {
    if (!cropMode) return;
    onCropEnd();
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
            {image.name}
          </span>
        </>
      }
      cardClassName="md:col-span-2"
      contentClassName="p-4"
    >
      <div
        ref={containerRef}
        className={`rounded-md flex items-center justify-center p-2 h-64 md:h-72 lg:h-96 relative ${
          cropMode ? "cursor-crosshair" : ""
        }`}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <img
          src={image.url}
          alt={image.name}
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
