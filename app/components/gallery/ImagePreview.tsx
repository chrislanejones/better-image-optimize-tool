import React, { useRef, useEffect, useState } from "react";
import { CardWithBorderTitle } from "~/components/ui/Card";
import { useGallery } from "./GalleryContext";
import {
  initDrawingCanvas,
  drawMarkerPath,
  clearDrawingCanvas,
  DrawingPoint,
} from "~/utils/uploadUtils";

export const ImagePreview: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const [canvasDimensions, setCanvasDimensions] = useState({
    width: 0,
    height: 0,
  });
  const [imageNaturalDimensions, setImageNaturalDimensions] = useState({
    width: 0,
    height: 0,
  });
  const [scale, setScale] = useState(1);
  const [isDrawing, setIsDrawing] = useState(false);
  const [currentPath, setCurrentPath] = useState<DrawingPoint[]>([]);

  const {
    selectedImage,
    cropMode,
    cropRect,
    handleCropStart,
    handleCropMove,
    handleCropEnd,
    editorBarActive,
    startDrawing,
    continueDrawing,
    endDrawing,
  } = useGallery();

  if (!selectedImage) return null;

  // Setup canvas when the component mounts or image changes
  useEffect(() => {
    if (!imageRef.current || !selectedImage) return;

    const img = new Image();
    img.onload = () => {
      if (!imageRef.current || !containerRef.current) return;

      // Store the natural dimensions
      const naturalWidth = img.naturalWidth;
      const naturalHeight = img.naturalHeight;
      setImageNaturalDimensions({ width: naturalWidth, height: naturalHeight });

      // Calculate container dimensions
      const containerRect = containerRef.current.getBoundingClientRect();
      const containerWidth = containerRect.width - 16; // Account for padding
      const containerHeight = containerRect.height - 16;

      // Calculate the scale to fit the image in the container
      const scaleX = containerWidth / naturalWidth;
      const scaleY = containerHeight / naturalHeight;
      const scale = Math.min(scaleX, scaleY);
      setScale(scale);

      // Calculate the displayed dimensions
      const displayWidth = naturalWidth * scale;
      const displayHeight = naturalHeight * scale;
      setCanvasDimensions({ width: displayWidth, height: displayHeight });

      // Initialize the canvas
      if (canvasRef.current) {
        initDrawingCanvas(canvasRef.current, displayWidth, displayHeight);
      }
    };

    img.src = selectedImage.url;
  }, [selectedImage]);

  // Mouse event handlers
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (cropMode) {
      // Handle crop
      handleCropStart(x, y);
    } else if (editorBarActive) {
      // Handle drawing
      setIsDrawing(true);
      const newPoint = {
        x,
        y,
        color: "#FF0000", // This should come from the editor bar state
        size: 5, // This should come from the editor bar state
      };
      setCurrentPath([newPoint]);

      // Also notify the context
      startDrawing(x, y, "#FF0000", 5);
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (cropMode) {
      // Handle crop
      handleCropMove(x, y);
    } else if (editorBarActive && isDrawing) {
      // Handle drawing
      const newPoint = {
        x,
        y,
        color: "#FF0000", // Should come from context
        size: 5, // Should come from context
      };

      setCurrentPath((prevPath) => [...prevPath, newPoint]);

      // Draw on canvas
      if (canvasRef.current && currentPath.length > 0) {
        const ctx = canvasRef.current.getContext("2d");
        if (ctx) {
          ctx.strokeStyle = newPoint.color;
          ctx.lineWidth = newPoint.size;
          ctx.lineCap = "round";
          ctx.lineJoin = "round";

          const prevPoint = currentPath[currentPath.length - 1];
          ctx.beginPath();
          ctx.moveTo(prevPoint.x, prevPoint.y);
          ctx.lineTo(x, y);
          ctx.stroke();
        }
      }

      // Also notify the context
      continueDrawing(x, y);
    }
  };

  const handleMouseUp = () => {
    if (cropMode) {
      // Handle crop
      handleCropEnd();
    } else if (editorBarActive && isDrawing) {
      // Handle drawing end
      setIsDrawing(false);

      // Also notify the context
      endDrawing();
    }
  };

  // Use CardWithBorderTitle instead of Card with CardHeader
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
          cropMode
            ? "cursor-crosshair"
            : editorBarActive
            ? "cursor-crosshair"
            : ""
        }`}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {/* Image */}
        <img
          ref={imageRef}
          src={selectedImage.url}
          alt={selectedImage.name}
          className="max-w-full max-h-full object-contain z-10"
        />

        {/* Canvas for drawing (positioned absolutely on top of image) */}
        {editorBarActive && canvasDimensions.width > 0 && (
          <canvas
            ref={canvasRef}
            width={canvasDimensions.width}
            height={canvasDimensions.height}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
            style={{
              pointerEvents: isDrawing ? "none" : "auto",
            }}
          />
        )}

        {/* Crop overlay */}
        {cropMode && cropRect && (
          <div
            className="absolute border-2 border-white bg-black bg-opacity-30 z-30"
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
