import React from "react";
import { Card, CardContent } from "~/components/ui/Card";
import { Button } from "~/components/ui/Button";
import { Download, Crop, RotateCcw, Check } from "lucide-react";
import SimpleSelect from "~/components/ui/SimpleSelect";

interface ImageData {
  name: string;
  type: string;
  size: number;
  url: string;
}

interface ImageControlBarProps {
  formatOption: string;
  onFormatChange: (format: string) => void;
  compressionLevel: number;
  onCompressionChange: (level: number) => void;

  // Crop functionality
  cropMode: boolean;
  onToggleCrop: () => void;
  hasCropSelection: boolean;
  onApplyCrop: () => void;

  // Action buttons
  onApplyChanges: () => void;
  onCancelChanges: () => void;
  onDownload: () => void;
}

const ImageControlBar: React.FC<ImageControlBarProps> = ({
  formatOption,
  onFormatChange,
  compressionLevel,
  onCompressionChange,
  cropMode,
  onToggleCrop,
  hasCropSelection,
  onApplyCrop,
  onApplyChanges,
  onCancelChanges,
  onDownload,
}) => {
  // Define format options
  const formatOptions = [
    { value: "original", label: "Original" },
    { value: "jpeg", label: "JPEG" },
    { value: "webp", label: "WebP" },
  ];

  // Handle compression slider change
  const handleCompressionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onCompressionChange(Number(e.target.value));
  };

  return (
    <Card className="my-2">
      <CardContent className="p-4">
        <div className="flex flex-wrap items-center gap-3 justify-between py-4">
          {/* Left side: Format controls */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Format:</span>
              <SimpleSelect
                options={formatOptions}
                value={formatOption}
                onChange={onFormatChange}
                className="w-28"
              />
            </div>

            {/* Quality slider */}
            <div className="flex items-center gap-2 min-w-48">
              <span className="text-sm font-medium">Quality:</span>
              <input
                type="range"
                min="10"
                max="100"
                value={compressionLevel}
                onChange={handleCompressionChange}
                className="w-28"
              />
              <span className="text-xs text-muted-foreground w-8">
                {compressionLevel}%
              </span>
            </div>
          </div>

          {/* Center: Crop controls */}
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

          {/* Right side: Action buttons */}
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={onCancelChanges}
              className="flex items-center gap-1"
            >
              <RotateCcw size={16} />
              Reset
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

            <Button
              variant="secondary"
              size="sm"
              onClick={onDownload}
              className="flex items-center gap-1"
            >
              <Download size={16} />
              Download
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ImageControlBar;
