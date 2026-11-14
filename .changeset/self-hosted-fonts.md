---
"@snowztech/ui-css": minor
"@snowztech/ui": minor
---

The fonts ship with the library. `fonts.css` no longer imports Google Fonts: it declares JetBrains Mono, Geist and Geist Mono from files in `dist/fonts/` (Latin, one variable file per family, SIL Open Font License, licenses included).

- Static HTML: link `dist/fonts.css` from the same CDN as the CSS, and preload the files your mode uses, for example `dist/fonts/jetbrains-mono.woff2` for frost.
- React: `import "@snowztech/ui/fonts.css"`. With a bundler, `@snowztech/ui-css/fonts.css` brings the files along.
- The fonts use `font-display: optional`: text never changes font while someone reads. A page whose fonts aren't ready at first paint keeps the fallback, and the next page uses the cached files.
