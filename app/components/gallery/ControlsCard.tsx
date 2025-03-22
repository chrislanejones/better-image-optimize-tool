import React, { useState, useEffect } from "react";
import { Card } from "~/components/ui/Card";
import { Button } from "~/components/ui/Button";
import { Ratio, Square, RotateCcw } from "lucide-react";

interface ImageData {
  name: string;
  type: string;
  size: number;
  url: string;
}

interface ControlsCardProps {
  image: ImageData;
  cropMode: boolean;
  formatOption: string;
  compressionLevel: number;
  onToggleCrop: () => void;
  onFormatChange: (format: string) => void;
  onCompressionChange: (level: number) => void;
  onDimensionsChange: (
    width: number,
    height: number,
    maintainAspectRatio: boolean
  ) => void;
  onApplyChanges: () => void;
  onCancelChanges: () => void;
  hasCropSelection: boolean;
  onApplyCrop: () => void;
}

export const ControlsCard: React.FC<ControlsCardProps> = ({
  image,
  cropMode,
  formatOption,
  compressionLevel,
  onToggleCrop,
  onFormatChange,
  onCompressionChange,
  onDimensionsChange,
  onApplyChanges,
  onCancelChanges,
  hasCropSelection,
  onApplyCrop,
}) => {
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [originalWidth, setOriginalWidth] = useState<number>(0);
  const [originalHeight, setOriginalHeight] = useState<number>(0);
  const [aspectRatio, setAspectRatio] = useState<number>(1);
  const [maintainAspectRatio, setMaintainAspectRatio] = useState<boolean>(true);
  const [isResizing, setIsResizing] = useState<boolean>(false);

  // Load image dimensions when image changes
  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      const w = img.naturalWidth;
      const h = img.naturalHeight;
      setWidth(w);
      setHeight(h);
      setOriginalWidth(w);
      setOriginalHeight(h);
      setAspectRatio(w / h);
    };
    img.src = image.url;
  }, [image.url]);

  // Format change handler
  const handleFormatChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onFormatChange(e.target.value);
  };

  // Compression slider change handler
  const handleCompressionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onCompressionChange(Number(e.target.value));
  };

  // Width slider change handler
  const handleWidthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newWidth = Number(e.target.value);
    setWidth(newWidth);

    if (maintainAspectRatio) {
      const newHeight = Math.round(newWidth / aspectRatio);
      setHeight(newHeight);
    }

    setIsResizing(true);
  };

  // Height slider change handler
  const handleHeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newHeight = Number(e.target.value);
    setHeight(newHeight);

    if (maintainAspectRatio) {
      const newWidth = Math.round(newHeight * aspectRatio);
      setWidth(newWidth);
    }

    setIsResizing(true);
  };

  // Apply dimensions changes
  const applyDimensionsChange = () => {
    onDimensionsChange(width, height, maintainAspectRatio);
    setIsResizing(false);
  };

  // Toggle aspect ratio lock
  const toggleAspectRatio = () => {
    setMaintainAspectRatio(!maintainAspectRatio);
  };

  // Reset dimensions to original
  const resetDimensions = () => {
    setWidth(originalWidth);
    setHeight(originalHeight);
    setIsResizing(true);
  };

  return (
    <div className="relative mt-6 mb-6">
      {/* Border title */}
      <div className="absolute -top-3 left-4 px-2 bg-white dark:bg-slate-900 z-10">
        <h3 className="text-lg font-medium">Image Dimensions</h3>
      </div>

      <Card className="pt-6">
        <div className="p-6 space-y-6">
          {/* Image dimensions controls */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={toggleAspectRatio}
                  className={`flex items-center gap-1.5 p-1.5 rounded text-xs ${
                    maintainAspectRatio
                      ? "bg-primary text-white"
                      : "bg-slate-200 dark:bg-indigo-900 text-slate-700 dark:text-slate-300"
                  }`}
                  title={
                    maintainAspectRatio
                      ? "Aspect ratio locked"
                      : "Aspect ratio unlocked"
                  }
                >
                  {maintainAspectRatio ? (
                    <>
                      <Ratio size={14} />
                      <span>Aspect Ratio Locked</span>
                    </>
                  ) : (
                    <>
                      <Square size={14} />
                      <span>Aspect Ratio Unlocked</span>
                    </>
                  )}
                </button>
                <button
                  onClick={resetDimensions}
                  className="flex items-center gap-1.5 p-1.5 rounded text-xs bg-slate-200 dark:bg-indigo-900 text-slate-700 dark:text-slate-300"
                  title="Reset to original dimensions"
                >
                  <RotateCcw size={14} />
                  <span>Reset Dimensions</span>
                </button>
              </div>
            </div>

            {/* Width control */}
            <div className="space-y-1">
              <div className="flex justify-between">
                <label className="text-xs">Width: {width}px</label>
                <span className="text-xs text-muted-foreground">
                  Original: {originalWidth}px
                </span>
              </div>
              <input
                type="range"
                min={50}
                max={originalWidth * 2}
                value={width}
                onChange={handleWidthChange}
                className="w-full"
              />
            </div>

            {/* Height control */}
            <div className="space-y-1">
              <div className="flex justify-between">
                <label className="text-xs">Height: {height}px</label>
                <span className="text-xs text-muted-foreground">
                  Original: {originalHeight}px
                </span>
              </div>
              <input
                type="range"
                min={50}
                max={originalHeight * 2}
                value={height}
                onChange={handleHeightChange}
                className="w-full"
              />
            </div>

            {isResizing && (
              <Button
                variant="primary"
                size="sm"
                onClick={applyDimensionsChange}
                className="w-full"
              >
                Apply Dimensions
              </Button>
            )}
          </div>

          {/* Divider */}
          <hr className="border-slate-200 dark:border-indigo-800" />

          {/* Format controls */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Image Format</h3>

            <div className="flex flex-wrap items-center gap-2">
              <label className="text-xs">Format:</label>
              <select
                value={formatOption}
                onChange={handleFormatChange}
                className="py-1 px-3 rounded bg-slate-100 dark:bg-indigo-900 border border-slate-300 dark:border-indigo-700 text-sm"
              >
                <option value="original">Original</option>
                <option value="jpeg">JPEG</option>
                <option value="webp">WebP</option>
              </select>

              {/* Compression slider */}
              <div className="w-full mt-3 space-y-1">
                <div className="flex justify-between">
                  <label className="text-xs">
                    Quality: {compressionLevel}%
                  </label>
                </div>
                <input
                  type="range"
                  min="10"
                  max="100"
                  value={compressionLevel}
                  onChange={handleCompressionChange}
                  className="w-full"
                />
              </div>
            </div>
          </div>

          {/* Divider */}
          <hr className="border-slate-200 dark:border-indigo-800" />

          {/* Crop controls */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Crop Image</h3>

            <div className="flex gap-2">
              <Button
                variant={cropMode ? "primary" : "secondary"}
                onClick={onToggleCrop}
                className="flex-1"
                size="sm"
              >
                {cropMode ? "Cancel Crop" : "Start Cropping"}
              </Button>

              {hasCropSelection && cropMode && (
                <Button
                  variant="primary"
                  onClick={onApplyCrop}
                  className="flex-1"
                  size="sm"
                >
                  Apply Crop
                </Button>
              )}
            </div>
          </div>

          {/* Divider */}
          <hr className="border-slate-200 dark:border-indigo-800" />

          {/* Action buttons */}
          <div className="flex gap-2">
            <Button
              variant="outline"
              onClick={onCancelChanges}
              className="flex-1"
            >
              Reset All
            </Button>
            <Button
              variant="primary"
              onClick={onApplyChanges}
              className="flex-1"
              disabled={cropMode}
            >
              Apply All Changes
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ControlsCard;
