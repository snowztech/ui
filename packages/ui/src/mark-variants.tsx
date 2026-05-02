import * as React from "react";

export interface MarkProps {
  size?: number;
  color?: string;
  style?: React.CSSProperties;
}

const wrap = (style?: React.CSSProperties): React.CSSProperties => ({
  display: "inline-block",
  verticalAlign: "middle",
  ...style,
});

export const MarkSigil = ({ size = 64, color = "currentColor", style }: MarkProps) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill={color} style={wrap(style)} aria-hidden="true">
    <rect x="14.5" y="3" width="3" height="11" />
    <rect x="14.5" y="18" width="3" height="11" />
    <g transform="rotate(60 16 16)">
      <rect x="14.5" y="3" width="3" height="10.5" />
      <rect x="14.5" y="18.5" width="3" height="10.5" />
    </g>
    <g transform="rotate(-60 16 16)">
      <rect x="14.5" y="3" width="3" height="10.5" />
      <rect x="14.5" y="18.5" width="3" height="10.5" />
    </g>
  </svg>
);

export const MarkCrystal = ({ size = 64, color = "currentColor", style }: MarkProps) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" stroke={color} strokeWidth="2.4" strokeLinejoin="miter" strokeLinecap="square" style={wrap(style)} aria-hidden="true">
    <polygon points="16,3 27,9.5 27,22.5 16,29 5,22.5 5,9.5" />
    <polygon points="16,9 22,16 16,23 10,16" />
    <line x1="16" y1="3" x2="16" y2="9" />
    <line x1="16" y1="23" x2="16" y2="29" />
  </svg>
);

export const MarkZFlake = ({ size = 64, color = "currentColor", style }: MarkProps) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill={color} style={wrap(style)} aria-hidden="true">
    <polygon points="6,5 26,5 26,9 12,9 26,23 26,27 6,27 6,23 20,23 6,9" />
    <rect x="4" y="14" width="3" height="4" />
    <rect x="25" y="14" width="3" height="4" />
  </svg>
);

export const MarkAsterisk = ({ size = 64, color = "currentColor", style }: MarkProps) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill={color} style={wrap(style)} aria-hidden="true">
    <circle cx="16" cy="16" r="2.2" fill="none" stroke={color} strokeWidth="2" />
    {[0, 60, 120].map((deg, i) => (
      <g key={i} transform={`rotate(${deg} 16 16)`}>
        <rect x="14.6" y="2" width="2.8" height="9" rx="0.5" />
        <rect x="14.6" y="21" width="2.8" height="9" rx="0.5" />
      </g>
    ))}
  </svg>
);

export const MarkSlash = ({ size = 64, color = "currentColor", style }: MarkProps) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" stroke={color} strokeWidth="3.2" strokeLinecap="square" strokeLinejoin="miter" style={wrap(style)} aria-hidden="true">
    <line x1="16" y1="4" x2="16" y2="28" />
    <line x1="6" y1="10" x2="26" y2="22" />
    <line x1="26" y1="10" x2="6" y2="22" />
    <line x1="3" y1="22" x2="20" y2="5" stroke={color} strokeWidth="4" />
  </svg>
);

export const MarkGlyph = ({ size = 64, color = "currentColor", style }: MarkProps) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill={color} style={wrap(style)} aria-hidden="true">
    <path d="M7 5 H25 V11 H13 V14 H25 V27 H7 V21 H19 V18 H7 Z" />
  </svg>
);

export const MarkHex = ({ size = 64, color = "currentColor", style }: MarkProps) => {
  const id = React.useId();
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" style={wrap(style)} aria-hidden="true">
      <defs>
        <mask id={id}>
          <rect width="32" height="32" fill="white" />
          <g fill="black">
            <rect x="14.5" y="6" width="3" height="20" />
            <g transform="rotate(60 16 16)"><rect x="14.5" y="6" width="3" height="20" /></g>
            <g transform="rotate(-60 16 16)"><rect x="14.5" y="6" width="3" height="20" /></g>
          </g>
        </mask>
      </defs>
      <polygon points="16,3 27,9.5 27,22.5 16,29 5,22.5 5,9.5" fill={color} mask={`url(#${id})`} />
    </svg>
  );
};

export const MarkDotgrid = ({ size = 64, color = "currentColor", style }: MarkProps) => {
  const dots: React.ReactElement[] = [<circle key="c" cx="16" cy="16" r="2" fill={color} />];
  for (let a = 0; a < 6; a++) {
    const ang = (a * 60 * Math.PI) / 180;
    for (let r = 1; r <= 3; r++) {
      const x = 16 + Math.cos(ang) * r * 4;
      const y = 16 + Math.sin(ang) * r * 4;
      const rad = r === 3 ? 1.6 : r === 2 ? 1.8 : 2;
      dots.push(<circle key={`${a}-${r}`} cx={x} cy={y} r={rad} fill={color} />);
    }
  }
  return <svg width={size} height={size} viewBox="0 0 32 32" style={wrap(style)} aria-hidden="true">{dots}</svg>;
};

export interface MarkVariant {
  id: string;
  name: string;
  sub: string;
  Mark: React.ComponentType<MarkProps>;
  exportName: string;
}

export const markVariants: MarkVariant[] = [
  { id: "crystal",  name: "Crystal",    sub: "hex frame + diamond cut, canonical", Mark: MarkCrystal,  exportName: "MarkCrystal" },
  { id: "sigil",    name: "Sigil",      sub: "chunky bars",                        Mark: MarkSigil,    exportName: "MarkSigil" },
  { id: "zflake",   name: "Z-Flake",    sub: "the Z of snowztech",                 Mark: MarkZFlake,   exportName: "MarkZFlake" },
  { id: "asterisk", name: "Asterisk",   sub: "mono-native, typographic",           Mark: MarkAsterisk, exportName: "MarkAsterisk" },
  { id: "slash",    name: "Slash-Star", sub: "stamped, signature slash",           Mark: MarkSlash,    exportName: "MarkSlash" },
  { id: "hex",      name: "Hex-Cut",    sub: "negative-space hex tile",            Mark: MarkHex,      exportName: "MarkHex" },
  { id: "dotgrid",  name: "Dot-Grid",   sub: "pointillist, friendly",              Mark: MarkDotgrid,  exportName: "MarkDotgrid" },
  { id: "glyph",    name: "Glyph S",    sub: "monogram, folded ribbon",            Mark: MarkGlyph,    exportName: "MarkGlyph" },
];
