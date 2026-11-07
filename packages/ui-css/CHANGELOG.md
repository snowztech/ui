# @snowztech/ui-css

## 0.7.0

### Minor Changes

- 49babac: Contents beside the text get a sentence-case title, a rule down the side and an accent edge on the section being read. In ui-js, `data-sn-toc` opens the list beside the text and marks the section being read as the page scrolls.

## 0.6.0

### Minor Changes

- 2bf42a3: An empty `.sn-copy-btn` draws its copy and check icons in CSS, so static HTML needs no inline SVG: `<button class="sn-copy-btn" data-sn-copy="…" aria-label="copy"></button>`. Buttons with SVGs inside work as before. Set `--sn-copy-btn-size` to resize the icon.

## 0.5.0

### Minor Changes

- dcaa085: Add `.sn-callout` for notes and warnings, `.sn-code` for a code block with a filename and copy button, and `.sn-terminal` for a window frame around a session or screenshot. React gets `Callout`, `Terminal` and `CodeBlock` (from `@snowztech/ui/client`). In static HTML, an empty `data-sn-copy` inside `.sn-code` copies the block's code.

## 0.4.0

### Minor Changes

- 76db108: Add `.sn-prose` for articles, `.sn-toc` and `.sn-toc-layout` for a contents list, and `data-theme="system"` to follow the OS. Theme toggles read the system theme when it's on. Per-component files now ship for every component, including field and file.

## 0.3.0

### Minor Changes

- Add form primitives.

  - `@snowztech/ui`: new `Input`, `Textarea`, `Label`, `Field` components.
  - `@snowztech/ui-css`: new `.sn-textarea`, `.sn-field`, `.sn-label`, `.sn-hint`, `.sn-error`, `.sn-file`. `.sn-input` gains size variants (`--sm`/`--lg`), `--invalid`, and disabled styles.
