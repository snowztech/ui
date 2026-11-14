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
  ["5xl", "--sn-text-5xl", 48],
] as const;

const accentPresets = ["ice", "glacier", "neutral"];

const spacing = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export default function Tokens() {
  return (
    <>
      <h1>tokens</h1>
      <p className="lede">
        Plain CSS variables. Use as <code>var(--sn-fg)</code> anywhere CSS goes.
      </p>

      <h2>Fonts</h2>
      <div style={{ display: "grid", gap: 8 }}>
        {[
          ["--sn-font-mono", "JetBrains Mono in frost, Geist Mono in powder."],
          ["--sn-font-sans", "Geist. Used in powder."],
          ["--sn-font-body", "Text. Follows data-sn-mode."],
          ["--sn-font-display", "h1 and h2. Follows data-sn-mode, or your own font."],
          ["--sn-font-control", "Buttons. Follows data-sn-mode."],
        ].map(([v, note]) => (
          <div key={v} style={{ display: "grid", gridTemplateColumns: "minmax(0, 140px) minmax(0, 1fr)", gap: 16, alignItems: "baseline" }}>
            <code style={{ fontSize: "var(--sn-text-xs)", color: "var(--sn-fg-muted)" }}>{v}</code>
            <span style={{ fontFamily: `var(${v})`, fontSize: "var(--sn-text-lg)" }}>{note}</span>
          </div>
        ))}
      </div>

      <h2>Accent presets</h2>
      <p>Set <code>data-sn-accent</code> on <code>&lt;html&gt;</code>. Hover, soft and border shades follow.</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(150px, 100%), 1fr))", gap: 12 }}>
        {accentPresets.map((a) => (
          <div key={a} data-sn-accent={a} style={{ border: "1px solid var(--sn-accent-border)", background: "var(--sn-accent-soft)", padding: 14, borderRadius: "var(--sn-radius-surface)", display: "flex", gap: 10, alignItems: "center" }}>
            <span style={{ width: 20, height: 20, borderRadius: "50%", background: "var(--sn-accent)" }} />
            <code style={{ color: "var(--sn-accent)" }}>{a}</code>
          </div>
        ))}
      </div>

      <h2>Color</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(200px, 100%), 1fr))", gap: 12 }}>
        {colors.map((c) => (
          <div key={c.v} style={{ border: "1px solid var(--sn-border)", padding: 12, display: "flex", gap: 12, alignItems: "center", borderRadius: "var(--sn-radius-control)" }}>
            <div style={{ width: 36, height: 36, background: `var(${c.v})`, border: "1px solid var(--sn-border-subtle)", borderRadius: "var(--sn-radius-chip)" }} />
            <div>
              <div>{c.name}</div>
              <div style={{ color: "var(--sn-fg-subtle)", fontSize: "var(--sn-text-2xs)" }}>{c.v}</div>
            </div>
          </div>
        ))}
      </div>

      <h2>Type scale</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        {typeScale.map(([name, v, px]) => (
          <div key={v} style={{ display: "grid", gridTemplateColumns: "48px 40px minmax(0, 1fr)", gap: 12, alignItems: "baseline" }}>
            <span style={{ color: "var(--sn-fg-subtle)", fontSize: "var(--sn-text-2xs)" }}>{name}</span>
            <span style={{ color: "var(--sn-fg-muted)", fontSize: "var(--sn-text-2xs)" }}>{px}px</span>
            <span style={{ fontSize: `var(${v})`, overflowWrap: "anywhere" }}>The quick brown fox</span>
          </div>
        ))}
      </div>

      <h2>Spacing</h2>
      <p style={{ color: "var(--sn-fg-muted)", fontSize: "var(--sn-text-xs)", marginBottom: 12 }}>
        4px base scale. Use for padding, margin, gap.
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
        {spacing.map((n) => (
          <div key={n} style={{ display: "grid", gridTemplateColumns: "60px minmax(0, 1fr)", gap: 16, alignItems: "center" }}>
            <span style={{ color: "var(--sn-fg-subtle)", fontSize: "var(--sn-text-2xs)" }}>--sn-s-{n}</span>
            <div style={{ height: 8, width: `var(--sn-s-${n})`, background: "var(--sn-fg-muted)" }} />
          </div>
        ))}
      </div>

      <h2>Rules</h2>
      <p>Components use these, never raw values. That is what makes them line up.</p>
      <div className="sn-table-wrap">
        <table className="sn-table">
          <thead><tr><th>rule</th><th>value</th><th>token</th></tr></thead>
          <tbody>
            {[
              ["control height", "28 / 36 / 44", "--sn-control-sm / md / lg"],
              ["chip radius", "4px", "--sn-radius-chip"],
              ["control radius", "6px", "--sn-radius-control"],
              ["surface radius", "10px", "--sn-radius-surface"],
              ["hover", "6% text tint", "--sn-hover, --sn-pressed"],
              ["focus", "accent border and soft glow", "--sn-focus-ring"],
              ["page column", "1080px", "--sn-container"],
            ].map(([rule, value, token]) => (
              <tr key={rule}><td>{rule}</td><td>{value}</td><td><code>{token}</code></td></tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>Radius</h2>
      <p>Three rules. Small inline labels are chips, things you press or type in are controls, things that hold content are surfaces.</p>
      <div style={{ display: "flex", gap: 16, alignItems: "flex-end" }}>
        {[
          ["chip · 4px", "--sn-radius-chip"],
          ["control · 6px", "--sn-radius-control"],
          ["surface · 10px", "--sn-radius-surface"],
        ].map(([name, v]) => (
          <div key={v} style={{ display: "flex", flexDirection: "column", gap: 6, alignItems: "center" }}>
            <div style={{ width: 56, height: 56, background: "var(--sn-bg-elev-1)", border: "1px solid var(--sn-border)", borderRadius: `var(${v})` }} />
            <span style={{ color: "var(--sn-fg-subtle)", fontSize: "var(--sn-text-2xs)" }}>{name}</span>
          </div>
        ))}
      </div>
    </>
  );
}
