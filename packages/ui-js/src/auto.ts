// Auto-wires every [data-sn-*] element on the page once the DOM is ready.
// Re-import safe (idempotent: each binder marks its element with data-sn-bound).

import { initCopyButtons } from "./copy-button";
import { initThemeToggles } from "./theme-toggle";

export function init(root: ParentNode = document): void {
  initCopyButtons(root);
  initThemeToggles(root);
}

if (typeof document !== "undefined") {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => init(), { once: true });
  } else {
    init();
  }
}
