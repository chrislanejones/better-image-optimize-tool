import { Upload } from "lucide-react";
import { Form } from "@remix-run/react";
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
import { useImageUpload } from "~/hooks/useImageUpload";
import { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Image Optimizer - Upload" },
    { name: "description", content: "Upload and optimize your images" },
  ];
};

export interface FileData {
  name: string;
  type: string;
  size: number;
  url: string;
}

export default function Index(): JSX.Element {
  const {
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
  } = useImageUpload();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log("Form submitted");

    // If files are already selected, process them
    if (files.length > 0) {
      navigateToGallery(files);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background transition-colors">
      {/* Header with theme toggle */}
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-foreground">Photo Upload</h1>
          <ThemeToggle />
        </div>
      </header>

      <main className="container mx-auto p-4 flex-grow flex items-center justify-center">
        <Card className="w-full max-w-2xl bg-card">
          <CardHeader>
            <CardTitle className="text-center">Upload Images</CardTitle>
          </CardHeader>

          <CardContent>
            <div className="flex justify-center mb-8">
              Compress Multiple Images at a Time
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
                className="well border-slate-200 dark:border-slate-700"
              >
                <div className="flex flex-col items-center justify-center space-y-2">
                  <Upload className="h-10 w-10 text-primary/60 mb-4" />
                  <p className="text-lg">
                    Drag & drop images here or click to select files
                  </p>
                  <p className="text-lg">— or —</p>
                  <p className="text-lg">Paste an image (Ctrl+V)</p>

                  {/* Upload Button */}
                  <div className="mt-4">
                    <Button
                      type="button"
                      variant="primary"
                      onClick={handleButtonClick}
                      className="flex items-center"
                    >
                      <span>Upload Files</span>
                    </Button>
                  </div>
                </div>
              </DropZone>

              {/* Error message display */}
              {errorMessage && (
                <div className="p-4 well border border-amber-200 dark:border-amber-800 text-amber-700 dark:text-amber-300 rounded-md">
                  <p>{errorMessage}</p>
                </div>
              )}

              {files.length > 0 && (
                <Card className="bg-card">
                  {/* Set a fixed width for the card */}
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-medium text-foreground mb-4">
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
                      onClick={() => navigateToGallery(files)}
                    >
                      Continue to Gallery
                    </Button>
                  </CardFooter>
                </Card>
              )}
            </Form>
          </CardContent>
          <CardFooter className="flex flex-col items-center justify-center text-sm text-slate-500 dark:text-slate-400">
            <p>
              © {new Date().getFullYear()} Image Optimizer. All rights reserved.
            </p>
          </CardFooter>
        </Card>
      </main>
    </div>
  );
}
