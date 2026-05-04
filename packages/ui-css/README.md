# @snowztech/ui-css

Terminal-minimal CSS design system. Tokens, resets, and component classes. Framework-agnostic.

The source of truth for [@snowztech/ui](https://www.npmjs.com/package/@snowztech/ui) (React) and any other framework wrapper.

## Install

```bash
npm i @snowztech/ui-css
```

```js
import "@snowztech/ui-css";
```

## CDN

```html
<link rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/@snowztech/ui-css@0.2/dist/snowztech-ui.min.css">
```

## What's inside

- `dist/snowztech-ui.css` · full bundle
- `dist/snowztech-ui.min.css` · minified bundle
- `dist/tokens.css` · CSS variables only
- `dist/base.css` · resets, typography, links, keyframes
- `dist/components/*.css` · one file per component, opt-in

## Subpath imports

```js
import "@snowztech/ui-css/tokens.css";              // vars only
import "@snowztech/ui-css/components/btn.css";      // single component
```

## Class catalog

Tokens prefix `--sn-`. Classes prefix `sn-`. Modifier classes use `--`.

| Class             | Modifiers                                          |
|-------------------|----------------------------------------------------|
| `sn-btn`          | `--sm --lg --primary --secondary --ghost --accent --danger` |
| `sn-input`        | ·                                                  |
| `sn-card`         | `--rounded --accent --inset`                       |
| `sn-badge`        | `--accent --success --warning --danger`            |
| `sn-kbd`          | ·                                                  |
| `sn-divider`      | ·                                                  |
| `sn-meta`, `sn-prompt` | ·                                              |
| `sn-mark`         | `--xs --sm --md --lg --xl --accent --muted`        |
| `sn-monogram`     | `--xs --sm --md --lg --inverse`                    |
| `sn-avatar`       | `--xs --sm --md --lg --xl --square --ring`         |
| `sn-avatar-stack` | ·                                                  |
| `sn-pulse`        | `--success --warning --danger --accent`            |
| `sn-copy-btn`     | uses `data-copied="true"`                          |
| `sn-theme-toggle` | reads `[data-theme="light"]` from `<html>`         |

## Theming

Default is dark. Switch by setting `data-theme="light"` on `<html>`:

```js
document.documentElement.setAttribute("data-theme", "light");
```

Override any token by re-declaring on `:root` or a scope:

```css
:root { --sn-accent: #ff5f5f; }
```
