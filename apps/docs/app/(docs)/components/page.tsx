import { MarkCrystal, Monogram, SnowWordmark, Avatar, AvatarStack, Pulse } from "@snowztech/ui";
import { Code } from "../../../components/code";
import { Snippets } from "../../../components/snippets";

export default function Components() {
  return (
    <>
      <h1>components</h1>
      <p className="lede">
        Same DOM in static HTML or React. Each component lists both. Pick the tab that matches your stack.
      </p>

      <h2>Mark</h2>
      <p>The brand glyph. SVG, scales with <code>size</code>, colors via <code>currentColor</code>.</p>
      <div className="sn-preview">
        <MarkCrystal size={20} />
        <MarkCrystal size={32} />
        <MarkCrystal size={48} />
        <span style={{ color: "var(--sn-accent)" }}><MarkCrystal size={64} /></span>
      </div>
      <Snippets>
        <Code lang="html">{`<svg class="sn-mark sn-mark--lg" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
  <!-- crystal paths… -->
</svg>

<!-- pre-built sprite -->
<svg class="sn-mark sn-mark--lg"><use href="/icons/marks.svg#crystal"/></svg>`}</Code>
        <Code lang="tsx">{`import { MarkCrystal } from "@snowztech/ui";

<MarkCrystal size={48} />
<MarkCrystal size="lg" />
<MarkCrystal size={64} color="var(--sn-accent)" />`}</Code>
      </Snippets>
      <p style={{ color: "var(--sn-fg-muted)", fontSize: "var(--sn-text-xs)" }}>
        Seven other variants live in the <a href="/logo-lab">logo lab</a>.
      </p>

      <h2>Monogram</h2>
      <p>Wraps any mark in a tile. App icons, brand stamps.</p>
      <div className="sn-preview">
        <Monogram size={48} mark={MarkCrystal} radius={6} />
        <Monogram size={64} mark={MarkCrystal} radius={10} />
        <Monogram size={64} mark={MarkCrystal} bg="#f7f7f5" fg="#161616" radius={10} />
      </div>
      <Snippets>
        <Code lang="html">{`<span class="sn-monogram sn-monogram--md">
  <svg class="sn-mark sn-mark--md" viewBox="0 0 32 32"><!-- mark --></svg>
</span>

<span class="sn-monogram sn-monogram--inverse">
  <svg class="sn-mark sn-mark--md"><!-- mark --></svg>
</span>`}</Code>
        <Code lang="tsx">{`import { Monogram, MarkCrystal } from "@snowztech/ui";

<Monogram size={64} mark={MarkCrystal} />
<Monogram size={64} mark={MarkCrystal} bg="#f7f7f5" fg="#161616" radius={10} />`}</Code>
      </Snippets>

      <h2>Avatar</h2>
      <p>Image with initials fallback. Circle or square. Optional ring.</p>
      <div className="sn-preview">
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
      <Snippets>
        <Code lang="html">{`<span class="sn-avatar sn-avatar--lg">DR</span>
<span class="sn-avatar sn-avatar--lg sn-avatar--square">DR</span>
<span class="sn-avatar sn-avatar--lg sn-avatar--ring">DR</span>

<span class="sn-avatar sn-avatar--md">
  <img src="/me.jpg" alt="">
</span>

<span class="sn-avatar-stack">
  <span class="sn-avatar sn-avatar--md sn-avatar--ring">A</span>
  <span class="sn-avatar sn-avatar--md sn-avatar--ring">B</span>
  <span class="sn-avatar sn-avatar--md sn-avatar--ring">C</span>
</span>`}</Code>
        <Code lang="tsx">{`import { Avatar, AvatarStack } from "@snowztech/ui";

<Avatar size={48} name="DR" />
<Avatar size={48} src="/me.jpg" name="DR" />
<Avatar size={48} name="DR" shape="square" ring />

<AvatarStack overlap={10}>
  <Avatar size={32} name="Ada" ring />
  <Avatar size={32} name="Bo" ring />
</AvatarStack>`}</Code>
      </Snippets>

      <h2>Wordmark</h2>
      <div className="sn-preview">
        <SnowWordmark size={24} />
      </div>
      <Snippets>
        <Code lang="html">{`<span class="sn-wordmark" style="--sn-wordmark-size: 24px">
  snowztech<span class="sn-wordmark__dot">.</span>
</span>`}</Code>
        <Code lang="tsx">{`import { SnowWordmark } from "@snowztech/ui";

<SnowWordmark size={24} />`}</Code>
      </Snippets>

      <h2>Pulse</h2>
      <p>Status dot with breathing animation.</p>
      <div className="sn-preview">
        <Pulse label="online" />
        <Pulse color="var(--sn-warning)" label="degraded" />
        <Pulse color="var(--sn-danger)" label="down" />
      </div>
      <Snippets>
        <Code lang="html">{`<span class="sn-pulse sn-pulse--success">
  <span class="sn-pulse__dot"></span>
  <span>online</span>
</span>

<span class="sn-pulse sn-pulse--warning">
  <span class="sn-pulse__dot"></span>
  <span>degraded</span>
</span>`}</Code>
        <Code lang="tsx">{`import { Pulse } from "@snowztech/ui";

<Pulse label="online" />
<Pulse color="var(--sn-warning)" label="degraded" />
<Pulse color="var(--sn-danger)" label="down" />`}</Code>
      </Snippets>

      <h2>Buttons</h2>
      <p><code>.sn-btn</code> + a variant. Sizes via <code>--sm</code> / <code>--lg</code>.</p>
      <div className="sn-preview sn-preview--column">
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
      <Snippets labels={["html / react"]}>
        <Code lang="tsx">{`{/* variants */}
<button className="sn-btn sn-btn--primary">Primary</button>
<button className="sn-btn sn-btn--secondary">Secondary</button>
<button className="sn-btn sn-btn--ghost">Ghost</button>
<button className="sn-btn sn-btn--accent">Accent</button>
<button className="sn-btn sn-btn--danger">Danger</button>

{/* sizes */}
<button className="sn-btn sn-btn--primary sn-btn--sm">Small</button>
<button className="sn-btn sn-btn--primary sn-btn--lg">Large</button>`}</Code>
      </Snippets>

      <h2>Badges</h2>
      <div className="sn-preview">
        <span className="sn-badge">default</span>
        <span className="sn-badge sn-badge--accent">accent</span>
        <span className="sn-badge sn-badge--success">ok</span>
        <span className="sn-badge sn-badge--warning">warn</span>
        <span className="sn-badge sn-badge--danger">err</span>
      </div>
      <Snippets labels={["html / react"]}>
        <Code lang="tsx">{`<span className="sn-badge">default</span>
<span className="sn-badge sn-badge--accent">accent</span>
<span className="sn-badge sn-badge--success">ok</span>
<span className="sn-badge sn-badge--warning">warn</span>
<span className="sn-badge sn-badge--danger">err</span>`}</Code>
      </Snippets>

      <h2>Input</h2>
      <div className="sn-preview">
        <input className="sn-input" placeholder="Search…" />
      </div>
      <Snippets labels={["html / react"]}>
        <Code lang="tsx">{`<input className="sn-input" placeholder="Search…" />`}</Code>
      </Snippets>

      <h2>Card</h2>
      <p>Flat by default. Compose with <code>--rounded</code>, <code>--accent</code>, <code>--inset</code>.</p>
      <div className="sn-preview sn-preview--column">
        <div className="sn-card">
          <div style={{ fontWeight: 700, marginBottom: 4 }}>Default</div>
          <div style={{ color: "var(--sn-fg-muted)" }}>One border. Flat. Square corners.</div>
        </div>
        <div className="sn-card sn-card--rounded">
          <div style={{ fontWeight: 700, marginBottom: 4 }}>Rounded</div>
          <div style={{ color: "var(--sn-fg-muted)" }}>Bigger radius for friendlier surfaces.</div>
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
      <Snippets labels={["html / react"]}>
        <Code lang="tsx">{`<div className="sn-card">…</div>
<div className="sn-card sn-card--rounded">…</div>
<div className="sn-card sn-card--accent">…</div>
<div className="sn-card sn-card--inset">…</div>

{/* compose */}
<div className="sn-card sn-card--rounded sn-card--accent">…</div>`}</Code>
      </Snippets>
    </>
  );
}
