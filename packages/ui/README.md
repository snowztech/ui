# @snowztech/ui

Terminal-minimal React design system. Mono-first. One accent. Nothing decorative.

```bash
pnpm add @snowztech/ui
```

## Use

```tsx
import "@snowztech/ui/tokens.css";
import { MarkSnowflake, GithubIcon } from "@snowztech/ui";

export default function App() {
  return (
    <div>
      <MarkSnowflake size={32} />
      <GithubIcon size={16} />
    </div>
  );
}
```

## What's in the box

- **Brand mark**: `MarkSnowflake`, the snowztech mark. `SnowWordmark` and `Monogram` build on it.
- **Monogram**: wraps any mark in a tile (app icons, brand stamps).
- **Avatar**: image with initials fallback, circle/square, optional ring.
- **38 line icons**: 1.5 stroke, 24px viewBox, geometric.
- **Tokens**: CSS variables for color, type, spacing, radius. Dark + light themes.
- **Components**: `<Button>` (a link when given `href`), `<IconButton>`, `<Badge>`, `<Card>`, `<Kbd>`, `<Input>`, `<Textarea>`, `<Field>`, `<Callout>`, `<Terminal>`, `<Pulse>`.
- **Client components**: `<Segmented>`, `<Tabs>`, `<ThemeToggle>`, `<CopyButton>`, `<CodeBlock>` from `@snowztech/ui/client`.
- **Page structure stays as classes** from `@snowztech/ui-css`: `.sn-header`, `.sn-footer`, `.sn-faq`, `.sn-container`, `.sn-table`, `.sn-navlist`, `.sn-prose`. The markup is the whole API there, so a wrapper would add a layer and no types. A React component exists where it adds typed variants or behavior.

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
- **BEM modifiers for variants** (`.sn-btn--primary`, `.sn-card--raised`)
- Inline `style` only for one-off overrides

## License

MIT · Lucas Neves Pereira
