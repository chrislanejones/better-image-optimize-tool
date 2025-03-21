import {
  Link
} from "/build/_shared/chunk-M3MXSI3X.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  createHotContext
} from "/build/_shared/chunk-3N4ECGYM.js";
import {
  require_react
} from "/build/_shared/chunk-7M6SC7J5.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/ui/Card.tsx
var React = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/ui/Card.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/ui/Card.tsx"
  );
  import.meta.hot.lastModified = "1742545407456.4143";
}
var Card = React.forwardRef(_c = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { ref, className: `rounded-lg border border-slate-200 bg-white text-slate-950 shadow-sm ${className || ""}`, ...props }, void 0, false, {
  fileName: "app/components/ui/Card.tsx",
  lineNumber: 25,
  columnNumber: 12
}, this));
_c2 = Card;
Card.displayName = "Card";
var CardHeader = React.forwardRef(_c3 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { ref, className: `flex flex-col space-y-1.5 p-6 ${className || ""}`, ...props }, void 0, false, {
  fileName: "app/components/ui/Card.tsx",
  lineNumber: 31,
  columnNumber: 12
}, this));
_c4 = CardHeader;
CardHeader.displayName = "CardHeader";
var CardTitle = React.forwardRef(_c5 = ({
  className,
  children,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { ref, className: `text-2xl font-semibold leading-none tracking-tight ${className || ""}`, ...props, children }, void 0, false, {
  fileName: "app/components/ui/Card.tsx",
  lineNumber: 38,
  columnNumber: 12
}, this));
_c6 = CardTitle;
CardTitle.displayName = "CardTitle";
var CardDescription = React.forwardRef(_c7 = ({
  className,
  children,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { ref, className: `text-sm text-slate-500 ${className || ""}`, ...props, children }, void 0, false, {
  fileName: "app/components/ui/Card.tsx",
  lineNumber: 47,
  columnNumber: 12
}, this));
_c8 = CardDescription;
CardDescription.displayName = "CardDescription";
var CardContent = React.forwardRef(_c9 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { ref, className: `p-6 pt-0 ${className || ""}`, ...props }, void 0, false, {
  fileName: "app/components/ui/Card.tsx",
  lineNumber: 55,
  columnNumber: 12
}, this));
_c10 = CardContent;
CardContent.displayName = "CardContent";
var CardFooter = React.forwardRef(_c11 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { ref, className: `flex items-center p-6 pt-0 ${className || ""}`, ...props }, void 0, false, {
  fileName: "app/components/ui/Card.tsx",
  lineNumber: 61,
  columnNumber: 12
}, this));
_c12 = CardFooter;
CardFooter.displayName = "CardFooter";
var _c;
var _c2;
var _c3;
var _c4;
var _c5;
var _c6;
var _c7;
var _c8;
var _c9;
var _c10;
var _c11;
var _c12;
$RefreshReg$(_c, "Card$React.forwardRef");
$RefreshReg$(_c2, "Card");
$RefreshReg$(_c3, "CardHeader$React.forwardRef");
$RefreshReg$(_c4, "CardHeader");
$RefreshReg$(_c5, "CardTitle$React.forwardRef");
$RefreshReg$(_c6, "CardTitle");
$RefreshReg$(_c7, "CardDescription$React.forwardRef");
$RefreshReg$(_c8, "CardDescription");
$RefreshReg$(_c9, "CardContent$React.forwardRef");
$RefreshReg$(_c10, "CardContent");
$RefreshReg$(_c11, "CardFooter$React.forwardRef");
$RefreshReg$(_c12, "CardFooter");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/ui/Button.tsx
var React2 = __toESM(require_react(), 1);

// node_modules/clsx/dist/clsx.mjs
function r(e) {
  var t, f, n = "";
  if ("string" == typeof e || "number" == typeof e)
    n += e;
  else if ("object" == typeof e)
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++)
        e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
    } else
      for (f in e)
        e[f] && (n && (n += " "), n += f);
  return n;
}
function clsx() {
  for (var e, t, f = 0, n = "", o = arguments.length; f < o; f++)
    (e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
  return n;
}

// node_modules/class-variance-authority/dist/index.mjs
var falsyToString = (value) => typeof value === "boolean" ? `${value}` : value === 0 ? "0" : value;
var cx = clsx;
var cva = (base, config) => (props) => {
  var _config_compoundVariants;
  if ((config === null || config === void 0 ? void 0 : config.variants) == null)
    return cx(base, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
  const { variants, defaultVariants } = config;
  const getVariantClassNames = Object.keys(variants).map((variant) => {
    const variantProp = props === null || props === void 0 ? void 0 : props[variant];
    const defaultVariantProp = defaultVariants === null || defaultVariants === void 0 ? void 0 : defaultVariants[variant];
    if (variantProp === null)
      return null;
    const variantKey = falsyToString(variantProp) || falsyToString(defaultVariantProp);
    return variants[variant][variantKey];
  });
  const propsWithoutUndefined = props && Object.entries(props).reduce((acc, param) => {
    let [key, value] = param;
    if (value === void 0) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
  const getCompoundVariantClassNames = config === null || config === void 0 ? void 0 : (_config_compoundVariants = config.compoundVariants) === null || _config_compoundVariants === void 0 ? void 0 : _config_compoundVariants.reduce((acc, param) => {
    let { class: cvClass, className: cvClassName, ...compoundVariantOptions } = param;
    return Object.entries(compoundVariantOptions).every((param2) => {
      let [key, value] = param2;
      return Array.isArray(value) ? value.includes({
        ...defaultVariants,
        ...propsWithoutUndefined
      }[key]) : {
        ...defaultVariants,
        ...propsWithoutUndefined
      }[key] === value;
    }) ? [
      ...acc,
      cvClass,
      cvClassName
    ] : acc;
  }, []);
  return cx(base, getVariantClassNames, getCompoundVariantClassNames, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
};

// app/components/ui/Button.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/ui/Button.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/ui/Button.tsx"
  );
  import.meta.hot.lastModified = "1742545332389.4048";
}
var buttonVariants = cva("inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", {
  variants: {
    variant: {
      default: "bg-slate-900 text-slate-50 hover:bg-slate-900/90",
      destructive: "bg-red-500 text-slate-50 hover:bg-red-500/90",
      outline: "border border-slate-200 bg-white hover:bg-slate-100 hover:text-slate-900",
      secondary: "bg-slate-100 text-slate-900 hover:bg-slate-100/80",
      ghost: "hover:bg-slate-100 hover:text-slate-900",
      link: "text-slate-900 underline-offset-4 hover:underline",
      primary: "bg-blue-600 text-white hover:bg-blue-700",
      success: "bg-green-600 text-white hover:bg-green-700"
    },
    size: {
      default: "h-10 px-4 py-2",
      sm: "h-9 rounded-md px-3",
      lg: "h-11 rounded-md px-8",
      icon: "h-10 w-10"
    }
  },
  defaultVariants: {
    variant: "default",
    size: "default"
  }
});
var Button = React2.forwardRef(_c13 = ({
  className,
  variant,
  size,
  asChild = false,
  children,
  ...props
}, ref) => {
  if (asChild && React2.isValidElement(children)) {
    const child = React2.Children.only(children);
    if (child.type === Link) {
      return React2.cloneElement(child, {
        className: buttonVariants({
          variant,
          size,
          className
        }),
        ...child.props,
        ...props
      });
    }
    return React2.cloneElement(child, {
      className: buttonVariants({
        variant,
        size,
        className
      }),
      ref,
      ...child.props,
      ...props
    });
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { className: buttonVariants({
    variant,
    size,
    className
  }), ref, ...props, children }, void 0, false, {
    fileName: "app/components/ui/Button.tsx",
    lineNumber: 85,
    columnNumber: 10
  }, this);
});
_c22 = Button;
Button.displayName = "Button";
var _c13;
var _c22;
$RefreshReg$(_c13, "Button$React.forwardRef");
$RefreshReg$(_c22, "Button");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/theme-toggle.tsx
var import_react2 = __toESM(require_react(), 1);
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/theme-toggle.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/theme-toggle.tsx"
  );
  import.meta.hot.lastModified = "1742550716952.2664";
}
function ThemeToggle() {
  _s();
  const [theme, setTheme] = (0, import_react2.useState)("system");
  (0, import_react2.useEffect)(() => {
    const storedTheme = window.localStorage.getItem("theme");
    const initialTheme = storedTheme || "system";
    setTheme(initialTheme);
    applyTheme(initialTheme);
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      if (theme === "system") {
        applyTheme("system");
      }
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);
  (0, import_react2.useEffect)(() => {
    applyTheme(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);
  function applyTheme(newTheme) {
    const isDark = newTheme === "dark" || newTheme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.documentElement.classList.toggle("dark", isDark);
  }
  function cycleTheme() {
    const themes = ["light", "dark", "system"];
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex]);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button, { variant: "ghost", size: "icon", onClick: cycleTheme, "aria-label": "Toggle theme", title: `Current theme: ${theme}`, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", className: `h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all ${theme === "dark" ? "opacity-0" : "opacity-100"} ${theme === "system" ? "text-yellow-500" : ""}`, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("circle", { cx: "12", cy: "12", r: "4" }, void 0, false, {
        fileName: "app/components/theme-toggle.tsx",
        lineNumber: 63,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("path", { d: "M12 2v2" }, void 0, false, {
        fileName: "app/components/theme-toggle.tsx",
        lineNumber: 64,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("path", { d: "M12 20v2" }, void 0, false, {
        fileName: "app/components/theme-toggle.tsx",
        lineNumber: 65,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("path", { d: "m4.93 4.93 1.41 1.41" }, void 0, false, {
        fileName: "app/components/theme-toggle.tsx",
        lineNumber: 66,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("path", { d: "m17.66 17.66 1.41 1.41" }, void 0, false, {
        fileName: "app/components/theme-toggle.tsx",
        lineNumber: 67,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("path", { d: "M2 12h2" }, void 0, false, {
        fileName: "app/components/theme-toggle.tsx",
        lineNumber: 68,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("path", { d: "M20 12h2" }, void 0, false, {
        fileName: "app/components/theme-toggle.tsx",
        lineNumber: 69,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("path", { d: "m6.34 17.66-1.41 1.41" }, void 0, false, {
        fileName: "app/components/theme-toggle.tsx",
        lineNumber: 70,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("path", { d: "m19.07 4.93-1.41 1.41" }, void 0, false, {
        fileName: "app/components/theme-toggle.tsx",
        lineNumber: 71,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/theme-toggle.tsx",
      lineNumber: 62,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", className: `absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all ${theme === "dark" ? "rotate-0 scale-100 opacity-100" : "opacity-0"} ${theme === "system" ? "text-blue-500" : ""}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" }, void 0, false, {
      fileName: "app/components/theme-toggle.tsx",
      lineNumber: 76,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/theme-toggle.tsx",
      lineNumber: 75,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", className: `absolute h-[1.2rem] w-[1.2rem] transition-all ${theme === "system" ? "rotate-0 scale-100 opacity-100" : "rotate-90 scale-0 opacity-0"}`, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("rect", { x: "2", y: "3", width: "20", height: "14", rx: "2", ry: "2" }, void 0, false, {
        fileName: "app/components/theme-toggle.tsx",
        lineNumber: 81,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("line", { x1: "8", y1: "21", x2: "16", y2: "21" }, void 0, false, {
        fileName: "app/components/theme-toggle.tsx",
        lineNumber: 82,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("line", { x1: "12", y1: "17", x2: "12", y2: "21" }, void 0, false, {
        fileName: "app/components/theme-toggle.tsx",
        lineNumber: 83,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/theme-toggle.tsx",
      lineNumber: 80,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/theme-toggle.tsx",
    lineNumber: 60,
    columnNumber: 10
  }, this);
}
_s(ThemeToggle, "n/DgUbJM7lqJZyc05Ei7kIgey0Q=");
_c14 = ThemeToggle;
var _c14;
$RefreshReg$(_c14, "ThemeToggle");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/utils/fileUtils.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/utils/fileUtils.ts"
  );
  import.meta.hot.lastModified = "1742549717090.0867";
}
var filterImageFiles = (files) => {
  return files.filter((file) => file.type.startsWith("image/"));
};
var createFileData = (files) => {
  return files.map((file) => ({
    name: file.name,
    type: file.type,
    size: file.size,
    url: URL.createObjectURL(file)
  }));
};
var createFileFromPaste = (blob) => {
  const timestamp = (/* @__PURE__ */ new Date()).toISOString().replace(/:/g, "-");
  return new File([blob], `pasted-image-${timestamp}.png`, {
    type: blob.type
  });
};
var storeFileData = (fileData) => {
  sessionStorage.setItem("uploadedImages", JSON.stringify(fileData));
};
var retrieveFileData = () => {
  const storedData = sessionStorage.getItem("uploadedImages");
  return storedData ? JSON.parse(storedData) : null;
};

export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Button,
  ThemeToggle,
  filterImageFiles,
  createFileData,
  createFileFromPaste,
  storeFileData,
  retrieveFileData
};
//# sourceMappingURL=/build/_shared/chunk-UW2A6EOQ.js.map
