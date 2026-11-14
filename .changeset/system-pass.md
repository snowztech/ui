---
"@snowztech/ui-css": minor
"@snowztech/ui-js": minor
"@snowztech/ui": minor
---

Finish the system: new components, readable grey text, and one version for all three packages.

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
