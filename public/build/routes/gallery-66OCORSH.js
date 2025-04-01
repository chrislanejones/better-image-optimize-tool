import {
  ArrowLeftToLine,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardWithBorderTitle,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Crop,
  Download,
  Maximize,
  Ratio,
  RotateCcw,
  Square,
  ThemeToggle,
  User,
  X,
  retrieveFileData
} from "/build/_shared/chunk-T3P6NCQY.js";
import {
  Link,
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

// app/routes/gallery.tsx
var import_react6 = __toESM(require_react(), 1);

// app/components/gallery/ThumbnailGallery.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/gallery/ThumbnailGallery.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/gallery/ThumbnailGallery.tsx"
  );
  import.meta.hot.lastModified = "1743472106005.0793";
}
var ThumbnailGallery = ({
  images,
  selectedImage,
  onSelectImage,
  onRemoveImage,
  onExpandImage,
  onClearAll,
  onNext,
  onPrevious,
  currentIndex,
  totalImages
}) => {
  _s();
  const [hoverIndex, setHoverIndex] = (0, import_react.useState)(null);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { className: "mb-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardHeader, { className: "px-6 py-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-3 items-center w-full", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center gap-2 justify-self-start", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { variant: "secondary", size: "sm", asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowLeftToLine, { className: "mr-1 h-4 w-4" }, void 0, false, {
            fileName: "app/components/gallery/ThumbnailGallery.tsx",
            lineNumber: 51,
            columnNumber: 19
          }, this),
          "Back to Upload"
        ] }, void 0, true, {
          fileName: "app/components/gallery/ThumbnailGallery.tsx",
          lineNumber: 50,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/components/gallery/ThumbnailGallery.tsx",
          lineNumber: 49,
          columnNumber: 15
        }, this),
        images.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { variant: "destructive", size: "sm", onClick: onClearAll, children: "Clear All" }, void 0, false, {
          fileName: "app/components/gallery/ThumbnailGallery.tsx",
          lineNumber: 56,
          columnNumber: 37
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/gallery/ThumbnailGallery.tsx",
        lineNumber: 48,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "justify-self-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { variant: "default", size: "sm", onClick: () => onSelectImage(images[0], 0), "aria-label": "First image", disabled: currentIndex === 0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronsLeft, { className: "h-4 w-4" }, void 0, false, {
          fileName: "app/components/gallery/ThumbnailGallery.tsx",
          lineNumber: 64,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/components/gallery/ThumbnailGallery.tsx",
          lineNumber: 63,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { variant: "default", size: "sm", onClick: onPrevious, "aria-label": "Previous image", disabled: currentIndex === 0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronLeft, { className: "h-4 w-4" }, void 0, false, {
          fileName: "app/components/gallery/ThumbnailGallery.tsx",
          lineNumber: 68,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/components/gallery/ThumbnailGallery.tsx",
          lineNumber: 67,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-md text-muted-foreground px-3", children: [
          "Image ",
          currentIndex + 1,
          " of ",
          totalImages
        ] }, void 0, true, {
          fileName: "app/components/gallery/ThumbnailGallery.tsx",
          lineNumber: 71,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { variant: "default", size: "sm", onClick: onNext, "aria-label": "Next image", disabled: currentIndex === totalImages - 1, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronRight, { className: "h-4 w-4" }, void 0, false, {
          fileName: "app/components/gallery/ThumbnailGallery.tsx",
          lineNumber: 76,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/components/gallery/ThumbnailGallery.tsx",
          lineNumber: 75,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { variant: "default", size: "sm", onClick: () => onSelectImage(images[totalImages - 1], totalImages - 1), "aria-label": "Last image", disabled: currentIndex === totalImages - 1, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronsRight, { className: "h-4 w-4" }, void 0, false, {
          fileName: "app/components/gallery/ThumbnailGallery.tsx",
          lineNumber: 80,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/components/gallery/ThumbnailGallery.tsx",
          lineNumber: 79,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/gallery/ThumbnailGallery.tsx",
        lineNumber: 62,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "justify-self-end", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center gap-2 justify-self-end", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ThemeToggle, {}, void 0, false, {
          fileName: "app/components/gallery/ThumbnailGallery.tsx",
          lineNumber: 87,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { variant: "secondary", size: "sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(User, { size: 18 }, void 0, false, {
          fileName: "app/components/gallery/ThumbnailGallery.tsx",
          lineNumber: 89,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/components/gallery/ThumbnailGallery.tsx",
          lineNumber: 88,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/gallery/ThumbnailGallery.tsx",
        lineNumber: 86,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/components/gallery/ThumbnailGallery.tsx",
        lineNumber: 83,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/gallery/ThumbnailGallery.tsx",
      lineNumber: 46,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/gallery/ThumbnailGallery.tsx",
      lineNumber: 45,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-4 overflow-x-auto p-4 min-h-24 items-center scrollbar-thin bg-slate-100 dark:bg-slate-900 rounded-md", children: images.length > 0 ? images.map((image, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `relative flex-none w-20 h-20 rounded cursor-pointer transition-all hover:-translate-y-1 ${selectedImage === image ? "ring-2 ring-primary shadow-md" : "ring-2 ring-transparent"}`, onClick: () => onSelectImage(image, index), onMouseEnter: () => setHoverIndex(index), onMouseLeave: () => setHoverIndex(null), onKeyDown: (e) => {
      if (e.key === "Enter" || e.key === " ") {
        onSelectImage(image, index);
      }
    }, tabIndex: 0, role: "button", "aria-label": `Select image ${image.name}`, "aria-selected": selectedImage === image, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: image.url, alt: image.name, className: "w-full h-full object-cover" }, void 0, false, {
        fileName: "app/components/gallery/ThumbnailGallery.tsx",
        lineNumber: 102,
        columnNumber: 19
      }, this),
      hoverIndex === index && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "absolute top-0 left-0 p-1 bg-black/50 text-white rounded-br", onClick: (e) => {
          e.stopPropagation();
          onExpandImage(image);
        }, "aria-label": "Expand image", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Maximize, { className: "h-4 w-4" }, void 0, false, {
          fileName: "app/components/gallery/ThumbnailGallery.tsx",
          lineNumber: 111,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/components/gallery/ThumbnailGallery.tsx",
          lineNumber: 107,
          columnNumber: 23
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "absolute top-0 right-0 p-1 bg-black/50 text-white rounded-bl", onClick: (e) => {
          e.stopPropagation();
          onRemoveImage(index);
        }, "aria-label": "Remove image", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(X, { className: "h-4 w-4" }, void 0, false, {
          fileName: "app/components/gallery/ThumbnailGallery.tsx",
          lineNumber: 119,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/components/gallery/ThumbnailGallery.tsx",
          lineNumber: 115,
          columnNumber: 23
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/gallery/ThumbnailGallery.tsx",
        lineNumber: 105,
        columnNumber: 44
      }, this)
    ] }, index, true, {
      fileName: "app/components/gallery/ThumbnailGallery.tsx",
      lineNumber: 97,
      columnNumber: 63
    }, this)) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full text-center text-muted-foreground py-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "No images uploaded" }, void 0, false, {
      fileName: "app/components/gallery/ThumbnailGallery.tsx",
      lineNumber: 123,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/components/gallery/ThumbnailGallery.tsx",
      lineNumber: 122,
      columnNumber: 27
    }, this) }, void 0, false, {
      fileName: "app/components/gallery/ThumbnailGallery.tsx",
      lineNumber: 96,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/gallery/ThumbnailGallery.tsx",
      lineNumber: 95,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/gallery/ThumbnailGallery.tsx",
    lineNumber: 44,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/gallery/ThumbnailGallery.tsx",
    lineNumber: 43,
    columnNumber: 10
  }, this);
};
_s(ThumbnailGallery, "7XGtNr9BsKihW2yVz9tMMtR5Dek=");
_c = ThumbnailGallery;
var ThumbnailGallery_default = ThumbnailGallery;
var _c;
$RefreshReg$(_c, "ThumbnailGallery");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/gallery/ImagePreview.tsx
var import_react3 = __toESM(require_react(), 1);
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/gallery/ImagePreview.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/gallery/ImagePreview.tsx"
  );
  import.meta.hot.lastModified = "1743470621565.0933";
}
var ImagePreview = ({
  image,
  cropMode,
  cropRect,
  onCropStart,
  onCropMove,
  onCropEnd
}) => {
  _s2();
  const containerRef = (0, import_react3.useRef)(null);
  const handleMouseDown = (e) => {
    if (!cropMode || !containerRef.current)
      return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    onCropStart(x, y);
  };
  const handleMouseMove = (e) => {
    if (!cropMode || !containerRef.current)
      return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    onCropMove(x, y);
  };
  const handleMouseUp = () => {
    if (!cropMode)
      return;
    onCropEnd();
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CardWithBorderTitle, { title: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "text-lg font-semibold leading-none tracking-tight", children: "Image Preview" }, void 0, false, {
      fileName: "app/components/gallery/ImagePreview.tsx",
      lineNumber: 61,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "block text-sm text-slate-500 dark:text-slate-300 truncate mt-1", children: image.name }, void 0, false, {
      fileName: "app/components/gallery/ImagePreview.tsx",
      lineNumber: 64,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/gallery/ImagePreview.tsx",
    lineNumber: 60,
    columnNumber: 38
  }, this), cardClassName: "md:col-span-2", contentClassName: "p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { ref: containerRef, className: `rounded-md flex items-center justify-center p-2 h-64 md:h-72 lg:h-96 relative ${cropMode ? "cursor-crosshair" : ""}`, onMouseDown: handleMouseDown, onMouseMove: handleMouseMove, onMouseUp: handleMouseUp, onMouseLeave: handleMouseUp, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: image.url, alt: image.name, className: "max-w-full max-h-full object-contain" }, void 0, false, {
      fileName: "app/components/gallery/ImagePreview.tsx",
      lineNumber: 69,
      columnNumber: 9
    }, this),
    cropMode && cropRect && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "absolute border-2 border-white bg-black bg-opacity-30", style: {
      left: cropRect.x + "px",
      top: cropRect.y + "px",
      width: cropRect.width + "px",
      height: cropRect.height + "px"
    } }, void 0, false, {
      fileName: "app/components/gallery/ImagePreview.tsx",
      lineNumber: 72,
      columnNumber: 34
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/gallery/ImagePreview.tsx",
    lineNumber: 68,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/gallery/ImagePreview.tsx",
    lineNumber: 60,
    columnNumber: 10
  }, this);
};
_s2(ImagePreview, "5okL0DAk6Atnb3+Rru+wGBWyP+4=");
_c2 = ImagePreview;
var ImagePreview_default = ImagePreview;
var _c2;
$RefreshReg$(_c2, "ImagePreview");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/gallery/ImageDetails.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/gallery/ImageDetails.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/gallery/ImageDetails.tsx"
  );
  import.meta.hot.lastModified = "1742627916301.9937";
}
var ImageDetails = ({
  originalImage,
  editedImage
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "relative mt-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "absolute -top-3 left-4 px-2 bg-white dark:bg-slate-900 z-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h3", { className: "text-base font-semibold", children: "Original Image" }, void 0, false, {
        fileName: "app/components/gallery/ImageDetails.tsx",
        lineNumber: 32,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/gallery/ImageDetails.tsx",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Card, { className: "pt-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "p-6 space-y-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h3", { className: "text-sm font-medium text-muted-foreground mb-1", children: "File name" }, void 0, false, {
            fileName: "app/components/gallery/ImageDetails.tsx",
            lineNumber: 38,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "break-words", children: originalImage.name }, void 0, false, {
            fileName: "app/components/gallery/ImageDetails.tsx",
            lineNumber: 41,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/gallery/ImageDetails.tsx",
          lineNumber: 37,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h3", { className: "text-sm font-medium text-muted-foreground mb-1", children: "Type" }, void 0, false, {
            fileName: "app/components/gallery/ImageDetails.tsx",
            lineNumber: 44,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: originalImage.type }, void 0, false, {
            fileName: "app/components/gallery/ImageDetails.tsx",
            lineNumber: 47,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/gallery/ImageDetails.tsx",
          lineNumber: 43,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h3", { className: "text-sm font-medium text-muted-foreground mb-1", children: "Size" }, void 0, false, {
            fileName: "app/components/gallery/ImageDetails.tsx",
            lineNumber: 50,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: [
            Math.round(originalImage.size / 1024),
            " KB"
          ] }, void 0, true, {
            fileName: "app/components/gallery/ImageDetails.tsx",
            lineNumber: 53,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/gallery/ImageDetails.tsx",
          lineNumber: 49,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/gallery/ImageDetails.tsx",
        lineNumber: 36,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/gallery/ImageDetails.tsx",
        lineNumber: 35,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/gallery/ImageDetails.tsx",
      lineNumber: 29,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "relative mt-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "absolute -top-3 left-4 px-2 bg-white dark:bg-slate-900 z-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h3", { className: "text-base font-semibold", children: "Edited Image" }, void 0, false, {
        fileName: "app/components/gallery/ImageDetails.tsx",
        lineNumber: 63,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/gallery/ImageDetails.tsx",
        lineNumber: 62,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Card, { className: "pt-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "p-6 space-y-4", children: editedImage ? /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h3", { className: "text-sm font-medium text-muted-foreground mb-1", children: "File name" }, void 0, false, {
            fileName: "app/components/gallery/ImageDetails.tsx",
            lineNumber: 70,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "break-words", children: editedImage.name }, void 0, false, {
            fileName: "app/components/gallery/ImageDetails.tsx",
            lineNumber: 73,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/gallery/ImageDetails.tsx",
          lineNumber: 69,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h3", { className: "text-sm font-medium text-muted-foreground mb-1", children: "Type" }, void 0, false, {
            fileName: "app/components/gallery/ImageDetails.tsx",
            lineNumber: 76,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: editedImage.type }, void 0, false, {
            fileName: "app/components/gallery/ImageDetails.tsx",
            lineNumber: 79,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/gallery/ImageDetails.tsx",
          lineNumber: 75,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h3", { className: "text-sm font-medium text-muted-foreground mb-1", children: "Size" }, void 0, false, {
            fileName: "app/components/gallery/ImageDetails.tsx",
            lineNumber: 82,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: [
            Math.round(editedImage.size / 1024),
            " KB"
          ] }, void 0, true, {
            fileName: "app/components/gallery/ImageDetails.tsx",
            lineNumber: 85,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/gallery/ImageDetails.tsx",
          lineNumber: 81,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h3", { className: "text-sm font-medium text-muted-foreground mb-1", children: "Reduction" }, void 0, false, {
            fileName: "app/components/gallery/ImageDetails.tsx",
            lineNumber: 88,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "text-green-600 dark:text-green-400", children: [
            Math.round((1 - editedImage.size / originalImage.size) * 100),
            "% smaller"
          ] }, void 0, true, {
            fileName: "app/components/gallery/ImageDetails.tsx",
            lineNumber: 91,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/gallery/ImageDetails.tsx",
          lineNumber: 87,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/gallery/ImageDetails.tsx",
        lineNumber: 68,
        columnNumber: 28
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "text-muted-foreground text-center", children: "No edits made to the image" }, void 0, false, {
        fileName: "app/components/gallery/ImageDetails.tsx",
        lineNumber: 96,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/components/gallery/ImageDetails.tsx",
        lineNumber: 67,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/gallery/ImageDetails.tsx",
        lineNumber: 66,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/gallery/ImageDetails.tsx",
      lineNumber: 60,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/gallery/ImageDetails.tsx",
    lineNumber: 27,
    columnNumber: 10
  }, this);
};
_c3 = ImageDetails;
var ImageDetails_default = ImageDetails;
var _c3;
$RefreshReg$(_c3, "ImageDetails");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/gallery/ErrorMessage.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/gallery/ErrorMessage.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/gallery/ErrorMessage.tsx"
  );
  import.meta.hot.lastModified = "1742552371683.8857";
}
var ErrorMessage = ({
  message,
  redirecting = false
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Card, { className: "mb-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(CardContent, { className: "p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex items-center text-amber-700 dark:text-amber-300", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-5 w-5 mr-2", viewBox: "0 0 20 20", fill: "currentColor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z", clipRule: "evenodd" }, void 0, false, {
      fileName: "app/components/gallery/ErrorMessage.tsx",
      lineNumber: 31,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/gallery/ErrorMessage.tsx",
      lineNumber: 30,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: message }, void 0, false, {
        fileName: "app/components/gallery/ErrorMessage.tsx",
        lineNumber: 34,
        columnNumber: 13
      }, this),
      redirecting && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "text-sm mt-1", children: "Redirecting to upload page..." }, void 0, false, {
        fileName: "app/components/gallery/ErrorMessage.tsx",
        lineNumber: 35,
        columnNumber: 29
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/gallery/ErrorMessage.tsx",
      lineNumber: 33,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/gallery/ErrorMessage.tsx",
    lineNumber: 29,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/gallery/ErrorMessage.tsx",
    lineNumber: 28,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/gallery/ErrorMessage.tsx",
    lineNumber: 27,
    columnNumber: 10
  }, this);
};
_c4 = ErrorMessage;
var ErrorMessage_default = ErrorMessage;
var _c4;
$RefreshReg$(_c4, "ErrorMessage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/gallery/ImageModal.tsx
var import_react4 = __toESM(require_react(), 1);
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/gallery/ImageModal.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s3 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/gallery/ImageModal.tsx"
  );
  import.meta.hot.lastModified = "1742625071452.403";
}
var ImageModal = ({
  image,
  onClose
}) => {
  _s3();
  (0, import_react4.useEffect)(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [onClose]);
  if (!image)
    return null;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 backdrop-blur-sm", onClick: onClose, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "relative max-w-[90vw] max-h-[90vh] overflow-hidden", onClick: (e) => e.stopPropagation(), children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("button", { className: "absolute top-2 right-2 z-10 bg-black/50 text-white p-2 rounded-full", onClick: onClose, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("line", { x1: "18", y1: "6", x2: "6", y2: "18" }, void 0, false, {
        fileName: "app/components/gallery/ImageModal.tsx",
        lineNumber: 51,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("line", { x1: "6", y1: "6", x2: "18", y2: "18" }, void 0, false, {
        fileName: "app/components/gallery/ImageModal.tsx",
        lineNumber: 52,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/gallery/ImageModal.tsx",
      lineNumber: 50,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/gallery/ImageModal.tsx",
      lineNumber: 49,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("img", { src: image.url, alt: image.name, className: "max-w-full max-h-[90vh] object-contain" }, void 0, false, {
      fileName: "app/components/gallery/ImageModal.tsx",
      lineNumber: 57,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4 text-sm", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "font-medium", children: image.name }, void 0, false, {
        fileName: "app/components/gallery/ImageModal.tsx",
        lineNumber: 61,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "opacity-80 text-xs", children: [
        image.type,
        " - ",
        Math.round(image.size / 1024),
        " KB"
      ] }, void 0, true, {
        fileName: "app/components/gallery/ImageModal.tsx",
        lineNumber: 62,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/gallery/ImageModal.tsx",
      lineNumber: 60,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/gallery/ImageModal.tsx",
    lineNumber: 47,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/gallery/ImageModal.tsx",
    lineNumber: 46,
    columnNumber: 10
  }, this);
};
_s3(ImageModal, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c5 = ImageModal;
var ImageModal_default = ImageModal;
var _c5;
$RefreshReg$(_c5, "ImageModal");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/gallery/ControlsCard.tsx
var import_react5 = __toESM(require_react(), 1);
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/gallery/ControlsCard.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s4 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/gallery/ControlsCard.tsx"
  );
  import.meta.hot.lastModified = "1742630130531.6956";
}
var ControlsCard = ({
  image,
  cropMode,
  formatOption,
  compressionLevel,
  onToggleCrop,
  onFormatChange,
  onCompressionChange,
  onDimensionsChange,
  onApplyChanges,
  onCancelChanges,
  hasCropSelection,
  onApplyCrop
}) => {
  _s4();
  const [width, setWidth] = (0, import_react5.useState)(0);
  const [height, setHeight] = (0, import_react5.useState)(0);
  const [originalWidth, setOriginalWidth] = (0, import_react5.useState)(0);
  const [originalHeight, setOriginalHeight] = (0, import_react5.useState)(0);
  const [aspectRatio, setAspectRatio] = (0, import_react5.useState)(1);
  const [maintainAspectRatio, setMaintainAspectRatio] = (0, import_react5.useState)(true);
  const [isResizing, setIsResizing] = (0, import_react5.useState)(false);
  (0, import_react5.useEffect)(() => {
    const img = new Image();
    img.onload = () => {
      const w = img.naturalWidth;
      const h = img.naturalHeight;
      setWidth(w);
      setHeight(h);
      setOriginalWidth(w);
      setOriginalHeight(h);
      setAspectRatio(w / h);
    };
    img.src = image.url;
  }, [image.url]);
  const handleFormatChange = (e) => {
    onFormatChange(e.target.value);
  };
  const handleCompressionChange = (e) => {
    onCompressionChange(Number(e.target.value));
  };
  const handleWidthChange = (e) => {
    const newWidth = Number(e.target.value);
    setWidth(newWidth);
    if (maintainAspectRatio) {
      const newHeight = Math.round(newWidth / aspectRatio);
      setHeight(newHeight);
    }
    setIsResizing(true);
  };
  const handleHeightChange = (e) => {
    const newHeight = Number(e.target.value);
    setHeight(newHeight);
    if (maintainAspectRatio) {
      const newWidth = Math.round(newHeight * aspectRatio);
      setWidth(newWidth);
    }
    setIsResizing(true);
  };
  const applyDimensionsChange = () => {
    onDimensionsChange(width, height, maintainAspectRatio);
    setIsResizing(false);
  };
  const toggleAspectRatio = () => {
    setMaintainAspectRatio(!maintainAspectRatio);
  };
  const resetDimensions = () => {
    setWidth(originalWidth);
    setHeight(originalHeight);
    setIsResizing(true);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "relative mt-6 mb-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "absolute -top-3 left-4 px-2 bg-white dark:bg-slate-900 z-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h3", { className: "text-lg font-medium", children: "Image Dimensions" }, void 0, false, {
      fileName: "app/components/gallery/ControlsCard.tsx",
      lineNumber: 116,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/gallery/ControlsCard.tsx",
      lineNumber: 115,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Card, { className: "pt-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "p-6 space-y-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "space-y-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex flex-wrap gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("button", { onClick: toggleAspectRatio, className: `flex items-center gap-1.5 p-1.5 rounded text-xs ${maintainAspectRatio ? "bg-primary text-white" : "bg-slate-200 dark:bg-indigo-900 text-slate-700 dark:text-slate-300"}`, title: maintainAspectRatio ? "Aspect ratio locked" : "Aspect ratio unlocked", children: maintainAspectRatio ? /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_jsx_dev_runtime6.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Ratio, { size: 14 }, void 0, false, {
              fileName: "app/components/gallery/ControlsCard.tsx",
              lineNumber: 127,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { children: "Aspect Ratio Locked" }, void 0, false, {
              fileName: "app/components/gallery/ControlsCard.tsx",
              lineNumber: 128,
              columnNumber: 23
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/gallery/ControlsCard.tsx",
            lineNumber: 126,
            columnNumber: 42
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_jsx_dev_runtime6.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Square, { size: 14 }, void 0, false, {
              fileName: "app/components/gallery/ControlsCard.tsx",
              lineNumber: 130,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { children: "Aspect Ratio Unlocked" }, void 0, false, {
              fileName: "app/components/gallery/ControlsCard.tsx",
              lineNumber: 131,
              columnNumber: 23
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/gallery/ControlsCard.tsx",
            lineNumber: 129,
            columnNumber: 27
          }, this) }, void 0, false, {
            fileName: "app/components/gallery/ControlsCard.tsx",
            lineNumber: 125,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("button", { onClick: resetDimensions, className: "flex items-center gap-1.5 p-1.5 rounded text-xs bg-slate-200 dark:bg-indigo-900 text-slate-700 dark:text-slate-300", title: "Reset to original dimensions", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(RotateCcw, { size: 14 }, void 0, false, {
              fileName: "app/components/gallery/ControlsCard.tsx",
              lineNumber: 135,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { children: "Reset Dimensions" }, void 0, false, {
              fileName: "app/components/gallery/ControlsCard.tsx",
              lineNumber: 136,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/gallery/ControlsCard.tsx",
            lineNumber: 134,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/gallery/ControlsCard.tsx",
          lineNumber: 124,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/components/gallery/ControlsCard.tsx",
          lineNumber: 123,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "space-y-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("label", { className: "text-xs", children: [
              "Width: ",
              width,
              "px"
            ] }, void 0, true, {
              fileName: "app/components/gallery/ControlsCard.tsx",
              lineNumber: 144,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { className: "text-xs text-muted-foreground", children: [
              "Original: ",
              originalWidth,
              "px"
            ] }, void 0, true, {
              fileName: "app/components/gallery/ControlsCard.tsx",
              lineNumber: 145,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/gallery/ControlsCard.tsx",
            lineNumber: 143,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("input", { type: "range", min: 50, max: originalWidth * 2, value: width, onChange: handleWidthChange, className: "w-full" }, void 0, false, {
            fileName: "app/components/gallery/ControlsCard.tsx",
            lineNumber: 149,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/gallery/ControlsCard.tsx",
          lineNumber: 142,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "space-y-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("label", { className: "text-xs", children: [
              "Height: ",
              height,
              "px"
            ] }, void 0, true, {
              fileName: "app/components/gallery/ControlsCard.tsx",
              lineNumber: 155,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { className: "text-xs text-muted-foreground", children: [
              "Original: ",
              originalHeight,
              "px"
            ] }, void 0, true, {
              fileName: "app/components/gallery/ControlsCard.tsx",
              lineNumber: 156,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/gallery/ControlsCard.tsx",
            lineNumber: 154,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("input", { type: "range", min: 50, max: originalHeight * 2, value: height, onChange: handleHeightChange, className: "w-full" }, void 0, false, {
            fileName: "app/components/gallery/ControlsCard.tsx",
            lineNumber: 160,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/gallery/ControlsCard.tsx",
          lineNumber: 153,
          columnNumber: 13
        }, this),
        isResizing && /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Button, { variant: "primary", size: "sm", onClick: applyDimensionsChange, className: "w-full", children: "Apply Dimensions" }, void 0, false, {
          fileName: "app/components/gallery/ControlsCard.tsx",
          lineNumber: 163,
          columnNumber: 28
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/gallery/ControlsCard.tsx",
        lineNumber: 122,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("hr", { className: "border-slate-200 dark:border-indigo-800" }, void 0, false, {
        fileName: "app/components/gallery/ControlsCard.tsx",
        lineNumber: 168,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "space-y-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h3", { className: "text-sm font-medium", children: "Image Format" }, void 0, false, {
          fileName: "app/components/gallery/ControlsCard.tsx",
          lineNumber: 171,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex flex-wrap items-center gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("label", { className: "text-xs", children: "Format:" }, void 0, false, {
            fileName: "app/components/gallery/ControlsCard.tsx",
            lineNumber: 174,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("select", { value: formatOption, onChange: handleFormatChange, className: "py-1 px-3 rounded bg-slate-100 dark:bg-indigo-900 border border-slate-300 dark:border-indigo-700 text-sm", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("option", { value: "original", children: "Original" }, void 0, false, {
              fileName: "app/components/gallery/ControlsCard.tsx",
              lineNumber: 176,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("option", { value: "jpeg", children: "JPEG" }, void 0, false, {
              fileName: "app/components/gallery/ControlsCard.tsx",
              lineNumber: 177,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("option", { value: "webp", children: "WebP" }, void 0, false, {
              fileName: "app/components/gallery/ControlsCard.tsx",
              lineNumber: 178,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/gallery/ControlsCard.tsx",
            lineNumber: 175,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "w-full mt-3 space-y-1", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex justify-between", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("label", { className: "text-xs", children: [
              "Quality: ",
              compressionLevel,
              "%"
            ] }, void 0, true, {
              fileName: "app/components/gallery/ControlsCard.tsx",
              lineNumber: 184,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "app/components/gallery/ControlsCard.tsx",
              lineNumber: 183,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("input", { type: "range", min: "10", max: "100", value: compressionLevel, onChange: handleCompressionChange, className: "w-full" }, void 0, false, {
              fileName: "app/components/gallery/ControlsCard.tsx",
              lineNumber: 188,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/gallery/ControlsCard.tsx",
            lineNumber: 182,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/gallery/ControlsCard.tsx",
          lineNumber: 173,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/gallery/ControlsCard.tsx",
        lineNumber: 170,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("hr", { className: "border-slate-200 dark:border-indigo-800" }, void 0, false, {
        fileName: "app/components/gallery/ControlsCard.tsx",
        lineNumber: 193,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "space-y-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h3", { className: "text-sm font-medium", children: "Crop Image" }, void 0, false, {
          fileName: "app/components/gallery/ControlsCard.tsx",
          lineNumber: 196,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Button, { variant: cropMode ? "primary" : "secondary", onClick: onToggleCrop, className: "flex-1", size: "sm", children: cropMode ? "Cancel Crop" : "Start Cropping" }, void 0, false, {
            fileName: "app/components/gallery/ControlsCard.tsx",
            lineNumber: 199,
            columnNumber: 15
          }, this),
          hasCropSelection && cropMode && /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Button, { variant: "primary", onClick: onApplyCrop, className: "flex-1", size: "sm", children: "Apply Crop" }, void 0, false, {
            fileName: "app/components/gallery/ControlsCard.tsx",
            lineNumber: 203,
            columnNumber: 48
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/gallery/ControlsCard.tsx",
          lineNumber: 198,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/gallery/ControlsCard.tsx",
        lineNumber: 195,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/gallery/ControlsCard.tsx",
      lineNumber: 120,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/gallery/ControlsCard.tsx",
      lineNumber: 119,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/gallery/ControlsCard.tsx",
    lineNumber: 113,
    columnNumber: 10
  }, this);
};
_s4(ControlsCard, "xUJEjKW7Y6s6qrIL0zPIEH+vz1Y=");
_c6 = ControlsCard;
var ControlsCard_default = ControlsCard;
var _c6;
$RefreshReg$(_c6, "ControlsCard");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/ui/SimpleSelect.tsx
var import_jsx_dev_runtime7 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/ui/SimpleSelect.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/ui/SimpleSelect.tsx"
  );
  import.meta.hot.lastModified = "1742628670011.8904";
}
var SimpleSelect = ({
  options,
  value,
  onChange,
  placeholder = "Select an option",
  label,
  className = "",
  disabled = false
}) => {
  const selectedOption = options.find((option) => option.value === value);
  const displayText = selectedOption ? selectedOption.label : placeholder;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: `relative inline-block ${className}`, children: [
    label && /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("label", { htmlFor: "select", className: "block mb-1 text-sm font-medium", children: label }, void 0, false, {
      fileName: "app/components/ui/SimpleSelect.tsx",
      lineNumber: 37,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "relative", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("select", { id: "select", value, onChange: (e) => onChange(e.target.value), disabled, className: "block w-full h-9 appearance-none rounded-md border border-slate-200 bg-white px-3 py-2 text-sm pr-8 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:focus:ring-slate-300", children: [
        !selectedOption && /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("option", { value: "", disabled: true, children: placeholder }, void 0, false, {
          fileName: "app/components/ui/SimpleSelect.tsx",
          lineNumber: 42,
          columnNumber: 31
        }, this),
        options.map((option) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("option", { value: option.value, children: option.label }, option.value, false, {
          fileName: "app/components/ui/SimpleSelect.tsx",
          lineNumber: 45,
          columnNumber: 34
        }, this))
      ] }, void 0, true, {
        fileName: "app/components/ui/SimpleSelect.tsx",
        lineNumber: 41,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(ChevronDown, { className: "pointer-events-none absolute right-2.5 top-2.5 h-4 w-4 opacity-50" }, void 0, false, {
        fileName: "app/components/ui/SimpleSelect.tsx",
        lineNumber: 49,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/ui/SimpleSelect.tsx",
      lineNumber: 40,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/ui/SimpleSelect.tsx",
    lineNumber: 36,
    columnNumber: 10
  }, this);
};
_c7 = SimpleSelect;
var SimpleSelect_default = SimpleSelect;
var _c7;
$RefreshReg$(_c7, "SimpleSelect");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/gallery/ImageControlBar.tsx
var import_jsx_dev_runtime8 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/gallery/ImageControlBar.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/gallery/ImageControlBar.tsx"
  );
  import.meta.hot.lastModified = "1742629663171.754";
}
var ImageControlBar = ({
  formatOption,
  onFormatChange,
  compressionLevel,
  onCompressionChange,
  cropMode,
  onToggleCrop,
  hasCropSelection,
  onApplyCrop,
  onApplyChanges,
  onCancelChanges,
  onDownload
}) => {
  const formatOptions = [{
    value: "original",
    label: "Original"
  }, {
    value: "jpeg",
    label: "JPEG"
  }, {
    value: "webp",
    label: "WebP"
  }];
  const handleCompressionChange = (e) => {
    onCompressionChange(Number(e.target.value));
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Card, { className: "my-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(CardContent, { className: "p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "flex flex-wrap items-center gap-3 justify-between py-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "flex flex-wrap items-center gap-3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { className: "text-sm font-medium", children: "Format:" }, void 0, false, {
          fileName: "app/components/gallery/ImageControlBar.tsx",
          lineNumber: 61,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(SimpleSelect_default, { options: formatOptions, value: formatOption, onChange: onFormatChange, className: "w-28" }, void 0, false, {
          fileName: "app/components/gallery/ImageControlBar.tsx",
          lineNumber: 62,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/gallery/ImageControlBar.tsx",
        lineNumber: 60,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "flex items-center gap-2 min-w-48", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { className: "text-sm font-medium", children: "Quality:" }, void 0, false, {
          fileName: "app/components/gallery/ImageControlBar.tsx",
          lineNumber: 67,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("input", { type: "range", min: "10", max: "100", value: compressionLevel, onChange: handleCompressionChange, className: "w-28" }, void 0, false, {
          fileName: "app/components/gallery/ImageControlBar.tsx",
          lineNumber: 68,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { className: "text-xs text-muted-foreground w-8", children: [
          compressionLevel,
          "%"
        ] }, void 0, true, {
          fileName: "app/components/gallery/ImageControlBar.tsx",
          lineNumber: 69,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/gallery/ImageControlBar.tsx",
        lineNumber: 66,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/gallery/ImageControlBar.tsx",
      lineNumber: 59,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Button, { variant: cropMode ? "primary" : "secondary", size: "sm", onClick: onToggleCrop, className: "flex items-center gap-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Crop, { size: 16 }, void 0, false, {
          fileName: "app/components/gallery/ImageControlBar.tsx",
          lineNumber: 78,
          columnNumber: 15
        }, this),
        cropMode ? "Cancel Crop" : "Crop"
      ] }, void 0, true, {
        fileName: "app/components/gallery/ImageControlBar.tsx",
        lineNumber: 77,
        columnNumber: 13
      }, this),
      cropMode && hasCropSelection && /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Button, { variant: "primary", size: "sm", onClick: onApplyCrop, className: "flex items-center gap-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Check, { size: 16 }, void 0, false, {
          fileName: "app/components/gallery/ImageControlBar.tsx",
          lineNumber: 83,
          columnNumber: 17
        }, this),
        "Apply Crop"
      ] }, void 0, true, {
        fileName: "app/components/gallery/ImageControlBar.tsx",
        lineNumber: 82,
        columnNumber: 46
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/gallery/ImageControlBar.tsx",
      lineNumber: 76,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Button, { variant: "outline", size: "sm", onClick: onCancelChanges, className: "flex items-center gap-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(RotateCcw, { size: 16 }, void 0, false, {
          fileName: "app/components/gallery/ImageControlBar.tsx",
          lineNumber: 91,
          columnNumber: 15
        }, this),
        "Reset"
      ] }, void 0, true, {
        fileName: "app/components/gallery/ImageControlBar.tsx",
        lineNumber: 90,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Button, { variant: "primary", size: "sm", onClick: onApplyChanges, disabled: cropMode, className: "flex items-center gap-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Check, { size: 16 }, void 0, false, {
          fileName: "app/components/gallery/ImageControlBar.tsx",
          lineNumber: 96,
          columnNumber: 15
        }, this),
        "Apply Changes"
      ] }, void 0, true, {
        fileName: "app/components/gallery/ImageControlBar.tsx",
        lineNumber: 95,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Button, { variant: "secondary", size: "sm", onClick: onDownload, className: "flex items-center gap-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Download, { size: 16 }, void 0, false, {
          fileName: "app/components/gallery/ImageControlBar.tsx",
          lineNumber: 101,
          columnNumber: 15
        }, this),
        "Download"
      ] }, void 0, true, {
        fileName: "app/components/gallery/ImageControlBar.tsx",
        lineNumber: 100,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/gallery/ImageControlBar.tsx",
      lineNumber: 89,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/gallery/ImageControlBar.tsx",
    lineNumber: 57,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/gallery/ImageControlBar.tsx",
    lineNumber: 56,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/gallery/ImageControlBar.tsx",
    lineNumber: 55,
    columnNumber: 10
  }, this);
};
_c8 = ImageControlBar;
var ImageControlBar_default = ImageControlBar;
var _c8;
$RefreshReg$(_c8, "ImageControlBar");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/gallery.tsx
var import_jsx_dev_runtime9 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/gallery.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s5 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/gallery.tsx"
  );
  import.meta.hot.lastModified = "1743471922055.0913";
}
function Gallery() {
  _s5();
  const [images, setImages] = (0, import_react6.useState)([]);
  const [selectedImage, setSelectedImage] = (0, import_react6.useState)(null);
  const [currentImageIndex, setCurrentImageIndex] = (0, import_react6.useState)(0);
  const [loadError, setLoadError] = (0, import_react6.useState)(null);
  const [expandedImage, setExpandedImage] = (0, import_react6.useState)(null);
  const [currentPage, setCurrentPage] = (0, import_react6.useState)(1);
  const imagesPerPage = 9;
  const [cropMode, setCropMode] = (0, import_react6.useState)(false);
  const [cropStartX, setCropStartX] = (0, import_react6.useState)(null);
  const [cropStartY, setCropStartY] = (0, import_react6.useState)(null);
  const [cropRect, setCropRect] = (0, import_react6.useState)(null);
  const [formatOption, setFormatOption] = (0, import_react6.useState)("original");
  const [compressionLevel, setCompressionLevel] = (0, import_react6.useState)(90);
  const imageElementRef = (0, import_react6.useRef)(null);
  const navigate = useNavigate();
  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);
  const totalPages = Math.ceil(images.length / imagesPerPage);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  (0, import_react6.useEffect)(() => {
    console.log("Gallery component mounted, retrieving stored images");
    const storedImages = retrieveFileData();
    if (storedImages) {
      console.log(`Found ${storedImages.length} images in storage`);
      if (storedImages.length === 0) {
        setLoadError("No images were found. Please upload some images first.");
        return;
      }
      setImages(storedImages);
      if (storedImages.length > 0) {
        setSelectedImage(storedImages[0]);
        setCurrentImageIndex(0);
      }
    } else {
      console.log("No images found in storage");
      setLoadError("No images were found. Please upload some images first.");
      const timer = setTimeout(() => {
        navigate("/");
      }, 2e3);
      return () => clearTimeout(timer);
    }
  }, [navigate]);
  (0, import_react6.useEffect)(() => {
    if (selectedImage) {
      const img = new Image();
      img.onload = () => {
        imageElementRef.current = img;
      };
      img.src = selectedImage.url;
      setCropMode(false);
      setCropRect(null);
      setFormatOption("original");
      setCompressionLevel(90);
    }
  }, [selectedImage]);
  const handleImageSelect = (image, index) => {
    setSelectedImage(image);
    setCurrentImageIndex(index);
  };
  const navigateNext = () => {
    if (images.length === 0)
      return;
    const nextIndex = (currentImageIndex + 1) % images.length;
    setSelectedImage(images[nextIndex]);
    setCurrentImageIndex(nextIndex);
  };
  const navigatePrevious = () => {
    if (images.length === 0)
      return;
    const prevIndex = (currentImageIndex - 1 + images.length) % images.length;
    setSelectedImage(images[prevIndex]);
    setCurrentImageIndex(prevIndex);
  };
  const downloadImage = () => {
    if (!selectedImage)
      return;
    const a = document.createElement("a");
    a.href = selectedImage.url;
    a.download = selectedImage.name;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };
  const clearAllImages = () => {
    sessionStorage.removeItem("uploadedImages");
    setImages([]);
    setSelectedImage(null);
  };
  const removeImage = (index) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
    if (currentImageIndex === index) {
      if (newImages.length > 0) {
        const newIndex = Math.min(index, newImages.length - 1);
        setSelectedImage(newImages[newIndex]);
        setCurrentImageIndex(newIndex);
      } else {
        setSelectedImage(null);
      }
    } else if (currentImageIndex > index) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
    if (newImages.length > 0) {
      sessionStorage.setItem("uploadedImages", JSON.stringify(newImages));
    } else {
      sessionStorage.removeItem("uploadedImages");
    }
  };
  const expandImage = (image) => {
    setExpandedImage(image);
  };
  const handleCropStart = (x, y) => {
    setCropStartX(x);
    setCropStartY(y);
    setCropRect(null);
  };
  const handleCropMove = (x, y) => {
    if (cropStartX === null || cropStartY === null)
      return;
    setCropRect({
      x: Math.min(cropStartX, x),
      y: Math.min(cropStartY, y),
      width: Math.abs(x - cropStartX),
      height: Math.abs(y - cropStartY)
    });
  };
  const handleCropEnd = () => {
    setCropStartX(null);
    setCropStartY(null);
  };
  const toggleCropMode = () => {
    setCropMode(!cropMode);
    if (cropMode) {
      setCropRect(null);
    }
  };
  const applyCrop = () => {
    if (!cropRect || !imageElementRef.current || !selectedImage)
      return;
    const previewContainer = document.querySelector(".image-preview-container");
    if (!previewContainer)
      return;
    const displayWidth = previewContainer.clientWidth;
    const scaleX = imageElementRef.current.naturalWidth / displayWidth;
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx)
      return;
    canvas.width = cropRect.width * scaleX;
    canvas.height = cropRect.height * scaleX;
    ctx.drawImage(imageElementRef.current, cropRect.x * scaleX, cropRect.y * scaleX, cropRect.width * scaleX, cropRect.height * scaleX, 0, 0, canvas.width, canvas.height);
    canvas.toBlob((blob) => {
      if (blob) {
        saveEditedImage(blob);
      }
    }, formatOption === "webp" ? "image/webp" : "image/jpeg", compressionLevel / 100);
    setCropMode(false);
    setCropRect(null);
  };
  const applyChanges = () => {
    if (!imageElementRef.current || !selectedImage)
      return;
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx)
      return;
    canvas.width = imageElementRef.current.naturalWidth;
    canvas.height = imageElementRef.current.naturalHeight;
    ctx.drawImage(imageElementRef.current, 0, 0);
    canvas.toBlob((blob) => {
      if (blob) {
        saveEditedImage(blob);
      }
    }, formatOption === "webp" ? "image/webp" : "image/jpeg", compressionLevel / 100);
  };
  const handleDimensionsChange = (width, height, maintainAspectRatio) => {
    if (!imageElementRef.current || !selectedImage)
      return;
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx)
      return;
    canvas.width = width;
    canvas.height = height;
    ctx.drawImage(imageElementRef.current, 0, 0, width, height);
    canvas.toBlob((blob) => {
      if (blob) {
        saveEditedImage(blob);
      }
    }, formatOption === "webp" ? "image/webp" : "image/jpeg", compressionLevel / 100);
  };
  const cancelChanges = () => {
    if (selectedImage) {
      const img = new Image();
      img.onload = () => {
        imageElementRef.current = img;
      };
      img.src = selectedImage.url;
      setCropMode(false);
      setCropRect(null);
      setFormatOption("original");
      setCompressionLevel(90);
    }
  };
  const saveEditedImage = (editedBlob) => {
    if (!selectedImage)
      return;
    const newUrl = URL.createObjectURL(editedBlob);
    let newName = selectedImage.name;
    if (formatOption !== "original") {
      const baseName = selectedImage.name.split(".").slice(0, -1).join(".");
      newName = `${baseName}.${formatOption === "webp" ? "webp" : "jpg"}`;
    }
    const newImage = {
      name: newName,
      type: formatOption === "webp" ? "image/webp" : "image/jpeg",
      size: editedBlob.size,
      url: newUrl
    };
    const newImages = [...images];
    newImages[currentImageIndex] = newImage;
    setImages(newImages);
    setSelectedImage(newImage);
    sessionStorage.setItem("uploadedImages", JSON.stringify(newImages));
    const img = new Image();
    img.onload = () => {
      imageElementRef.current = img;
    };
    img.src = newUrl;
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "bg-background transition-colors", children: [
    loadError && /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(ErrorMessage_default, { message: loadError, redirecting: true }, void 0, false, {
      fileName: "app/routes/gallery.tsx",
      lineNumber: 348,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "container mx-auto p-4", children: [
      selectedImage && /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(ThumbnailGallery_default, { images, selectedImage, onSelectImage: handleImageSelect, onRemoveImage: removeImage, onExpandImage: expandImage, onClearAll: clearAllImages, onNext: navigateNext, onPrevious: navigatePrevious, currentIndex: currentImageIndex, totalImages: images.length }, void 0, false, {
        fileName: "app/routes/gallery.tsx",
        lineNumber: 353,
        columnNumber: 27
      }, this),
      selectedImage && /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(ImageControlBar_default, { formatOption, onFormatChange: setFormatOption, compressionLevel, onCompressionChange: setCompressionLevel, cropMode, onToggleCrop: toggleCropMode, hasCropSelection: cropRect !== null, onApplyCrop: applyCrop, onApplyChanges: applyChanges, onCancelChanges: cancelChanges, onDownload: downloadImage }, void 0, false, {
        fileName: "app/routes/gallery.tsx",
        lineNumber: 356,
        columnNumber: 27
      }, this),
      selectedImage && /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_jsx_dev_runtime9.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-6 mb-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "image-preview-container md:col-span-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(ImagePreview_default, { image: selectedImage, cropMode, cropRect, onCropStart: handleCropStart, onCropMove: handleCropMove, onCropEnd: handleCropEnd }, void 0, false, {
          fileName: "app/routes/gallery.tsx",
          lineNumber: 363,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/gallery.tsx",
          lineNumber: 362,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "md:col-span-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(ControlsCard_default, { image: selectedImage, onDimensionsChange: handleDimensionsChange }, void 0, false, {
            fileName: "app/routes/gallery.tsx",
            lineNumber: 368,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(ImageDetails_default, { originalImage: images[currentImageIndex], editedImage: selectedImage !== images[currentImageIndex] ? selectedImage : void 0 }, void 0, false, {
            fileName: "app/routes/gallery.tsx",
            lineNumber: 371,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/gallery.tsx",
          lineNumber: 367,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/gallery.tsx",
        lineNumber: 361,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/gallery.tsx",
        lineNumber: 359,
        columnNumber: 27
      }, this),
      images.length > 0 && !selectedImage && /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4", children: currentImages.map((image, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "relative cursor-pointer", onClick: () => handleImageSelect(image, indexOfFirstImage + index), children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("img", { src: image.url, alt: `Gallery image ${indexOfFirstImage + index + 1}`, className: "w-full h-64 object-cover rounded shadow-sm" }, void 0, false, {
        fileName: "app/routes/gallery.tsx",
        lineNumber: 379,
        columnNumber: 17
      }, this) }, index, false, {
        fileName: "app/routes/gallery.tsx",
        lineNumber: 378,
        columnNumber: 50
      }, this)) }, void 0, false, {
        fileName: "app/routes/gallery.tsx",
        lineNumber: 377,
        columnNumber: 49
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/gallery.tsx",
      lineNumber: 351,
      columnNumber: 7
    }, this),
    images.length === 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "mt-10 w-full bg-zinc-600 text-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "container mx-auto px-4 py-10 text-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { className: "text-xl mb-4", children: "Please add images \u{1F622}" }, void 0, false, {
        fileName: "app/routes/gallery.tsx",
        lineNumber: 387,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Link, { to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("button", { className: "px-4 py-2 bg-white text-zinc-800 rounded", children: "Go to Upload" }, void 0, false, {
        fileName: "app/routes/gallery.tsx",
        lineNumber: 389,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/gallery.tsx",
        lineNumber: 388,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/gallery.tsx",
      lineNumber: 386,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/gallery.tsx",
      lineNumber: 385,
      columnNumber: 31
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(ImageModal_default, { image: expandedImage, onClose: () => setExpandedImage(null) }, void 0, false, {
      fileName: "app/routes/gallery.tsx",
      lineNumber: 397,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/gallery.tsx",
    lineNumber: 346,
    columnNumber: 10
  }, this);
}
_s5(Gallery, "JMzqTfFa191seNgRcp/4hNPB7Kc=", false, function() {
  return [useNavigate];
});
_c9 = Gallery;
var _c9;
$RefreshReg$(_c9, "Gallery");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Gallery as default
};
//# sourceMappingURL=/build/routes/gallery-66OCORSH.js.map
