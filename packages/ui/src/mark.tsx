import * as React from "react";

type Size = "xs" | "sm" | "md" | "lg" | "xl" | number;

const sizeStyle = (size: Size | undefined): React.CSSProperties | undefined =>
  typeof size === "number" ? { ["--sn-mark-size" as string]: `${size}px` } : undefined;

const sizeClass = (size: Size | undefined): string | undefined =>
  typeof size === "string" ? `sn-mark--${size}` : undefined;

const cx = (...parts: Array<string | undefined | false>) => parts.filter(Boolean).join(" ");

export interface SnowMarkProps {
  size?: Size;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const SnowMark = ({ size = 48, color, className, style }: SnowMarkProps) => (
  <svg
    viewBox="0 0 32 32"
    fill="currentColor"
    className={cx("sn-mark", sizeClass(size), className)}
    style={{ ...sizeStyle(size), color, ...style }}
    aria-hidden="true"
  >
    <rect x="9" y="6" width="14" height="2.4" />
    <polygon points="22.4,6 23,8.4 9.6,26 9,23.6" />
    <rect x="9" y="23.6" width="14" height="2.4" />
    <g>
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
  className?: string;
  style?: React.CSSProperties;
}

export const SnowWordmark = ({
  size = 18,
  color,
  showDot = true,
  accent,
  className,
  style,
}: SnowWordmarkProps) => (
  <span
    className={cx("sn-wordmark", className)}
    style={{
      ["--sn-wordmark-size" as string]: `${size}px`,
      color,
      ...style,
    }}
  >
    snowztech
    {showDot && (
      <span className="sn-wordmark__dot" style={accent ? { color: accent } : undefined}>.</span>
    )}
  </span>
);

export interface SnowMonogramProps {
  size?: number;
  bg?: string;
  fg?: string;
  radius?: number;
  className?: string;
  style?: React.CSSProperties;
}

export const SnowMonogram = ({
  size = 64,
  bg,
  fg,
  radius,
  className,
  style,
}: SnowMonogramProps) => (
  <Monogram size={size} bg={bg} fg={fg} radius={radius} mark={SnowMark} className={className} style={style} />
);

export interface MonogramProps {
  size?: number;
  bg?: string;
  fg?: string;
  radius?: number;
  mark: React.ComponentType<{ size?: number; color?: string }>;
  glyphScale?: number;
  className?: string;
  style?: React.CSSProperties;
}

export const Monogram = ({
  size = 64,
  bg,
  fg,
  radius,
  mark: Mark,
  glyphScale = 0.6,
  className,
  style,
}: MonogramProps) => (
  <div
    className={cx("sn-monogram", className)}
    style={{
      ["--sn-monogram-size" as string]: `${size}px`,
      ...(bg     ? { ["--sn-monogram-bg" as string]: bg } : null),
      ...(fg     ? { ["--sn-monogram-fg" as string]: fg } : null),
      ...(radius != null ? { ["--sn-monogram-radius" as string]: `${radius}px` } : null),
      ...style,
    }}
  >
    <Mark size={Math.round(size * glyphScale)} color={fg ?? "currentColor"} />
  </div>
);
