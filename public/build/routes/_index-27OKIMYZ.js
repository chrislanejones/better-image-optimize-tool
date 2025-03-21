import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from "/build/_shared/chunk-4RNKU4Z5.js";
import {
  Button
} from "/build/_shared/chunk-4VECYXKD.js";
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
  import.meta.hot.lastModified = "1742548769540.026";
}
function Index() {
  _s();
  const [files, setFiles] = (0, import_react.useState)([]);
  const [isDragging, setIsDragging] = (0, import_react.useState)(false);
  const [pasteEnabled, setPasteEnabled] = (0, import_react.useState)(true);
  const dropZoneRef = (0, import_react.useRef)(null);
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
              const timestamp = (/* @__PURE__ */ new Date()).toISOString().replace(/:/g, "-");
              const file = new File([blob], `pasted-image-${timestamp}.png`, {
                type: blob.type
              });
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
  const [errorMessage, setErrorMessage] = (0, import_react.useState)(null);
  const processFilesAndNavigate = (newFiles) => {
    setErrorMessage(null);
    if (newFiles.length === 0) {
      setErrorMessage("No valid image files were selected.");
      return;
    }
    console.log("Processing files for navigation:", newFiles.length);
    try {
      const validImageFiles = newFiles.filter((file) => file.type.startsWith("image/"));
      if (validImageFiles.length === 0) {
        setErrorMessage("Please select valid image files only.");
        return;
      }
      if (validImageFiles.length < newFiles.length) {
        console.warn("Some non-image files were filtered out");
      }
      const fileData = validImageFiles.map((file) => ({
        name: file.name,
        type: file.type,
        size: file.size,
        // Create temporary URL for preview
        url: URL.createObjectURL(file)
      }));
      console.log("File data created:", fileData.length);
      sessionStorage.setItem("uploadedImages", JSON.stringify(fileData));
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
        const newFiles = allFiles.filter((file) => file.type.startsWith("image/"));
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
        const newFiles = Array.from(e.target.files).filter((file) => file.type.startsWith("image/"));
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "max-w-4xl mx-auto p-4 md:p-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Card, { className: "w-full", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CardTitle, { className: "text-center", children: "Photo Upload" }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 230,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 229,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CardContent, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex justify-center mb-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 300 350", className: "w-56 md:w-72 h-auto filter drop-shadow transition-transform duration-300 hover:scale-105", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("rect", { x: "20", y: "20", width: "260", height: "310", rx: "5", ry: "5", fill: "white", stroke: "#e0e0e0", strokeWidth: "2" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 237,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("rect", { x: "40", y: "40", width: "220", height: "220", fill: "#f5f5f5", stroke: "#e0e0e0", strokeWidth: "1" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 238,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("rect", { x: "40", y: "260", width: "220", height: "50", fill: "white" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 239,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("rect", { x: "25", y: "25", width: "260", height: "310", rx: "5", ry: "5", fill: "none", stroke: "#d0d0d0", strokeWidth: "1", opacity: "0.5" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 240,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("path", { d: "M40,40 L50,50 M260,40 L250,50 M40,260 L50,250 M260,260 L250,250", stroke: "#e0e0e0", strokeWidth: "1" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 241,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 236,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 234,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form, { onSubmit: handleSubmit, className: "flex flex-col gap-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DropZone, { ref: dropZoneRef, isDragging, hasFiles: files.length > 0, onDragOver: handleDragOver, onDragLeave: handleDragLeave, onDrop: handleDrop, onClick: focusDropZone, tabIndex: 0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-col items-center justify-center space-y-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-10 w-10 text-slate-400 mb-2", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 249,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 248,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-slate-600 font-medium", children: "Drag & drop images here" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 251,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-slate-500 text-sm", children: "\u2014 or \u2014" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 254,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-slate-500 text-sm", children: "Paste an image (Ctrl+V)" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 255,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 247,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 246,
          columnNumber: 13
        }, this),
        files.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Card, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CardContent, { className: "pt-6", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { className: "text-lg font-medium text-slate-800 mb-4", children: [
              "Selected Images (",
              files.length,
              ")"
            ] }, void 0, true, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 263,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { className: "list-none p-0 max-h-48 overflow-y-auto divide-y divide-slate-200", children: files.map((file, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "py-2 flex items-center justify-between", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "truncate max-w-xs", children: file.name }, void 0, false, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 268,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "text-sm text-slate-500", children: [
                "(",
                Math.round(file.size / 1024),
                " KB)"
              ] }, void 0, true, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 269,
                columnNumber: 25
              }, this)
            ] }, index, true, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 267,
              columnNumber: 49
            }, this)) }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 266,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 262,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CardFooter, { className: "justify-end", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button, { type: "submit", variant: "success", onClick: () => processFilesAndNavigate(files), children: "Continue to Gallery" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 276,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 275,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 261,
          columnNumber: 34
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 245,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 233,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CardFooter, { className: "flex flex-col items-center justify-center text-sm text-slate-500", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: "Click or tap anywhere in the drop zone to enable paste" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 284,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "mt-1", children: "You can paste (Ctrl+V) an image from your clipboard" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 285,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 283,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 228,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 227,
    columnNumber: 10
  }, this);
}
_s(Index, "IhoF3hWaZqDT9qdnVYvhvx2SIJg=", false, function() {
  return [useNavigate];
});
_c3 = Index;
var _c3;
$RefreshReg$(_c3, "Index");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Index as default
};
//# sourceMappingURL=/build/routes/_index-27OKIMYZ.js.map
