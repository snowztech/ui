import { MarkCrystal, Monogram, SnowWordmark, Avatar, AvatarStack, Pulse, Input, Textarea, Field, Callout, Terminal } from "@snowztech/ui";
import { ThemeToggle, CodeBlock } from "@snowztech/ui/client";
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

      <h2>File input</h2>
      <p>Styled via <code>::file-selector-button</code> — no JS, native input. Works in React too: <code>&lt;input type=&quot;file&quot; className=&quot;sn-file&quot; /&gt;</code>.</p>
      <div className="sn-preview sn-preview--column">
        <input type="file" className="sn-file" />
        <input type="file" className="sn-file" disabled />
      </div>
      <Snippets labels={["html / react"]}>
        <Code lang="tsx">{`<input type="file" className="sn-file" />
<input type="file" className="sn-file" accept=".pdf" />
<input type="file" className="sn-file" disabled />`}</Code>
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
        <Code lang="html">{`<button class="sn-theme-toggle" data-sn-theme-toggle aria-label="toggle theme">
  <span class="sn-theme-toggle__indicator"></span>
</button>

<!-- auto-wires [data-sn-theme-toggle] on load -->
<script type="module"
        src="https://cdn.jsdelivr.net/npm/@snowztech/ui-js/dist/snowztech-ui.esm.js"></script>`}</Code>
        <Code lang="tsx">{`import { ThemeToggle } from "@snowztech/ui/client";

<ThemeToggle />
<ThemeToggle size={16} defaultTheme="dark" storageKey="theme" />`}</Code>
      </Snippets>

      <h2>Prose</h2>
      <p>Wrap an article in <code>.sn-prose</code> and its plain HTML is styled: headings, lists, links, code, quotes and tables.</p>
      <div className="sn-preview sn-preview--column">
        <div className="sn-prose">
          <h3>Set it up by hand</h3>
          <p>Create a worktree for each task, on a new branch. <strong>Commits are shared</strong>, files are not. See <a href="#">the docs</a>.</p>
          <pre><code>git worktree add -b search ../app-search</code></pre>
          <blockquote>The fix is in. What should I do with it?</blockquote>
        </div>
      </div>
      <Snippets labels={["html / react"]}>
        <Code lang="html">{`<article class="sn-prose">
  <h1>Title</h1>
  <p>Text with <code>code</code> and <a href="#">a link</a>.</p>
  <pre><code>npm install</code></pre>
</article>`}</Code>
      </Snippets>

      <h2>Contents</h2>
      <p>A <code>.sn-toc</code> is a box that folds on phones. Inside <code>.sn-toc-layout</code> it becomes a sticky column beside the text from 1000px up, with an accent edge on the section being read. Put an optional header first, then the contents, then the text. With <code>@snowztech/ui-js</code>, <code>data-sn-toc</code> opens the list beside the text and follows the reading.</p>
      <div className="sn-preview sn-preview--column">
        <nav className="sn-toc" aria-label="On this page" style={{ margin: 0 }}>
          <details open>
            <summary>On this page</summary>
            <ul>
              <li><a href="#">Why one folder breaks</a></li>
              <li><a href="#">Set it up by hand</a></li>
              <li><a href="#">Clean up</a></li>
            </ul>
          </details>
        </nav>
      </div>
      <Snippets labels={["html"]}>
        <Code lang="html">{`<main class="sn-toc-layout">
  <header><h1>Title</h1></header>
  <nav class="sn-toc" data-sn-toc aria-label="On this page">
    <details>
      <summary>On this page</summary>
      <ul><li><a href="#setup">Set it up</a></li></ul>
    </details>
  </nav>
  <article class="sn-prose">…</article>
</main>`}</Code>
      </Snippets>

      <h2>Callout</h2>
      <p>A boxed aside for notes and warnings in an article. Plain by default, or <code>--note</code>, <code>--tip</code>, <code>--warning</code>, <code>--danger</code>. The title is optional.</p>
      <div className="sn-preview sn-preview--column">
        <Callout title="Note" variant="note">Worktrees share commits, not files.</Callout>
        <Callout title="Tip" variant="tip">Run <code>git worktree list</code> to see every worktree.</Callout>
        <Callout title="Warning" variant="warning">This deletes the branch too.</Callout>
        <Callout title="Danger" variant="danger">There is no undo.</Callout>
        <Callout>A plain callout, no title.</Callout>
      </div>
      <Snippets>
        <Code lang="html">{`<aside class="sn-callout sn-callout--warning">
  <strong class="sn-callout__title">Warning</strong>
  <p>This deletes the branch too.</p>
</aside>`}</Code>
        <Code lang="tsx">{`import { Callout } from "@snowztech/ui";

<Callout variant="warning" title="Warning">
  This deletes the branch too.
</Callout>`}</Code>
      </Snippets>

      <h2>Code block</h2>
      <p>A code block with a filename bar and a copy button. Works inside <code>.sn-prose</code>. In static HTML, leave <code>data-sn-copy</code> empty and the button copies the block&apos;s own code. Pass highlighted markup as children in React; <code>code</code> is still what gets copied.</p>
      <div className="sn-preview sn-preview--column">
        <CodeBlock filename="install.sh" code={`pnpm add @snowztech/ui\npnpm dev`} />
      </div>
      <Snippets>
        <Code lang="html">{`<figure class="sn-code">
  <figcaption class="sn-code__bar">
    <span class="sn-code__name">install.sh</span>
    <button class="sn-copy-btn" data-sn-copy aria-label="copy"></button>
  </figcaption>
  <pre><code>pnpm add @snowztech/ui</code></pre>
</figure>`}</Code>
        <Code lang="tsx">{`import { CodeBlock } from "@snowztech/ui/client";

<CodeBlock filename="install.sh" code="pnpm add @snowztech/ui" />

{/* with a highlighter */}
<CodeBlock filename="main.go" code={source}>
  <div dangerouslySetInnerHTML={{ __html: highlighted }} />
</CodeBlock>`}</Code>
      </Snippets>

      <h2>Terminal</h2>
      <p>A window frame for a fake session or a screenshot. Each child of the body is one line. Use <code>.sn-prompt</code> for commands and <code>__out</code> for output. An image or video fills the frame edge to edge.</p>
      <div className="sn-preview sn-preview--column">
        <Terminal title="~/dev/app">
          <div><span className="sn-prompt" />git worktree add -b search ../app-search</div>
          <div className="sn-terminal__out">Preparing worktree (new branch 'search')</div>
          <div><span className="sn-prompt" />git worktree list</div>
          <div className="sn-terminal__out">~/dev/app         5eda07d [main]{"\n"}~/dev/app-search  5eda07d [search]</div>
        </Terminal>
      </div>
      <Snippets>
        <Code lang="html">{`<div class="sn-terminal">
  <div class="sn-terminal__bar"><span class="sn-terminal__title">~/dev/app</span></div>
  <div class="sn-terminal__body">
    <div><span class="sn-prompt"></span>git worktree add -b search ../app-search</div>
    <div class="sn-terminal__out">Preparing worktree (new branch 'search')</div>
  </div>
</div>

<!-- screenshot -->
<div class="sn-terminal">
  <div class="sn-terminal__bar"></div>
  <div class="sn-terminal__body"><img src="/shot.png" alt="App screenshot"></div>
</div>`}</Code>
        <Code lang="tsx">{`import { Terminal } from "@snowztech/ui";

<Terminal title="~/dev/app">
  <div><span className="sn-prompt" />git worktree add -b search ../app-search</div>
  <div className="sn-terminal__out">Preparing worktree (new branch 'search')</div>
</Terminal>

<Terminal>
  <img src="/shot.png" alt="App screenshot" />
</Terminal>`}</Code>
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
