import * as React from "react";

type Size = "xs" | "sm" | "md" | "lg" | "xl" | number;

export interface MarkProps {
  size?: Size;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const sizeStyle = (size: Size | undefined): React.CSSProperties | undefined =>
  typeof size === "number" ? { ["--sn-mark-size" as string]: `${size}px` } : undefined;

const sizeClass = (size: Size | undefined): string | undefined =>
  typeof size === "string" ? `sn-mark--${size}` : undefined;

const cx = (...parts: Array<string | undefined | false>) => parts.filter(Boolean).join(" ");

const baseProps = (
  { size, color, className, style }: MarkProps,
  extra: Partial<React.SVGAttributes<SVGSVGElement>> = {},
) => ({
  viewBox: "0 0 32 32",
  className: cx("sn-mark", sizeClass(size), className),
  style: { ...sizeStyle(size ?? 64), ...(color ? { color } : null), ...style },
  "aria-hidden": true as const,
  ...extra,
});

// The snowztech mark: a six-arm snowflake with one arm cut through the others.
export const MarkSnowflake = (p: MarkProps) => {
  const id = React.useId().replace(/:/g, "");
  return (
    <svg {...baseProps(p, { fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" })}>
      <defs>
        <mask id={id}>
          <rect width="32" height="32" fill="white" />
          <path d="M7 10L25 22" stroke="black" strokeWidth={4.5} />
        </mask>
      </defs>
      <path mask={`url(#${id})`} d="M16 4V28M7 22L25 10M11.5 8.5L16 12L20.5 8.5M11.5 23.5L16 20L20.5 23.5" />
      <path d="M7 10L25 22" />
    </svg>
  );
};
