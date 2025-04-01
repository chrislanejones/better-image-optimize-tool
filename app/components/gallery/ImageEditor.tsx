import React, { useRef, useState } from "react";
import ImagePreview from "~/components/gallery/ImagePreview";
import ImageDetails from "~/components/gallery/ImageDetails";
import ControlsCard from "~/components/gallery/ControlsCard";
import ImageEditorBar from "~/components/gallery/ImageEditorBar";
import { useGallery } from "./GalleryContext";

export const ImageEditor: React.FC = () => {
  const {
    selectedImage,
    images,
    currentImageIndex,
    editorBarActive,
    toggleEditorBar,
  } = useGallery();

  const previewRef = useRef<any>(null);
  const [zoomLevel, setZoomLevel] = useState(1);

  // Handle zoom functions to pass to the editor bar
  const handleZoomIn = () => {
    if (previewRef.current && previewRef.current.handleZoom) {
      previewRef.current.handleZoom("in");
    } else {
      setZoomLevel((prev) => Math.min(prev + 0.1, 3));
    }
  };

  const handleZoomOut = () => {
    if (previewRef.current && previewRef.current.handleZoom) {
      previewRef.current.handleZoom("out");
    } else {
      setZoomLevel((prev) => Math.max(prev - 0.1, 0.5));
    }
  };

  // Simply return null instead of showing an error when no image is selected
  if (!selectedImage || !images || images.length === 0) {
    return null;
  }

  return (
    <div className="space-y-6">
      {/* Show editor bar when activated */}
      {editorBarActive && (
        <ImageEditorBar
          onClose={toggleEditorBar}
          onZoomIn={handleZoomIn}
          onZoomOut={handleZoomOut}
        />
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Image Preview - Takes 2/3 of the width on medium screens and up */}
        <div className="image-preview-container md:col-span-2">
          <ImagePreview
            ref={previewRef}
            zoomLevel={zoomLevel}
            setZoomLevel={setZoomLevel}
          />
        </div>

        {/* Controls and Details - Takes 1/3 of the width on medium screens and up */}
        {!editorBarActive && (
          <div className="md:col-span-1">
            {/* We're using a vertical stack layout within this column */}
            <div className="space-y-6">
              <ControlsCard />
              <ImageDetails />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageEditor;
