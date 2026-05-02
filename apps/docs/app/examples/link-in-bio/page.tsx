import { Avatar, Pulse, ArrowUpRightIcon } from "@snowztech/ui";

const projects = [
  { name: "northwind", desc: "weather data api", badge: "ts · v1", avatar: "Nw" },
  { name: "cairn", desc: "tiny static site builder", badge: "go", avatar: "Cn" },
];

export default function LinkInBio() {
  return (
    <div style={{
      maxWidth: 560,
      margin: "0 auto",
      padding: "80px 24px",
      fontFamily: "var(--sn-font-mono)",
      color: "var(--sn-fg)",
      fontSize: "var(--sn-text-sm)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 16,
    }}>
      <Avatar size={108} name="DR" ring />

      <h1 style={{ margin: "12px 0 0 0", fontSize: 22, fontWeight: 700 }}>drift.dev</h1>
      <p style={{ margin: 0, color: "var(--sn-fg-muted)" }}>
        independent engineer · open source
      </p>

      <Pulse label="open to consulting" />

      <div style={{ width: "100%", marginTop: 32 }}>
        <div style={{ color: "var(--sn-fg-faint)", fontSize: "var(--sn-text-xs)", marginBottom: 12 }}>
          // projects
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {projects.map((p) => (
            <a key={p.name} className="sn-card sn-card--rounded" style={{
              display: "flex", alignItems: "center", gap: 14,
              padding: "14px 16px",
              textDecoration: "none",
            }}>
              <Avatar size={36} name={p.avatar} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ color: "var(--sn-accent)", fontWeight: 700 }}>{p.name}</div>
                <div style={{ color: "var(--sn-fg-muted)", fontSize: "var(--sn-text-xs)" }}>{p.desc}</div>
              </div>
              <span style={{ color: "var(--sn-fg-faint)", fontSize: "var(--sn-text-xs)" }}>{p.badge}</span>
              <ArrowUpRightIcon size={14} color="var(--sn-fg-faint)" />
            </a>
          ))}
        </div>
      </div>

      <div style={{
        width: "100%",
        marginTop: 32,
        paddingTop: 24,
        borderTop: "1px solid var(--sn-border-subtle)",
        display: "flex",
        justifyContent: "center",
        gap: 24,
        color: "var(--sn-fg-muted)",
      }}>
        <a>github</a>
        <a>blog</a>
        <a>youtube</a>
        <a>mail</a>
      </div>

      <span style={{ color: "var(--sn-fg-faint)", fontSize: "var(--sn-text-xs)", marginTop: 8 }}>
        © 2026
      </span>
    </div>
  );
}
