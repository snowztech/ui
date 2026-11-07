import * as React from "react";
import { CopyButton } from "./copy-button";

const cx = (...parts: Array<string | undefined | false>) => parts.filter(Boolean).join(" ");

export interface CodeBlockProps {
  code: string;
  filename?: React.ReactNode;
  lang?: string;
  /** Pre-highlighted markup (e.g. from shiki). `code` is still what gets copied. */
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export function CodeBlock({ code, filename, lang, children, className, style }: CodeBlockProps) {
  return (
    <figure className={cx("sn-code", className)} style={style}>
      <figcaption className="sn-code__bar">
        <span className="sn-code__name">{filename ?? lang}</span>
        <CopyButton value={code} />
      </figcaption>
      {children ?? (
        <pre>
          <code className={lang ? `language-${lang}` : undefined}>{code}</code>
        </pre>
      )}
    </figure>
  );
}
