import * as React from "react";

const cx = (...parts: Array<string | undefined | false>) => parts.filter(Boolean).join(" ");

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
  const initials = initialsFrom(name);
  return (
    <span
      className={cx(
        "sn-avatar",
        shape === "square" && "sn-avatar--square",
        ring && "sn-avatar--ring",
        className,
      )}
      style={{ ["--sn-avatar-size" as string]: `${size}px`, ...style }}
    >
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={alt ?? name ?? ""} width={size} height={size} />
      ) : (
        <span aria-hidden="true">{initials || "•"}</span>
      )}
    </span>
  );
};

export interface AvatarStackProps {
  children: React.ReactNode;
  overlap?: number;
  className?: string;
  style?: React.CSSProperties;
}

export const AvatarStack = ({ children, overlap = 8, className, style }: AvatarStackProps) => (
  <span
    className={cx("sn-avatar-stack", className)}
    style={{ ["--sn-avatar-overlap" as string]: `-${overlap}px`, ...style }}
  >
    {children}
  </span>
);
