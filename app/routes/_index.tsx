import { useState, useEffect } from "react";
import { Form, useNavigate, useSubmit } from "@remix-run/react";
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
  const navigate = useNavigate();
  const submit = useSubmit();

  // Debug effect to log when files are added
  useEffect(() => {
    if (files.length > 0) {
      console.log(`Files updated, count: ${files.length}`);
    }
  }, [files]);

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
    console.log("Processing files for navigation:", newFiles.length);

    try {
      // Create file data objects for each file
      const fileData: FileData[] = newFiles.map((file) => ({
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
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>): void => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    console.log("Files dropped");

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const newFiles = Array.from(e.dataTransfer.files);
      console.log(`Dropped ${newFiles.length} files`);
      setFiles(newFiles);

      // Process files and navigate to gallery
      processFilesAndNavigate(newFiles);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>): void => {
    console.log("File input change detected");

    if (e.target.files && e.target.files.length > 0) {
      const newFiles = Array.from(e.target.files);
      console.log(`Selected ${newFiles.length} files via input`);
      setFiles(newFiles);

      // Process files and navigate to gallery
      processFilesAndNavigate(newFiles);
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
              isDragging={isDragging}
              hasFiles={files.length > 0}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
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

                <label className="cursor-pointer">
                  <Button type="button" variant="primary" className="mt-2">
                    Choose Files
                  </Button>
                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleFileSelect}
                    className="hidden"
                    id="file-upload"
                  />
                </label>
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
      </Card>
    </div>
  );
}
