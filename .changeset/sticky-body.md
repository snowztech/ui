---
"@snowztech/ui-css": patch
---

Sticky headers stay stuck on long pages. `body` now uses `min-height: 100%` instead of `height: 100%`, which capped it at one screen.
