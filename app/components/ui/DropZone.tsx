import * as React from "react";

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
          ${isDragging ? "border-blue-600 bg-blue-50" : ""} 
          ${
            hasFiles
              ? "border-green-600 bg-green-50"
              : "border-slate-300 bg-slate-50"
          } 
          ${className || ""}
        `}
        onDrop={onDrop}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        {...props}
      >
        {children}
      </div>
    );
  }
);

DropZone.displayName = "DropZone";

export { DropZone };
