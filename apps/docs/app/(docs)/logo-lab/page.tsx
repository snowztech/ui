import { markVariants } from "@snowztech/ui";
import { Code } from "../../../components/code";

export default function LogoLab() {
  return (
    <>
      <h1>logo lab</h1>
      <p className="lede">Eight mark variants. Crystal is canonical.</p>

      <p style={{ color: "var(--sn-fg-muted)", marginBottom: 32 }}>
        Each shown on dark and light, with a wordmark lockup and favicon scale. Pick one and
        import it by name.
      </p>

      <Code lang="ts">{`import { MarkCrystal } from "@snowztech/ui";`}</Code>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginTop: 24 }}>
        {markVariants.map(({ id, name, sub, Mark, exportName }) => (
          <div key={id} style={{
            border: "1px solid var(--sn-border)",
            borderRadius: "var(--sn-r-xs)",
            padding: 20,
            display: "flex", flexDirection: "column", gap: 16,
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
              <span style={{ fontWeight: 700 }}>{name}</span>
              <span style={{ color: "var(--sn-fg-faint)", fontSize: "var(--sn-text-2xs)" }}>{sub}</span>
            </div>

            <div style={{
              display: "grid", gridTemplateColumns: "1fr 1fr",
              border: "1px solid var(--sn-border-subtle)",
              borderRadius: "var(--sn-r-xs)",
              overflow: "hidden",
            }}>
              <div style={{
                background: "#0a0a0a", aspectRatio: "1 / 1",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <Mark size={88} color="#ffffff" />
              </div>
              <div style={{
                background: "#f7f7f5", aspectRatio: "1 / 1",
                display: "flex", alignItems: "center", justifyContent: "center",
                borderLeft: "1px solid var(--sn-border-subtle)",
              }}>
                <Mark size={88} color="#161616" />
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <Mark size={20} color="var(--sn-fg)" />
              <span style={{ fontWeight: 700, fontSize: 16, letterSpacing: "-0.01em" }}>snowztech</span>
            </div>

            <div style={{ display: "flex", gap: 10, alignItems: "flex-end", marginTop: 4 }}>
              {[16, 24, 32, 48].map((s) => (
                <div key={s} style={{ display: "flex", flexDirection: "column", gap: 4, alignItems: "center" }}>
                  <div style={{
                    width: s, height: s,
                    background: "#0a0a0a",
                    borderRadius: s > 24 ? 4 : 2,
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <Mark size={Math.round(s * 0.65)} color="#ffffff" />
                  </div>
                  <span style={{ color: "var(--sn-fg-faint)", fontSize: 9 }}>{s}</span>
                </div>
              ))}
            </div>

            <code style={{ fontSize: "var(--sn-text-2xs)", color: "var(--sn-fg-faint)" }}>
              {exportName}
            </code>
          </div>
        ))}
      </div>
    </>
  );
}
