import { useState, useEffect, useRef } from "react";
import { Form, useNavigate } from "@remix-run/react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "~/components/ui/Card";
import { Button } from "~/components/ui/Button";
import { DropZone } from "~/components/ui/DropZone";

export interface FileData {
  name: string;
  type: string;
  size: number;
  url: string;
}

export default function Index(): JSX.Element {
  const [files, setFiles] = useState<File[]>([]);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [pasteEnabled, setPasteEnabled] = useState<boolean>(true);
  const dropZoneRef = useRef<HTMLDivElement>(null);
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
              // Create a File object from the Blob
              // Use a timestamp to create a unique name for pasted images
              const timestamp = new Date().toISOString().replace(/:/g, "-");
              const file = new File([blob], `pasted-image-${timestamp}.png`, {
                type: blob.type,
              });
              imageItems.push(file);
            }
          }
        }

        if (imageItems.length > 0) {
          console.log(`Pasted ${imageItems.length} images`);

          // Either add to existing files or set as new files
          setFiles((prevFiles) => [...prevFiles, ...imageItems]);

          // Auto-navigate to gallery after paste
          processFilesAndNavigate([...files, ...imageItems]);

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
  }, [files, pasteEnabled]);

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

  // State for error messages
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Helper function to process files and navigate to gallery
  const processFilesAndNavigate = (newFiles: File[]): void => {
    // Clear any previous errors
    setErrorMessage(null);

    if (newFiles.length === 0) {
      setErrorMessage("No valid image files were selected.");
      return;
    }

    console.log("Processing files for navigation:", newFiles.length);

    try {
      // Validate that all files are images
      const validImageFiles = newFiles.filter((file) =>
        file.type.startsWith("image/")
      );

      if (validImageFiles.length === 0) {
        setErrorMessage("Please select valid image files only.");
        return;
      }

      if (validImageFiles.length < newFiles.length) {
        console.warn("Some non-image files were filtered out");
      }

      // Create file data objects for each file
      const fileData: FileData[] = validImageFiles.map((file) => ({
        name: file.name,
        type: file.type,
        size: file.size,
        // Create temporary URL for preview
        url: URL.createObjectURL(file),
      }));

      console.log("File data created:", fileData.length);

      // Store file info in sessionStorage to pass to next page
      sessionStorage.setItem("uploadedImages", JSON.stringify(fileData));
      console.log("Session storage updated");

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
        const newFiles = allFiles.filter((file) =>
          file.type.startsWith("image/")
        );

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
        processFilesAndNavigate(newFiles);
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
        const newFiles = Array.from(e.target.files).filter((file) =>
          file.type.startsWith("image/")
        );

        if (newFiles.length === 0) {
          console.log("No valid image files selected");
          setErrorMessage("Please select valid image files only.");
          return;
        }

        console.log(`Selected ${newFiles.length} image files via input`);
        setFiles(newFiles);

        // Process files and navigate to gallery
        processFilesAndNavigate(newFiles);
      } catch (error) {
        console.error("Error processing selected files:", error);
        setErrorMessage("An error occurred processing the selected files.");
      }
    } else {
      // No files were selected (user canceled dialog)
      console.log("File selection canceled");
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log("Form submitted");

    // If files are already selected, process them
    if (files.length > 0) {
      processFilesAndNavigate(files);
    }
  };

  // Focus on the drop zone to enable easier paste
  const focusDropZone = () => {
    if (dropZoneRef.current) {
      dropZoneRef.current.focus();
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8">
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-center">Photo Upload</CardTitle>
        </CardHeader>

        <CardContent>
          <div className="flex justify-center mb-8">
            {/* SVG Polaroid embedded inline */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 300 350"
              className="w-56 md:w-72 h-auto filter drop-shadow transition-transform duration-300 hover:scale-105"
            >
              <rect
                x="20"
                y="20"
                width="260"
                height="310"
                rx="5"
                ry="5"
                fill="white"
                stroke="#e0e0e0"
                strokeWidth="2"
              />
              <rect
                x="40"
                y="40"
                width="220"
                height="220"
                fill="#f5f5f5"
                stroke="#e0e0e0"
                strokeWidth="1"
              />
              <rect x="40" y="260" width="220" height="50" fill="white" />
              <rect
                x="25"
                y="25"
                width="260"
                height="310"
                rx="5"
                ry="5"
                fill="none"
                stroke="#d0d0d0"
                strokeWidth="1"
                opacity="0.5"
              />
              <path
                d="M40,40 L50,50 M260,40 L250,50 M40,260 L50,250 M260,260 L250,250"
                stroke="#e0e0e0"
                strokeWidth="1"
              />
            </svg>
          </div>

          <Form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <DropZone
              ref={dropZoneRef}
              isDragging={isDragging}
              hasFiles={files.length > 0}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={focusDropZone}
              tabIndex={0}
            >
              <div className="flex flex-col items-center justify-center space-y-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-slate-400 mb-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  />
                </svg>
                <p className="text-slate-600 font-medium">
                  Drag & drop images here
                </p>
                <p className="text-slate-500 text-sm">— or —</p>
                <p className="text-slate-500 text-sm">
                  Paste an image (Ctrl+V)
                </p>
              </div>
            </DropZone>

            {files.length > 0 && (
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-medium text-slate-800 mb-4">
                    Selected Images ({files.length})
                  </h3>
                  <ul className="list-none p-0 max-h-48 overflow-y-auto divide-y divide-slate-200">
                    {files.map((file, index) => (
                      <li
                        key={index}
                        className="py-2 flex items-center justify-between"
                      >
                        <span className="truncate max-w-xs">{file.name}</span>
                        <span className="text-sm text-slate-500">
                          ({Math.round(file.size / 1024)} KB)
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="justify-end">
                  <Button
                    type="submit"
                    variant="success"
                    onClick={() => processFilesAndNavigate(files)}
                  >
                    Continue to Gallery
                  </Button>
                </CardFooter>
              </Card>
            )}
          </Form>
        </CardContent>
        <CardFooter className="flex flex-col items-center justify-center text-sm text-slate-500">
          <p>Click or tap anywhere in the drop zone to enable paste</p>
          <p className="mt-1">
            You can paste (Ctrl+V) an image from your clipboard
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
