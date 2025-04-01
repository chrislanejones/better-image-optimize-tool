import { useState, useEffect, useRef } from "react";
import { useNavigate } from "@remix-run/react";
import {
  filterImageFiles,
  createFileData,
  createFileFromPaste,
  storeFileData,
} from "~/utils/fileUtils";

/**
 * Custom hook for handling image upload functionality
 */
export function useImageUpload() {
  const [files, setFiles] = useState<File[]>([]);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [pasteEnabled, setPasteEnabled] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const dropZoneRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  // Debug effect to log when files are added
  useEffect(() => {
    if (files.length > 0) {
      console.log(`Files updated, count: ${files.length}`);
    }
  }, [files]);

  // Set up paste event listener for the entire document
  useEffect(() => {
    const handlePaste = (e: ClipboardEvent) => {
      if (!pasteEnabled) return;

      // Clear any previous errors
      setErrorMessage(null);

      console.log("Paste event detected");

      if (e.clipboardData && e.clipboardData.items) {
        const items = e.clipboardData.items;
        const imageItems: File[] = [];

        for (let i = 0; i < items.length; i++) {
          if (items[i].type.indexOf("image") !== -1) {
            const blob = items[i].getAsFile();
            if (blob) {
              const file = createFileFromPaste(blob);
              imageItems.push(file);
            }
          }
        }

        if (imageItems.length > 0) {
          console.log(`Pasted ${imageItems.length} images`);

          // Either add to existing files or set as new files
          setFiles((prevFiles) => [...prevFiles, ...imageItems]);

          // Auto-navigate to gallery after paste
          navigateToGallery([...files, ...imageItems]);

          // Prevent the default paste behavior
          e.preventDefault();
        } else {
          setErrorMessage(
            "No valid images found in the clipboard. Try copying an image first."
          );
          e.preventDefault();
        }
      }
    };

    // Add the event listener
    document.addEventListener("paste", handlePaste);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("paste", handlePaste);
    };
  }, [files, pasteEnabled, navigate]);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>): void => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>): void => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  // Navigate to gallery after processing files
  const navigateToGallery = (newFiles: File[]): void => {
    // Clear any previous errors
    setErrorMessage(null);

    if (newFiles.length === 0) {
      setErrorMessage("No valid image files were selected.");
      return;
    }

    console.log("Processing files for navigation:", newFiles.length);

    try {
      // Validate that all files are images
      const validImageFiles = filterImageFiles(newFiles);

      if (validImageFiles.length === 0) {
        setErrorMessage("Please select valid image files only.");
        return;
      }

      if (validImageFiles.length < newFiles.length) {
        console.warn("Some non-image files were filtered out");
      }

      // Create file data objects for each file
      const fileData = createFileData(validImageFiles);

      console.log("File data created:", fileData.length);

      // Store file info in localStorage to pass to next page
      storeFileData(fileData);
      console.log("Local storage updated");

      // Navigate to gallery page - use setTimeout to ensure storage is set
      setTimeout(() => {
        console.log("Navigating to gallery...");
        navigate("/gallery");
      }, 100);
    } catch (error) {
      console.error("Error processing files:", error);
      setErrorMessage(
        "An error occurred while processing the files. Please try again."
      );
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>): void => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    // Clear any previous errors
    setErrorMessage(null);

    console.log("Files dropped");

    try {
      if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
        const allFiles = Array.from(e.dataTransfer.files);
        const newFiles = filterImageFiles(allFiles);

        if (newFiles.length === 0) {
          console.log("No valid image files found in drop");
          setErrorMessage(
            allFiles.length > 0
              ? "The dropped items aren't valid images. Please drop image files only."
              : "No files were detected in the drop."
          );
          return;
        }

        if (newFiles.length < allFiles.length) {
          console.log(
            `Filtered out ${allFiles.length - newFiles.length} non-image files`
          );
        }

        console.log(`Dropped ${newFiles.length} image files`);
        setFiles(newFiles);

        // Process files and navigate to gallery
        navigateToGallery(newFiles);
      } else {
        setErrorMessage(
          "No files were detected in the drop. Try again with image files."
        );
      }
    } catch (error) {
      console.error("Error processing dropped files:", error);
      setErrorMessage("An error occurred while processing the dropped files.");
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>): void => {
    console.log("File input change detected");

    // Clear any previous errors
    setErrorMessage(null);

    if (e.target.files && e.target.files.length > 0) {
      try {
        const newFiles = filterImageFiles(Array.from(e.target.files));

        if (newFiles.length === 0) {
          console.log("No valid image files selected");
          setErrorMessage("Please select valid image files only.");
          return;
        }

        console.log(`Selected ${newFiles.length} image files via input`);
        setFiles(newFiles);

        // Process files and navigate to gallery
        navigateToGallery(newFiles);
      } catch (error) {
        console.error("Error processing selected files:", error);
        setErrorMessage("An error occurred processing the selected files.");
      }
    } else {
      // No files were selected (user canceled dialog)
      console.log("File selection canceled");
    }
  };

  // Trigger file input dialog
  const handleButtonClick = (): void => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  // Focus on the drop zone to enable easier paste
  const focusDropZone = () => {
    if (dropZoneRef.current) {
      dropZoneRef.current.focus();
    }
  };

  return {
    files,
    isDragging,
    errorMessage,
    dropZoneRef,
    fileInputRef,
    handleDragOver,
    handleDragLeave,
    handleDrop,
    handleFileSelect,
    handleButtonClick,
    focusDropZone,
    navigateToGallery,
  };
}
