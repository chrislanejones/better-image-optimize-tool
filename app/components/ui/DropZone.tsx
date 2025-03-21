import * as React from "react";

// Create a type extension for the HTMLInputElement to add directory attributes
declare module "react" {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    // Add directory and webkitdirectory attributes
    directory?: string;
    webkitdirectory?: string;
  }
}

interface DropZoneProps extends React.HTMLAttributes<HTMLDivElement> {
  isDragging?: boolean;
  hasFiles?: boolean;
  onDrop?: (e: React.DragEvent<HTMLDivElement>) => void;
  onDragOver?: (e: React.DragEvent<HTMLDivElement>) => void;
  onDragLeave?: (e: React.DragEvent<HTMLDivElement>) => void;
}

const DropZone = React.forwardRef<HTMLDivElement, DropZoneProps>(
  (
    {
      className,
      isDragging,
      hasFiles,
      onDrop,
      onDragOver,
      onDragLeave,
      children,
      ...props
    },
    ref
  ) => {
    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
      // Prevent default behavior to allow drop
      e.preventDefault();
      e.stopPropagation();

      // Explicitly add dataTransfer.dropEffect
      e.dataTransfer.dropEffect = "copy";

      // Call the original handler
      if (onDragOver) {
        onDragOver(e);
      }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
      // Simulate click on Space or Enter to help with keyboard accessibility
      if (e.key === " " || e.key === "Enter") {
        e.currentTarget.click();
        e.preventDefault();
      }

      // Support Ctrl+V for paste
      if (e.ctrlKey && e.key === "v") {
        console.log("Keyboard paste detected");
        // The actual paste event will be handled by the global handler
      }
    };

    return (
      <div
        ref={ref}
        className={`
          w-full 
          border-2 
          border-dashed 
          rounded-lg 
          p-8 
          text-center 
          cursor-pointer 
          transition-all 
          outline-none
          focus:ring-2
          focus:ring-blue-500
          focus:border-blue-500
          ${isDragging ? "border-blue-600 bg-blue-50" : ""} 
          ${
            hasFiles
              ? "border-green-600 bg-green-50"
              : "border-slate-300 bg-slate-50"
          } 
          ${className || ""}
        `}
        onDrop={onDrop}
        onDragOver={handleDragOver}
        onDragLeave={onDragLeave}
        onKeyDown={handleKeyDown}
        // Add aria attributes for accessibility
        role="button"
        aria-label="Drop zone for image upload. You can also paste images here."
        {...props}
      >
        {children}
      </div>
    );
  }
);

DropZone.displayName = "DropZone";

export { DropZone };
