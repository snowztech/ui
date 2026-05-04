import * as React from "react";

const cx = (...parts: Array<string | undefined | false>) => parts.filter(Boolean).join(" ");

export interface PulseProps {
  size?: number;
  color?: string;
  label?: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}

export const Pulse = ({ size = 8, color, label, style, className }: PulseProps) => (
  <span
    className={cx("sn-pulse", className)}
    style={{
      ["--sn-pulse-size" as string]: `${size}px`,
      ...(color ? { ["--sn-pulse-color" as string]: color } : null),
      ...style,
    }}
  >
    <span aria-hidden="true" className="sn-pulse__dot" />
    {label && <span>{label}</span>}
  </span>
);
