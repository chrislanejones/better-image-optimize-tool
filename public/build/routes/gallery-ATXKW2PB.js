import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "/build/_shared/chunk-AE4FA6HE.js";
import {
  Link
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

// app/routes/gallery.tsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
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
  import.meta.hot.lastModified = "1742545110218.2566";
}
function Gallery() {
  _s();
  const [images, setImages] = (0, import_react.useState)([]);
  const [selectedImage, setSelectedImage] = (0, import_react.useState)(null);
  (0, import_react.useEffect)(() => {
    console.log("Gallery component mounted, retrieving stored images");
    const storedImages = sessionStorage.getItem("uploadedImages");
    if (storedImages) {
      try {
        const parsedImages = JSON.parse(storedImages);
        console.log(`Found ${parsedImages.length} images in storage`);
        setImages(parsedImages);
        if (parsedImages.length > 0) {
          setSelectedImage(parsedImages[0]);
        }
      } catch (error) {
        console.error("Error parsing stored images:", error);
      }
    } else {
      console.log("No images found in storage");
    }
  }, []);
  const handleImageSelect = (image) => {
    setSelectedImage(image);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-4xl mx-auto p-4 md:p-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { className: "w-full", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardTitle, { className: "text-center", children: "Photo Gallery" }, void 0, false, {
      fileName: "app/routes/gallery.tsx",
      lineNumber: 57,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/gallery.tsx",
      lineNumber: 56,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-4 overflow-x-auto p-4 bg-slate-100 rounded-lg mb-6 min-h-24 items-center scrollbar-thin", children: images.length > 0 ? images.map((image, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `flex-none w-20 h-20 rounded overflow-hidden cursor-pointer transition-all hover:-translate-y-1 ${selectedImage === image ? "border-2 border-blue-600 shadow-md" : "border-2 border-transparent"}`, onClick: () => handleImageSelect(image), onKeyDown: (e) => {
        if (e.key === "Enter" || e.key === " ") {
          handleImageSelect(image);
        }
      }, tabIndex: 0, role: "button", "aria-label": `Select image ${image.name}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: image.url, alt: image.name, className: "w-full h-full object-cover" }, void 0, false, {
        fileName: "app/routes/gallery.tsx",
        lineNumber: 68,
        columnNumber: 19
      }, this) }, index, false, {
        fileName: "app/routes/gallery.tsx",
        lineNumber: 63,
        columnNumber: 63
      }, this)) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full text-center text-slate-500", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "No images uploaded" }, void 0, false, {
        fileName: "app/routes/gallery.tsx",
        lineNumber: 70,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/routes/gallery.tsx",
        lineNumber: 69,
        columnNumber: 27
      }, this) }, void 0, false, {
        fileName: "app/routes/gallery.tsx",
        lineNumber: 62,
        columnNumber: 11
      }, this),
      selectedImage && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col md:flex-row gap-8 mb-8", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "polaroid w-72 h-auto mx-auto md:mx-0", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-64 w-full overflow-hidden bg-slate-100 mb-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: selectedImage.url, alt: selectedImage.name, className: "w-full h-full object-contain" }, void 0, false, {
            fileName: "app/routes/gallery.tsx",
            lineNumber: 78,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/gallery.tsx",
            lineNumber: 77,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-slate-600 truncate", children: selectedImage.name }, void 0, false, {
            fileName: "app/routes/gallery.tsx",
            lineNumber: 81,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/gallery.tsx",
            lineNumber: 80,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/gallery.tsx",
          lineNumber: 76,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1 bg-slate-50 p-6 rounded-lg border border-slate-200", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "my-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-medium", children: "File name:" }, void 0, false, {
              fileName: "app/routes/gallery.tsx",
              lineNumber: 88,
              columnNumber: 19
            }, this),
            " ",
            selectedImage.name
          ] }, void 0, true, {
            fileName: "app/routes/gallery.tsx",
            lineNumber: 87,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "my-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-medium", children: "Type:" }, void 0, false, {
              fileName: "app/routes/gallery.tsx",
              lineNumber: 92,
              columnNumber: 19
            }, this),
            " ",
            selectedImage.type
          ] }, void 0, true, {
            fileName: "app/routes/gallery.tsx",
            lineNumber: 91,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "my-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-medium", children: "Size:" }, void 0, false, {
              fileName: "app/routes/gallery.tsx",
              lineNumber: 96,
              columnNumber: 19
            }, this),
            " ",
            Math.round(selectedImage.size / 1024),
            " KB"
          ] }, void 0, true, {
            fileName: "app/routes/gallery.tsx",
            lineNumber: 95,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/gallery.tsx",
          lineNumber: 86,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/gallery.tsx",
        lineNumber: 75,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { variant: "secondary", className: "w-full sm:w-auto", asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/", children: "Back to Upload" }, void 0, false, {
        fileName: "app/routes/gallery.tsx",
        lineNumber: 104,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/gallery.tsx",
        lineNumber: 103,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/gallery.tsx",
        lineNumber: 102,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/gallery.tsx",
      lineNumber: 60,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/gallery.tsx",
    lineNumber: 55,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/gallery.tsx",
    lineNumber: 54,
    columnNumber: 10
  }, this);
}
_s(Gallery, "kKDvgZCLpyq/6Bz6LreGji6fUo0=");
_c = Gallery;
var _c;
$RefreshReg$(_c, "Gallery");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Gallery as default
};
//# sourceMappingURL=/build/routes/gallery-ATXKW2PB.js.map
