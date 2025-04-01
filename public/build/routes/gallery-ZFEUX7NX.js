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
  Image as Image2,
  Maximize,
  Ratio,
  RotateCcw,
  Save,
  Square,
  ThemeToggle,
  User,
  X,
  clearAllImagesFromStorage,
  createEditedFileData,
  cropImage,
  downloadImage,
  processImage,
  resizeImage,
  retrieveFileData,
  updateImagesInStorage
} from "/build/_shared/chunk-GFFFLBLB.js";
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
  import.meta.hot.lastModified = "1743478869225.0815";
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
  totalImages,
  currentPage,
  totalPages,
  onChangePage
}) => {
  _s();
  const [hoverIndex, setHoverIndex] = (0, import_react.useState)(null);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { className: "mb-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardHeader, { className: "px-6 py-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-3 items-center w-full", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center gap-2 justify-self-start", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { variant: "secondary", size: "sm", asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowLeftToLine, { className: "mr-1 h-4 w-4" }, void 0, false, {
            fileName: "app/components/gallery/ThumbnailGallery.tsx",
            lineNumber: 54,
            columnNumber: 19
          }, this),
          "Back to Upload"
        ] }, void 0, true, {
          fileName: "app/components/gallery/ThumbnailGallery.tsx",
          lineNumber: 53,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/components/gallery/ThumbnailGallery.tsx",
          lineNumber: 52,
          columnNumber: 15
        }, this),
        images.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { variant: "destructive", size: "sm", onClick: onClearAll, children: "Clear All" }, void 0, false, {
          fileName: "app/components/gallery/ThumbnailGallery.tsx",
          lineNumber: 59,
          columnNumber: 36
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-sm text-zinc-500 flex items-center ml-2", children: "Please add images \u{1F622}" }, void 0, false, {
          fileName: "app/components/gallery/ThumbnailGallery.tsx",
          lineNumber: 61,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/gallery/ThumbnailGallery.tsx",
        lineNumber: 51,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "justify-self-center flex items-center", children: selectedImage && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { variant: "outline", size: "sm", onClick: () => onSelectImage(images[0], 0), "aria-label": "First image", disabled: currentIndex === 0 || images.length === 0, className: "mr-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronsLeft, { className: "h-4 w-4" }, void 0, false, {
          fileName: "app/components/gallery/ThumbnailGallery.tsx",
          lineNumber: 70,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "app/components/gallery/ThumbnailGallery.tsx",
          lineNumber: 69,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { variant: "outline", size: "sm", onClick: onPrevious, "aria-label": "Previous image", disabled: currentIndex === 0 || images.length === 0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronLeft, { className: "h-4 w-4" }, void 0, false, {
          fileName: "app/components/gallery/ThumbnailGallery.tsx",
          lineNumber: 74,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "app/components/gallery/ThumbnailGallery.tsx",
          lineNumber: 73,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-sm text-muted-foreground px-3", children: [
          "Image ",
          currentIndex + 1,
          " of ",
          totalImages
        ] }, void 0, true, {
          fileName: "app/components/gallery/ThumbnailGallery.tsx",
          lineNumber: 77,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { variant: "outline", size: "sm", onClick: onNext, "aria-label": "Next image", disabled: currentIndex === totalImages - 1 || images.length === 0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronRight, { className: "h-4 w-4" }, void 0, false, {
          fileName: "app/components/gallery/ThumbnailGallery.tsx",
          lineNumber: 82,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "app/components/gallery/ThumbnailGallery.tsx",
          lineNumber: 81,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { variant: "outline", size: "sm", onClick: () => onSelectImage(images[totalImages - 1], totalImages - 1), "aria-label": "Last image", disabled: currentIndex === totalImages - 1 || images.length === 0, className: "ml-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronsRight, { className: "h-4 w-4" }, void 0, false, {
          fileName: "app/components/gallery/ThumbnailGallery.tsx",
          lineNumber: 86,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "app/components/gallery/ThumbnailGallery.tsx",
          lineNumber: 85,
          columnNumber: 19
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/gallery/ThumbnailGallery.tsx",
        lineNumber: 68,
        columnNumber: 33
      }, this) }, void 0, false, {
        fileName: "app/components/gallery/ThumbnailGallery.tsx",
        lineNumber: 67,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center gap-2 justify-self-end", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ThemeToggle, {}, void 0, false, {
          fileName: "app/components/gallery/ThumbnailGallery.tsx",
          lineNumber: 93,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { variant: "secondary", size: "sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(User, { size: 18 }, void 0, false, {
          fileName: "app/components/gallery/ThumbnailGallery.tsx",
          lineNumber: 95,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/components/gallery/ThumbnailGallery.tsx",
          lineNumber: 94,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/gallery/ThumbnailGallery.tsx",
        lineNumber: 92,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/gallery/ThumbnailGallery.tsx",
      lineNumber: 49,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/gallery/ThumbnailGallery.tsx",
      lineNumber: 48,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-4 overflow-x-auto p-4 min-h-24 items-center scrollbar-thin well rounded-md", children: images.length > 0 ? images.map((image, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `relative flex-none w-20 h-20 rounded cursor-pointer transition-all hover:-translate-y-1 ${selectedImage === image ? "ring-2 ring-primary shadow-md" : "ring-2 ring-transparent"}`, onClick: () => onSelectImage(image, index), onMouseEnter: () => setHoverIndex(index), onMouseLeave: () => setHoverIndex(null), onKeyDown: (e) => {
      if (e.key === "Enter" || e.key === " ") {
        onSelectImage(image, index);
      }
    }, tabIndex: 0, role: "button", "aria-label": `Select image ${image.name}`, "aria-selected": selectedImage === image, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: image.url, alt: image.name, className: "w-full h-full object-cover rounded" }, void 0, false, {
        fileName: "app/components/gallery/ThumbnailGallery.tsx",
        lineNumber: 108,
        columnNumber: 19
      }, this),
      hoverIndex === index && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "absolute top-0 left-0 p-1 bg-black/50 text-white rounded-br", onClick: (e) => {
          e.stopPropagation();
          onExpandImage(image);
        }, "aria-label": "Expand image", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Maximize, { className: "h-4 w-4" }, void 0, false, {
          fileName: "app/components/gallery/ThumbnailGallery.tsx",
          lineNumber: 117,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/components/gallery/ThumbnailGallery.tsx",
          lineNumber: 113,
          columnNumber: 23
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "absolute top-0 right-0 p-1 bg-black/50 text-white rounded-bl", onClick: (e) => {
          e.stopPropagation();
          onRemoveImage(index);
        }, "aria-label": "Remove image", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(X, { className: "h-4 w-4" }, void 0, false, {
          fileName: "app/components/gallery/ThumbnailGallery.tsx",
          lineNumber: 125,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/components/gallery/ThumbnailGallery.tsx",
          lineNumber: 121,
          columnNumber: 23
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/gallery/ThumbnailGallery.tsx",
        lineNumber: 111,
        columnNumber: 44
      }, this)
    ] }, index, true, {
      fileName: "app/components/gallery/ThumbnailGallery.tsx",
      lineNumber: 103,
      columnNumber: 63
    }, this)) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full text-center text-muted-foreground py-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "No images uploaded" }, void 0, false, {
      fileName: "app/components/gallery/ThumbnailGallery.tsx",
      lineNumber: 129,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/components/gallery/ThumbnailGallery.tsx",
      lineNumber: 128,
      columnNumber: 27
    }, this) }, void 0, false, {
      fileName: "app/components/gallery/ThumbnailGallery.tsx",
      lineNumber: 102,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/gallery/ThumbnailGallery.tsx",
      lineNumber: 101,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/gallery/ThumbnailGallery.tsx",
    lineNumber: 47,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/gallery/ThumbnailGallery.tsx",
    lineNumber: 46,
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

// app/components/gallery/ImageModal.tsx
var import_react4 = __toESM(require_react(), 1);
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 backdrop-blur-sm", onClick: onClose, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "relative max-w-[90vw] max-h-[90vh] overflow-hidden", onClick: (e) => e.stopPropagation(), children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("button", { className: "absolute top-2 right-2 z-10 bg-black/50 text-white p-2 rounded-full", onClick: onClose, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("line", { x1: "18", y1: "6", x2: "6", y2: "18" }, void 0, false, {
        fileName: "app/components/gallery/ImageModal.tsx",
        lineNumber: 51,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("line", { x1: "6", y1: "6", x2: "18", y2: "18" }, void 0, false, {
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: image.url, alt: image.name, className: "max-w-full max-h-[90vh] object-contain" }, void 0, false, {
      fileName: "app/components/gallery/ImageModal.tsx",
      lineNumber: 57,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4 text-sm", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "font-medium", children: image.name }, void 0, false, {
        fileName: "app/components/gallery/ImageModal.tsx",
        lineNumber: 61,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "opacity-80 text-xs", children: [
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
_c3 = ImageModal;
var ImageModal_default = ImageModal;
var _c3;
$RefreshReg$(_c3, "ImageModal");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/gallery/ControlsCard.tsx
var import_react5 = __toESM(require_react(), 1);

// app/components/ui/SimpleSelect.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: `relative inline-block ${className}`, children: [
    label && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("label", { htmlFor: "select", className: "block mb-1 text-sm font-medium", children: label }, void 0, false, {
      fileName: "app/components/ui/SimpleSelect.tsx",
      lineNumber: 37,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "relative", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("select", { id: "select", value, onChange: (e) => onChange(e.target.value), disabled, className: "block w-full h-9 appearance-none rounded-md border border-slate-200 bg-white px-3 py-2 text-sm pr-8 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:focus:ring-slate-300", children: [
        !selectedOption && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("option", { value: "", disabled: true, children: placeholder }, void 0, false, {
          fileName: "app/components/ui/SimpleSelect.tsx",
          lineNumber: 42,
          columnNumber: 31
        }, this),
        options.map((option) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("option", { value: option.value, children: option.label }, option.value, false, {
          fileName: "app/components/ui/SimpleSelect.tsx",
          lineNumber: 45,
          columnNumber: 34
        }, this))
      ] }, void 0, true, {
        fileName: "app/components/ui/SimpleSelect.tsx",
        lineNumber: 41,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(ChevronDown, { className: "pointer-events-none absolute right-2.5 top-2.5 h-4 w-4 opacity-50" }, void 0, false, {
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
_c4 = SimpleSelect;
var SimpleSelect_default = SimpleSelect;
var _c4;
$RefreshReg$(_c4, "SimpleSelect");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/gallery/ControlsCard.tsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime(), 1);
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
  import.meta.hot.lastModified = "1743478821885.0818";
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
  const handleDownload = () => {
    if (image) {
      downloadImage(image);
    }
  };
  const handleCompressionChange = (e) => {
    onCompressionChange(Number(e.target.value));
  };
  const handleFormatChange = (format) => {
    onFormatChange(format);
  };
  const handleResetAll = () => {
    setWidth(originalWidth);
    setHeight(originalHeight);
    setIsResizing(false);
    onCancelChanges();
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(CardWithBorderTitle, { title: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "text-lg font-medium", children: "Image Controls" }, void 0, false, {
    fileName: "app/components/gallery/ControlsCard.tsx",
    lineNumber: 145,
    columnNumber: 38
  }, this), cardClassName: "bg-card", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "space-y-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex flex-wrap gap-2 justify-between", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Button, { variant: cropMode ? "primary" : "secondary", size: "sm", onClick: onToggleCrop, className: "flex items-center gap-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Crop, { size: 16 }, void 0, false, {
            fileName: "app/components/gallery/ControlsCard.tsx",
            lineNumber: 151,
            columnNumber: 15
          }, this),
          cropMode ? "Cancel Crop" : "Crop"
        ] }, void 0, true, {
          fileName: "app/components/gallery/ControlsCard.tsx",
          lineNumber: 150,
          columnNumber: 13
        }, this),
        cropMode && hasCropSelection && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Button, { variant: "primary", size: "sm", onClick: onApplyCrop, className: "flex items-center gap-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Check, { size: 16 }, void 0, false, {
            fileName: "app/components/gallery/ControlsCard.tsx",
            lineNumber: 156,
            columnNumber: 17
          }, this),
          "Apply Crop"
        ] }, void 0, true, {
          fileName: "app/components/gallery/ControlsCard.tsx",
          lineNumber: 155,
          columnNumber: 46
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/gallery/ControlsCard.tsx",
        lineNumber: 149,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Button, { variant: "secondary", size: "sm", onClick: handleDownload, className: "flex items-center gap-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Download, { size: 16 }, void 0, false, {
          fileName: "app/components/gallery/ControlsCard.tsx",
          lineNumber: 162,
          columnNumber: 13
        }, this),
        "Download"
      ] }, void 0, true, {
        fileName: "app/components/gallery/ControlsCard.tsx",
        lineNumber: 161,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/gallery/ControlsCard.tsx",
      lineNumber: 148,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h3", { className: "text-sm font-medium mb-3", children: "Dimensions" }, void 0, false, {
        fileName: "app/components/gallery/ControlsCard.tsx",
        lineNumber: 169,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "space-y-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "space-y-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("label", { className: "text-xs", children: [
              "Width: ",
              width,
              "px"
            ] }, void 0, true, {
              fileName: "app/components/gallery/ControlsCard.tsx",
              lineNumber: 174,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "text-xs text-muted-foreground", children: [
              "Original: ",
              originalWidth,
              "px"
            ] }, void 0, true, {
              fileName: "app/components/gallery/ControlsCard.tsx",
              lineNumber: 175,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/gallery/ControlsCard.tsx",
            lineNumber: 173,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("input", { type: "range", min: 50, max: originalWidth * 2, value: width, onChange: handleWidthChange, className: "w-full" }, void 0, false, {
            fileName: "app/components/gallery/ControlsCard.tsx",
            lineNumber: 179,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/gallery/ControlsCard.tsx",
          lineNumber: 172,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "space-y-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("label", { className: "text-xs", children: [
              "Height: ",
              height,
              "px"
            ] }, void 0, true, {
              fileName: "app/components/gallery/ControlsCard.tsx",
              lineNumber: 185,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "text-xs text-muted-foreground", children: [
              "Original: ",
              originalHeight,
              "px"
            ] }, void 0, true, {
              fileName: "app/components/gallery/ControlsCard.tsx",
              lineNumber: 186,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/gallery/ControlsCard.tsx",
            lineNumber: 184,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("input", { type: "range", min: 50, max: originalHeight * 2, value: height, onChange: handleHeightChange, className: "w-full" }, void 0, false, {
            fileName: "app/components/gallery/ControlsCard.tsx",
            lineNumber: 190,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/gallery/ControlsCard.tsx",
          lineNumber: 183,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex flex-wrap gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Button, { onClick: toggleAspectRatio, variant: maintainAspectRatio ? "primary" : "secondary", size: "sm", title: maintainAspectRatio ? "Aspect ratio locked" : "Aspect ratio unlocked", className: "flex items-center gap-1.5", children: maintainAspectRatio ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_jsx_dev_runtime5.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Ratio, { size: 14 }, void 0, false, {
              fileName: "app/components/gallery/ControlsCard.tsx",
              lineNumber: 196,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { children: "Aspect Ratio Locked" }, void 0, false, {
              fileName: "app/components/gallery/ControlsCard.tsx",
              lineNumber: 197,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/gallery/ControlsCard.tsx",
            lineNumber: 195,
            columnNumber: 40
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_jsx_dev_runtime5.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Square, { size: 14 }, void 0, false, {
              fileName: "app/components/gallery/ControlsCard.tsx",
              lineNumber: 199,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { children: "Aspect Ratio Unlocked" }, void 0, false, {
              fileName: "app/components/gallery/ControlsCard.tsx",
              lineNumber: 200,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/gallery/ControlsCard.tsx",
            lineNumber: 198,
            columnNumber: 25
          }, this) }, void 0, false, {
            fileName: "app/components/gallery/ControlsCard.tsx",
            lineNumber: 194,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Button, { onClick: resetDimensions, variant: "secondary", size: "sm", title: "Reset to original dimensions", className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(RotateCcw, { size: 14 }, void 0, false, {
              fileName: "app/components/gallery/ControlsCard.tsx",
              lineNumber: 205,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { children: "Reset Dimensions" }, void 0, false, {
              fileName: "app/components/gallery/ControlsCard.tsx",
              lineNumber: 206,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/gallery/ControlsCard.tsx",
            lineNumber: 204,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/gallery/ControlsCard.tsx",
          lineNumber: 193,
          columnNumber: 13
        }, this),
        isResizing && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Button, { variant: "primary", size: "sm", onClick: applyDimensionsChange, className: "w-full mt-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Save, { size: 14, className: "mr-1" }, void 0, false, {
            fileName: "app/components/gallery/ControlsCard.tsx",
            lineNumber: 211,
            columnNumber: 17
          }, this),
          "Apply Dimensions"
        ] }, void 0, true, {
          fileName: "app/components/gallery/ControlsCard.tsx",
          lineNumber: 210,
          columnNumber: 28
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/gallery/ControlsCard.tsx",
        lineNumber: 170,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/gallery/ControlsCard.tsx",
      lineNumber: 168,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("hr", { className: "border-slate-200 dark:border-slate-700" }, void 0, false, {
      fileName: "app/components/gallery/ControlsCard.tsx",
      lineNumber: 218,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h3", { className: "text-sm font-medium mb-3", children: "Format & Quality" }, void 0, false, {
        fileName: "app/components/gallery/ControlsCard.tsx",
        lineNumber: 222,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "space-y-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "text-sm font-medium", children: "Format:" }, void 0, false, {
            fileName: "app/components/gallery/ControlsCard.tsx",
            lineNumber: 226,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(SimpleSelect_default, { options: formatOptions, value: formatOption, onChange: handleFormatChange, className: "w-28" }, void 0, false, {
            fileName: "app/components/gallery/ControlsCard.tsx",
            lineNumber: 227,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/gallery/ControlsCard.tsx",
          lineNumber: 225,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "space-y-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("label", { className: "text-xs", children: [
              "Quality: ",
              compressionLevel,
              "%"
            ] }, void 0, true, {
              fileName: "app/components/gallery/ControlsCard.tsx",
              lineNumber: 233,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "text-xs text-muted-foreground", children: "Higher = Better Quality" }, void 0, false, {
              fileName: "app/components/gallery/ControlsCard.tsx",
              lineNumber: 234,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/gallery/ControlsCard.tsx",
            lineNumber: 232,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("input", { type: "range", min: "10", max: "100", value: compressionLevel, onChange: handleCompressionChange, className: "w-full" }, void 0, false, {
            fileName: "app/components/gallery/ControlsCard.tsx",
            lineNumber: 238,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/gallery/ControlsCard.tsx",
          lineNumber: 231,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/gallery/ControlsCard.tsx",
        lineNumber: 224,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/gallery/ControlsCard.tsx",
      lineNumber: 221,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("hr", { className: "border-slate-200 dark:border-slate-700" }, void 0, false, {
      fileName: "app/components/gallery/ControlsCard.tsx",
      lineNumber: 244,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex justify-between", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Button, { variant: "outline", size: "sm", onClick: handleResetAll, className: "flex items-center gap-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(RotateCcw, { size: 16 }, void 0, false, {
          fileName: "app/components/gallery/ControlsCard.tsx",
          lineNumber: 249,
          columnNumber: 13
        }, this),
        "Reset All"
      ] }, void 0, true, {
        fileName: "app/components/gallery/ControlsCard.tsx",
        lineNumber: 248,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Button, { variant: "primary", size: "sm", onClick: onApplyChanges, disabled: cropMode, className: "flex items-center gap-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Check, { size: 16 }, void 0, false, {
          fileName: "app/components/gallery/ControlsCard.tsx",
          lineNumber: 254,
          columnNumber: 13
        }, this),
        "Apply Changes"
      ] }, void 0, true, {
        fileName: "app/components/gallery/ControlsCard.tsx",
        lineNumber: 253,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/gallery/ControlsCard.tsx",
      lineNumber: 247,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "mt-4 text-xs text-muted-foreground", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Image2, { size: 12, className: "inline mr-1" }, void 0, false, {
          fileName: "app/components/gallery/ControlsCard.tsx",
          lineNumber: 262,
          columnNumber: 13
        }, this),
        image.name,
        " (",
        (image.size / 1024).toFixed(1),
        " KB)"
      ] }, void 0, true, {
        fileName: "app/components/gallery/ControlsCard.tsx",
        lineNumber: 261,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "mt-1", children: [
        width && height ? `${width} \xD7 ${height}px` : "",
        " \u2022",
        " ",
        image.type.split("/")[1].toUpperCase()
      ] }, void 0, true, {
        fileName: "app/components/gallery/ControlsCard.tsx",
        lineNumber: 265,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/gallery/ControlsCard.tsx",
      lineNumber: 260,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/gallery/ControlsCard.tsx",
    lineNumber: 146,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/gallery/ControlsCard.tsx",
    lineNumber: 145,
    columnNumber: 10
  }, this);
};
_s4(ControlsCard, "xUJEjKW7Y6s6qrIL0zPIEH+vz1Y=");
_c5 = ControlsCard;
var ControlsCard_default = ControlsCard;
var _c5;
$RefreshReg$(_c5, "ControlsCard");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/gallery.tsx
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime(), 1);
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
  import.meta.hot.lastModified = "1743477369985.0837";
}
function Gallery() {
  _s5();
  const [images, setImages] = (0, import_react6.useState)([]);
  const [selectedImage, setSelectedImage] = (0, import_react6.useState)(null);
  const [currentImageIndex, setCurrentImageIndex] = (0, import_react6.useState)(0);
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
    const storedImages = retrieveFileData();
    if (storedImages && storedImages.length > 0) {
      setImages(storedImages);
      setSelectedImage(storedImages[0]);
      setCurrentImageIndex(0);
    } else if (storedImages && storedImages.length === 0) {
      setImages([]);
      setSelectedImage(null);
    } else {
      const timer = setTimeout(() => {
        navigate("/");
      }, 1e3);
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
  const clearAllImages = () => {
    clearAllImagesFromStorage();
    setImages([]);
    setSelectedImage(null);
  };
  const removeImage = (index) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
    updateImagesInStorage(newImages);
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
  const applyCrop = async () => {
    if (!cropRect || !imageElementRef.current || !selectedImage)
      return;
    const previewContainer = document.querySelector(".image-preview-container");
    if (!previewContainer)
      return;
    try {
      const editedBlob = await cropImage(imageElementRef.current, cropRect, formatOption, compressionLevel, previewContainer);
      saveEditedImage(editedBlob);
      setCropMode(false);
      setCropRect(null);
    } catch (error) {
      console.error("Error applying crop:", error);
    }
  };
  const applyChanges = async () => {
    if (!imageElementRef.current || !selectedImage)
      return;
    try {
      const editedBlob = await processImage(imageElementRef.current, formatOption, compressionLevel);
      saveEditedImage(editedBlob);
    } catch (error) {
      console.error("Error applying changes:", error);
    }
  };
  const handleDimensionsChange = async (width, height, maintainAspectRatio) => {
    if (!imageElementRef.current || !selectedImage)
      return;
    try {
      const editedBlob = await resizeImage(imageElementRef.current, width, height, formatOption, compressionLevel);
      saveEditedImage(editedBlob);
    } catch (error) {
      console.error("Error resizing image:", error);
    }
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
    const newImage = createEditedFileData(selectedImage, editedBlob, formatOption);
    const newImages = [...images];
    newImages[currentImageIndex] = newImage;
    setImages(newImages);
    setSelectedImage(newImage);
    updateImagesInStorage(newImages);
    const img = new Image();
    img.onload = () => {
      imageElementRef.current = img;
    };
    img.src = newImage.url;
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "bg-background transition-colors", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "container mx-auto p-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(ThumbnailGallery_default, { images, selectedImage, onSelectImage: handleImageSelect, onRemoveImage: removeImage, onExpandImage: expandImage, onClearAll: clearAllImages, onNext: navigateNext, onPrevious: navigatePrevious, currentIndex: currentImageIndex, totalImages: images.length, onChangePage: paginate, currentPage, totalPages }, void 0, false, {
        fileName: "app/routes/gallery.tsx",
        lineNumber: 259,
        columnNumber: 9
      }, this),
      selectedImage && /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-6 mb-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "image-preview-container md:col-span-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(ImagePreview_default, { image: selectedImage, cropMode, cropRect, onCropStart: handleCropStart, onCropMove: handleCropMove, onCropEnd: handleCropEnd }, void 0, false, {
          fileName: "app/routes/gallery.tsx",
          lineNumber: 265,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/gallery.tsx",
          lineNumber: 264,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "md:col-span-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(ControlsCard_default, { image: selectedImage, cropMode, formatOption, compressionLevel, onToggleCrop: toggleCropMode, onFormatChange: setFormatOption, onCompressionChange: setCompressionLevel, onDimensionsChange: handleDimensionsChange, onApplyChanges: applyChanges, onCancelChanges: cancelChanges, hasCropSelection: cropRect !== null, onApplyCrop: applyCrop }, void 0, false, {
          fileName: "app/routes/gallery.tsx",
          lineNumber: 270,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/gallery.tsx",
          lineNumber: 269,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/gallery.tsx",
        lineNumber: 262,
        columnNumber: 27
      }, this),
      images.length > 0 && !selectedImage && /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4", children: currentImages.map((image, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "relative cursor-pointer bg-card rounded overflow-hidden", onClick: () => handleImageSelect(image, indexOfFirstImage + index), children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("img", { src: image.url, alt: `Gallery image ${indexOfFirstImage + index + 1}`, className: "w-full h-64 object-cover rounded shadow-sm" }, void 0, false, {
        fileName: "app/routes/gallery.tsx",
        lineNumber: 277,
        columnNumber: 17
      }, this) }, index, false, {
        fileName: "app/routes/gallery.tsx",
        lineNumber: 276,
        columnNumber: 50
      }, this)) }, void 0, false, {
        fileName: "app/routes/gallery.tsx",
        lineNumber: 275,
        columnNumber: 49
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/gallery.tsx",
      lineNumber: 257,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(ImageModal_default, { image: expandedImage, onClose: () => setExpandedImage(null) }, void 0, false, {
      fileName: "app/routes/gallery.tsx",
      lineNumber: 283,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/gallery.tsx",
    lineNumber: 255,
    columnNumber: 10
  }, this);
}
_s5(Gallery, "tq4B1b4RWzvQGfXxJ6NXQ9Uio/4=", false, function() {
  return [useNavigate];
});
_c6 = Gallery;
var _c6;
$RefreshReg$(_c6, "Gallery");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Gallery as default
};
//# sourceMappingURL=/build/routes/gallery-ZFEUX7NX.js.map
