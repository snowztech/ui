import * as React from "react";

export interface PulseProps {
  size?: number;
  color?: string;
  label?: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}

export const Pulse = ({
  size = 8,
  color = "var(--sn-success)",
  label,
  style,
  className,
}: PulseProps) => (
  <span
    className={className}
    style={{
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      color: "var(--sn-fg-muted)",
      fontSize: "var(--sn-text-sm)",
      ...style,
    }}
  >
    <span
      aria-hidden="true"
      style={{
        position: "relative",
        display: "inline-flex",
        width: size,
        height: size,
      }}
    >
      <span
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "50%",
          background: color,
          opacity: 0.6,
          animation: "sn-pulse 2s ease-in-out infinite",
        }}
      />
      <span
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          borderRadius: "50%",
          background: color,
        }}
      />
    </span>
    {label && <span>{label}</span>}
  </span>
);
