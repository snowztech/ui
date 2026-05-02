"use client";

import { useState } from "react";
import { MarkCrystal, Avatar } from "@snowztech/ui";

const nav = [
  { id: "overview", label: "overview" },
  { id: "transactions", label: "transactions" },
  { id: "budgets", label: "budgets" },
  { id: "reports", label: "reports" },
  { id: "settings", label: "settings" },
];

const txns = [
  { name: "northwind api", cat: "infra", amt: -28, date: "apr 28" },
  { name: "client · march", cat: "income", amt: 4200, date: "apr 28" },
  { name: "fjord storage", cat: "infra", amt: -12, date: "apr 27" },
  { name: "groceries", cat: "personal", amt: -36.84, date: "apr 26" },
  { name: "github org", cat: "tools", amt: -10, date: "apr 25" },
  { name: "train · oslo", cat: "travel", amt: -82, date: "apr 24" },
];

export default function Dashboard() {
  const [active, setActive] = useState("transactions");

  return (
    <div style={{
      display: "grid", gridTemplateColumns: "200px 1fr",
      fontFamily: "var(--sn-font-mono)",
      color: "var(--sn-fg)",
      fontSize: "var(--sn-text-sm)",
      minHeight: "calc(100vh - 41px)",
    }}>
      <aside style={{ borderRight: "1px solid var(--sn-border)", padding: "20px 16px", display: "flex", flexDirection: "column", gap: 20 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <MarkCrystal size={18} color="var(--sn-fg)" />
          <span style={{ fontWeight: 700 }}>vault<span style={{ color: "var(--sn-accent)" }}>.</span></span>
        </div>

        <nav style={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {nav.map((n) => (
            <button key={n.id} onClick={() => setActive(n.id)} style={{
              display: "flex", alignItems: "center",
              padding: "4px 0", background: "transparent", border: "none",
              color: active === n.id ? "var(--sn-accent)" : "var(--sn-fg-muted)",
              fontFamily: "inherit", fontSize: "inherit", cursor: "pointer", textAlign: "left",
              fontWeight: active === n.id ? 500 : 400,
            }}>
              {n.label}
            </button>
          ))}
        </nav>

        <div style={{ marginTop: "auto", display: "flex", gap: 10, alignItems: "center" }}>
          <Avatar size={28} name="DR" />
          <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.2 }}>
            <span style={{ color: "var(--sn-fg)", fontSize: "var(--sn-text-xs)" }}>drift</span>
            <span style={{ color: "var(--sn-fg-faint)", fontSize: "var(--sn-text-2xs)" }}>pro</span>
          </div>
        </div>
      </aside>

      <main style={{ display: "flex", flexDirection: "column" }}>
        <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 24px", borderBottom: "1px solid var(--sn-border)" }}>
          <span style={{ color: "var(--sn-fg-muted)" }}>
            <span className="sn-meta">workspace</span> &nbsp;/&nbsp; <span style={{ color: "var(--sn-fg)" }}>{active}</span>
          </span>
          <div style={{ display: "flex", gap: 8 }}>
            <button className="sn-btn sn-btn--secondary sn-btn--sm">april 2026</button>
            <button className="sn-btn sn-btn--primary sn-btn--sm">+ add</button>
          </div>
        </header>

        <div style={{ padding: 24, display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr", gap: 16 }}>
            <div style={{ border: "1px solid var(--sn-border)", padding: 20, borderRadius: "var(--sn-r-xs)" }}>
              <div className="sn-meta">net balance</div>
              <div style={{ fontSize: 32, fontWeight: 700, marginTop: 8, letterSpacing: "-0.03em" }}>€3,824.50</div>
              <div style={{ color: "var(--sn-success)", fontSize: "var(--sn-text-xs)", marginTop: 4 }}>↑ +18.2% vs march</div>
            </div>
            <div style={{ border: "1px solid var(--sn-border)", padding: 20, borderRadius: "var(--sn-r-xs)" }}>
              <div className="sn-meta">income</div>
              <div style={{ fontSize: 22, fontWeight: 700, marginTop: 8, color: "var(--sn-success)" }}>€4,200</div>
              <div style={{ color: "var(--sn-fg-muted)", fontSize: "var(--sn-text-xs)", marginTop: 4 }}>1 source</div>
            </div>
            <div style={{ border: "1px solid var(--sn-border)", padding: 20, borderRadius: "var(--sn-r-xs)" }}>
              <div className="sn-meta">spent</div>
              <div style={{ fontSize: 22, fontWeight: 700, marginTop: 8 }}>€376.34</div>
              <div style={{ color: "var(--sn-fg-muted)", fontSize: "var(--sn-text-xs)", marginTop: 4 }}>6 categories</div>
            </div>
          </div>

          <div>
            <div className="sn-meta" style={{ marginBottom: 8 }}>recent</div>
            <div style={{ border: "1px solid var(--sn-border)", borderRadius: "var(--sn-r-xs)" }}>
              {txns.map((t, i) => (
                <div key={i} style={{
                  display: "grid", gridTemplateColumns: "1fr 120px 100px 100px",
                  gap: 12, padding: "10px 16px",
                  borderTop: i === 0 ? "none" : "1px solid var(--sn-border-subtle)",
                  alignItems: "center",
                }}>
                  <span>{t.name}</span>
                  <span style={{ color: "var(--sn-fg-muted)", fontSize: "var(--sn-text-xs)" }}>{t.cat}</span>
                  <span style={{ color: "var(--sn-fg-faint)", fontSize: "var(--sn-text-xs)" }}>{t.date}</span>
                  <span style={{ textAlign: "right", color: t.amt > 0 ? "var(--sn-success)" : "var(--sn-fg)", fontWeight: 500 }}>
                    {t.amt > 0 ? "+" : ""}€{Math.abs(t.amt).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
