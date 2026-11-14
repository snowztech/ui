---
"@snowztech/ui-css": minor
"@snowztech/ui": minor
---

Make the library the snowztech design system.

- Two modes. `frost`, the default, is all JetBrains Mono. `data-sn-mode="powder"` sets text, headings and buttons in Geist and labels, badges, kbd and code in Geist Mono. `--sn-font-sans` is now Geist; it used to be an alias of the mono font. `fonts.css` loads all three fonts.
- `data-sn-accent` picks the accent (`ice`, the default, `glacier` or `neutral`). Hover, active, soft and border shades are derived from it, in dark and light.
- Every component now follows the same rules: control heights of 28, 36 and 44px, a 4px chip radius, a 6px control radius and a 10px surface radius. Buttons, inputs and file inputs are taller and line up. Cards are rounded by default; `sn-card--rounded` still works and `sn-card--raised` is new.
- New, taken from what the product sites each rebuilt: `sn-container`, `sn-header`, `sn-brand`, `sn-nav`, `sn-footer`, `sn-faq`, `sn-lede`, `sn-fine`. `sn-meta` gains `--accent` and `--subtle` and is readable by default.
- Success, warning and danger have light theme values. Focus rings are visible everywhere and animations respect reduced motion.
- `SnowMark` now draws the snowflake.
