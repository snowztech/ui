# @snowztech/ui-js

Optional vanilla bindings for [@snowztech/ui-css](https://www.npmjs.com/package/@snowztech/ui-css). Wires `data-sn-*` attributes so static HTML pages get interactive components without React.

If you're using `@snowztech/ui` (React), you don't need this package.

## CDN (auto-wires on load)

```html
<link rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/@snowztech/ui-css@0.2/dist/snowztech-ui.min.css">
<script type="module"
        src="https://cdn.jsdelivr.net/npm/@snowztech/ui-js@0.2/dist/snowztech-ui.esm.js"></script>

<button class="sn-copy-btn" data-sn-copy="hello@snowz.ai" aria-label="copy email">
  <svg class="sn-copy-btn__idle"   width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
    <rect x="9" y="9" width="11" height="11" rx="1.5"/><path d="M5 15V5a1 1 0 0 1 1-1h10"/>
  </svg>
  <svg class="sn-copy-btn__copied" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
    <path d="m4 12 5 5L20 6"/>
  </svg>
</button>

<button class="sn-theme-toggle" data-sn-theme-toggle aria-label="toggle theme">
  <span class="sn-theme-toggle__indicator"></span>
</button>
```

## npm

```bash
npm i @snowztech/ui-js
```

```ts
// Side-effect import: wires every [data-sn-*] on DOMContentLoaded.
import "@snowztech/ui-js/auto";

// Or explicit:
import { init, toggleTheme } from "@snowztech/ui-js";
init();
```

## Attributes

| Attribute                       | Behavior                                                |
|---------------------------------|---------------------------------------------------------|
| `data-sn-copy="<text>"`         | Copies text to clipboard, sets `data-copied="true"` for 1.2s |
| `data-sn-theme-toggle`          | Toggles `[data-theme="light"]` on `<html>`, persists to localStorage |
| `data-sn-storage-key="<key>"`   | Override the localStorage key used by the theme toggle  |

## API

```ts
init(root?: ParentNode): void
bindCopyButton(el: HTMLElement): void
bindThemeToggle(el: HTMLElement): void
getTheme(key?: string): "light" | "dark"
setTheme(theme: "light" | "dark", key?: string): void
toggleTheme(key?: string): "light" | "dark"
```
