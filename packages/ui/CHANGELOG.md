# @snowztech/ui

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
