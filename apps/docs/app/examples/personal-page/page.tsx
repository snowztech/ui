import { Avatar, Pulse, GithubIcon, MailIcon, ArrowUpRightIcon } from "@snowztech/ui";

const projects = [
  ["northwind", "weather data api"],
  ["cairn", "tiny static site builder"],
  ["sleet", "macos menubar timer"],
  ["floe", "self-hosted feed reader"],
  ["lichen", "markdown wiki"],
  ["thaw", "log inspector for docker"],
] as const;

export default function PersonalPage() {
  return (
    <div className="ex-page sn-container sn-container--narrow">
      <header className="ex-me">
        <Avatar size={48} name="DR" ring />
        <Pulse label="open to consulting" />
      </header>

      <h1 className="ex-me-name">tundra.dev</h1>
      <p className="sn-lede">An independent engineer. I build small open-source tools, and I like cold weather and quiet code.</p>

      <section className="ex-section">
        <h2 className="sn-meta">Projects</h2>
        <ul className="ex-projects">
          {projects.map(([name, desc]) => (
            <li key={name}>
              <a href="#">
                <span>{name}</span>
                <span>{desc}</span>
                <ArrowUpRightIcon size={12} />
              </a>
            </li>
          ))}
        </ul>
      </section>

      <footer className="sn-footer">
        <div className="sn-footer__row">
          <span className="sn-footer__links">
            <a href="#" className="ex-icon-link"><GithubIcon size={13} /> github</a>
            <a href="#" className="ex-icon-link"><MailIcon size={13} /> mail</a>
            <a href="#">rss</a>
          </span>
          <span>© 2026</span>
        </div>
      </footer>
    </div>
  );
}
