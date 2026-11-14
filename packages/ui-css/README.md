# @snowztech/ui-css

The snowztech CSS design system. Tokens, resets, and component classes. Framework-agnostic.

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
      href="https://cdn.jsdelivr.net/npm/@snowztech/ui-css@0.8/dist/snowztech-ui.min.css">
```

## Fonts

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@snowztech/ui-css@0.8/dist/fonts.css">
```

That loads JetBrains Mono, Geist and Geist Mono from Google Fonts. Skip it if you host them yourself.

## Options

Two optional attributes, on `<html>` or on any section:

```html
<html data-theme="system" data-sn-mode="powder" data-sn-accent="glacier">
```

| attribute | values | does |
|---|---|---|
| `data-theme` | `dark` (default), `light`, `system` | color theme |
| `data-sn-mode` | `frost` (default), `powder` | frost is all JetBrains Mono. powder sets text, headings and buttons in Geist, and labels, badges, kbd and code in Geist Mono |
| `data-sn-accent` | `ice` (default, blue), `glacier` (turquoise) or `neutral` (white on dark, near-black on light) | the accent color, with hover and soft shades derived. Your own: set `--sn-accent-on-dark` and `--sn-accent-on-light` |

For your own accent set `--sn-accent-on-dark` and `--sn-accent-on-light`. For your own heading font set `--sn-font-display`.

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
| `sn-icon-btn`     | `--sm --lg --bordered`, one icon, needs `aria-label` |
| `sn-segmented`    | `--sm`, `__label`; picked option has `aria-pressed="true"` or `aria-current` |
| `sn-tabs`         | `--sm`; `role="tab"` with `aria-selected`, or links with `aria-current` |
| `sn-input`        | `--sm --lg --invalid`                              |
| `sn-card`         | `--raised --inset --accent` (`--rounded` is deprecated) |
| `sn-table`        | `--hover`, `.sn-num` cells; wrap in `sn-table-wrap` |
| `sn-navlist`      | `__title`; current link has `aria-current="page"` |
| `sn-badge`        | `--accent --success --warning --danger`            |
| `sn-kbd`          | ·                                                  |
| `sn-divider`      | ·                                                  |
| `sn-meta`         | `--accent --subtle`, the uppercase label           |
| `sn-prompt`       | ·                                                  |
| `sn-container`    | `--narrow`                                         |
| `sn-header`, `sn-brand`, `sn-nav` | site header                        |
| `sn-footer`       | `__row __top __cols __links __legal`               |
| `sn-faq`          | wraps plain `<details>`                            |
| `sn-lede`, `sn-fine` | intro sentence, small print                     |
| `sn-mark`         | `--xs --sm --md --lg --xl --accent --muted`        |
| `sn-monogram`     | `--xs --sm --md --lg --inverse`                    |
| `sn-avatar`       | `--xs --sm --md --lg --xl --square --ring`         |
| `sn-avatar-stack` | ·                                                  |
| `sn-pulse`        | `--success --warning --danger --accent`            |
| `sn-copy-btn`     | uses `data-copied="true"`, draws its own icons when empty |
| `sn-prose`        | styles the plain HTML of an article inside it      |
| `sn-toc`, `sn-toc-layout` | contents box, sticky beside the text on wide screens |
| `sn-callout`      | `--note --tip --warning --danger`, `__title`       |
| `sn-code`         | `__bar __name`, code block with a filename and copy button |
| `sn-terminal`     | `__bar __title __body __out`, window frame for a session or screenshot |
| `sn-theme-toggle` | `--sm`; reads `[data-theme="light"]` from `<html>` |

## Theming

Default is dark. Switch by setting `data-theme="light"` on `<html>`:

```js
document.documentElement.setAttribute("data-theme", "light");
```

Or follow the OS with `data-theme="system"`. The theme toggle still overrides it:

```html
<html data-theme="system">
```

Override any token by re-declaring on `:root` or a scope:

```css
:root { --sn-accent: #ff5f5f; }
```
