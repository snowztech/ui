import { Monogram, MarkCrystal } from "@snowztech/ui";
import { Code } from "../../components/code";
import { Snippets } from "../../components/snippets";

export default function Home() {
  return (
    <div className="overview">
      <header className="overview-hero">
        <Monogram size={48} mark={MarkCrystal} radius={8} glyphScale={0.55} />
        <h1>A personal design system.</h1>
        <p>
          Tokens, components, and brand marks. Mono-first. One accent. Built for{" "}
          <a href="https://snowztech.com">snowztech</a>. Works in static HTML, React, and beyond.
        </p>
      </header>

      <Snippets labels={["react", "static html"]}>
        <Code lang="bash">{`pnpm add @snowztech/ui`}</Code>
        <Code lang="html">{`<link rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@snowztech/ui-css@0.2/dist/snowztech-ui.min.css">`}</Code>
      </Snippets>

      <nav className="overview-links">
        <a href="/install">install →</a>
        <a href="/components">components →</a>
        <a href="/demo.html" target="_blank" rel="noreferrer">demo →</a>
      </nav>

      <footer className="overview-meta">
        v0.2.0 · built by{" "}
        <a href="https://github.com/lucasnevespereira" target="_blank" rel="noreferrer">
          Lucas Neves Pereira
        </a>
      </footer>
    </div>
  );
}
