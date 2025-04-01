import React, { useState, useEffect } from "react";
import { CardWithBorderTitle } from "~/components/ui/Card";
import { Button } from "~/components/ui/Button";
import {
  Ratio,
  Square,
  RotateCcw,
  Download,
  Crop,
  Check,
  Save,
  Image as ImageIcon,
} from "lucide-react";
import { downloadImage as downloadImageUtil } from "~/utils/uploadUtils"; // Changed to uploadUtils
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";

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

  // Handle download
  const handleDownload = () => {
    if (image) {
      downloadImageUtil(image);
    }
  };

  // Handle compression slider change
  const handleCompressionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onCompressionChange(Number(e.target.value));
  };

  // Handle format change
  const handleFormatChange = (value: string) => {
    onFormatChange(value);
  };

  // Handle reset all changes
  const handleResetAll = () => {
    // Reset dimensions to original
    setWidth(originalWidth);
    setHeight(originalHeight);
    setIsResizing(false);

    // Call the parent's reset function
    onCancelChanges();
  };

  return (
    <CardWithBorderTitle
      title={<span className="text-lg font-medium">Image Controls</span>}
      cardClassName="bg-card"
    >
      <div className="space-y-6">
        {/* Quick actions */}
        <div className="flex flex-wrap gap-2 justify-between">
          <div className="flex items-center gap-2">
            <Button
              variant={cropMode ? "primary" : "secondary"}
              size="sm"
              onClick={onToggleCrop}
              className="flex items-center gap-1"
            >
              <Crop size={16} />
              {cropMode ? "Cancel Crop" : "Crop"}
            </Button>

            {cropMode && hasCropSelection && (
              <Button
                variant="primary"
                size="sm"
                onClick={onApplyCrop}
                className="flex items-center gap-1"
              >
                <Check size={16} />
                Apply Crop
              </Button>
            )}
          </div>

          <Button
            variant="secondary"
            size="sm"
            onClick={handleDownload}
            className="flex items-center gap-1"
          >
            <Download size={16} />
            Download
          </Button>
        </div>

        {/* Image dimensions controls */}
        <div>
          <h3 className="text-sm font-medium mb-3">Dimensions</h3>
          <div className="space-y-4">
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

            <div className="flex flex-wrap gap-2">
              <Button
                onClick={toggleAspectRatio}
                variant={maintainAspectRatio ? "primary" : "secondary"}
                size="sm"
                title={
                  maintainAspectRatio
                    ? "Aspect ratio locked"
                    : "Aspect ratio unlocked"
                }
                className="flex items-center gap-1.5"
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
              </Button>

              <Button
                onClick={resetDimensions}
                variant="secondary"
                size="sm"
                title="Reset to original dimensions"
                className="flex items-center gap-1.5"
              >
                <RotateCcw size={14} />
                <span>Reset Dimensions</span>
              </Button>
            </div>

            {isResizing && (
              <Button
                variant="primary"
                size="sm"
                onClick={applyDimensionsChange}
                className="w-full mt-2"
              >
                <Save size={14} className="mr-1" />
                Apply Dimensions
              </Button>
            )}
          </div>
        </div>

        {/* Divider */}
        <hr className="border-slate-200 dark:border-slate-700" />

        {/* Format and quality controls */}
        <div>
          <h3 className="text-sm font-medium mb-3">Format & Quality</h3>

          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Format:</span>
              <Select value={formatOption} onValueChange={handleFormatChange}>
                <SelectTrigger className="w-28">
                  <SelectValue placeholder="Select format" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="original">Original</SelectItem>
                  <SelectItem value="jpeg">JPEG</SelectItem>
                  <SelectItem value="webp">WebP</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Quality slider */}
            <div className="space-y-1">
              <div className="flex justify-between">
                <label className="text-xs">Quality: {compressionLevel}%</label>
                <span className="text-xs text-muted-foreground">
                  Higher = Better Quality
                </span>
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
        <hr className="border-slate-200 dark:border-slate-700" />

        {/* Action buttons */}
        <div className="flex justify-between">
          <Button
            variant="outline"
            size="sm"
            onClick={handleResetAll}
            className="flex items-center gap-1"
          >
            <RotateCcw size={16} />
            Reset All
          </Button>

          <Button
            variant="primary"
            size="sm"
            onClick={onApplyChanges}
            disabled={cropMode}
            className="flex items-center gap-1"
          >
            <Check size={16} />
            Apply Changes
          </Button>
        </div>

        {/* Technical details */}
        <div className="mt-4 text-xs text-muted-foreground">
          <p>
            <ImageIcon size={12} className="inline mr-1" />
            {image.name} ({(image.size / 1024).toFixed(1)} KB)
          </p>
          <p className="mt-1">
            {width && height ? `${width} × ${height}px` : ""} •{" "}
            {image.type.split("/")[1].toUpperCase()}
          </p>
        </div>
      </div>
    </CardWithBorderTitle>
  );
};

export default ControlsCard;
