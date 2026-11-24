const THEME_SCRIPT = `
(() => {
  const root = document.documentElement;
  const storedTheme = window.localStorage.getItem("krellix-theme");
  const theme = storedTheme === "light" || storedTheme === "dark"
    ? storedTheme
    : "dark";

  root.dataset.theme = theme;

  const pathSegments = window.location.pathname.split("/").filter(Boolean);
  const isLocaleHome = pathSegments.length === 1 &&
    new RegExp("^[a-z]{2}(?:-[a-z]{2,4})?$", "i").test(pathSegments[0]);
  const isAgentMode = new URLSearchParams(window.location.search)
    .get("mode")?.toLowerCase() === "agent";

  if (isLocaleHome && !isAgentMode) {
    const size = window.matchMedia("(min-width: 64rem)").matches
      ? "desktop"
      : window.matchMedia("(min-width: 48rem)").matches
        ? "tablet"
        : "mobile";
    const heroSrc = {
      desktop: {
        light: "/images/home-hero-image-light-mode-eng.svg",
        dark: "/images/home-hero-image-dark-mode-eng.svg",
      },
      tablet: {
        light: "/images/home-hero-tablet-image-light-mode-eng.svg",
        dark: "/images/home-hero-tablet-image-dark-mode-eng.svg",
      },
      mobile: {
        light: "/images/home-hero-mobile-image-light-mode-eng.svg",
        dark: "/images/home-hero-mobile-image-dark-mode-eng.svg",
      },
    }[size][theme];
    const preload = document.createElement("link");
    preload.rel = "preload";
    preload.as = "image";
    preload.href = heroSrc;
    preload.setAttribute("fetchpriority", "high");
    document.head.appendChild(preload);
  }
})();
`;

export default function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />;
}
