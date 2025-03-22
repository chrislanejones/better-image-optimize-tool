import { useState, useEffect, useRef } from "react";
import { Upload } from "lucide-react";
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
import { ThemeToggle } from "~/components/ThemeToggle";
import {
  filterImageFiles,
  createFileData,
  createFileFromPaste,
  storeFileData,
} from "~/utils/fileUtils";

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

      // Store file info in sessionStorage to pass to next page
      storeFileData(fileData);
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
        const newFiles = filterImageFiles(Array.from(e.target.files));

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

  // Trigger file input dialog
  const handleButtonClick = (): void => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
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
    <div className="min-h-screen bg-background transition-colors">
      {/* Header with theme toggle */}
      <header className="border-b border-border">
        <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-foreground">Photo Upload</h1>
          <ThemeToggle />
        </div>
      </header>

      <div className="max-w-4xl mx-auto p-4 md:p-8">
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-center">Upload Images</CardTitle>
          </CardHeader>

          <CardContent>
            <div className="flex justify-center mb-8">
              Compress Mutiple Images at a Time
            </div>

            <Form onSubmit={handleSubmit} className="flex flex-col gap-6">
              {/* File input (hidden) */}
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileSelect}
                className="hidden"
                multiple
                accept="image/*"
              />

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
                  <Upload className="h-10 w-10 text-primary/60 mb-4" />
                  <p className="text-slate-600 dark:text-slate-300 font-medium">
                    Drag & drop images here
                  </p>
                  <p className="text-slate-500 dark:text-slate-400 text-sm">
                    — or —
                  </p>
                  <p className="text-slate-500 dark:text-slate-400 text-sm">
                    Paste an image (Ctrl+V)
                  </p>

                  {/* Upload Button */}
                  <div className="mt-4">
                    <Button
                      type="button"
                      variant="primary"
                      onClick={handleButtonClick}
                      className="flex items-center space-x-4 space-y-4"
                    >
                      <span>Upload Files</span>
                    </Button>
                  </div>
                </div>
              </DropZone>

              {/* Error message display */}
              {errorMessage && (
                <div className="p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 text-amber-700 dark:text-amber-300 rounded-md">
                  <p>{errorMessage}</p>
                </div>
              )}

              {files.length > 0 && (
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-medium text-slate-800 dark:text-slate-200 mb-4">
                      Selected Images ({files.length})
                    </h3>
                    <ul className="list-none p-0 max-h-48 overflow-y-auto divide-y divide-slate-200 dark:divide-slate-700">
                      {files.map((file, index) => (
                        <li
                          key={index}
                          className="py-2 flex items-center justify-between"
                        >
                          <span className="truncate max-w-xs">{file.name}</span>
                          <span className="text-sm text-slate-500 dark:text-slate-400">
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
          <CardFooter className="flex flex-col items-center justify-center text-sm text-slate-500 dark:text-slate-400"></CardFooter>
        </Card>
      </div>

      {/* Footer */}
      <footer className="border-t border-border py-6 mt-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground text-sm">
          <p>
            © {new Date().getFullYear()} Photo Gallery. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
