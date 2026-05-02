import * as React from "react";

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

  const filled = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`switch to ${filled ? "light" : "dark"} mode`}
      className={className}
      style={{
        appearance: "none",
        border: "none",
        background: "transparent",
        padding: 6,
        cursor: "pointer",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        opacity: mounted ? 1 : 0,
        transition: "opacity 200ms",
        ...style,
      }}
    >
      <span
        style={{
          display: "inline-block",
          width: size,
          height: size,
          borderRadius: "50%",
          border: `1px solid var(--sn-fg-muted)`,
          background: filled ? "var(--sn-fg)" : "transparent",
          transition: "background 160ms ease",
        }}
      />
    </button>
  );
}
