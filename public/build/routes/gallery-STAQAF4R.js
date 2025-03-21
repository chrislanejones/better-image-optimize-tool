import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  ThemeToggle,
  retrieveFileData
} from "/build/_shared/chunk-UW2A6EOQ.js";
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
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
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
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/gallery.tsx"
  );
  import.meta.hot.lastModified = "1742551783526.26";
}
function Gallery() {
  _s();
  const [images, setImages] = (0, import_react.useState)([]);
  const [selectedImage, setSelectedImage] = (0, import_react.useState)(null);
  const [currentImageIndex, setCurrentImageIndex] = (0, import_react.useState)(0);
  const [loadError, setLoadError] = (0, import_react.useState)(null);
  const navigate = useNavigate();
  (0, import_react.useEffect)(() => {
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-screen bg-background transition-colors", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { className: "border-b border-border", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "container mx-auto px-4 py-4 flex justify-between items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-xl font-bold text-foreground", children: "Photo Gallery" }, void 0, false, {
        fileName: "app/routes/gallery.tsx",
        lineNumber: 98,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ThemeToggle, {}, void 0, false, {
        fileName: "app/routes/gallery.tsx",
        lineNumber: 99,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/gallery.tsx",
      lineNumber: 97,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/gallery.tsx",
      lineNumber: 96,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "container mx-auto p-4 md:p-8", children: [
      loadError && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { className: "mb-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { className: "p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center text-amber-700 dark:text-amber-300", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-5 w-5 mr-2", viewBox: "0 0 20 20", fill: "currentColor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z", clipRule: "evenodd" }, void 0, false, {
          fileName: "app/routes/gallery.tsx",
          lineNumber: 109,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/routes/gallery.tsx",
          lineNumber: 108,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: loadError }, void 0, false, {
            fileName: "app/routes/gallery.tsx",
            lineNumber: 112,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm mt-1", children: "Redirecting to upload page..." }, void 0, false, {
            fileName: "app/routes/gallery.tsx",
            lineNumber: 113,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/gallery.tsx",
          lineNumber: 111,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/gallery.tsx",
        lineNumber: 107,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/gallery.tsx",
        lineNumber: 106,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/gallery.tsx",
        lineNumber: 105,
        columnNumber: 23
      }, this),
      images.length > 1 && selectedImage && !loadError && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { className: "mb-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { className: "p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { variant: "secondary", onClick: navigatePrevious, "aria-label": "Previous image", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-5 w-5 mr-1", viewBox: "0 0 20 20", fill: "currentColor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { fillRule: "evenodd", d: "M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z", clipRule: "evenodd" }, void 0, false, {
            fileName: "app/routes/gallery.tsx",
            lineNumber: 125,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/routes/gallery.tsx",
            lineNumber: 124,
            columnNumber: 19
          }, this),
          "Previous"
        ] }, void 0, true, {
          fileName: "app/routes/gallery.tsx",
          lineNumber: 123,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-sm text-muted-foreground", children: [
          "Image ",
          currentImageIndex + 1,
          " of ",
          images.length
        ] }, void 0, true, {
          fileName: "app/routes/gallery.tsx",
          lineNumber: 129,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { variant: "secondary", onClick: navigateNext, "aria-label": "Next image", children: [
          "Next",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-5 w-5 ml-1", viewBox: "0 0 20 20", fill: "currentColor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { fillRule: "evenodd", d: "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z", clipRule: "evenodd" }, void 0, false, {
            fileName: "app/routes/gallery.tsx",
            lineNumber: 135,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/routes/gallery.tsx",
            lineNumber: 134,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/gallery.tsx",
          lineNumber: 132,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/gallery.tsx",
        lineNumber: 122,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/gallery.tsx",
        lineNumber: 121,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/gallery.tsx",
        lineNumber: 120,
        columnNumber: 62
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { className: "mb-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardTitle, { children: "Thumbnail Gallery" }, void 0, false, {
          fileName: "app/routes/gallery.tsx",
          lineNumber: 145,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/gallery.tsx",
          lineNumber: 144,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-4 overflow-x-auto pb-2 px-1 min-h-24 items-center scrollbar-thin bg-slate-100 dark:bg-slate-800 rounded-md p-4", children: images.length > 0 ? images.map((image, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `flex-none w-20 h-20 rounded overflow-hidden cursor-pointer transition-all hover:-translate-y-1 ${selectedImage === image ? "ring-2 ring-primary shadow-md" : "ring-2 ring-transparent"}`, onClick: () => handleImageSelect(image, index), onKeyDown: (e) => {
          if (e.key === "Enter" || e.key === " ") {
            handleImageSelect(image, index);
          }
        }, tabIndex: 0, role: "button", "aria-label": `Select image ${image.name}`, "aria-selected": selectedImage === image, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: image.url, alt: image.name, className: "w-full h-full object-cover" }, void 0, false, {
          fileName: "app/routes/gallery.tsx",
          lineNumber: 154,
          columnNumber: 21
        }, this) }, index, false, {
          fileName: "app/routes/gallery.tsx",
          lineNumber: 149,
          columnNumber: 65
        }, this)) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full text-center text-muted-foreground py-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "No images uploaded" }, void 0, false, {
          fileName: "app/routes/gallery.tsx",
          lineNumber: 156,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/routes/gallery.tsx",
          lineNumber: 155,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/gallery.tsx",
          lineNumber: 148,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/gallery.tsx",
          lineNumber: 147,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/gallery.tsx",
        lineNumber: 143,
        columnNumber: 9
      }, this),
      selectedImage && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { className: "md:col-span-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardHeader, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardTitle, { children: "Image Preview" }, void 0, false, {
              fileName: "app/routes/gallery.tsx",
              lineNumber: 167,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardDescription, { className: "truncate", children: selectedImage.name }, void 0, false, {
              fileName: "app/routes/gallery.tsx",
              lineNumber: 168,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/gallery.tsx",
            lineNumber: 166,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-slate-100 dark:bg-slate-800 rounded-md flex items-center justify-center p-2 h-64 md:h-72 lg:h-96", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: selectedImage.url, alt: selectedImage.name, className: "max-w-full max-h-full object-contain" }, void 0, false, {
            fileName: "app/routes/gallery.tsx",
            lineNumber: 174,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/gallery.tsx",
            lineNumber: 173,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/gallery.tsx",
            lineNumber: 172,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/gallery.tsx",
          lineNumber: 165,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardTitle, { children: "Image Details" }, void 0, false, {
            fileName: "app/routes/gallery.tsx",
            lineNumber: 182,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/gallery.tsx",
            lineNumber: 181,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { className: "space-y-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-sm font-medium text-muted-foreground mb-1", children: "File name" }, void 0, false, {
                fileName: "app/routes/gallery.tsx",
                lineNumber: 186,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "break-words", children: selectedImage.name }, void 0, false, {
                fileName: "app/routes/gallery.tsx",
                lineNumber: 189,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/gallery.tsx",
              lineNumber: 185,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-sm font-medium text-muted-foreground mb-1", children: "Type" }, void 0, false, {
                fileName: "app/routes/gallery.tsx",
                lineNumber: 192,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: selectedImage.type }, void 0, false, {
                fileName: "app/routes/gallery.tsx",
                lineNumber: 195,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/gallery.tsx",
              lineNumber: 191,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-sm font-medium text-muted-foreground mb-1", children: "Size" }, void 0, false, {
                fileName: "app/routes/gallery.tsx",
                lineNumber: 198,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
                Math.round(selectedImage.size / 1024),
                " KB"
              ] }, void 0, true, {
                fileName: "app/routes/gallery.tsx",
                lineNumber: 201,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/gallery.tsx",
              lineNumber: 197,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/gallery.tsx",
            lineNumber: 184,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardFooter, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { variant: "primary", onClick: downloadImage, className: "flex items-center gap-2 w-full", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-5 w-5", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" }, void 0, false, {
              fileName: "app/routes/gallery.tsx",
              lineNumber: 207,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/routes/gallery.tsx",
              lineNumber: 206,
              columnNumber: 19
            }, this),
            "Download"
          ] }, void 0, true, {
            fileName: "app/routes/gallery.tsx",
            lineNumber: 205,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/gallery.tsx",
            lineNumber: 204,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/gallery.tsx",
          lineNumber: 180,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/gallery.tsx",
        lineNumber: 163,
        columnNumber: 27
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { className: "p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-wrap gap-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { variant: "secondary", asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/", children: "Back to Upload" }, void 0, false, {
          fileName: "app/routes/gallery.tsx",
          lineNumber: 220,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/gallery.tsx",
          lineNumber: 219,
          columnNumber: 15
        }, this),
        images.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { variant: "outline", onClick: () => {
          sessionStorage.removeItem("uploadedImages");
          setImages([]);
          setSelectedImage(null);
        }, children: "Clear All" }, void 0, false, {
          fileName: "app/routes/gallery.tsx",
          lineNumber: 224,
          columnNumber: 37
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/gallery.tsx",
        lineNumber: 218,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/gallery.tsx",
        lineNumber: 217,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/gallery.tsx",
        lineNumber: 216,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/gallery.tsx",
      lineNumber: 103,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("footer", { className: "border-t border-border py-6 mt-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "container mx-auto px-4 text-center text-muted-foreground text-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
      "\xA9 ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " Photo Gallery. All rights reserved."
    ] }, void 0, true, {
      fileName: "app/routes/gallery.tsx",
      lineNumber: 239,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/gallery.tsx",
      lineNumber: 238,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/gallery.tsx",
      lineNumber: 237,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/gallery.tsx",
    lineNumber: 94,
    columnNumber: 10
  }, this);
}
_s(Gallery, "lj/xbhubuWaiLv/Afp2v41xa5q8=", false, function() {
  return [useNavigate];
});
_c = Gallery;
var _c;
$RefreshReg$(_c, "Gallery");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Gallery as default
};
//# sourceMappingURL=/build/routes/gallery-STAQAF4R.js.map
