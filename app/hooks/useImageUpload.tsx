// hooks/useImageUpload.ts
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "@remix-run/react";
import { FileData } from "~/routes/_index";
import {
  filterImageFiles,
  createFileData,
  createFileFromPaste,
  storeFileData,
  retrieveFileData,
} from "~/utils/uploadUtils"; // Make sure to import from uploadUtils, not fileUtils

export function useImageUpload() {
  const [files, setFiles] = useState<FileData[]>([]);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const dropZoneRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  // Load any previously stored images when the component mounts
  useEffect(() => {
    const storedImages = retrieveFileData();
    if (storedImages) {
      setFiles(storedImages);
    }
  }, []);

  // Set up paste event listener
  useEffect(() => {
    const handlePaste = (e: ClipboardEvent) => {
      if (e.clipboardData && e.clipboardData.items) {
        const items = e.clipboardData.items;

        for (let i = 0; i < items.length; i++) {
          if (items[i].type.indexOf("image") !== -1) {
            const blob = items[i].getAsFile();
            if (blob) {
              const pastedFile = createFileFromPaste(blob);
              const imageFiles = [pastedFile];
              const fileData = createFileData(imageFiles);

              setFiles((prevFiles) => {
                const newFiles = [...prevFiles, ...fileData];
                storeFileData(newFiles); // Store in localStorage
                return newFiles;
              });

              setErrorMessage(null);
            }
          }
        }
      }
    };

    window.addEventListener("paste", handlePaste);
    return () => {
      window.removeEventListener("paste", handlePaste);
    };
  }, []);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      processFiles(Array.from(e.dataTransfer.files));
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      processFiles(Array.from(e.target.files));
    }
  };

  const processFiles = (uploadedFiles: File[]) => {
    const imageFiles = filterImageFiles(uploadedFiles);

    if (imageFiles.length === 0) {
      setErrorMessage("Please select valid image files.");
      return;
    }

    const fileData = createFileData(imageFiles);

    setFiles((prevFiles) => {
      const newFiles = [...prevFiles, ...fileData];
      storeFileData(newFiles); // Store in localStorage
      return newFiles;
    });

    setErrorMessage(null);
  };

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const focusDropZone = () => {
    if (dropZoneRef.current) {
      dropZoneRef.current.focus();
    }
  };

  const navigateToGallery = (selectedFiles: FileData[]) => {
    // Store the files in localStorage before navigating
    storeFileData(selectedFiles);
    navigate("/gallery");
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
