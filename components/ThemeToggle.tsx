"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="h-8 w-[120px]" />;

  const isDark = resolvedTheme === "dark";

  return (
    <div className="flex items-center bg-earth-900/50 rounded-lg p-0.5 text-xs">
      <button
        onClick={() => setTheme("dark")}
        className={`flex items-center gap-1 px-2 py-1.5 rounded-md transition-colors ${
          isDark
            ? "bg-gold-600 text-white font-semibold"
            : "text-earth-300 hover:text-earth-100"
        }`}
        aria-label="Switch to dark mode"
      >
        🌙 Dark
      </button>
      <button
        onClick={() => setTheme("light")}
        className={`flex items-center gap-1 px-2 py-1.5 rounded-md transition-colors ${
          !isDark
            ? "bg-gold-600 text-white font-semibold"
            : "text-earth-300 hover:text-earth-100"
        }`}
        aria-label="Switch to light mode"
      >
        ☀️ Light
      </button>
    </div>
  );
}
