import * as React from "react";
import { GithubIcon } from "@snowztech/ui";
import { ForceStates } from "../../../components/force-states";

export const metadata = { title: "states · snowztech/ui" };

const states = ["default", "hover", "focus-visible", "active", "disabled"] as const;
type State = (typeof states)[number];

// Props that put an element in a state. Hover, focus and active use the
// library's own rules, copied onto [data-force] by <ForceStates />.
const s = (state: State) =>
  state === "disabled" ? { disabled: true, "aria-disabled": true as const }
  : state === "default" ? {}
  : { "data-force": state };

type Row = { name: string; render: (state: State) => React.ReactNode; noDisabled?: boolean };

const rows: Row[] = [
  ...(["primary", "secondary", "ghost", "accent", "danger"] as const).map((v) => ({
    name: `button ${v}`,
    render: (st: State) => <button type="button" className={`sn-btn sn-btn--${v} sn-btn--sm`} {...s(st)}>Save</button>,
  })),
  { name: "icon button", render: (st) => <button type="button" aria-label="github" className="sn-icon-btn sn-icon-btn--sm" {...s(st)}><GithubIcon size={16} /></button> },
  { name: "icon button bordered", render: (st) => <button type="button" aria-label="github" className="sn-icon-btn sn-icon-btn--sm sn-icon-btn--bordered" {...s(st)}><GithubIcon size={16} /></button> },
  {
    name: "segmented",
    noDisabled: true,
    render: (st) => (
      <div className="sn-segmented sn-segmented--sm" role="group" aria-label="demo">
        <button type="button" aria-pressed="true">on</button>
        <button type="button" aria-pressed="false" {...s(st)}>off</button>
      </div>
    ),
  },
  {
    name: "tabs",
    noDisabled: true,
    render: (st) => (
      <div className="sn-tabs sn-tabs--sm" role="tablist" aria-label="demo">
        <button type="button" role="tab" aria-selected="true">one</button>
        <button type="button" role="tab" aria-selected="false" {...s(st)}>two</button>
      </div>
    ),
  },
  { name: "nav list", noDisabled: true, render: (st) => <nav className="sn-navlist"><a href="#states" {...s(st)}>overview</a></nav> },
  { name: "input", render: (st) => <input className="sn-input sn-input--sm" placeholder="email" aria-label="demo" {...s(st)} /> },
  { name: "input invalid", render: (st) => <input className="sn-input sn-input--sm sn-input--invalid" defaultValue="taken" aria-label="demo" {...s(st)} /> },
  { name: "theme toggle", noDisabled: true, render: (st) => <button type="button" aria-label="theme" className="sn-theme-toggle sn-theme-toggle--sm" {...s(st)}><span className="sn-theme-toggle__indicator" /></button> },
  { name: "copy button", noDisabled: true, render: (st) => <button type="button" aria-label="copy" className="sn-copy-btn" data-sn-copy="x" {...s(st)} /> },
  { name: "link", noDisabled: true, render: (st) => <a href="#states" {...s(st)}>Read more</a> },
];

function Grid() {
  return (
    <div className="sn-table-wrap">
      <table className="sn-table states-table">
        <thead>
          <tr><th>component</th>{states.map((st) => <th key={st}>{st.replace("-visible", "")}</th>)}</tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.name}>
              <td>{r.name}</td>
              {states.map((st) => (
                <td key={st}>{st === "disabled" && r.noDisabled ? <span className="sn-fine">n/a</span> : r.render(st)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function StatesPage() {
  return (
    <>
      <ForceStates />
      <h1>states</h1>
      <p className="lede">
        Every control in every state. If a state looks wrong here, it looks wrong in every product.
        Use the top bar to check light and dark, frost and powder.
      </p>
      <Grid />
    </>
  );
}
