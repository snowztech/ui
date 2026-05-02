import * as UI from "@snowztech/ui";
import type { ComponentType } from "react";
import { Code } from "../../../components/code";

type IconComp = ComponentType<{ size?: number }>;
const iconNames: string[] = Object.keys(UI).filter((k) => k.endsWith("Icon") && k !== "Icon");
const icons = UI as unknown as Record<string, IconComp>;

export default function Icons() {
  return (
    <>
      <h1>icons</h1>
      <p className="lede">{iconNames.length} line icons. 1.5 stroke. 24px viewBox.</p>

      <Code lang="tsx">{`import { GithubIcon } from "@snowztech/ui";

<GithubIcon size={16} />`}</Code>

      <h2>All icons</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))", gap: 1, background: "var(--sn-border)", border: "1px solid var(--sn-border)" }}>
        {iconNames.map((name) => {
          const Comp = icons[name];
          return (
            <div key={name} style={{ background: "var(--sn-bg)", padding: 16, display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
              <Comp size={20} />
              <span style={{ color: "var(--sn-fg-muted)", fontSize: "var(--sn-text-2xs)" }}>{name}</span>
            </div>
          );
        })}
      </div>
    </>
  );
}
