# @snowztech/ui

## 0.8.0

### Minor Changes

- e715561: Add `MarkSnowflake`, the snowztech mark, and make it the canonical variant. Mask ids no longer contain colons, so the cut renders in every browser.
- 1528c37: Make the library the snowztech design system.

  - Two modes. `frost`, the default, is all JetBrains Mono. `data-sn-mode="powder"` sets text, headings and buttons in Geist and labels, badges, kbd and code in Geist Mono. `--sn-font-sans` is now Geist; it used to be an alias of the mono font. `fonts.css` loads all three fonts.
  - `data-sn-accent` picks the accent (`ice`, the default, `glacier` or `neutral`). Hover, active, soft and border shades are derived from it, in dark and light.
  - Every component now follows the same rules: control heights of 28, 36 and 44px, a 4px chip radius, a 6px control radius and a 10px surface radius. Buttons, inputs and file inputs are taller and line up. Cards are rounded by default; `sn-card--rounded` still works and `sn-card--raised` is new.
  - New, taken from what the product sites each rebuilt: `sn-container`, `sn-header`, `sn-brand`, `sn-nav`, `sn-footer`, `sn-faq`, `sn-lede`, `sn-fine`. `sn-meta` gains `--accent` and `--subtle` and is readable by default.
  - Success, warning and danger have light theme values. Focus rings are visible everywhere and animations respect reduced motion.
  - `SnowMark` now draws the snowflake.

- 1528c37: Finish the system: new components, readable grey text, and one version for all three packages.

  - New React components for the classes with variants: `<Button>` (renders a link when given `href`), `<Badge>`, `<Card>` and `<Kbd>`. Page structure (header, footer, FAQ, table, nav list) stays as classes.
  - New: `sn-icon-btn` (`<IconButton>`), `sn-segmented` (`<Segmented>`), `sn-tabs` (`<Tabs>`, and ui-js wires static tabs with arrow keys), `sn-table` with `sn-table-wrap`, and `sn-navlist`. `sn-theme-toggle--sm` matches the small controls.
  - Text contrast: `--sn-fg-muted` and `--sn-fg-subtle` are darker in light and lighter in dark, and both pass 4.5:1 on every surface. `--sn-fg-faint` is for icons and dividers only; placeholders now use subtle. Light success and warning are darker for the same reason.
  - `--sn-hover` and `--sn-pressed` tint whatever surface they sit on. Ghost and secondary buttons, the theme toggle, copy button and file input use them, so hover no longer shows a white box in light mode.
  - One focus style everywhere, from `--sn-focus-ring`: the border turns accent with a soft glow around it, the same look inputs already had. Items inside a group (segmented, tabs, nav list) glow inside. Text links underline instead of getting a box. Input hover is calmer.
  - `sn-code` and `sn-terminal` fill their container, so a flex parent no longer shrinks them to their text.
  - Every button variant has a pressed state you can see, instead of a 1px nudge. Accent uses `--sn-accent-active`, danger fills with its soft color. The copy button gets one too.
  - `data-theme="dark"` now works on a section inside a light page, like `data-theme="light"` already did.
  - Code blocks and inline code sit recessed (`--sn-bg-inset`), avatars use a tint, so neither disappears on a white card. Ligatures are off in code. `<pre class="sn-code">` works without the wrapper.
  - A section with its own `data-sn-mode` now switches its body text too, not only headings and buttons.
  - Accent presets are `ice` (blue, the default), `glacier` (turquoise, holt's color) and `neutral` (no color). Any other accent: set `--sn-accent-on-dark` and `--sn-accent-on-light`.
  - Removed, nothing used them: the archived logo explorations (`MarkSigil`, `MarkCrystal`, `MarkZFlake`, `MarkAsterisk`, `MarkSlash`, `MarkGlyph`, `MarkHex`, `MarkDotgrid`, `markVariants`) and the `--sn-shadow-*` tokens. `MarkSnowflake` is the snowztech mark.
  - Deprecated, removed in 0.9: the `--sn-r-*` radius scale (use `--sn-radius-chip`, `--sn-radius-control`, `--sn-radius-surface`) and `sn-card--rounded` (cards are rounded by default).
  - `@snowztech/ui`, `@snowztech/ui-css` and `@snowztech/ui-js` now release together with the same version number.

### Patch Changes

- Updated dependencies [1528c37]
- Updated dependencies [1528c37]
  - @snowztech/ui-css@0.8.0

## 0.4.2

### Patch Changes

- Updated dependencies [49babac]
  - @snowztech/ui-css@0.7.0

## 0.4.1

### Patch Changes

- Updated dependencies [2bf42a3]
  - @snowztech/ui-css@0.6.0

## 0.4.0

### Minor Changes

- dcaa085: Add `.sn-callout` for notes and warnings, `.sn-code` for a code block with a filename and copy button, and `.sn-terminal` for a window frame around a session or screenshot. React gets `Callout`, `Terminal` and `CodeBlock` (from `@snowztech/ui/client`). In static HTML, an empty `data-sn-copy` inside `.sn-code` copies the block's code.

### Patch Changes

- Updated dependencies [dcaa085]
  - @snowztech/ui-css@0.5.0

## 0.3.1

### Patch Changes

- 76db108: Add `.sn-prose` for articles, `.sn-toc` and `.sn-toc-layout` for a contents list, and `data-theme="system"` to follow the OS. Theme toggles read the system theme when it's on. Per-component files now ship for every component, including field and file.
- Updated dependencies [76db108]
  - @snowztech/ui-css@0.4.0

## 0.3.0

### Minor Changes

- Add form primitives.

  - `@snowztech/ui`: new `Input`, `Textarea`, `Label`, `Field` components.
  - `@snowztech/ui-css`: new `.sn-textarea`, `.sn-field`, `.sn-label`, `.sn-hint`, `.sn-error`, `.sn-file`. `.sn-input` gains size variants (`--sm`/`--lg`), `--invalid`, and disabled styles.

### Patch Changes

- Updated dependencies
  - @snowztech/ui-css@0.3.0

## 0.1.0

### Initial release

- 8 brand mark variants (`MarkCrystal` canonical, plus `MarkSigil`, `MarkZFlake`, `MarkAsterisk`, `MarkSlash`, `MarkHex`, `MarkDotgrid`, `MarkGlyph`)
- `Monogram`: wraps any mark in a tile
- `Avatar` + `AvatarStack`: image with initials fallback, circle/square, optional ring
- 38 line icons (1.5 stroke, 24px viewBox)
- `tokens.css`: CSS variables for color, type, spacing, radius. Dark + light themes.
- CSS primitives: `.sn-btn`, `.sn-card` (with `--rounded`, `--accent`, `--inset` modifiers), `.sn-badge`, `.sn-input`, `.sn-kbd`
- Client components from `@snowztech/ui/client`: `ThemeToggle`, `CopyButton`, `Pulse`
