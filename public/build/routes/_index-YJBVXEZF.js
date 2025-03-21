import {
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  ThemeToggle,
  createFileData,
  createFileFromPaste,
  filterImageFiles,
  storeFileData
} from "/build/_shared/chunk-UW2A6EOQ.js";
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

// app/routes/_index.tsx
var import_react = __toESM(require_react(), 1);

// app/components/ui/DropZone.tsx
var React = __toESM(require_react(), 1);
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
  import.meta.hot.lastModified = "1742547617867.552";
}
var DropZone = React.forwardRef(_c = ({
  className,
  isDragging,
  hasFiles,
  onDrop,
  onDragOver,
  onDragLeave,
  children,
  ...props
}, ref) => {
  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    e.dataTransfer.dropEffect = "copy";
    if (onDragOver) {
      onDragOver(e);
    }
  };
  const handleKeyDown = (e) => {
    if (e.key === " " || e.key === "Enter") {
      e.currentTarget.click();
      e.preventDefault();
    }
    if (e.ctrlKey && e.key === "v") {
      console.log("Keyboard paste detected");
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    "div",
    {
      ref,
      className: `
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
          ${hasFiles ? "border-green-600 bg-green-50" : "border-slate-300 bg-slate-50"} 
          ${className || ""}
        `,
      onDrop,
      onDragOver: handleDragOver,
      onDragLeave,
      onKeyDown: handleKeyDown,
      role: "button",
      "aria-label": "Drop zone for image upload. You can also paste images here.",
      ...props,
      children
    },
    void 0,
    false,
    {
      fileName: "app/components/ui/DropZone.tsx",
      lineNumber: 61,
      columnNumber: 10
    },
    this
  );
});
_c2 = DropZone;
DropZone.displayName = "DropZone";
var _c;
var _c2;
$RefreshReg$(_c, "DropZone$React.forwardRef");
$RefreshReg$(_c2, "DropZone");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/polaroidsvg.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/polaroidsvg.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/polaroidsvg.tsx"
  );
  import.meta.hot.lastModified = "1742549613101.194";
}
var PolaroidSvg = (props) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 300 350", className: `w-56 md:w-72 h-auto filter drop-shadow transition-transform duration-300 hover:scale-105 ${props.className || ""}`, ...props, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("rect", { x: "20", y: "20", width: "260", height: "310", rx: "5", ry: "5", fill: "white", stroke: "#e0e0e0", strokeWidth: "2" }, void 0, false, {
      fileName: "app/components/polaroidsvg.tsx",
      lineNumber: 24,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("rect", { x: "40", y: "40", width: "220", height: "220", fill: "#f5f5f5", stroke: "#e0e0e0", strokeWidth: "1" }, void 0, false, {
      fileName: "app/components/polaroidsvg.tsx",
      lineNumber: 25,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("rect", { x: "40", y: "260", width: "220", height: "50", fill: "white" }, void 0, false, {
      fileName: "app/components/polaroidsvg.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("rect", { x: "25", y: "25", width: "260", height: "310", rx: "5", ry: "5", fill: "none", stroke: "#d0d0d0", strokeWidth: "1", opacity: "0.5" }, void 0, false, {
      fileName: "app/components/polaroidsvg.tsx",
      lineNumber: 27,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("path", { d: "M40,40 L50,50 M260,40 L250,50 M40,260 L50,250 M260,260 L250,250", stroke: "#e0e0e0", strokeWidth: "1" }, void 0, false, {
      fileName: "app/components/polaroidsvg.tsx",
      lineNumber: 28,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/polaroidsvg.tsx",
    lineNumber: 23,
    columnNumber: 10
  }, this);
};
_c3 = PolaroidSvg;
var _c3;
$RefreshReg$(_c3, "PolaroidSvg");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/uploadicon.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/uploadicon.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/uploadicon.tsx"
  );
  import.meta.hot.lastModified = "1742549619961.1223";
}
var UploadIcon = (props) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", className: `h-5 w-5 ${props.className || ""}`, fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" }, void 0, false, {
    fileName: "app/components/uploadicon.tsx",
    lineNumber: 24,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/uploadicon.tsx",
    lineNumber: 23,
    columnNumber: 10
  }, this);
};
_c4 = UploadIcon;
var _c4;
$RefreshReg$(_c4, "UploadIcon");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/_index.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
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
  import.meta.hot.lastModified = "1742551716356.6235";
}
function Index() {
  _s();
  const [files, setFiles] = (0, import_react.useState)([]);
  const [isDragging, setIsDragging] = (0, import_react.useState)(false);
  const [pasteEnabled, setPasteEnabled] = (0, import_react.useState)(true);
  const [errorMessage, setErrorMessage] = (0, import_react.useState)(null);
  const dropZoneRef = (0, import_react.useRef)(null);
  const fileInputRef = (0, import_react.useRef)(null);
  const navigate = useNavigate();
  (0, import_react.useEffect)(() => {
    if (files.length > 0) {
      console.log(`Files updated, count: ${files.length}`);
    }
  }, [files]);
  (0, import_react.useEffect)(() => {
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
          processFilesAndNavigate([...files, ...imageItems]);
          e.preventDefault();
        } else {
          setErrorMessage("No valid images found in the clipboard. Try copying an image first.");
          e.preventDefault();
        }
      }
    };
    document.addEventListener("paste", handlePaste);
    return () => {
      document.removeEventListener("paste", handlePaste);
    };
  }, [files, pasteEnabled]);
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
  const processFilesAndNavigate = (newFiles) => {
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
      console.log("Session storage updated");
      setTimeout(() => {
        console.log("Navigating to gallery...");
        navigate("/gallery");
      }, 100);
    } catch (error) {
      console.error("Error processing files:", error);
      setErrorMessage("An error occurred while processing the files. Please try again.");
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
          setErrorMessage(allFiles.length > 0 ? "The dropped items aren't valid images. Please drop image files only." : "No files were detected in the drop.");
          return;
        }
        if (newFiles.length < allFiles.length) {
          console.log(`Filtered out ${allFiles.length - newFiles.length} non-image files`);
        }
        console.log(`Dropped ${newFiles.length} image files`);
        setFiles(newFiles);
        processFilesAndNavigate(newFiles);
      } else {
        setErrorMessage("No files were detected in the drop. Try again with image files.");
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
        processFilesAndNavigate(newFiles);
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
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
    if (files.length > 0) {
      processFilesAndNavigate(files);
    }
  };
  const focusDropZone = () => {
    if (dropZoneRef.current) {
      dropZoneRef.current.focus();
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "min-h-screen bg-background transition-colors", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("header", { className: "border-b border-border", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "max-w-4xl mx-auto px-4 py-4 flex justify-between items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h1", { className: "text-xl font-bold text-foreground", children: "Photo Upload" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 230,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(ThemeToggle, {}, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 231,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 229,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 228,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "max-w-4xl mx-auto p-4 md:p-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Card, { className: "w-full", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(CardTitle, { className: "text-center", children: "Photo Upload" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 238,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 237,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(CardContent, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex justify-center mb-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(PolaroidSvg, {}, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 243,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 242,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Form, { onSubmit: handleSubmit, className: "flex flex-col gap-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("input", { type: "file", ref: fileInputRef, onChange: handleFileSelect, className: "hidden", multiple: true, accept: "image/*" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 248,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(DropZone, { ref: dropZoneRef, isDragging, hasFiles: files.length > 0, onDragOver: handleDragOver, onDragLeave: handleDragLeave, onDrop: handleDrop, onClick: focusDropZone, tabIndex: 0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex flex-col items-center justify-center space-y-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(UploadIcon, { className: "h-10 w-10 text-slate-400 dark:text-slate-500 mb-2" }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 252,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "text-slate-600 dark:text-slate-300 font-medium", children: "Drag & drop images here" }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 253,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "text-slate-500 dark:text-slate-400 text-sm", children: "\u2014 or \u2014" }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 256,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "text-slate-500 dark:text-slate-400 text-sm", children: "Paste an image (Ctrl+V)" }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 259,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "mt-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Button, { type: "button", variant: "primary", onClick: handleButtonClick, className: "flex items-center space-x-2", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(UploadIcon, {}, void 0, false, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 266,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { children: "Upload Files" }, void 0, false, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 267,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 265,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 264,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 251,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 250,
            columnNumber: 15
          }, this),
          errorMessage && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 text-amber-700 dark:text-amber-300 rounded-md", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: errorMessage }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 275,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 274,
            columnNumber: 32
          }, this),
          files.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Card, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(CardContent, { className: "pt-6", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h3", { className: "text-lg font-medium text-slate-800 dark:text-slate-200 mb-4", children: [
                "Selected Images (",
                files.length,
                ")"
              ] }, void 0, true, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 280,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("ul", { className: "list-none p-0 max-h-48 overflow-y-auto divide-y divide-slate-200 dark:divide-slate-700", children: files.map((file, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { className: "py-2 flex items-center justify-between", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "truncate max-w-xs", children: file.name }, void 0, false, {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 285,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "text-sm text-slate-500 dark:text-slate-400", children: [
                  "(",
                  Math.round(file.size / 1024),
                  " KB)"
                ] }, void 0, true, {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 286,
                  columnNumber: 27
                }, this)
              ] }, index, true, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 284,
                columnNumber: 51
              }, this)) }, void 0, false, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 283,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 279,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(CardFooter, { className: "justify-end", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Button, { type: "submit", variant: "success", onClick: () => processFilesAndNavigate(files), children: "Continue to Gallery" }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 293,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 292,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 278,
            columnNumber: 36
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 246,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 241,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(CardFooter, { className: "flex flex-col items-center justify-center text-sm text-slate-500 dark:text-slate-400", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "Click or tap anywhere in the drop zone to enable paste" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 301,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "mt-1", children: "You can paste (Ctrl+V) an image from your clipboard" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 302,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 300,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 236,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 235,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("footer", { className: "border-t border-border py-6 mt-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "container mx-auto px-4 text-center text-muted-foreground text-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: [
      "\xA9 ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " Photo Gallery. All rights reserved."
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 312,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 311,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 310,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 226,
    columnNumber: 10
  }, this);
}
_s(Index, "D/H+JjQnbtw3blMpO3Y2bn9cDtg=", false, function() {
  return [useNavigate];
});
_c5 = Index;
var _c5;
$RefreshReg$(_c5, "Index");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Index as default
};
//# sourceMappingURL=/build/routes/_index-YJBVXEZF.js.map
