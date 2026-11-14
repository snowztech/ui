import { MarkSnowflake } from "@snowztech/ui";
import { IdentityPlayground } from "../../../components/identity-playground";

const rules: [string, string][] = [
  ["One mode per site.", "frost, all JetBrains Mono, for the studio, dev tools and short pages. powder, Geist with Geist Mono labels, when people read a lot."],
  ["One accent, used rarely.", "A link in text, one primary action, one highlight. Nav, footers and labels stay grey."],
  ["Text is fg, muted or subtle.", "All three pass 4.5:1 on every surface. faint is for icons and dividers, never text."],
  ["Same shapes everywhere.", "Three heights, three radii, one hover tint, one focus ring. Never a raw value."],
  ["Plain words.", "Short sentences, sentence case, a verb on every button: \"Download for Mac\", not \"Get started\"."],
  ["Missing a piece?", "Build it in the product with tokens. When a second product needs it, it moves into the lib."],
];

export default function Identity() {
  return (
    <>
      <h1>identity</h1>
      <p className="lede">
        What makes a page look like snowztech: a mono voice, plain surfaces, one accent, one mark.
      </p>

      <h2>Pick the look</h2>
      <p>
        Two attributes on <code>&lt;html&gt;</code>, and the whole site follows.
        Mode: <code>frost</code> (all JetBrains Mono, the default) or <code>powder</code> (Geist,
        with Geist Mono labels). Accent: <code>ice</code> (blue, the default),{" "}
        <code>glacier</code> (turquoise) or <code>neutral</code> (no color).
      </p>
      <IdentityPlayground />

      <h2>Rules</h2>
      <dl className="guide-list">
        {rules.map(([rule, why]) => (
          <div key={rule}>
            <dt>{rule}</dt>
            <dd>{why}</dd>
          </div>
        ))}
      </dl>

      <h2>The mark</h2>
      <div className="id-mark">
        <MarkSnowflake size={40} />
        <p>
          The snowflake is snowztech's, in the text color, never the accent. Products use their own
          icon. See the <a href="/logo-lab">logo lab</a>.
        </p>
      </div>
    </>
  );
}
