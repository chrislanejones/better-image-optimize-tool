import React, { useEffect, useState } from "react";
import { Button } from "./ui/Button";

type Theme = "dark" | "light" | "system";

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("system");
  const [mounted, setMounted] = useState(false);

  // Only run once on mount to avoid hydration issues
  useEffect(() => {
    setMounted(true);
    // Get initial theme from localStorage or use system default
    const storedTheme = window.localStorage.getItem("theme") as Theme | null;
    const initialTheme = storedTheme || "system";
    setTheme(initialTheme);
    applyTheme(initialTheme);
  }, []);

  // Set up listener for system theme changes
  useEffect(() => {
    if (!mounted) return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      if (theme === "system") {
        applyTheme("system");
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [theme, mounted]);

  // Apply theme when theme state changes
  useEffect(() => {
    if (!mounted) return;

    applyTheme(theme);
    localStorage.setItem("theme", theme);
  }, [theme, mounted]);

  function applyTheme(newTheme: Theme) {
    const isDark =
      newTheme === "dark" ||
      (newTheme === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    // Force a repaint by removing and then adding the class
    document.documentElement.classList.remove("dark", "light");

    // Apply the appropriate class
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.add("light"); // Adding explicit light class
    }

    // Also set a data attribute for potential CSS selectors
    document.documentElement.setAttribute(
      "data-theme",
      isDark ? "dark" : "light"
    );
  }

  function cycleTheme() {
    const themes: Theme[] = ["light", "dark", "system"];
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex]);
  }

  // Don't render anything until mounted to avoid hydration issues
  if (!mounted) {
    return null;
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={cycleTheme}
      aria-label="Toggle theme"
      title={`Current theme: ${theme}`}
    >
      {/* Sun icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        className={`h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all ${
          theme === "dark" ? "opacity-0" : "opacity-100"
        } ${theme === "system" ? "text-yellow-500" : ""}`}
      >
        <circle cx="12" cy="12" r="4"></circle>
        <path d="M12 2v2"></path>
        <path d="M12 20v2"></path>
        <path d="m4.93 4.93 1.41 1.41"></path>
        <path d="m17.66 17.66 1.41 1.41"></path>
        <path d="M2 12h2"></path>
        <path d="M20 12h2"></path>
        <path d="m6.34 17.66-1.41 1.41"></path>
        <path d="m19.07 4.93-1.41 1.41"></path>
      </svg>

      {/* Moon icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        className={`absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all ${
          theme === "dark" ? "rotate-0 scale-100 opacity-100" : "opacity-0"
        } ${theme === "system" ? "text-blue-500" : ""}`}
      >
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
      </svg>

      {/* System icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        className={`absolute h-[1.2rem] w-[1.2rem] transition-all ${
          theme === "system"
            ? "rotate-0 scale-100 opacity-100"
            : "rotate-90 scale-0 opacity-0"
        }`}
      >
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
        <line x1="8" y1="21" x2="16" y2="21"></line>
        <line x1="12" y1="17" x2="12" y2="21"></line>
      </svg>
    </Button>
  );
}

export default ThemeToggle;
