"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type ThemeMode = "light" | "dark";

function applyTheme(theme: ThemeMode) {
  document.documentElement.dataset.theme = theme;
  window.localStorage.setItem("krellix-theme", theme);
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<ThemeMode>("dark");

  useEffect(() => {
    const currentTheme =
      document.documentElement.dataset.theme === "dark" ? "dark" : "light";
    setTheme(currentTheme);
  }, []);

  const isDark = theme === "dark";

  function handleToggle() {
    const nextTheme: ThemeMode = isDark ? "light" : "dark";
    setTheme(nextTheme);
    applyTheme(nextTheme);
  }

  return (
    <button
      type="button"
      onClick={handleToggle}
      aria-pressed={isDark}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="relative inline-flex h-6 w-[60px] items-center rounded-[20px] border border-[var(--toggle-track-border)] bg-[var(--toggle-track-bg)] p-[2px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-mint focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface-bg)]"
    >
      <span
        className={`inline-flex h-5 w-8 items-center justify-center rounded-[20px] bg-[var(--toggle-thumb-bg)] transition-transform duration-200 ease-out ${isDark ? "translate-x-6" : "translate-x-0"}`}
      >
        <Image
          src="/brand/sun-icon-12x12.svg"
          alt=""
          aria-hidden="true"
          width={12}
          height={12}
        />
      </span>
    </button>
  );
}
