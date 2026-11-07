# @snowztech/ui-css

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
