import {
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  ThemeToggle,
  Upload,
  createFileData,
  createFileFromPaste,
  filterImageFiles,
  storeFileData
} from "/build/_shared/chunk-GFFFLBLB.js";
import {
  Form,
  useNavigate
} from "/build/_shared/chunk-M3MXSI3X.js";
import "/build/_shared/chunk-U4FRFQSK.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  createHotContext
} from "/build/_shared/chunk-3N4ECGYM.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  require_react
} from "/build/_shared/chunk-7M6SC7J5.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/ui/DropZone.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/ui/DropZone.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/ui/DropZone.tsx"
  );
  import.meta.hot.lastModified = "1743479030175.0813";
}
var DropZone = (0, import_react.forwardRef)(_c = ({
  isDragging,
  hasFiles,
  onDragOver,
  onDragLeave,
  onDrop,
  className = "",
  children,
  ...props
}, ref) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { ref, className: `
          relative flex flex-col items-center justify-center w-full h-64 
          border-2 border-dashed rounded-lg p-4 
          transition-colors duration-200 well
          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary
          ${isDragging ? "border-primary/70" : "border-slate-300 dark:border-slate-600"}
          ${hasFiles ? "border-success bg-success/5" : ""}
          ${className}
        `, onDragOver, onDragLeave, onDrop, ...props, children: [
    isDragging && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 bg-primary/10 rounded-lg flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-primary font-medium", children: "Drop files here..." }, void 0, false, {
      fileName: "app/components/ui/DropZone.tsx",
      lineNumber: 42,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/ui/DropZone.tsx",
      lineNumber: 41,
      columnNumber: 24
    }, this),
    children
  ] }, void 0, true, {
    fileName: "app/components/ui/DropZone.tsx",
    lineNumber: 32,
    columnNumber: 10
  }, this);
});
_c2 = DropZone;
DropZone.displayName = "DropZone";
var _c;
var _c2;
$RefreshReg$(_c, "DropZone$forwardRef");
$RefreshReg$(_c2, "DropZone");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/hooks/useImageUpload.tsx
var import_react2 = __toESM(require_react(), 1);
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/hooks/useImageUpload.tsx"
  );
  import.meta.hot.lastModified = "1743476818455.0837";
}
function useImageUpload() {
  const [files, setFiles] = (0, import_react2.useState)([]);
  const [isDragging, setIsDragging] = (0, import_react2.useState)(false);
  const [pasteEnabled, setPasteEnabled] = (0, import_react2.useState)(true);
  const [errorMessage, setErrorMessage] = (0, import_react2.useState)(null);
  const dropZoneRef = (0, import_react2.useRef)(null);
  const fileInputRef = (0, import_react2.useRef)(null);
  const navigate = useNavigate();
  (0, import_react2.useEffect)(() => {
    if (files.length > 0) {
      console.log(`Files updated, count: ${files.length}`);
    }
  }, [files]);
  (0, import_react2.useEffect)(() => {
    const handlePaste = (e) => {
      if (!pasteEnabled)
        return;
      setErrorMessage(null);
      console.log("Paste event detected");
      if (e.clipboardData && e.clipboardData.items) {
        const items = e.clipboardData.items;
        const imageItems = [];
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
          setFiles((prevFiles) => [...prevFiles, ...imageItems]);
          navigateToGallery([...files, ...imageItems]);
          e.preventDefault();
        } else {
          setErrorMessage(
            "No valid images found in the clipboard. Try copying an image first."
          );
          e.preventDefault();
        }
      }
    };
    document.addEventListener("paste", handlePaste);
    return () => {
      document.removeEventListener("paste", handlePaste);
    };
  }, [files, pasteEnabled, navigate]);
  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };
  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };
  const navigateToGallery = (newFiles) => {
    setErrorMessage(null);
    if (newFiles.length === 0) {
      setErrorMessage("No valid image files were selected.");
      return;
    }
    console.log("Processing files for navigation:", newFiles.length);
    try {
      const validImageFiles = filterImageFiles(newFiles);
      if (validImageFiles.length === 0) {
        setErrorMessage("Please select valid image files only.");
        return;
      }
      if (validImageFiles.length < newFiles.length) {
        console.warn("Some non-image files were filtered out");
      }
      const fileData = createFileData(validImageFiles);
      console.log("File data created:", fileData.length);
      storeFileData(fileData);
      console.log("Local storage updated");
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
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    setErrorMessage(null);
    console.log("Files dropped");
    try {
      if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
        const allFiles = Array.from(e.dataTransfer.files);
        const newFiles = filterImageFiles(allFiles);
        if (newFiles.length === 0) {
          console.log("No valid image files found in drop");
          setErrorMessage(
            allFiles.length > 0 ? "The dropped items aren't valid images. Please drop image files only." : "No files were detected in the drop."
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
  const handleFileSelect = (e) => {
    console.log("File input change detected");
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
        navigateToGallery(newFiles);
      } catch (error) {
        console.error("Error processing selected files:", error);
        setErrorMessage("An error occurred processing the selected files.");
      }
    } else {
      console.log("File selection canceled");
    }
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
    navigateToGallery
  };
}

// app/routes/_index.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_index.tsx"
  );
  import.meta.hot.lastModified = "1743479953095.0796";
}
function Index() {
  _s();
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
    navigateToGallery
  } = useImageUpload();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
    if (files.length > 0) {
      navigateToGallery(files);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "min-h-screen bg-background transition-colors", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("header", { className: "border-b border-border", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "container mx-auto px-4 py-4 flex justify-between items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: "text-xl font-bold text-foreground", children: "Photo Upload" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 58,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ThemeToggle, {}, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 59,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 57,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 56,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "container mx-auto p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Card, { className: "w-full bg-card", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CardTitle, { className: "text-center", children: "Upload Images" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 66,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 65,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CardContent, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex justify-center mb-8", children: "Compress Multiple Images at a Time" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 70,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form, { onSubmit: handleSubmit, className: "flex flex-col gap-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { type: "file", ref: fileInputRef, onChange: handleFileSelect, className: "hidden", multiple: true, accept: "image/*" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 76,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DropZone, { ref: dropZoneRef, isDragging, hasFiles: files.length > 0, onDragOver: handleDragOver, onDragLeave: handleDragLeave, onDrop: handleDrop, onClick: focusDropZone, tabIndex: 0, className: "well border-slate-200 dark:border-slate-700", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-col items-center justify-center space-y-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Upload, { className: "h-10 w-10 text-primary/60 mb-4" }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 80,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-slate-600 dark:text-slate-300 font-medium", children: "Drag & drop images here or click to select files" }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 81,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-slate-500 dark:text-slate-400 text-sm", children: "\u2014 or \u2014" }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 84,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-slate-500 dark:text-slate-400 text-sm", children: "Paste an image (Ctrl+V)" }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 87,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mt-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button, { type: "button", variant: "primary", onClick: handleButtonClick, className: "flex items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { children: "Upload Files" }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 94,
              columnNumber: 23
            }, this) }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 93,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 92,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 79,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 78,
            columnNumber: 15
          }, this),
          errorMessage && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 text-amber-700 dark:text-amber-300 rounded-md", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: errorMessage }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 102,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 101,
            columnNumber: 32
          }, this),
          files.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center justify-center min-h-screen bg-background transition-colors", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Card, { className: "w-96 h-auto bg-card", children: [
            " ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CardContent, { className: "pt-6", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { className: "text-lg font-medium text-foreground mb-4", children: [
                "Selected Images (",
                files.length,
                ")"
              ] }, void 0, true, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 110,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { className: "list-none p-0 max-h-48 overflow-y-auto divide-y divide-slate-200 dark:divide-slate-700", children: files.map((file, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "py-2 flex items-center justify-between", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "truncate max-w-xs", children: file.name }, void 0, false, {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 115,
                  columnNumber: 29
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "text-sm text-slate-500 dark:text-slate-400", children: [
                  "(",
                  Math.round(file.size / 1024),
                  " KB)"
                ] }, void 0, true, {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 118,
                  columnNumber: 29
                }, this)
              ] }, index, true, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 114,
                columnNumber: 53
              }, this)) }, void 0, false, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 113,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 109,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CardFooter, { className: "justify-end", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button, { type: "submit", variant: "success", onClick: () => navigateToGallery(files), children: "Continue to Gallery" }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 125,
              columnNumber: 23
            }, this) }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 124,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 106,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 105,
            columnNumber: 36
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 74,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 69,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CardFooter, { className: "flex flex-col items-center justify-center text-sm text-slate-500 dark:text-slate-400" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 133,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 64,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 63,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("footer", { className: "border-t border-border py-6 mt-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "container mx-auto px-4 text-center text-muted-foreground text-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: [
      "\xA9 ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " Photo Gallery. All rights reserved."
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 140,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 139,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 138,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 54,
    columnNumber: 10
  }, this);
}
_s(Index, "jemxxqevObkbfVMb0yndEpkQ87Y=", false, function() {
  return [useImageUpload];
});
_c3 = Index;
var _c3;
$RefreshReg$(_c3, "Index");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Index as default
};
//# sourceMappingURL=/build/routes/_index-Q2NI6GIO.js.map
