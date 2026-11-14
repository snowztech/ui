"use client";

import * as React from "react";
import { MarkSnowflake } from "@snowztech/ui";
import { Segmented } from "@snowztech/ui/client";

const modes = ["frost", "powder"] as const;
const accents = ["ice", "glacier", "neutral"] as const;

export function IdentityPlayground() {
  const [mode, setMode] = React.useState<(typeof modes)[number]>("frost");
  const [accent, setAccent] = React.useState<(typeof accents)[number]>("ice");

  return (
    <div className="id-play">
      <div className="id-play-controls">
        <label className="id-play-control"><span className="sn-meta">mode</span><Segmented label="mode" size="sm" options={modes} value={mode} onChange={setMode} /></label>
        <label className="id-play-control"><span className="sn-meta">accent</span><Segmented label="accent" size="sm" options={accents} value={accent} onChange={setAccent} /></label>
      </div>

      <div className="id-play-stage" data-sn-mode={mode} data-sn-accent={accent}>
        <div className="id-play-bar">
          <span className="id-play-brand"><MarkSnowflake size={18} />product</span>
          <span className="id-play-nav"><span>Docs</span><span>Blog</span><span>GitHub</span></span>
        </div>
        <span className="sn-meta sn-meta--accent">terminal for agents</span>
        <h2 className="id-play-h">Run every agent. See who needs you.</h2>
        <p className="id-play-lede">
          A native macOS app for Claude Code and Codex. Each agent works in its own git worktree.
        </p>
        <div className="id-play-actions">
          <button type="button" className="sn-btn sn-btn--accent">Download for Mac</button>
          <button type="button" className="sn-btn sn-btn--secondary">Read the docs</button>
          <span className="id-play-keys"><kbd className="sn-kbd">⌘</kbd><kbd className="sn-kbd">T</kbd></span>
        </div>
        <div className="id-play-feats">
          <div><span className="id-play-num">01</span><div><h3>Parallel agents</h3><p>Every task gets a worktree.</p></div></div>
          <div><span className="id-play-num">02</span><div><h3>Agent status</h3><p>See which one is waiting.</p></div></div>
        </div>
      </div>

      <code className="id-play-code">
        {`<html data-sn-mode="${mode}" data-sn-accent="${accent}">`}
      </code>
    </div>
  );
}
