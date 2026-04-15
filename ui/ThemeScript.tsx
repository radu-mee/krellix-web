const THEME_SCRIPT = `
(() => {
  const root = document.documentElement;
  const storedTheme = window.localStorage.getItem("krellix-theme");
  const theme = storedTheme === "light" || storedTheme === "dark"
    ? storedTheme
    : "dark";

  root.dataset.theme = theme;
})();
`;

export default function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />;
}
