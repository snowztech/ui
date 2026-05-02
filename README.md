<div align="center">
  <h1>snowztech / ui</h1>
  <p>Terminal-minimal React design system.</p>
  <p>
    <a href="https://www.npmjs.com/package/@snowztech/ui"><img src="https://img.shields.io/npm/v/@snowztech/ui.svg?label=npm&color=8ab4f8&labelColor=0a0a0a" alt="npm"></a>
    <a href="./LICENSE"><img src="https://img.shields.io/badge/license-MIT-8ab4f8?labelColor=0a0a0a" alt="license"></a>
  </p>
</div>

---

## Install

```bash
pnpm add @snowztech/ui
```

```tsx
import "@snowztech/ui/tokens.css";
import { MarkCrystal } from "@snowztech/ui";

<MarkCrystal size={32} />
```

Full docs and examples: see [`apps/docs`](./apps/docs) or run `pnpm dev`.

## Repo layout

```
packages/ui     # the published package — @snowztech/ui
apps/docs       # Next.js docs site with live examples
```

## Develop

```bash
pnpm install
pnpm dev          # docs + lib in watch mode
pnpm build        # build the publishable package
```

## Publish

This repo uses [changesets](https://github.com/changesets/changesets) for versioning.

```bash
pnpm changeset           # describe what changed
pnpm changeset version   # bump version + update CHANGELOG
pnpm -C packages/ui publish
```

## License

MIT — [Lucas Neves Pereira](https://github.com/lucasnevespereira)
