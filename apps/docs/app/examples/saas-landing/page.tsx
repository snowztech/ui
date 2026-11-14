"use client";

import { useState } from "react";
import { CopyButton } from "@snowztech/ui/client";

const snippets = {
  go: `f, _ := tracer.New(tracer.Config{
  APIKey: "tr_live_...",
})
run := f.StartRun(ctx, "my-agent",
  tracer.WithUser("cust_42"))
defer run.End()`,
  python: `f = tracer.Client(api_key="tr_live_...")
with f.run("my-agent", user="cust_42") as run:
    run.record_llm(
        model="gpt-4o-mini",
        prompt_tokens=1234,
        completion_tokens=56,
    )`,
};

type Lang = keyof typeof snippets;

const features = [
  { n: "01", tag: "billing", title: "Cost per user", body: "Tag a run with WithUser(...) and see which customer spends the tokens." },
  { n: "02", tag: "debug", title: "Full traces", body: "Every LLM call and tool, with timing, input and output, expanded inline." },
  { n: "03", tag: "compliance", title: "Audit log", body: "Every plan keeps an audit log of who ran what, and when." },
];

export default function SaasLanding() {
  const [lang, setLang] = useState<Lang>("go");

  return (
    <div className="ex-page">
      <header className="ex-sticky">
        <div className="sn-container sn-header">
          <a className="sn-brand" href="#"><span className="sn-wordmark">tracer<span className="sn-wordmark__dot">.</span></span></a>
          <nav className="sn-nav" aria-label="Main">
            <a href="#">docs</a><a href="#">pricing</a><a href="#">github</a>
            <a href="#" className="sn-btn sn-btn--secondary sn-btn--sm">sign in</a>
          </nav>
        </div>
      </header>

      <main className="sn-container">
        <section className="ex-hero">
          <div>
            <span className="sn-badge sn-badge--accent">v0.4 · public beta</span>
            <h1>See what your AI agents do, and what they cost.</h1>
            <p className="sn-lede">Lightweight observability for Go and Python agents. No SDK lock-in. Three lines to the first span.</p>
            <div className="ex-actions">
              <a href="#" className="sn-btn sn-btn--primary sn-btn--lg">Try it free</a>
              <a href="#" className="sn-btn sn-btn--secondary sn-btn--lg">Self-host</a>
            </div>
            <p className="sn-fine">No credit card. AGPL server, MIT SDK.</p>
          </div>

          <figure className="sn-code">
            <figcaption className="sn-code__bar">
              <div className="sn-tabs sn-tabs--sm" role="tablist" aria-label="Language">
                {(Object.keys(snippets) as Lang[]).map((l) => (
                  <button key={l} type="button" role="tab" aria-selected={l === lang} onClick={() => setLang(l)}>{l}</button>
                ))}
              </div>
              <CopyButton value={snippets[lang]} />
            </figcaption>
            <pre><code>{snippets[lang]}</code></pre>
          </figure>
        </section>

        <section className="ex-section">
          <h2 className="sn-meta">What you get</h2>
          <div className="ex-grid">
            {features.map((f) => (
              <article key={f.n} className="sn-card">
                <div className="ex-card-top"><span className="sn-meta sn-meta--subtle">{f.n}</span><span className="sn-badge">{f.tag}</span></div>
                <h3>{f.title}</h3>
                <p>{f.body}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="sn-container sn-footer">
        <div className="sn-footer__row">
          <span>tracer · © 2026</span>
          <span className="sn-footer__links"><a href="#">docs</a><a href="#">github</a><a href="#">status</a><a href="#">rss</a></span>
        </div>
      </footer>
    </div>
  );
}
