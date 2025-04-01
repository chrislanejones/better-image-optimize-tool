import React, { useState } from "react";
import { Card, CardContent } from "~/components/ui/Card";
import { Button } from "~/components/ui/Button";
import {
  Crop,
  Check,
  X,
  Pen,
  Eraser,
  Circle,
  Square,
  ArrowRight,
  Type,
  Trash,
  Undo,
  Redo,
  ZoomIn,
  ZoomOut,
} from "lucide-react";
import { useGallery } from "./GalleryContext";

interface ImageEditorBarProps {
  onClose: () => void;
  onZoomIn?: () => void;
  onZoomOut?: () => void;
}

export const ImageEditorBar: React.FC<ImageEditorBarProps> = ({
  onClose,
  onZoomIn,
  onZoomOut,
}) => {
  const {
    cropMode,
    cropRect,
    activeTool,
    markerColor,
    markerSize,
    setActiveTool,
    setMarkerColor,
    setMarkerSize,
    applyCrop,
    applyDrawings,
    clearDrawings,
    undoDrawing,
    redoDrawing,
    drawingPaths,
  } = useGallery();

  const [textValue, setTextValue] = useState("");

  // Check if there are any drawings
  const drawingExists = drawingPaths.length > 0;

  // Handle tool selection
  const handleToolSelect = (tool: string) => {
    setActiveTool(tool === activeTool ? null : tool);
  };

  // List of available colors for marker
  const markerColors = [
    "#FF0000", // Red
    "#00FF00", // Green
    "#0000FF", // Blue
    "#FFFF00", // Yellow
    "#FF00FF", // Magenta
    "#00FFFF", // Cyan
    "#000000", // Black
    "#FFFFFF", // White
  ];

  return (
    <Card className="mb-6 sticky top-0 z-10">
      <CardContent className="p-4">
        <div className="flex flex-wrap items-center justify-between">
          {/* Tool buttons section */}
          <div className="flex flex-wrap gap-2">
            {/* Crop tool */}
            <Button
              variant={activeTool === "crop" ? "primary" : "secondary"}
              size="sm"
              onClick={() => handleToolSelect("crop")}
              title="Crop image"
            >
              <Crop size={18} />
            </Button>

            {/* Marker tool */}
            <Button
              variant={activeTool === "marker" ? "primary" : "secondary"}
              size="sm"
              onClick={() => handleToolSelect("marker")}
              title="Draw with marker"
            >
              <Pen size={18} />
            </Button>

            {/* Eraser tool */}
            <Button
              variant={activeTool === "eraser" ? "primary" : "secondary"}
              size="sm"
              onClick={() => handleToolSelect("eraser")}
              disabled={!drawingExists}
              title="Erase markings"
            >
              <Eraser size={18} />
            </Button>

            {/* Shape tools */}
            <Button
              variant={activeTool === "circle" ? "primary" : "secondary"}
              size="sm"
              onClick={() => handleToolSelect("circle")}
              title="Add circle"
            >
              <Circle size={18} />
            </Button>

            <Button
              variant={activeTool === "rectangle" ? "primary" : "secondary"}
              size="sm"
              onClick={() => handleToolSelect("rectangle")}
              title="Add rectangle"
            >
              <Square size={18} />
            </Button>

            <Button
              variant={activeTool === "arrow" ? "primary" : "secondary"}
              size="sm"
              onClick={() => handleToolSelect("arrow")}
              title="Add arrow"
            >
              <ArrowRight size={18} />
            </Button>

            <Button
              variant={activeTool === "text" ? "primary" : "secondary"}
              size="sm"
              onClick={() => handleToolSelect("text")}
              title="Add text"
            >
              <Type size={18} />
            </Button>

            {/* Zoom controls */}
            <div className="border-l border-slate-200 dark:border-slate-700 mx-1 h-6"></div>
            <Button
              variant="secondary"
              size="sm"
              title="Zoom in"
              onClick={onZoomIn}
            >
              <ZoomIn size={18} />
            </Button>
            <Button
              variant="secondary"
              size="sm"
              title="Zoom out"
              onClick={onZoomOut}
            >
              <ZoomOut size={18} />
            </Button>
          </div>

          {/* Color picker for marker */}
          {(activeTool === "marker" ||
            activeTool === "circle" ||
            activeTool === "rectangle" ||
            activeTool === "arrow" ||
            activeTool === "text") && (
            <div className="flex items-center gap-2 mx-4">
              <span className="text-sm">Color:</span>
              <div className="flex gap-1">
                {markerColors.map((color) => (
                  <button
                    key={color}
                    className={`w-6 h-6 rounded-full border ${
                      markerColor === color ? "ring-2 ring-primary" : ""
                    }`}
                    style={{ backgroundColor: color }}
                    onClick={() => setMarkerColor(color)}
                    title={`Select ${color} color`}
                  />
                ))}
              </div>
              <span className="text-sm ml-2">Size:</span>
              <input
                type="range"
                min="1"
                max="20"
                value={markerSize}
                onChange={(e) => setMarkerSize(parseInt(e.target.value))}
                className="w-24"
              />
            </div>
          )}

          {/* Action buttons */}
          <div className="flex gap-2 ml-auto">
            {/* Undo/Redo */}
            <Button
              variant="secondary"
              size="sm"
              onClick={undoDrawing}
              title="Undo"
              disabled={!drawingExists}
            >
              <Undo size={18} />
            </Button>
            <Button
              variant="secondary"
              size="sm"
              onClick={redoDrawing}
              title="Redo"
              disabled={drawingExists}
            >
              <Redo size={18} />
            </Button>

            <div className="border-l border-slate-200 dark:border-slate-700 mx-1 h-6"></div>

            {/* Tool-specific action buttons */}
            {(activeTool === "marker" ||
              activeTool === "eraser" ||
              activeTool === "circle" ||
              activeTool === "rectangle" ||
              activeTool === "arrow" ||
              activeTool === "text") &&
              drawingExists && (
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={clearDrawings}
                  title="Clear all markings"
                >
                  <Trash size={18} />
                </Button>
              )}

            {/* Apply buttons */}
            {activeTool === "crop" && cropMode && cropRect && (
              <Button
                variant="primary"
                size="sm"
                onClick={applyCrop}
                title="Apply crop"
              >
                <Check size={18} />
                <span className="ml-1">Apply Crop</span>
              </Button>
            )}

            {(drawingExists ||
              activeTool === "marker" ||
              activeTool === "eraser" ||
              activeTool === "circle" ||
              activeTool === "rectangle" ||
              activeTool === "arrow" ||
              activeTool === "text") && (
              <Button
                variant="primary"
                size="sm"
                onClick={applyDrawings}
                title="Apply drawings"
                disabled={!drawingExists}
              >
                <Check size={18} />
                <span className="ml-1">Apply Drawings</span>
              </Button>
            )}

            {/* Close button */}
            <Button
              variant="outline"
              size="sm"
              onClick={onClose}
              title="Close editor"
            >
              <X size={18} />
              <span className="ml-1">Close</span>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ImageEditorBar;
