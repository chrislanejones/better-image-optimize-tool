import {
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from "/build/_shared/chunk-AE4FA6HE.js";
import {
  Form,
  useNavigate,
  useSubmit
} from "/build/_shared/chunk-DI2BQNBE.js";
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
var import_react = __toESM(require_react());

// app/components/ui/DropZone.tsx
var React = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
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
  import.meta.hot.lastModified = "1742545136217.2202";
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { ref, className: `
          w-full 
          border-2 
          border-dashed 
          rounded-lg 
          p-8 
          text-center 
          cursor-pointer 
          transition-all 
          ${isDragging ? "border-blue-600 bg-blue-50" : ""} 
          ${hasFiles ? "border-green-600 bg-green-50" : "border-slate-300 bg-slate-50"} 
          ${className || ""}
        `, onDrop, onDragOver, onDragLeave, ...props, children }, void 0, false, {
    fileName: "app/components/ui/DropZone.tsx",
    lineNumber: 32,
    columnNumber: 10
  }, this);
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
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
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
  import.meta.hot.lastModified = "1742545181955.399";
}
function Index() {
  _s();
  const [files, setFiles] = (0, import_react.useState)([]);
  const [isDragging, setIsDragging] = (0, import_react.useState)(false);
  const navigate = useNavigate();
  const submit = useSubmit();
  (0, import_react.useEffect)(() => {
    if (files.length > 0) {
      console.log(`Files updated, count: ${files.length}`);
    }
  }, [files]);
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
    console.log("Processing files for navigation:", newFiles.length);
    try {
      const fileData = newFiles.map((file) => ({
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
    }
  };
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    console.log("Files dropped");
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const newFiles = Array.from(e.dataTransfer.files);
      console.log(`Dropped ${newFiles.length} files`);
      setFiles(newFiles);
      processFilesAndNavigate(newFiles);
    }
  };
  const handleFileSelect = (e) => {
    console.log("File input change detected");
    if (e.target.files && e.target.files.length > 0) {
      const newFiles = Array.from(e.target.files);
      console.log(`Selected ${newFiles.length} files via input`);
      setFiles(newFiles);
      processFilesAndNavigate(newFiles);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
    if (files.length > 0) {
      processFilesAndNavigate(files);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "max-w-4xl mx-auto p-4 md:p-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Card, { className: "w-full", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CardTitle, { className: "text-center", children: "Photo Upload" }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 115,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 114,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CardContent, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex justify-center mb-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 300 350", className: "w-56 md:w-72 h-auto filter drop-shadow transition-transform duration-300 hover:scale-105", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("rect", { x: "20", y: "20", width: "260", height: "310", rx: "5", ry: "5", fill: "white", stroke: "#e0e0e0", strokeWidth: "2" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 122,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("rect", { x: "40", y: "40", width: "220", height: "220", fill: "#f5f5f5", stroke: "#e0e0e0", strokeWidth: "1" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 123,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("rect", { x: "40", y: "260", width: "220", height: "50", fill: "white" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 124,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("rect", { x: "25", y: "25", width: "260", height: "310", rx: "5", ry: "5", fill: "none", stroke: "#d0d0d0", strokeWidth: "1", opacity: "0.5" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 125,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("path", { d: "M40,40 L50,50 M260,40 L250,50 M40,260 L50,250 M260,260 L250,250", stroke: "#e0e0e0", strokeWidth: "1" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 126,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 121,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 119,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form, { onSubmit: handleSubmit, className: "flex flex-col gap-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DropZone, { isDragging, hasFiles: files.length > 0, onDragOver: handleDragOver, onDragLeave: handleDragLeave, onDrop: handleDrop, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-col items-center justify-center space-y-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-10 w-10 text-slate-400 mb-2", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 134,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 133,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-slate-600 font-medium", children: "Drag & drop images here" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 136,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-slate-500 text-sm", children: "\u2014 or \u2014" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 139,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("label", { className: "cursor-pointer", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button, { type: "button", variant: "primary", className: "mt-2", children: "Choose Files" }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 142,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { type: "file", accept: "image/*", multiple: true, onChange: handleFileSelect, className: "hidden", id: "file-upload" }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 145,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 141,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 132,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 131,
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
              lineNumber: 152,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { className: "list-none p-0 max-h-48 overflow-y-auto divide-y divide-slate-200", children: files.map((file, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "py-2 flex items-center justify-between", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "truncate max-w-xs", children: file.name }, void 0, false, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 157,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "text-sm text-slate-500", children: [
                "(",
                Math.round(file.size / 1024),
                " KB)"
              ] }, void 0, true, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 158,
                columnNumber: 25
              }, this)
            ] }, index, true, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 156,
              columnNumber: 49
            }, this)) }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 155,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 151,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CardFooter, { className: "justify-end", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button, { type: "submit", variant: "success", onClick: () => processFilesAndNavigate(files), children: "Continue to Gallery" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 165,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 164,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 150,
          columnNumber: 34
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 130,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 118,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 113,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 112,
    columnNumber: 10
  }, this);
}
_s(Index, "HhQlpgwoqxOLz50b1o3mt1NSmRU=", false, function() {
  return [useNavigate, useSubmit];
});
_c3 = Index;
var _c3;
$RefreshReg$(_c3, "Index");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Index as default
};
//# sourceMappingURL=/build/routes/_index-AQMBXC3T.js.map
