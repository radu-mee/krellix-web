export interface HeroImageVariant {
  /** Media query this variant is shown at; omit for the fallback variant. */
  media?: string;
  light: string;
  dark: string;
}

interface HeroImagePreloadProps {
  /** Checked in order; the first variant whose `media` matches is preloaded. */
  variants: readonly HeroImageVariant[];
}

// Above-the-fold ThemeImages come in light/dark (and often desktop/mobile)
// variants hidden with CSS. Marking them all eager would download every
// variant, so they stay lazy and this inline script preloads only the one the
// visitor will actually see, at high priority, as soon as the HTML is parsed.
// It runs after ThemeScript, which has already set `data-theme` on <html>.
// Mirrors the homepage hero preload in ThemeScript.
export default function HeroImagePreload({ variants }: HeroImagePreloadProps) {
  const serializedVariants = JSON.stringify(variants).replace(/</g, "\\u003c");
  const script = `(() => {
  try {
    const variants = ${serializedVariants};
    const theme = document.documentElement.dataset.theme === "light" ? "light" : "dark";
    const match = variants.find((variant) => !variant.media || window.matchMedia(variant.media).matches);
    if (!match) return;
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = match[theme];
    link.setAttribute("fetchpriority", "high");
    document.head.appendChild(link);
  } catch {}
})();`;

  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
