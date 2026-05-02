import * as React from "react";

export interface AvatarProps {
  src?: string;
  alt?: string;
  name?: string;
  size?: number;
  shape?: "circle" | "square";
  ring?: boolean;
  style?: React.CSSProperties;
  className?: string;
}

const initialsFrom = (name?: string) => {
  if (!name) return "";
  const parts = name.trim().split(/\s+/).slice(0, 2);
  return parts.map((p) => p[0]?.toUpperCase() ?? "").join("");
};

export const Avatar = ({
  src,
  alt,
  name,
  size = 32,
  shape = "circle",
  ring = false,
  style,
  className,
}: AvatarProps) => {
  const radius = shape === "circle" ? "50%" : "var(--sn-r-xs)";
  const initials = initialsFrom(name);

  return (
    <span
      className={className}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: size,
        height: size,
        borderRadius: radius,
        background: "var(--sn-bg-elev-1)",
        color: "var(--sn-fg-muted)",
        fontFamily: "var(--sn-font-mono)",
        fontSize: Math.max(10, Math.round(size * 0.38)),
        fontWeight: 500,
        overflow: "hidden",
        flexShrink: 0,
        boxShadow: ring ? "0 0 0 1px var(--sn-border-strong)" : undefined,
        ...style,
      }}
    >
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt ?? name ?? ""}
          width={size}
          height={size}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      ) : (
        <span aria-hidden="true">{initials || "•"}</span>
      )}
    </span>
  );
};

export interface AvatarStackProps {
  children: React.ReactNode;
  overlap?: number;
}

export const AvatarStack = ({ children, overlap = 8 }: AvatarStackProps) => (
  <span style={{ display: "inline-flex" }}>
    {React.Children.map(children, (child, i) => (
      <span style={{ marginLeft: i === 0 ? 0 : -overlap }}>{child}</span>
    ))}
  </span>
);
