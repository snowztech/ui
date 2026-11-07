import * as React from "react";

const cx = (...parts: Array<string | undefined | false>) => parts.filter(Boolean).join(" ");

export interface TerminalProps {
  title?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const Terminal = ({ title, children, className, style }: TerminalProps) => (
  <div className={cx("sn-terminal", className)} style={style}>
    <div className="sn-terminal__bar">
      {title && <span className="sn-terminal__title">{title}</span>}
    </div>
    <div className="sn-terminal__body">{children}</div>
  </div>
);
