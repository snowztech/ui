# @snowztech/ui-js

Optional vanilla bindings for [@snowztech/ui-css](https://www.npmjs.com/package/@snowztech/ui-css). Wires `data-sn-*` attributes so static HTML pages get interactive components without React.

If you're using `@snowztech/ui` (React), you don't need this package.

## CDN (auto-wires on load)

```html
<link rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/@snowztech/ui-css@0.6/dist/snowztech-ui.min.css">
<script type="module"
        src="https://cdn.jsdelivr.net/npm/@snowztech/ui-js@0.3/dist/snowztech-ui.esm.js"></script>

<!-- an empty button draws its own icons -->
<button class="sn-copy-btn" data-sn-copy="hello@snowz.ai" aria-label="copy email"></button>

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
