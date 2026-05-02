const colors = [
  { name: "bg", v: "--sn-bg" },
  { name: "bg-elev-1", v: "--sn-bg-elev-1" },
  { name: "bg-elev-2", v: "--sn-bg-elev-2" },
  { name: "bg-inset", v: "--sn-bg-inset" },
  { name: "border", v: "--sn-border" },
  { name: "border-strong", v: "--sn-border-strong" },
  { name: "border-subtle", v: "--sn-border-subtle" },
  { name: "fg", v: "--sn-fg" },
  { name: "fg-muted", v: "--sn-fg-muted" },
  { name: "fg-subtle", v: "--sn-fg-subtle" },
  { name: "fg-faint", v: "--sn-fg-faint" },
  { name: "accent", v: "--sn-accent" },
  { name: "success", v: "--sn-success" },
  { name: "warning", v: "--sn-warning" },
  { name: "danger", v: "--sn-danger" },
];

const typeScale = [
  ["2xs", "--sn-text-2xs", 11],
  ["xs", "--sn-text-xs", 12],
  ["sm", "--sn-text-sm", 13],
  ["base", "--sn-text-base", 14],
  ["md", "--sn-text-md", 15],
  ["lg", "--sn-text-lg", 17],
  ["xl", "--sn-text-xl", 20],
  ["2xl", "--sn-text-2xl", 24],
  ["3xl", "--sn-text-3xl", 28],
  ["4xl", "--sn-text-4xl", 36],
] as const;

const spacing = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export default function Tokens() {
  return (
    <>
      <h1>tokens</h1>
      <p className="lede">
        Plain CSS variables. Use as <code>var(--sn-fg)</code> anywhere CSS goes.
      </p>

      <h2>Color</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
        {colors.map((c) => (
          <div key={c.v} style={{ border: "1px solid var(--sn-border)", padding: 12, display: "flex", gap: 12, alignItems: "center", borderRadius: "var(--sn-r-xs)" }}>
            <div style={{ width: 36, height: 36, background: `var(${c.v})`, border: "1px solid var(--sn-border-subtle)", borderRadius: "var(--sn-r-xs)" }} />
            <div>
              <div>{c.name}</div>
              <div style={{ color: "var(--sn-fg-faint)", fontSize: "var(--sn-text-2xs)" }}>{c.v}</div>
            </div>
          </div>
        ))}
      </div>

      <h2>Type scale</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        {typeScale.map(([name, v, px]) => (
          <div key={v} style={{ display: "grid", gridTemplateColumns: "60px 120px 1fr", gap: 16, alignItems: "baseline" }}>
            <span style={{ color: "var(--sn-fg-faint)", fontSize: "var(--sn-text-2xs)" }}>{name}</span>
            <span style={{ color: "var(--sn-fg-muted)", fontSize: "var(--sn-text-2xs)" }}>{px}px</span>
            <span style={{ fontSize: `var(${v})` }}>The quick brown fox</span>
          </div>
        ))}
      </div>

      <h2>Spacing</h2>
      <p style={{ color: "var(--sn-fg-muted)", fontSize: "var(--sn-text-xs)", marginBottom: 12 }}>
        4px base scale. Use for padding, margin, gap.
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
        {spacing.map((n) => (
          <div key={n} style={{ display: "grid", gridTemplateColumns: "60px 1fr", gap: 16, alignItems: "center" }}>
            <span style={{ color: "var(--sn-fg-faint)", fontSize: "var(--sn-text-2xs)" }}>--sn-s-{n}</span>
            <div style={{ height: 8, width: `var(--sn-s-${n})`, background: "var(--sn-fg-muted)" }} />
          </div>
        ))}
      </div>

      <h2>Radius</h2>
      <div style={{ display: "flex", gap: 16, alignItems: "flex-end" }}>
        {[
          ["none", "--sn-r-none"],
          ["xs", "--sn-r-xs"],
          ["sm", "--sn-r-sm"],
          ["md", "--sn-r-md"],
          ["lg", "--sn-r-lg"],
        ].map(([name, v]) => (
          <div key={v} style={{ display: "flex", flexDirection: "column", gap: 6, alignItems: "center" }}>
            <div style={{ width: 56, height: 56, background: "var(--sn-bg-elev-1)", border: "1px solid var(--sn-border)", borderRadius: `var(${v})` }} />
            <span style={{ color: "var(--sn-fg-faint)", fontSize: "var(--sn-text-2xs)" }}>{name}</span>
          </div>
        ))}
      </div>
    </>
  );
}
