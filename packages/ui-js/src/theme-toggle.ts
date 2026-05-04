// Wires every <button data-sn-theme-toggle> on the page.
// Toggles [data-theme="light"] on <html>, persists to localStorage.

export type Theme = "light" | "dark";

const DEFAULT_KEY = "theme";

export function getTheme(storageKey = DEFAULT_KEY): Theme {
  try {
    const stored = localStorage.getItem(storageKey) as Theme | null;
    if (stored === "light" || stored === "dark") return stored;
  } catch { /* ignore */ }
  return document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
}

export function setTheme(theme: Theme, storageKey = DEFAULT_KEY): void {
  if (theme === "light") document.documentElement.setAttribute("data-theme", "light");
  else document.documentElement.removeAttribute("data-theme");
  try { localStorage.setItem(storageKey, theme); } catch { /* ignore */ }
}

export function toggleTheme(storageKey = DEFAULT_KEY): Theme {
  const next: Theme = getTheme(storageKey) === "dark" ? "light" : "dark";
  setTheme(next, storageKey);
  return next;
}

function onClick(this: HTMLElement) {
  const key = this.getAttribute("data-sn-storage-key") || DEFAULT_KEY;
  toggleTheme(key);
}

export function bindThemeToggle(el: HTMLElement): void {
  if (el.dataset.snBound === "theme") return;
  el.dataset.snBound = "theme";
  el.addEventListener("click", onClick);
}

export function initThemeToggles(root: ParentNode = document): void {
  root.querySelectorAll<HTMLElement>("[data-sn-theme-toggle]").forEach(bindThemeToggle);
}
