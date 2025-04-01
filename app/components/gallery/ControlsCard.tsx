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
import { downloadImage as downloadImageUtil } from "~/utils/uploadUtils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { Slider } from "~/components/ui/slider";
import { useGallery } from "./GalleryContext";

export const ControlsCard: React.FC = () => {
  const {
    selectedImage,
    cropMode,
    formatOption,
    compressionLevel,
    cropRect,
    toggleCropMode,
    setFormatOption,
    setCompressionLevel,
    handleDimensionsChange,
    applyChanges,
    cancelChanges,
    applyCrop,
  } = useGallery();

  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [originalWidth, setOriginalWidth] = useState<number>(0);
  const [originalHeight, setOriginalHeight] = useState<number>(0);
  const [aspectRatio, setAspectRatio] = useState<number>(1);
  const [maintainAspectRatio, setMaintainAspectRatio] = useState<boolean>(true);
  const [isResizing, setIsResizing] = useState<boolean>(false);

  // Load image dimensions when image changes
  useEffect(() => {
    if (!selectedImage) return;

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
    img.src = selectedImage.url;
  }, [selectedImage]);

  // Width slider change handler
  const handleWidthChange = (value: number[]) => {
    const newWidth = value[0];
    setWidth(newWidth);

    if (maintainAspectRatio) {
      const newHeight = Math.round(newWidth / aspectRatio);
      setHeight(newHeight);
    }

    setIsResizing(true);
  };

  // Height slider change handler
  const handleHeightChange = (value: number[]) => {
    const newHeight = value[0];
    setHeight(newHeight);

    if (maintainAspectRatio) {
      const newWidth = Math.round(newHeight * aspectRatio);
      setWidth(newWidth);
    }

    setIsResizing(true);
  };

  // Apply dimensions changes
  const applyDimensionsChange = () => {
    handleDimensionsChange(width, height, maintainAspectRatio);
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
    if (selectedImage) {
      downloadImageUtil(selectedImage);
    }
  };

  // Handle compression slider change
  const handleCompressionChange = (value: number[]) => {
    setCompressionLevel(value[0]);
  };

  // Handle format change
  const handleFormatChange = (value: string) => {
    setFormatOption(value);
  };

  // Handle reset all changes
  const handleResetAll = () => {
    // Reset all local state
    setWidth(originalWidth);
    setHeight(originalHeight);
    setIsResizing(false);
    setMaintainAspectRatio(true);

    // Reset format and compression in context
    setFormatOption("original");
    setCompressionLevel(90);

    // Call the parent's reset function
    cancelChanges();

    console.log("Reset All clicked - resetting all image editing settings");
  };

  if (!selectedImage) return null;

  return (
    <CardWithBorderTitle
      title={<span className="text-lg font-medium">Image Controls</span>}
      cardClassName="bg-card mb-6"
    >
      <div className="space-y-6">
        {/* Quick actions - Now stacked vertically */}
        <div className="space-y-3">
          <Button
            variant={cropMode ? "primary" : "secondary"}
            size="sm"
            onClick={toggleCropMode}
            className="w-full flex items-center justify-center gap-1"
          >
            <Crop size={16} />
            {cropMode ? "Cancel Crop" : "Crop"}
          </Button>

          {cropMode && cropRect && (
            <Button
              variant="primary"
              size="sm"
              onClick={applyCrop}
              className="w-full flex items-center justify-center gap-1"
            >
              <Check size={16} />
              Apply Crop
            </Button>
          )}

          <Button
            variant="secondary"
            size="sm"
            onClick={handleDownload}
            className="w-full flex items-center justify-center gap-1"
          >
            <Download size={16} />
            Download
          </Button>
        </div>

        <hr className="border-slate-200 dark:border-slate-700" />
        {/* Image dimensions controls */}
        <div>
          <h3 className="text-sm font-medium mb-3">Dimensions</h3>
          <div className="space-y-4">
            {/* Width control with shadcn/ui Slider */}
            <div className="space-y-3">
              <div className="flex justify-between">
                <label className="text-xs">Width: {width}px</label>
                <span className="text-xs text-muted-foreground">
                  Original: {originalWidth}px
                </span>
              </div>
              <Slider
                defaultValue={[width]}
                value={[width]}
                min={50}
                max={originalWidth * 2}
                step={1}
                onValueChange={handleWidthChange}
                className="w-full"
              />
            </div>

            {/* Height control with shadcn/ui Slider */}
            <div className="space-y-3">
              <div className="flex justify-between">
                <label className="text-xs">Height: {height}px</label>
                <span className="text-xs text-muted-foreground">
                  Original: {originalHeight}px
                </span>
              </div>
              <Slider
                defaultValue={[height]}
                value={[height]}
                min={50}
                max={originalHeight * 2}
                step={1}
                onValueChange={handleHeightChange}
                className="w-full"
              />
            </div>

            {/* Aspect ratio buttons - Now stacked */}
            <div className="space-y-3">
              <Button
                onClick={toggleAspectRatio}
                variant={maintainAspectRatio ? "primary" : "secondary"}
                size="sm"
                title={
                  maintainAspectRatio
                    ? "Aspect ratio locked"
                    : "Aspect ratio unlocked"
                }
                className="w-full flex items-center justify-center gap-1.5"
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
                className="w-full flex items-center justify-center gap-1.5"
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
                className="w-full mt-2 flex items-center justify-center gap-1"
              >
                <Save size={14} />
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
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select format" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="original">Original</SelectItem>
                  <SelectItem value="jpeg">JPEG</SelectItem>
                  <SelectItem value="webp">WebP</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Quality slider with shadcn/ui Slider */}
            <div className="space-y-3">
              <div className="flex justify-between">
                <label className="text-xs">Quality: {compressionLevel}%</label>
                <span className="text-xs text-muted-foreground">
                  Higher = Better Quality
                </span>
              </div>
              <Slider
                defaultValue={[compressionLevel]}
                value={[compressionLevel]}
                min={10}
                max={100}
                step={1}
                onValueChange={handleCompressionChange}
                className="w-full"
              />
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-slate-200 dark:border-slate-700" />

        {/* Action buttons - Now stacked */}
        <div className="space-y-3">
          <Button
            variant="outline"
            size="sm"
            onClick={handleResetAll}
            className="w-full flex items-center justify-center gap-1"
            id="reset-all-button"
          >
            <RotateCcw size={16} />
            Reset All
          </Button>

          <Button
            variant="primary"
            size="sm"
            onClick={applyChanges}
            disabled={cropMode}
            className="w-full flex items-center justify-center gap-1"
          >
            <Check size={16} />
            Apply Changes
          </Button>
        </div>

        {/* Technical details */}
        <div className="mt-4 text-xs text-muted-foreground">
          <p>
            <ImageIcon size={12} className="inline mr-1" />
            {selectedImage.name} ({(selectedImage.size / 1024).toFixed(1)} KB)
          </p>
          <p className="mt-1">
            {width && height ? `${width} × ${height}px` : ""} •{" "}
            {selectedImage.type.split("/")[1].toUpperCase()}
          </p>
        </div>
      </div>
    </CardWithBorderTitle>
  );
};

export default ControlsCard;
