import { Code } from "../../../components/code";

export default function Install() {
  return (
    <>
      <h1>install</h1>
      <p className="lede">
        React 18+. Works with Next.js, Remix, Vite, and React Router.{" "}
        <span style={{ color: "var(--sn-fg-faint)" }}>
          Tokens.css is framework-agnostic.
        </span>
      </p>

      <h2>Add the package</h2>
      <Code lang="bash">{`pnpm add @snowztech/ui`}</Code>

      <details className="docs-details">
        <summary>npm · yarn · bun</summary>
        <Code lang="bash">{`npm install @snowztech/ui`}</Code>
        <Code lang="bash">{`yarn add @snowztech/ui`}</Code>
        <Code lang="bash">{`bun add @snowztech/ui`}</Code>
      </details>

      <h2>Import the css</h2>
      <p>Once, at the root of your app.</p>
      <Code lang="ts">{`import "@snowztech/ui/tokens.css";`}</Code>

      <h2>Use it</h2>
      <Code lang="tsx" filename="app/logo.tsx">{`import { MarkCrystal } from "@snowztech/ui";

export default function Logo() {
  return <MarkCrystal size={32} />;
}`}</Code>

      <h2>Theme</h2>
      <p>Dark by default. Set <code>data-theme=&quot;light&quot;</code> on any ancestor to switch.</p>
      <Code lang="html">{`<html data-theme="light">`}</Code>

      <h2>Theme toggle (optional)</h2>
      <p>Drop the toggle anywhere. Persists to <code>localStorage</code>.</p>
      <Code lang="tsx">{`import { ThemeToggle } from "@snowztech/ui/client";

<ThemeToggle />`}</Code>
    </>
  );
}
