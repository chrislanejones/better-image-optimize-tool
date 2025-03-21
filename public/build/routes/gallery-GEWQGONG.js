import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "/build/_shared/chunk-4RNKU4Z5.js";
import {
  Button
} from "/build/_shared/chunk-4VECYXKD.js";
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
  import.meta.hot.lastModified = "1742548752030.279";
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
    const storedImages = sessionStorage.getItem("uploadedImages");
    if (storedImages) {
      try {
        const parsedImages = JSON.parse(storedImages);
        console.log(`Found ${parsedImages.length} images in storage`);
        if (parsedImages.length === 0) {
          setLoadError("No images were found. Please upload some images first.");
          return;
        }
        setImages(parsedImages);
        if (parsedImages.length > 0) {
          setSelectedImage(parsedImages[0]);
          setCurrentImageIndex(0);
        }
      } catch (error) {
        console.error("Error parsing stored images:", error);
        setLoadError("There was an error loading your images. Please try uploading them again.");
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-4xl mx-auto p-4 md:p-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { className: "w-full", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardTitle, { className: "text-center", children: "Photo Gallery" }, void 0, false, {
      fileName: "app/routes/gallery.tsx",
      lineNumber: 102,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/gallery.tsx",
      lineNumber: 101,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { children: [
      loadError && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-6 p-4 bg-amber-50 border border-amber-200 text-amber-700 rounded-md", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-5 w-5 mr-2", viewBox: "0 0 20 20", fill: "currentColor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z", clipRule: "evenodd" }, void 0, false, {
          fileName: "app/routes/gallery.tsx",
          lineNumber: 110,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/routes/gallery.tsx",
          lineNumber: 109,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: loadError }, void 0, false, {
            fileName: "app/routes/gallery.tsx",
            lineNumber: 113,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm mt-1", children: "Redirecting to upload page..." }, void 0, false, {
            fileName: "app/routes/gallery.tsx",
            lineNumber: 114,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/gallery.tsx",
          lineNumber: 112,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/gallery.tsx",
        lineNumber: 108,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/gallery.tsx",
        lineNumber: 107,
        columnNumber: 25
      }, this),
      images.length > 1 && selectedImage && !loadError && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between items-center mb-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { variant: "secondary", onClick: navigatePrevious, "aria-label": "Previous image", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-5 w-5", viewBox: "0 0 20 20", fill: "currentColor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { fillRule: "evenodd", d: "M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z", clipRule: "evenodd" }, void 0, false, {
            fileName: "app/routes/gallery.tsx",
            lineNumber: 123,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/gallery.tsx",
            lineNumber: 122,
            columnNumber: 17
          }, this),
          "Previous"
        ] }, void 0, true, {
          fileName: "app/routes/gallery.tsx",
          lineNumber: 121,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-sm text-slate-500", children: [
          "Image ",
          currentImageIndex + 1,
          " of ",
          images.length
        ] }, void 0, true, {
          fileName: "app/routes/gallery.tsx",
          lineNumber: 127,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { variant: "secondary", onClick: navigateNext, "aria-label": "Next image", children: [
          "Next",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-5 w-5", viewBox: "0 0 20 20", fill: "currentColor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { fillRule: "evenodd", d: "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z", clipRule: "evenodd" }, void 0, false, {
            fileName: "app/routes/gallery.tsx",
            lineNumber: 133,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/gallery.tsx",
            lineNumber: 132,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/gallery.tsx",
          lineNumber: 130,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/gallery.tsx",
        lineNumber: 120,
        columnNumber: 64
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-4 overflow-x-auto p-4 bg-slate-100 rounded-lg mb-6 min-h-24 items-center scrollbar-thin", children: images.length > 0 ? images.map((image, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `flex-none w-20 h-20 rounded overflow-hidden cursor-pointer transition-all hover:-translate-y-1 ${selectedImage === image ? "border-2 border-blue-600 shadow-md" : "border-2 border-transparent"}`, onClick: () => handleImageSelect(image, index), onKeyDown: (e) => {
        if (e.key === "Enter" || e.key === " ") {
          handleImageSelect(image, index);
        }
      }, tabIndex: 0, role: "button", "aria-label": `Select image ${image.name}`, "aria-selected": selectedImage === image, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: image.url, alt: image.name, className: "w-full h-full object-cover" }, void 0, false, {
        fileName: "app/routes/gallery.tsx",
        lineNumber: 145,
        columnNumber: 19
      }, this) }, index, false, {
        fileName: "app/routes/gallery.tsx",
        lineNumber: 140,
        columnNumber: 63
      }, this)) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full text-center text-slate-500", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "No images uploaded" }, void 0, false, {
        fileName: "app/routes/gallery.tsx",
        lineNumber: 147,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/routes/gallery.tsx",
        lineNumber: 146,
        columnNumber: 27
      }, this) }, void 0, false, {
        fileName: "app/routes/gallery.tsx",
        lineNumber: 139,
        columnNumber: 11
      }, this),
      selectedImage && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col md:flex-row gap-8 mb-8", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-72 h-auto mx-auto md:mx-0", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-64 w-full overflow-hidden bg-slate-100 mb-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: selectedImage.url, alt: selectedImage.name, className: "w-full h-full object-contain" }, void 0, false, {
            fileName: "app/routes/gallery.tsx",
            lineNumber: 155,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/gallery.tsx",
            lineNumber: 154,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-slate-600 truncate", children: selectedImage.name }, void 0, false, {
            fileName: "app/routes/gallery.tsx",
            lineNumber: 158,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/gallery.tsx",
            lineNumber: 157,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/gallery.tsx",
          lineNumber: 153,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1 bg-slate-50 p-6 rounded-lg border border-slate-200", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-medium text-slate-800 mb-4", children: "Image Details" }, void 0, false, {
            fileName: "app/routes/gallery.tsx",
            lineNumber: 164,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "my-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-medium", children: "File name:" }, void 0, false, {
              fileName: "app/routes/gallery.tsx",
              lineNumber: 168,
              columnNumber: 19
            }, this),
            " ",
            selectedImage.name
          ] }, void 0, true, {
            fileName: "app/routes/gallery.tsx",
            lineNumber: 167,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "my-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-medium", children: "Type:" }, void 0, false, {
              fileName: "app/routes/gallery.tsx",
              lineNumber: 172,
              columnNumber: 19
            }, this),
            " ",
            selectedImage.type
          ] }, void 0, true, {
            fileName: "app/routes/gallery.tsx",
            lineNumber: 171,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "my-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-medium", children: "Size:" }, void 0, false, {
              fileName: "app/routes/gallery.tsx",
              lineNumber: 176,
              columnNumber: 19
            }, this),
            " ",
            Math.round(selectedImage.size / 1024),
            " KB"
          ] }, void 0, true, {
            fileName: "app/routes/gallery.tsx",
            lineNumber: 175,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-6 flex gap-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { variant: "primary", onClick: downloadImage, className: "flex items-center gap-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-5 w-5", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" }, void 0, false, {
              fileName: "app/routes/gallery.tsx",
              lineNumber: 183,
              columnNumber: 23
            }, this) }, void 0, false, {
              fileName: "app/routes/gallery.tsx",
              lineNumber: 182,
              columnNumber: 21
            }, this),
            "Download"
          ] }, void 0, true, {
            fileName: "app/routes/gallery.tsx",
            lineNumber: 181,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/gallery.tsx",
            lineNumber: 180,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/gallery.tsx",
          lineNumber: 163,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/gallery.tsx",
        lineNumber: 152,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-4 flex justify-between", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { variant: "secondary", className: "w-full sm:w-auto", asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/", children: "Back to Upload" }, void 0, false, {
          fileName: "app/routes/gallery.tsx",
          lineNumber: 193,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/gallery.tsx",
          lineNumber: 192,
          columnNumber: 13
        }, this),
        images.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { variant: "outline", className: "w-full sm:w-auto ml-2", onClick: () => {
          sessionStorage.removeItem("uploadedImages");
          setImages([]);
          setSelectedImage(null);
        }, children: "Clear All" }, void 0, false, {
          fileName: "app/routes/gallery.tsx",
          lineNumber: 197,
          columnNumber: 35
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/gallery.tsx",
        lineNumber: 191,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/gallery.tsx",
      lineNumber: 105,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/gallery.tsx",
    lineNumber: 100,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/gallery.tsx",
    lineNumber: 99,
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
//# sourceMappingURL=/build/routes/gallery-GEWQGONG.js.map
