// ESM entry. Consumers call init() themselves.
// Use ./auto for the side-effect "wire everything on load" entry.

export {
  bindCopyButton,
  initCopyButtons,
} from "./copy-button";

export {
  bindThemeToggle,
  initThemeToggles,
  getTheme,
  setTheme,
  toggleTheme,
  type Theme,
} from "./theme-toggle";

export { bindToc, initTocs } from "./toc";

export { bindTabs, initTabs } from "./tabs";

export { init } from "./auto";
