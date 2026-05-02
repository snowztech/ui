import { Monogram, MarkCrystal } from "@snowztech/ui";
import { Code } from "../../components/code";

export default function Home() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 32, paddingTop: 24 }}>
      <Monogram size={72} mark={MarkCrystal} radius={10} glyphScale={0.55} />

      <div style={{ maxWidth: 560 }}>
        <h1 style={{ margin: "0 0 12px 0", fontSize: 28, fontWeight: 700, letterSpacing: "-0.02em" }}>
          A personal design system.
        </h1>
        <p style={{ margin: 0, color: "var(--sn-fg-muted)", fontSize: "var(--sn-text-md)", lineHeight: 1.6 }}>
          React components, icons, and tokens. Mono-first. One accent. Built for{" "}
          <a href="https://snowztech.com">snowztech</a> apps.
        </p>
      </div>

      <div style={{ maxWidth: 480 }}>
        <Code lang="bash">{`pnpm add @snowztech/ui`}</Code>
      </div>

      <div style={{ color: "var(--sn-fg-faint)", fontSize: "var(--sn-text-xs)", marginTop: 8 }}>
        v0.0.1 · built by{" "}
        <a href="https://github.com/lucasnevespereira" target="_blank" rel="noreferrer">
          Lucas Neves Pereira
        </a>{" "}
        · Paris
      </div>
    </div>
  );
}
