"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

/**
 * Light/dark theme switch. Renders a stable placeholder until mounted so the
 * server and client markup match (theme is only known on the client). Styled
 * as a sliding switch with a sun/moon track.
 */
export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = mounted ? resolvedTheme === "dark" : true;

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      className="theme-switch"
      data-state={isDark ? "dark" : "light"}
      aria-label={
        mounted
          ? `Switch to ${isDark ? "light" : "dark"} theme`
          : "Toggle theme"
      }
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      <span className="theme-switch-track" aria-hidden>
        <Sun className="theme-switch-ico sun" size={14} />
        <Moon className="theme-switch-ico moon" size={14} />
        <span className="theme-switch-knob" />
      </span>
    </button>
  );
}
