import { Monogram, MarkSnowflake } from "@snowztech/ui";
import pkg from "@snowztech/ui/package.json";
import { Code } from "../../components/code";
import { Snippets } from "../../components/snippets";

export default function Home() {
  return (
    <div className="overview">
      <header className="overview-hero">
        <Monogram size={48} mark={MarkSnowflake} radius={8} glyphScale={0.55} />
        <h1>The snowztech design system.</h1>
        <p>
          Tokens, components, and the snowflake mark behind every{" "}
          <a href="https://snowztech.com">snowztech</a> product. Works in static HTML, React, and beyond.
        </p>
      </header>

      <Snippets labels={["react", "static html"]}>
        <Code lang="bash">{`pnpm add @snowztech/ui`}</Code>
        <Code lang="html">{`<link rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@snowztech/ui-css@0.8/dist/snowztech-ui.min.css">`}</Code>
      </Snippets>

      <nav className="overview-links">
        <a href="/identity">identity →</a>
        <a href="/install">install →</a>
        <a href="/components">components →</a>
        <a href="/demo.html" target="_blank" rel="noreferrer">demo →</a>
      </nav>

      <footer className="overview-meta">
        v{pkg.version} · <a href="https://snowztech.com">a snowztech project</a>
      </footer>
    </div>
  );
}
