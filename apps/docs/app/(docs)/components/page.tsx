import { MarkCrystal, Monogram, SnowWordmark, Avatar, AvatarStack, Pulse, Input, Textarea, Field } from "@snowztech/ui";
import { ThemeToggle } from "@snowztech/ui/client";
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
      <p>Single-line text input. Sizes <code>sm</code> / <code>md</code> / <code>lg</code>. Pass <code>invalid</code> for error state.</p>
      <div className="sn-preview sn-preview--column">
        <Input placeholder="Search…" />
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <Input size="sm" placeholder="small" />
          <Input placeholder="default" />
          <Input size="lg" placeholder="large" />
        </div>
        <Input defaultValue="not-an-email" invalid />
        <Input placeholder="disabled" disabled />
      </div>
      <Snippets>
        <Code lang="html">{`<input class="sn-input" placeholder="Search…" />
<input class="sn-input sn-input--sm" placeholder="small" />
<input class="sn-input sn-input--lg" placeholder="large" />
<input class="sn-input sn-input--invalid" value="not-an-email" />
<input class="sn-input" disabled placeholder="disabled" />`}</Code>
        <Code lang="tsx">{`import { Input } from "@snowztech/ui";

<Input placeholder="Search…" />
<Input size="sm" placeholder="small" />
<Input size="lg" placeholder="large" />
<Input invalid defaultValue="not-an-email" />
<Input disabled placeholder="disabled" />`}</Code>
      </Snippets>

      <h2>Textarea</h2>
      <p>Multi-line text. Resize vertical by default.</p>
      <div className="sn-preview sn-preview--column">
        <Textarea placeholder="Paste your text here…" />
        <Textarea defaultValue="boom" invalid />
      </div>
      <Snippets>
        <Code lang="html">{`<textarea class="sn-textarea" placeholder="Paste your text here…"></textarea>
<textarea class="sn-textarea sn-textarea--invalid">boom</textarea>`}</Code>
        <Code lang="tsx">{`import { Textarea } from "@snowztech/ui";

<Textarea placeholder="Paste your text here…" />
<Textarea invalid defaultValue="boom" />`}</Code>
      </Snippets>

      <h2>Field</h2>
      <p>Label + control + hint/error in one row. Use <code>Field</code> for forms; drop to <code>Label</code> if you need to compose manually.</p>
      <div className="sn-preview sn-preview--column">
        <Field label="Email" hint="We never share it." htmlFor="ex-email" required>
          <Input id="ex-email" type="email" placeholder="you@snowztech.com" />
        </Field>
        <Field label="Bio" htmlFor="ex-bio">
          <Textarea id="ex-bio" placeholder="A few words…" />
        </Field>
        <Field label="Username" htmlFor="ex-user" error="Already taken.">
          <Input id="ex-user" defaultValue="lucas" invalid />
        </Field>
      </div>
      <Snippets>
        <Code lang="html">{`<div class="sn-field">
  <label class="sn-label" for="email">Email<span class="sn-label__required">*</span></label>
  <input id="email" class="sn-input" type="email" placeholder="you@snowztech.com" />
  <span class="sn-hint">We never share it.</span>
</div>

<div class="sn-field">
  <label class="sn-label" for="user">Username</label>
  <input id="user" class="sn-input sn-input--invalid" value="lucas" />
  <span class="sn-error" role="alert">Already taken.</span>
</div>`}</Code>
        <Code lang="tsx">{`import { Field, Input, Textarea } from "@snowztech/ui";

<Field label="Email" hint="We never share it." htmlFor="email" required>
  <Input id="email" type="email" placeholder="you@snowztech.com" />
</Field>

<Field label="Bio" htmlFor="bio">
  <Textarea id="bio" placeholder="A few words…" />
</Field>

<Field label="Username" htmlFor="user" error="Already taken.">
  <Input id="user" invalid defaultValue="lucas" />
</Field>`}</Code>
      </Snippets>

      <h2>Theme toggle</h2>
      <p>Tiny button that flips <code>data-theme</code> on <code>&lt;html&gt;</code> and persists to <code>localStorage</code>. React version is a client component.</p>
      <div className="sn-preview">
        <ThemeToggle />
        <ThemeToggle size={16} />
      </div>
      <Snippets>
        <Code lang="html">{`<button class="sn-theme-toggle" aria-label="toggle theme">
  <span class="sn-theme-toggle__indicator"></span>
</button>

<script>
  // wire up yourself: flip data-theme="light" on <html>, persist to localStorage.
</script>`}</Code>
        <Code lang="tsx">{`import { ThemeToggle } from "@snowztech/ui/client";

<ThemeToggle />
<ThemeToggle size={16} defaultTheme="dark" storageKey="theme" />`}</Code>
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
