import React, { useEffect } from "react";

interface ImageData {
  name: string;
  type: string;
  size: number;
  url: string;
}

interface ImageModalProps {
  image: ImageData | null;
  onClose: () => void;
}

export const ImageModal: React.FC<ImageModalProps> = ({ image, onClose }) => {
  // Add key event listener for escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // // Prevent scrolling while modal is open
    // document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [onClose]);

  if (!image) return null;

  return (
    <div
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-w-[90vw] max-h-[90vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          className="absolute top-2 right-2 z-10 bg-black/50 text-white p-2 rounded-full"
          onClick={onClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        {/* Image */}
        <img
          src={image.url}
          alt={image.name}
          className="max-w-full max-h-[90vh] object-contain"
        />

        {/* Image info */}
        <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4 text-sm">
          <p className="font-medium">{image.name}</p>
          <p className="opacity-80 text-xs">
            {image.type} - {Math.round(image.size / 1024)} KB
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
