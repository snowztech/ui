import { MarkCrystal, Monogram, SnowWordmark, Avatar, AvatarStack } from "@snowztech/ui";
import { Code } from "../../../components/code";

const previewBox: React.CSSProperties = {
  border: "1px solid var(--sn-border)",
  padding: 32,
  borderRadius: "var(--sn-r-xs)",
  marginBottom: 8,
};

export default function Components() {
  return (
    <>
      <h1>components</h1>
      <p className="lede">React primitives and CSS utility classes.</p>

      <h2>Mark</h2>
      <p>The brand glyph. SVG, scales with <code>size</code>, colors with <code>color</code>.</p>
      <div style={{ ...previewBox, display: "flex", gap: 32, alignItems: "center" }}>
        <MarkCrystal size={20} />
        <MarkCrystal size={32} />
        <MarkCrystal size={48} />
        <MarkCrystal size={64} color="var(--sn-accent)" />
      </div>
      <details className="docs-details">
        <summary>code</summary>
        <Code lang="tsx">{`<MarkCrystal size={32} />
<MarkCrystal size={48} color="var(--sn-accent)" />`}</Code>
      </details>
      <p style={{ color: "var(--sn-fg-muted)", fontSize: "var(--sn-text-xs)" }}>
        Seven other variants live in the <a href="/logo-lab">logo lab</a>.
      </p>

      <h2>Monogram</h2>
      <p>Wraps any mark in a tile. Use for app icons and brand stamps.</p>
      <div style={{ ...previewBox, display: "flex", gap: 16, alignItems: "center" }}>
        <Monogram size={48} mark={MarkCrystal} radius={6} />
        <Monogram size={64} mark={MarkCrystal} radius={10} />
        <Monogram size={64} mark={MarkCrystal} bg="#f7f7f5" fg="#161616" radius={10} />
      </div>
      <details className="docs-details">
        <summary>code</summary>
        <Code lang="tsx">{`<Monogram size={64} mark={MarkCrystal} radius={10} />
<Monogram size={64} mark={MarkCrystal} bg="#f7f7f5" fg="#161616" radius={10} />`}</Code>
      </details>

      <h2>Avatar</h2>
      <p>Image with initials fallback. Circle or square shape, optional ring.</p>
      <div style={{ ...previewBox, display: "flex", gap: 16, alignItems: "center" }}>
        <Avatar size={28} name="DR" />
        <Avatar size={36} name="DR" />
        <Avatar size={48} name="DR" />
        <Avatar size={48} name="DR" shape="square" />
        <Avatar size={48} name="DR" ring />
        <AvatarStack overlap={10}>
          <Avatar size={32} name="Ada" ring />
          <Avatar size={32} name="Bo" ring />
          <Avatar size={32} name="Cy" ring />
        </AvatarStack>
      </div>
      <details className="docs-details">
        <summary>code</summary>
        <Code lang="tsx">{`<Avatar size={48} name="DR" />
<Avatar size={48} src="/me.jpg" name="DR" />
<Avatar size={48} name="DR" shape="square" ring />

<AvatarStack overlap={10}>
  <Avatar size={32} name="Ada" ring />
  <Avatar size={32} name="Bo" ring />
</AvatarStack>`}</Code>
      </details>

      <h2>Wordmark</h2>
      <div style={previewBox}>
        <SnowWordmark size={24} />
      </div>
      <details className="docs-details">
        <summary>code</summary>
        <Code lang="tsx">{`<SnowWordmark size={24} />`}</Code>
      </details>

      <h2>Buttons</h2>
      <p>CSS classes. <code>.sn-btn</code> + a variant. Sizes via <code>--sm</code> / <code>--lg</code>.</p>
      <div style={{ ...previewBox, display: "flex", flexDirection: "column", gap: 16 }}>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          <button className="sn-btn sn-btn--primary">Primary</button>
          <button className="sn-btn sn-btn--secondary">Secondary</button>
          <button className="sn-btn sn-btn--ghost">Ghost</button>
          <button className="sn-btn sn-btn--accent">Accent</button>
          <button className="sn-btn sn-btn--danger">Danger</button>
        </div>
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <button className="sn-btn sn-btn--secondary sn-btn--sm">Small</button>
          <button className="sn-btn sn-btn--secondary">Default</button>
          <button className="sn-btn sn-btn--secondary sn-btn--lg">Large</button>
        </div>
      </div>
      <details className="docs-details">
        <summary>code</summary>
        <Code lang="tsx">{`{/* variants */}
<button className="sn-btn sn-btn--primary">Primary</button>
<button className="sn-btn sn-btn--secondary">Secondary</button>
<button className="sn-btn sn-btn--ghost">Ghost</button>
<button className="sn-btn sn-btn--accent">Accent</button>
<button className="sn-btn sn-btn--danger">Danger</button>

{/* sizes */}
<button className="sn-btn sn-btn--primary sn-btn--sm">Small</button>
<button className="sn-btn sn-btn--primary sn-btn--lg">Large</button>`}</Code>
      </details>

      <h2>Badges</h2>
      <div style={{ ...previewBox, display: "flex", gap: 8 }}>
        <span className="sn-badge">default</span>
        <span className="sn-badge sn-badge--accent">accent</span>
        <span className="sn-badge sn-badge--success">ok</span>
        <span className="sn-badge sn-badge--warning">warn</span>
        <span className="sn-badge sn-badge--danger">err</span>
      </div>
      <details className="docs-details">
        <summary>code</summary>
        <Code lang="tsx">{`<span className="sn-badge">default</span>
<span className="sn-badge sn-badge--accent">accent</span>
<span className="sn-badge sn-badge--success">ok</span>`}</Code>
      </details>

      <h2>Input</h2>
      <div style={previewBox}>
        <input className="sn-input" placeholder="Search…" />
      </div>
      <details className="docs-details">
        <summary>code</summary>
        <Code lang="tsx">{`<input className="sn-input" placeholder="Search…" />`}</Code>
      </details>

      <h2>Card</h2>
      <p>Flat by default. Compose with modifier classes: <code>--rounded</code>, <code>--accent</code>, <code>--inset</code>.</p>

      <div style={{ ...previewBox, display: "flex", flexDirection: "column", gap: 16 }}>
        <div className="sn-card">
          <div style={{ fontWeight: 700, marginBottom: 4 }}>Default</div>
          <div style={{ color: "var(--sn-fg-muted)" }}>One border. Flat. Square corners.</div>
        </div>

        <div className="sn-card sn-card--rounded">
          <div style={{ fontWeight: 700, marginBottom: 4 }}>Rounded</div>
          <div style={{ color: "var(--sn-fg-muted)" }}>Bigger radius for friendlier surfaces (link cards, tiles).</div>
        </div>

        <div className="sn-card sn-card--accent">
          <div style={{ fontWeight: 700, marginBottom: 4, color: "var(--sn-accent)" }}>Accent</div>
          <div style={{ color: "var(--sn-fg-muted)" }}>Use sparingly to draw attention.</div>
        </div>

        <div className="sn-card sn-card--inset">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 8 }}>
            <span style={{ fontWeight: 700 }}>Inset + header</span>
            <span className="sn-badge sn-badge--success">ok</span>
          </div>
          <div style={{ color: "var(--sn-fg-muted)" }}>Recessed background. Pairs with header rows for stat tiles.</div>
        </div>
      </div>
      <details className="docs-details">
        <summary>code</summary>
        <Code lang="tsx">{`<div className="sn-card">…</div>
<div className="sn-card sn-card--rounded">…</div>
<div className="sn-card sn-card--accent">…</div>
<div className="sn-card sn-card--inset">…</div>

{/* compose: rounded + accent */}
<div className="sn-card sn-card--rounded sn-card--accent">…</div>`}</Code>
      </details>
    </>
  );
}
