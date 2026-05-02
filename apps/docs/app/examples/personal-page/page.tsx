import { Avatar, Pulse, GithubIcon, MailIcon, ArrowUpRightIcon } from "@snowztech/ui";

const projects = [
  ["northwind", "weather data api"],
  ["cairn", "tiny static site builder"],
  ["sleet", "macos menubar timer"],
  ["floe", "self-hosted feed reader"],
  ["pinecone", "ssh keys manager"],
  ["lichen", "markdown wiki"],
  ["beacon", "uptime + cron monitor"],
  ["fjord", "object storage cli"],
  ["lattice", "graph database"],
  ["thaw", "log inspector for docker"],
] as const;

export default function PersonalPage() {
  return (
    <div style={{
      maxWidth: 720,
      margin: "0 auto",
      padding: "60px 32px",
      fontFamily: "var(--sn-font-mono)",
      color: "var(--sn-fg)",
      fontSize: "var(--sn-text-sm)",
      lineHeight: "var(--sn-leading-relaxed)",
    }}>
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 40 }}>
        <Avatar size={48} name="DR" ring />
        <Pulse label="open to consulting" />
      </header>

      <p style={{ margin: "0 0 16px 0" }}>
        <span style={{ fontWeight: 700 }}>tundra.dev</span>, an independent engineer.
      </p>
      <p style={{ margin: "0 0 32px 0" }}>I build small open-source tools. I like cold weather and quiet code.</p>

      <p style={{ margin: "0 0 12px 0", fontWeight: 700 }}>Projects</p>

      <div style={{ display: "flex", flexDirection: "column", gap: 4, marginBottom: 40 }}>
        {projects.map(([n, d]) => (
          <a key={n} style={{
            display: "grid", gridTemplateColumns: "160px 1fr 14px", gap: 16,
            alignItems: "baseline", padding: "4px 0",
          }}>
            <span style={{ color: "var(--sn-accent)", fontWeight: 500 }}>{n}</span>
            <span style={{ color: "var(--sn-fg-muted)" }}>{d}</span>
            <ArrowUpRightIcon size={12} color="var(--sn-fg-faint)" />
          </a>
        ))}
      </div>

      <div style={{
        paddingTop: 24,
        borderTop: "1px solid var(--sn-border-subtle)",
        display: "flex", alignItems: "center", gap: 20,
        color: "var(--sn-fg-muted)", fontSize: "var(--sn-text-xs)",
      }}>
        <a style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
          <GithubIcon size={13} /> github
        </a>
        <a style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
          <MailIcon size={13} /> mail
        </a>
        <a>blog</a>
        <a>rss</a>
        <span style={{ marginLeft: "auto", color: "var(--sn-fg-faint)" }}>© 2026</span>
      </div>
    </div>
  );
}
