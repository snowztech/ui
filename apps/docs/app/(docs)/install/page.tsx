import { Code } from "../../../components/code";
import { Snippets } from "../../../components/snippets";

export default function Install() {
  return (
    <>
      <h1>install</h1>
      <p className="lede">
        Three packages. Pick the one that matches your stack.
      </p>

      <div className="install-picker">
        <a href="#react"><span className="sn-meta">react</span><span>@snowztech/ui</span></a>
        <a href="#static"><span className="sn-meta">static html</span><span>@snowztech/ui-css</span></a>
        <a href="#other"><span className="sn-meta">vue · svelte · solid</span><span>@snowztech/ui-css</span></a>
      </div>

      <h2 id="react">via React</h2>
      <p>Next.js, Remix, Vite, React Router, anything with React 18+.</p>
      <Code lang="bash">{`pnpm add @snowztech/ui`}</Code>
      <details className="docs-details">
        <summary>npm · yarn · bun</summary>
        <Code lang="bash">{`npm install @snowztech/ui`}</Code>
        <Code lang="bash">{`yarn add @snowztech/ui`}</Code>
        <Code lang="bash">{`bun add @snowztech/ui`}</Code>
      </details>
      <p>Import the styles once at the root, then use components.</p>
      <Code lang="tsx" filename="app/layout.tsx">{`import "@snowztech/ui/styles.css";

import { MarkCrystal } from "@snowztech/ui";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MarkCrystal size={32} />
        {children}
      </body>
    </html>
  );
}`}</Code>
      <p style={{ color: "var(--sn-fg-muted)", fontSize: "var(--sn-text-xs)" }}>
        Tokens only? Import <code>@snowztech/ui/tokens.css</code> instead.
      </p>

      <h2 id="static">via static HTML</h2>
      <p>One <code>&lt;link&gt;</code>. Plain pages, MDX, Astro, Hugo, anywhere.</p>
      <Code lang="html">{`<link rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/@snowztech/ui-css@0.2/dist/snowztech-ui.min.css">

<button class="sn-btn sn-btn--primary">Ship it</button>
<span class="sn-pulse sn-pulse--success">
  <span class="sn-pulse__dot"></span><span>online</span>
</span>`}</Code>
      <p>For interactive bits (copy buttons, theme toggle), add the JS file too.</p>
      <Code lang="html">{`<script type="module"
        src="https://cdn.jsdelivr.net/npm/@snowztech/ui-js@0.2/dist/snowztech-ui.esm.js"></script>

<button class="sn-copy-btn" data-sn-copy="hello@snowz.ai" aria-label="copy">
  <!-- icons -->
</button>

<button class="sn-theme-toggle" data-sn-theme-toggle aria-label="toggle theme">
  <span class="sn-theme-toggle__indicator"></span>
</button>`}</Code>
      <details className="docs-details">
        <summary>npm install (for bundlers)</summary>
        <Code lang="bash">{`pnpm add @snowztech/ui-css @snowztech/ui-js`}</Code>
        <Code lang="ts">{`import "@snowztech/ui-css";
import "@snowztech/ui-js/auto";`}</Code>
      </details>

      <h2 id="other">via Vue, Svelte, Solid…</h2>
      <p>
        Same answer: pull the CSS, render the markup. Every <code>sn-*</code> class works regardless of framework.
        A first-party Vue wrapper is on the roadmap.
      </p>
      <Snippets labels={["vue", "svelte"]}>
        <Code lang="html">{`<script setup>
  import "@snowztech/ui-css";
</script>

<template>
  <button class="sn-btn sn-btn--primary">Hello</button>
</template>`}</Code>
        <Code lang="html">{`<script>
  import "@snowztech/ui-css";
</script>

<button class="sn-btn sn-btn--primary">Hello</button>`}</Code>
      </Snippets>

      <h2>Theme</h2>
      <p>Dark by default. Set <code>data-theme=&quot;light&quot;</code> on any ancestor to switch.</p>
      <Code lang="html">{`<html data-theme="light">`}</Code>
      <p>Persist + toggle from a button:</p>
      <Snippets>
        <Code lang="html">{`<button class="sn-theme-toggle" data-sn-theme-toggle aria-label="toggle theme">
  <span class="sn-theme-toggle__indicator"></span>
</button>

<!-- include @snowztech/ui-js for the wiring -->`}</Code>
        <Code lang="tsx">{`import { ThemeToggle } from "@snowztech/ui/client";

<ThemeToggle />`}</Code>
      </Snippets>
    </>
  );
}
