"use client";

import { useState } from "react";
import { MarkCrystal } from "@snowztech/ui";

const goCode = `f, _ := frost.New(frost.Config{
  APIKey: "frost_live_...",
})
run := f.StartRun(ctx, "my-agent",
  frost.WithUser("cust_42"))
defer run.End()`;

const pyCode = `f = frost.Client(api_key="frost_live_...")
with f.run("my-agent", user="cust_42") as run:
    run.record_llm(
        model="gpt-4o-mini",
        prompt_tokens=1234,
        completion_tokens=56,
    )`;

export default function SaasLanding() {
  const [tab, setTab] = useState("go");

  return (
    <div style={{
      background: "var(--sn-bg)",
      color: "var(--sn-fg)",
      fontFamily: "var(--sn-font-mono)",
      fontSize: "var(--sn-text-sm)",
      lineHeight: "var(--sn-leading-relaxed)",
    }}>
      <header style={{
        display: "flex", justifyContent: "space-between", alignItems: "center",
        padding: "20px 56px", borderBottom: "1px solid var(--sn-border)",
        position: "sticky", top: 0, background: "var(--sn-bg)", zIndex: 5,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <MarkCrystal size={20} color="var(--sn-fg)" />
          <span style={{ fontWeight: 700 }}>frost<span style={{ color: "var(--sn-accent)" }}>.</span></span>
        </div>
        <nav style={{ display: "flex", gap: 24, color: "var(--sn-fg-muted)" }}>
          <a>docs</a><a>pricing</a><a>compare</a><a>github</a><a>sign in</a>
        </nav>
      </header>

      <section style={{ padding: "80px 56px 64px", maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 56, alignItems: "flex-start" }}>
          <div>
            <span className="sn-badge sn-badge--accent" style={{ marginBottom: 24 }}>v0.4 · public beta</span>
            <h1 style={{
              margin: "0 0 20px 0",
              fontSize: 36, fontWeight: 700,
              letterSpacing: "-0.02em",
              lineHeight: 1.15,
            }}>
              See your AI agents.<br />
              Self-host or cloud.<br />
              <span style={{ color: "var(--sn-accent)" }}>EU-native.</span>
            </h1>
            <p style={{ margin: "0 0 32px 0", color: "var(--sn-fg-muted)", maxWidth: 480 }}>
              Lightweight observability for Go and Python agents.
              No SDK lock-in. Three lines to first span.
            </p>
            <div style={{ display: "flex", gap: 10, marginBottom: 32 }}>
              <button className="sn-btn sn-btn--primary sn-btn--lg">try cloud · free</button>
              <button className="sn-btn sn-btn--secondary sn-btn--lg">self-host →</button>
            </div>
            <div style={{ display: "flex", gap: 20, color: "var(--sn-fg-faint)", fontSize: "var(--sn-text-xs)" }}>
              <span>no credit card</span>
              <span>·</span>
              <span>agpl server, mit sdk</span>
              <span>·</span>
              <span>hosted in paris</span>
            </div>
          </div>

          <div style={{ border: "1px solid var(--sn-border)", background: "var(--sn-bg-inset)", borderRadius: "var(--sn-r-xs)" }}>
            <div style={{
              display: "flex", justifyContent: "space-between",
              borderBottom: "1px solid var(--sn-border)",
              fontSize: "var(--sn-text-xs)",
            }}>
              <div style={{ display: "flex" }}>
                {["go", "python"].map((t) => (
                  <button key={t} onClick={() => setTab(t)} style={{
                    padding: "10px 16px",
                    background: "transparent",
                    border: "none",
                    borderRight: "1px solid var(--sn-border)",
                    borderBottom: tab === t ? "1px solid var(--sn-accent)" : "1px solid transparent",
                    marginBottom: -1,
                    color: tab === t ? "var(--sn-fg)" : "var(--sn-fg-muted)",
                    fontFamily: "inherit",
                    fontSize: "inherit",
                    cursor: "pointer",
                  }}>{t}</button>
                ))}
              </div>
              <span style={{ padding: "10px 16px", color: "var(--sn-fg-faint)" }}>copy</span>
            </div>
            <pre style={{
              margin: 0, padding: 20,
              fontSize: "var(--sn-text-xs)",
              color: "var(--sn-fg)",
              overflow: "auto",
              fontFamily: "inherit",
            }}>
              <code>{tab === "go" ? goCode : pyCode}</code>
            </pre>
            <div style={{ borderTop: "1px solid var(--sn-border)", padding: "8px 16px", color: "var(--sn-fg-faint)", fontSize: "var(--sn-text-2xs)" }}>
              3 minutes from <code style={{ color: "var(--sn-accent)" }}>go get</code> to first span
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "32px 56px 80px", maxWidth: 1100, margin: "0 auto" }}>
        <div className="sn-meta" style={{ marginBottom: 16 }}>what you get</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
          {[
            { k: "cost per user", n: "01", d: "tag a run with WithUser(...) and see exactly which customer is bleeding tokens.", tag: "billing" },
            { k: "full traces", n: "02", d: "every llm call, every tool, timing, input, output. inline expansion. never lose context.", tag: "debug" },
            { k: "eu + audit log", n: "03", d: "hosted in paris. gdpr ready. ai act paperwork on file. audit log on every plan.", tag: "compliance" },
          ].map((f) => (
            <div key={f.n} style={{ border: "1px solid var(--sn-border)", padding: 24, display: "flex", flexDirection: "column", gap: 12, borderRadius: "var(--sn-r-xs)" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span className="sn-meta">{f.n}</span>
                <span style={{ color: "var(--sn-fg-faint)", fontSize: "var(--sn-text-2xs)" }}>{f.tag}</span>
              </div>
              <div style={{ fontWeight: 700 }}>{f.k}</div>
              <div style={{ color: "var(--sn-fg-muted)" }}>{f.d}</div>
            </div>
          ))}
        </div>
      </section>

      <footer style={{
        borderTop: "1px solid var(--sn-border)",
        padding: "32px 56px",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        fontSize: "var(--sn-text-xs)", color: "var(--sn-fg-muted)",
      }}>
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <MarkCrystal size={14} color="var(--sn-fg-faint)" />
          <span>frost</span>
        </div>
        <div style={{ display: "flex", gap: 24 }}>
          <a>docs</a><a>github</a><a>status</a><a>rss</a>
          <span style={{ color: "var(--sn-fg-faint)" }}>© 2026</span>
        </div>
      </footer>
    </div>
  );
}
