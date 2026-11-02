"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

/**
 * v2 light/dark switch. The theme is only known on the client, so until mount
 * it renders a neutral, stable button (same markup on server and first client
 * render). The icon shows the theme you would switch *to*.
 */
export function V2ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isLight = mounted && resolvedTheme === "light";
  const label = !mounted
    ? "Toggle theme"
    : isLight
      ? "Switch to dark theme"
      : "Switch to light theme";

  return (
    <button
      type="button"
      className="v2-icon-btn v2-theme-btn"
      aria-label={label}
      title={label}
      onClick={() => setTheme(isLight ? "dark" : "light")}
    >
      {mounted &&
        (isLight ? (
          <Moon key="moon" className="v2-theme-icon" size={19} aria-hidden />
        ) : (
          <Sun key="sun" className="v2-theme-icon" size={19} aria-hidden />
        ))}
    </button>
  );
}
