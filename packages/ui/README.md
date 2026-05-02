# @snowztech/ui

Terminal-minimal React design system. Mono-first. One accent. Nothing decorative.

```bash
pnpm add @snowztech/ui
```

## Use

```tsx
import "@snowztech/ui/tokens.css";
import { MarkCrystal, GithubIcon } from "@snowztech/ui";

export default function App() {
  return (
    <div>
      <MarkCrystal size={32} />
      <GithubIcon size={16} />
    </div>
  );
}
```

## What's in the box

- **Brand marks**: `MarkCrystal` and 7 alternative glyphs in the [logo lab](https://github.com/snowztech/ui).
- **Monogram**: wraps any mark in a tile (app icons, brand stamps).
- **Avatar**: image with initials fallback, circle/square, optional ring.
- **38 line icons**: 1.5 stroke, 24px viewBox, geometric.
- **Tokens**: CSS variables for color, type, spacing, radius. Dark + light themes.
- **CSS primitives**: `.sn-btn`, `.sn-card`, `.sn-badge`, `.sn-input`, `.sn-kbd`.
- **Client components**: `<ThemeToggle>`, `<CopyButton>`, `<Pulse>` from `@snowztech/ui/client`.

## Theme

Dark by default. Set `data-theme="light"` on any ancestor:

```html
<html data-theme="light">
```

Or use the toggle:

```tsx
import { ThemeToggle } from "@snowztech/ui/client";

<ThemeToggle />
```

## Philosophy

- **CSS classes for static primitives** (Card, Button, Badge, Input)
- **React components for the JS-needing stuff** (Mark, Avatar, ThemeToggle, Pulse, CopyButton)
- **BEM modifiers for variants** (`.sn-btn--primary`, `.sn-card--rounded`)
- Inline `style` only for one-off overrides

## License

MIT · Lucas Neves Pereira
