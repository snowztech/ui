import { MarkSnowflake } from "@snowztech/ui";
import { explorations } from "../../../components/logo-explorations";
import { Code } from "../../../components/code";

export default function LogoLab() {
  return (
    <>
      <h1>logo lab</h1>
      <p className="lede">
        The snowflake is the snowztech mark. It's the logo on snowztech.com and the one every
        product uses.
      </p>

      <div style={{
        display: "grid", gridTemplateColumns: "1fr 1fr",
        border: "1px solid var(--sn-border)", borderRadius: "var(--sn-radius-surface)",
        overflow: "hidden", margin: "24px 0 16px",
      }}>
        <div style={{ background: "#0a0a0a", aspectRatio: "4 / 3", display: "flex", alignItems: "center", justifyContent: "center", gap: 14 }}>
          <MarkSnowflake size={56} color="#e8e8e8" />
          <span style={{ color: "#e8e8e8", fontFamily: "var(--sn-font-mono)", fontWeight: 600, fontSize: 28, letterSpacing: "-0.04em" }}>snowztech</span>
        </div>
        <div style={{ background: "#f7f7f5", aspectRatio: "4 / 3", display: "flex", alignItems: "center", justifyContent: "center", gap: 14 }}>
          <MarkSnowflake size={56} color="#161616" />
          <span style={{ color: "#161616", fontFamily: "var(--sn-font-mono)", fontWeight: 600, fontSize: 28, letterSpacing: "-0.04em" }}>snowztech</span>
        </div>
      </div>

      <Code lang="ts">{`import { MarkSnowflake } from "@snowztech/ui";`}</Code>

      <h2 style={{ marginTop: 48 }}>explorations</h2>
      <p style={{ color: "var(--sn-fg-muted)" }}>
        Earlier directions, kept here for reference. They are not in the package; only the snowflake ships.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginTop: 24 }}>
        {explorations.map(({ id, name, sub, Mark }) => (
          <div key={id} style={{
            border: "1px solid var(--sn-border)",
            borderRadius: "var(--sn-radius-chip)",
            padding: 20,
            display: "flex", flexDirection: "column", gap: 16,
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
              <span style={{ fontWeight: 700 }}>{name}</span>
              <span style={{ color: "var(--sn-fg-subtle)", fontSize: "var(--sn-text-2xs)" }}>{sub}</span>
            </div>

            <div style={{
              display: "grid", gridTemplateColumns: "1fr 1fr",
              border: "1px solid var(--sn-border-subtle)",
              borderRadius: "var(--sn-radius-chip)",
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
              <span style={{ fontFamily: "var(--sn-font-mono)", fontWeight: 600, fontSize: 16, letterSpacing: "-0.03em" }}>snowztech</span>
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
                  <span style={{ color: "var(--sn-fg-subtle)", fontSize: 9 }}>{s}</span>
                </div>
              ))}
            </div>

          </div>
        ))}
      </div>
    </>
  );
}
