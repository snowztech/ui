<div align="center">
  <h1>snowztech / ui</h1>
  <p>Terminal-minimal design system. Static HTML, React, anywhere.</p>
  <p>
    <a href="https://www.npmjs.com/package/@snowztech/ui"><img src="https://img.shields.io/npm/v/@snowztech/ui.svg?label=@snowztech/ui&color=8ab4f8&labelColor=0a0a0a" alt="npm @snowztech/ui"></a>
    <a href="https://www.npmjs.com/package/@snowztech/ui-css"><img src="https://img.shields.io/npm/v/@snowztech/ui-css.svg?label=@snowztech/ui-css&color=8ab4f8&labelColor=0a0a0a" alt="npm @snowztech/ui-css"></a>
    <a href="./LICENSE"><img src="https://img.shields.io/badge/license-MIT-8ab4f8?labelColor=0a0a0a" alt="license"></a>
  </p>
</div>

---

CSS is the contract. The same `sn-*` classes power the React build, vanilla HTML pages, and any future Vue/Svelte/Solid wrapper. Pick the package that matches your stack.

## React

```bash
pnpm add @snowztech/ui
```

```tsx
import "@snowztech/ui/styles.css";
import { MarkCrystal } from "@snowztech/ui";

<MarkCrystal size={32} />
```

## Static HTML

```html
<link rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/@snowztech/ui-css@0.2/dist/snowztech-ui.min.css">
<script type="module"
        src="https://cdn.jsdelivr.net/npm/@snowztech/ui-js@0.2/dist/snowztech-ui.esm.js"></script>

<button class="sn-btn sn-btn--primary">Ship it</button>
```

The JS file is optional. Only needed for stateful bits (copy button, theme toggle). Plain styling needs no JS.

## Packages

| Package | What it is | When to use |
|---|---|---|
| [`@snowztech/ui-css`](./packages/ui-css) | Tokens + component classes | Static HTML, Vue, Svelte, anything non-React |
| [`@snowztech/ui-js`](./packages/ui-js) | Vanilla bindings for `data-sn-*` | Static HTML that needs interactivity |
| [`@snowztech/ui`](./packages/ui) | React components | React, Next.js, Remix, Vite |

Full docs and live examples: see [`apps/docs`](./apps/docs) or run `pnpm dev:docs`.

## Repo layout

```
packages/
  ui-css/    # @snowztech/ui-css   tokens + component classes (CSS)
  ui-js/     # @snowztech/ui-js    vanilla bindings (TS)
  ui/        # @snowztech/ui       React components
apps/
  docs/      # Next.js docs site
```

## Develop

```bash
pnpm install
pnpm dev          # all packages + docs in watch mode
pnpm dev:docs     # just the docs
pnpm build        # build everything
pnpm typecheck
```

The docs site dogfoods all three packages, including a `/demo.html` page proving the no-bundler path works.

## Publish

[Changesets](https://github.com/changesets/changesets) for versioning.

```bash
pnpm changeset
pnpm changeset version
pnpm -r publish
```

## License

MIT · [Lucas Neves Pereira](https://github.com/lucasnevespereira)
