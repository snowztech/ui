import * as React from "react";

export interface SnowMarkProps {
  size?: number;
  color?: string;
  style?: React.CSSProperties;
}

export const SnowMark = ({ size = 48, color = "currentColor", style }: SnowMarkProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill={color}
    style={{ display: "inline-block", verticalAlign: "middle", ...style }}
    aria-hidden="true"
  >
    <rect x="9" y="6" width="14" height="2.4" />
    <polygon points="22.4,6 23,8.4 9.6,26 9,23.6" />
    <rect x="9" y="23.6" width="14" height="2.4" />
    <g fill={color}>
      <polygon points="16,1 18,4 16,7 14,4" />
      <polygon points="16,25 18,28 16,31 14,28" />
      <polygon points="27,8 28.7,11 25.5,11.5 26,8.7" />
      <polygon points="5,8 6,8.7 6.5,11.5 3.3,11" />
      <polygon points="27,24 26,23.3 25.5,20.5 28.7,21" />
      <polygon points="5,24 3.3,21 6.5,20.5 6,23.3" />
    </g>
  </svg>
);

export interface SnowWordmarkProps {
  size?: number;
  color?: string;
  showDot?: boolean;
  accent?: string;
}

export const SnowWordmark = ({
  size = 18,
  color = "currentColor",
  showDot = true,
  accent = "var(--sn-accent)",
}: SnowWordmarkProps) => (
  <span
    style={{
      fontFamily: "var(--sn-font-mono)",
      fontSize: size,
      fontWeight: 700,
      letterSpacing: "-0.01em",
      color,
      lineHeight: 1,
    }}
  >
    snowztech{showDot && <span style={{ color: accent }}>.</span>}
  </span>
);

export interface SnowMonogramProps {
  size?: number;
  bg?: string;
  fg?: string;
  radius?: number;
}

export const SnowMonogram = ({
  size = 64,
  bg = "#0a0a0a",
  fg = "#ffffff",
  radius = 8,
}: SnowMonogramProps) => (
  <Monogram size={size} bg={bg} fg={fg} radius={radius} mark={SnowMark} />
);

export interface MonogramProps {
  size?: number;
  bg?: string;
  fg?: string;
  radius?: number;
  mark: React.ComponentType<{ size?: number; color?: string }>;
  glyphScale?: number;
}

export const Monogram = ({
  size = 64,
  bg = "#0a0a0a",
  fg = "#ffffff",
  radius = 8,
  mark: Mark,
  glyphScale = 0.6,
}: MonogramProps) => (
  <div
    style={{
      width: size,
      height: size,
      background: bg,
      borderRadius: radius,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
    }}
  >
    <Mark size={Math.round(size * glyphScale)} color={fg} />
  </div>
);
