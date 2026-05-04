import * as React from "react";

const cx = (...parts: Array<string | undefined | false>) => parts.filter(Boolean).join(" ");

export type Theme = "light" | "dark";

export interface ThemeToggleProps {
  size?: number;
  storageKey?: string;
  defaultTheme?: Theme;
  className?: string;
  style?: React.CSSProperties;
}

export function ThemeToggle({
  size = 12,
  storageKey = "theme",
  defaultTheme = "dark",
  className,
  style,
}: ThemeToggleProps) {
  const [theme, setTheme] = React.useState<Theme>(defaultTheme);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    const stored = (localStorage.getItem(storageKey) as Theme | null) ?? defaultTheme;
    setTheme(stored);
    setMounted(true);
  }, [storageKey, defaultTheme]);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem(storageKey, next);
    if (next === "light") document.documentElement.setAttribute("data-theme", "light");
    else document.documentElement.removeAttribute("data-theme");
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className={cx("sn-theme-toggle", className)}
      style={{
        ["--sn-theme-toggle-size" as string]: `${size}px`,
        opacity: mounted ? 1 : 0,
        ...style,
      }}
    >
      <span className="sn-theme-toggle__indicator" />
    </button>
  );
}
