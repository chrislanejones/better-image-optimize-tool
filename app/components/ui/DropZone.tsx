import React, { forwardRef } from "react";

interface DropZoneProps extends React.HTMLAttributes<HTMLDivElement> {
  isDragging: boolean;
  hasFiles: boolean;
  onDragOver: (e: React.DragEvent<HTMLDivElement>) => void;
  onDragLeave: (e: React.DragEvent<HTMLDivElement>) => void;
  onDrop: (e: React.DragEvent<HTMLDivElement>) => void;
  className?: string;
}

export const DropZone = forwardRef<HTMLDivElement, DropZoneProps>(
  (
    {
      isDragging,
      hasFiles,
      onDragOver,
      onDragLeave,
      onDrop,
      className = "",
      children,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={`
          relative flex flex-col items-center justify-center w-full h-64 
          border-2 border-dashed rounded-lg p-4 
          transition-colors duration-200 well
          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary
          ${
            isDragging
              ? "border-primary/70"
              : "border-slate-300 dark:border-slate-600"
          }
          ${hasFiles ? "border-success bg-success/5" : ""}
          ${className}
        `}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
        {...props}
      >
        {isDragging && (
          <div className="absolute inset-0 bg-primary/10 rounded-lg flex items-center justify-center">
            <span className="text-primary font-medium">Drop files here...</span>
          </div>
        )}
        {children}
      </div>
    );
  }
);

DropZone.displayName = "DropZone";

export default DropZone;
