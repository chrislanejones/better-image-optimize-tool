import React, {
  useRef,
  useEffect,
  useState,
  forwardRef,
  useImperativeHandle,
} from "react";
import { CardWithBorderTitle } from "~/components/ui/Card";
import { useGallery } from "./GalleryContext";
import {
  initDrawingCanvas,
  drawMarkerPath,
  drawCircle,
  drawRectangle,
  drawArrow,
  drawText,
  drawAllPaths,
  clearDrawingCanvas,
  DrawingPoint,
  DrawingPath,
} from "~/utils/uploadUtils";

interface ImagePreviewProps {
  zoomLevel?: number;
  setZoomLevel?: (zoom: number) => void;
}

export const ImagePreview = forwardRef<any, ImagePreviewProps>(
  (
    { zoomLevel: externalZoomLevel, setZoomLevel: setExternalZoomLevel },
    ref
  ) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    // Use state instead of ref for the image element
    const [imageElement, setImageElement] = useState<HTMLImageElement | null>(
      null
    );
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
    const [drawingStart, setDrawingStart] = useState<{
      x: number;
      y: number;
    } | null>(null);
    const [internalZoomLevel, setInternalZoomLevel] = useState(1);
    const [textInput, setTextInput] = useState("");
    const [showTextInput, setShowTextInput] = useState(false);
    const [textPosition, setTextPosition] = useState({ x: 0, y: 0 });

    // Use external zoom level if provided, otherwise use internal
    const zoomLevel =
      externalZoomLevel !== undefined ? externalZoomLevel : internalZoomLevel;

    // Function to update zoom level
    const updateZoomLevel = (newZoom: number) => {
      if (setExternalZoomLevel) {
        setExternalZoomLevel(newZoom);
      } else {
        setInternalZoomLevel(newZoom);
      }
    };

    const {
      selectedImage,
      cropMode,
      cropRect,
      handleCropStart,
      handleCropMove,
      handleCropEnd,
      editorBarActive,
      activeTool,
      markerColor,
      markerSize,
      startDrawing,
      continueDrawing,
      endDrawing,
      addDrawingPath,
      drawingPaths,
    } = useGallery();

    if (!selectedImage) return null;

    // Setup canvas when the component mounts or image changes
    useEffect(() => {
      if (!selectedImage) return;

      const img = new Image();
      img.onload = () => {
        // Set the image element state instead of the ref
        setImageElement(img);

        if (!containerRef.current) return;

        // Store the natural dimensions
        const naturalWidth = img.naturalWidth;
        const naturalHeight = img.naturalHeight;
        setImageNaturalDimensions({
          width: naturalWidth,
          height: naturalHeight,
        });

        // Calculate container dimensions
        const containerRect = containerRef.current.getBoundingClientRect();
        const containerWidth = containerRect.width - 16; // Account for padding
        const containerHeight = containerRect.height - 16;

        // Calculate the scale to fit the image in the container
        const scaleX = containerWidth / (naturalWidth * zoomLevel);
        const scaleY = containerHeight / (naturalHeight * zoomLevel);
        const scale = Math.min(scaleX, scaleY);
        setScale(scale);

        // Calculate the displayed dimensions
        const displayWidth = naturalWidth * scale * zoomLevel;
        const displayHeight = naturalHeight * scale * zoomLevel;
        setCanvasDimensions({ width: displayWidth, height: displayHeight });

        // Initialize the canvas
        if (canvasRef.current) {
          initDrawingCanvas(canvasRef.current, displayWidth, displayHeight);

          // Draw existing paths
          if (drawingPaths.length > 0 && canvasRef.current) {
            drawAllPaths(canvasRef.current, drawingPaths);
          }
        }
      };

      img.src = selectedImage.url;
    }, [selectedImage, zoomLevel, drawingPaths]);

    // Text input handling
    useEffect(() => {
      // Handle text input submission when Enter is pressed
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Enter" && showTextInput) {
          handleAddText();
        }
      };

      window.addEventListener("keydown", handleKeyDown);
      return () => {
        window.removeEventListener("keydown", handleKeyDown);
      };
    }, [showTextInput, textInput, textPosition]);

    const handleZoom = (direction: "in" | "out") => {
      if (direction === "in" && zoomLevel < 3) {
        updateZoomLevel(zoomLevel + 0.1);
      } else if (direction === "out" && zoomLevel > 0.5) {
        updateZoomLevel(zoomLevel - 0.1);
      }
    };

    // Expose methods to parent component
    useImperativeHandle(ref, () => ({
      handleZoom,
    }));

    const handleAddText = () => {
      if (!textInput.trim() || !textPosition) return;

      // Create a text path
      const textPath: DrawingPath = {
        points: [],
        tool: "text",
        color: markerColor,
        size: markerSize,
        text: textInput,
        startX: textPosition.x,
        startY: textPosition.y,
      };

      // Add text to the drawing
      addDrawingPath(textPath);

      // Hide text input
      setShowTextInput(false);
      setTextInput("");
    };

    // Mouse event handlers
    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!containerRef.current || (!editorBarActive && !cropMode)) return;

      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / zoomLevel;
      const y = (e.clientY - rect.top) / zoomLevel;

      if (cropMode) {
        // Handle crop
        handleCropStart(x, y);
      } else if (editorBarActive) {
        if (activeTool === "text") {
          // For text tool, show text input at click position
          setTextPosition({ x, y });
          setShowTextInput(true);
          setTimeout(() => {
            const textInputElement = document.getElementById("text-input");
            if (textInputElement) {
              textInputElement.focus();
            }
          }, 10);
          return;
        }

        // Start drawing or shape creation
        setIsDrawing(true);
        setDrawingStart({ x, y });

        // Create initial drawing point
        const newPoint: DrawingPoint = {
          x,
          y,
          color: markerColor,
          size: markerSize,
        };

        // Notify context
        startDrawing(x, y, markerColor, markerSize);
      }
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!containerRef.current || (!isDrawing && !cropMode)) return;

      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / zoomLevel;
      const y = (e.clientY - rect.top) / zoomLevel;

      if (cropMode) {
        // Handle crop
        handleCropMove(x, y);
      } else if (isDrawing && drawingStart) {
        // For marker, continue drawing
        if (activeTool === "marker") {
          continueDrawing(x, y);
        } else if (canvasRef.current) {
          // For shapes, redraw on every move
          const ctx = canvasRef.current.getContext("2d");
          if (!ctx) return;

          // Clear canvas and redraw all paths
          drawAllPaths(canvasRef.current, drawingPaths);

          // Then draw the current shape
          switch (activeTool) {
            case "circle":
              drawCircle(ctx, {
                points: [],
                tool: "circle",
                startX: drawingStart.x,
                startY: drawingStart.y,
                endX: x,
                endY: y,
                color: markerColor,
                size: markerSize,
              });
              break;
            case "rectangle":
              const width = x - drawingStart.x;
              const height = y - drawingStart.y;
              drawRectangle(ctx, {
                points: [],
                tool: "rectangle",
                startX: drawingStart.x,
                startY: drawingStart.y,
                width,
                height,
                color: markerColor,
                size: markerSize,
              });
              break;
            case "arrow":
              drawArrow(ctx, {
                points: [],
                tool: "arrow",
                startX: drawingStart.x,
                startY: drawingStart.y,
                endX: x,
                endY: y,
                color: markerColor,
                size: markerSize,
              });
              break;
          }
        }
      }
    };

    const handleMouseUp = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / zoomLevel;
      const y = (e.clientY - rect.top) / zoomLevel;

      if (cropMode) {
        // Handle crop end
        handleCropEnd();
      } else if (isDrawing && drawingStart) {
        // Finish drawing
        setIsDrawing(false);

        // For shapes, create a complete path
        if (activeTool !== "marker" && activeTool !== "text") {
          let newPath: DrawingPath = {
            points: [],
            tool: activeTool || "marker",
            color: markerColor,
            size: markerSize,
            startX: drawingStart.x,
            startY: drawingStart.y,
          };

          switch (activeTool) {
            case "circle":
              newPath.endX = x;
              newPath.endY = y;
              break;
            case "rectangle":
              newPath.width = x - drawingStart.x;
              newPath.height = y - drawingStart.y;
              break;
            case "arrow":
              newPath.endX = x;
              newPath.endY = y;
              break;
          }

          // Add the path to context
          addDrawingPath(newPath);
        } else if (activeTool === "marker") {
          // End the marker drawing
          endDrawing();
        }

        setDrawingStart(null);
      }
    };

    // Use CardWithBorderTitle instead of Card with CardHeader
    return (
      <CardWithBorderTitle
        title={
          <>
            <span className="text-lg font-semibold leading-none tracking-tight">
              Image Preview{" "}
              {zoomLevel !== 1 ? `(${(zoomLevel * 100).toFixed(0)}%)` : ""}
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
          className={`rounded-md flex items-center justify-center p-2 h-80 md:h-96 lg:h-[500px] xl:h-[600px] relative overflow-hidden
        ${
          cropMode
            ? "cursor-crosshair"
            : editorBarActive && activeTool === "marker"
            ? "cursor-crosshair"
            : editorBarActive && activeTool === "eraser"
            ? "cursor-pointer"
            : editorBarActive && activeTool === "text"
            ? "cursor-text"
            : ""
        }`}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          <div
            className="relative"
            style={{
              transform: `scale(${zoomLevel})`,
              transformOrigin: "center center",
              transition: "transform 0.2s ease-out",
            }}
          >
            {/* Image */}
            <img
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
                className="absolute top-0 left-0 z-20"
                style={{
                  pointerEvents: "none",
                }}
              />
            )}
          </div>

          {/* Text input for text tool */}
          {showTextInput && (
            <div
              className="absolute z-30 bg-white dark:bg-slate-900 p-2 rounded border border-primary"
              style={{
                left: `${textPosition.x * zoomLevel}px`,
                top: `${textPosition.y * zoomLevel}px`,
                transform: "translate(0, -100%)",
              }}
            >
              <input
                id="text-input"
                type="text"
                value={textInput}
                onChange={(e) => setTextInput(e.target.value)}
                placeholder="Enter text, press Enter to add"
                className="w-48 px-2 py-1 border rounded"
                autoFocus
              />
              <div className="flex mt-1 justify-end">
                <button
                  className="px-2 py-1 bg-primary text-white rounded text-xs"
                  onClick={handleAddText}
                >
                  Add Text
                </button>
              </div>
            </div>
          )}

          {/* Crop overlay */}
          {cropMode && cropRect && (
            <div
              className="absolute border-2 border-white bg-black bg-opacity-30 z-30"
              style={{
                left: cropRect.x * zoomLevel + "px",
                top: cropRect.y * zoomLevel + "px",
                width: cropRect.width * zoomLevel + "px",
                height: cropRect.height * zoomLevel + "px",
              }}
            ></div>
          )}

          {/* Zoom controls */}
          {editorBarActive && (
            <div className="absolute bottom-2 right-2 z-30 flex gap-1">
              <button
                className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center"
                onClick={() => handleZoom("in")}
                title="Zoom in"
              >
                +
              </button>
              <button
                className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center"
                onClick={() => handleZoom("out")}
                title="Zoom out"
              >
                -
              </button>
            </div>
          )}
        </div>
      </CardWithBorderTitle>
    );
  }
);

export default forwardRef<any, ImagePreviewProps>((props, ref) => (
  <ImagePreview {...props} ref={ref} />
));
