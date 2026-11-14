import * as React from "react";
import { MarkSnowflake } from "./snowflake";

type Size = "xs" | "sm" | "md" | "lg" | "xl" | number;

const cx = (...parts: Array<string | undefined | false>) => parts.filter(Boolean).join(" ");

export interface SnowMarkProps {
  size?: Size;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

// The snowztech mark. Same art as MarkSnowflake, kept under its old name.
export const SnowMark = ({ size = 48, ...rest }: SnowMarkProps) => <MarkSnowflake size={size} {...rest} />;

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
