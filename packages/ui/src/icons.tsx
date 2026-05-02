import * as React from "react";

export interface IconProps {
  size?: number;
  stroke?: number;
  color?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export const Icon = ({
  size = 16,
  stroke = 1.5,
  color = "currentColor",
  style,
  children,
}: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={stroke}
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ display: "inline-block", verticalAlign: "middle", ...style }}
    aria-hidden="true"
  >
    {children}
  </svg>
);

type P = Omit<IconProps, "children">;

export const SearchIcon = (p: P) => <Icon {...p}><circle cx="11" cy="11" r="6" /><path d="m20 20-3.5-3.5" /></Icon>;
export const TerminalIcon = (p: P) => <Icon {...p}><path d="m5 8 4 4-4 4" /><path d="M13 16h6" /><rect x="2.5" y="4" width="19" height="16" rx="1.5" /></Icon>;
export const CodeIcon = (p: P) => <Icon {...p}><path d="m8 7-5 5 5 5" /><path d="m16 7 5 5-5 5" /><path d="m14 4-4 16" /></Icon>;
export const GitIcon = (p: P) => <Icon {...p}><circle cx="6" cy="6" r="2.5" /><circle cx="18" cy="18" r="2.5" /><circle cx="6" cy="18" r="2.5" /><path d="M6 8.5v7" /><path d="M8.5 6h6.5a2.5 2.5 0 0 1 2.5 2.5v7" /></Icon>;
export const PlusIcon = (p: P) => <Icon {...p}><path d="M12 5v14" /><path d="M5 12h14" /></Icon>;
export const MinusIcon = (p: P) => <Icon {...p}><path d="M5 12h14" /></Icon>;
export const CheckIcon = (p: P) => <Icon {...p}><path d="m4 12 5 5L20 6" /></Icon>;
export const XIcon = (p: P) => <Icon {...p}><path d="M6 6 18 18" /><path d="m18 6-12 12" /></Icon>;
export const ChevronDownIcon = (p: P) => <Icon {...p}><path d="m6 9 6 6 6-6" /></Icon>;
export const ChevronRightIcon = (p: P) => <Icon {...p}><path d="m9 6 6 6-6 6" /></Icon>;
export const ChevronLeftIcon = (p: P) => <Icon {...p}><path d="m15 6-6 6 6 6" /></Icon>;
export const ArrowRightIcon = (p: P) => <Icon {...p}><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></Icon>;
export const ArrowUpRightIcon = (p: P) => <Icon {...p}><path d="M7 17 17 7" /><path d="M8 7h9v9" /></Icon>;
export const ExternalLinkIcon = (p: P) => <Icon {...p}><path d="M14 4h6v6" /><path d="M20 4 10 14" /><path d="M19 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5" /></Icon>;
export const SettingsIcon = (p: P) => <Icon {...p}><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h0a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51h0a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82h0a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" /></Icon>;
export const UserIcon = (p: P) => <Icon {...p}><circle cx="12" cy="8" r="4" /><path d="M4 21v-1a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v1" /></Icon>;
export const FolderIcon = (p: P) => <Icon {...p}><path d="M3 6.5A1.5 1.5 0 0 1 4.5 5h4l2 2.5h9A1.5 1.5 0 0 1 21 9v9.5A1.5 1.5 0 0 1 19.5 20h-15A1.5 1.5 0 0 1 3 18.5z" /></Icon>;
export const FileIcon = (p: P) => <Icon {...p}><path d="M14 3H6a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8z" /><path d="M14 3v5h5" /></Icon>;
export const BellIcon = (p: P) => <Icon {...p}><path d="M6 9a6 6 0 1 1 12 0v4l1.5 3h-15L6 13z" /><path d="M10 19a2 2 0 0 0 4 0" /></Icon>;
export const ActivityIcon = (p: P) => <Icon {...p}><path d="M3 12h4l3-8 4 16 3-8h4" /></Icon>;
export const PulseIcon = (p: P) => <Icon {...p}><path d="M3 12h3l2-4 4 8 2-4h7" /></Icon>;
export const CubeIcon = (p: P) => <Icon {...p}><path d="m12 2 9 5v10l-9 5-9-5V7z" /><path d="m3 7 9 5 9-5" /><path d="M12 22V12" /></Icon>;
export const LayersIcon = (p: P) => <Icon {...p}><path d="m12 3 9 5-9 5-9-5z" /><path d="m3 13 9 5 9-5" /><path d="m3 18 9 5 9-5" /></Icon>;
export const DatabaseIcon = (p: P) => <Icon {...p}><ellipse cx="12" cy="5" rx="8" ry="3" /><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5" /><path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" /></Icon>;
export const CloudIcon = (p: P) => <Icon {...p}><path d="M7 18a5 5 0 1 1 1-9.9A6 6 0 0 1 19.5 11 4 4 0 0 1 18 18z" /></Icon>;
export const SunIcon = (p: P) => <Icon {...p}><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></Icon>;
export const MoonIcon = (p: P) => <Icon {...p}><path d="M20 14a8 8 0 1 1-9.9-9.9 7 7 0 0 0 9.9 9.9z" /></Icon>;
export const GithubIcon = (p: P) => <Icon {...p}><path d="M9 19c-4 1-4-2-6-2.5M15 22v-4a3 3 0 0 0-1-2.5c3 0 6-2 6-5.5a5 5 0 0 0-1.4-3.5 4.7 4.7 0 0 0-.1-3.5s-1.1-.4-3.5 1.3a12 12 0 0 0-6 0C6.6 1.6 5.5 2 5.5 2a4.7 4.7 0 0 0-.1 3.5A5 5 0 0 0 4 9c0 3.5 3 5.5 6 5.5a3 3 0 0 0-1 2.5v4" /></Icon>;
export const MailIcon = (p: P) => <Icon {...p}><rect x="3" y="5" width="18" height="14" rx="1.5" /><path d="m3.5 6.5 8.5 7 8.5-7" /></Icon>;
export const EyeIcon = (p: P) => <Icon {...p}><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" /><circle cx="12" cy="12" r="3" /></Icon>;
export const LockIcon = (p: P) => <Icon {...p}><rect x="4" y="11" width="16" height="10" rx="1.5" /><path d="M8 11V7a4 4 0 0 1 8 0v4" /></Icon>;
export const BoltIcon = (p: P) => <Icon {...p}><path d="M13 2 4 14h7l-2 8 9-12h-7z" /></Icon>;
export const StarIcon = (p: P) => <Icon {...p}><path d="m12 3 2.7 6 6.3.6-4.7 4.4 1.4 6.5L12 17l-5.7 3.5 1.4-6.5L3 9.6l6.3-.6z" /></Icon>;
export const HeartIcon = (p: P) => <Icon {...p}><path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.5-7 10-7 10z" /></Icon>;
export const TrashIcon = (p: P) => <Icon {...p}><path d="M3 6h18" /><path d="M8 6V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2" /><path d="M5 6v14a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6" /><path d="M10 11v6M14 11v6" /></Icon>;
export const EditIcon = (p: P) => <Icon {...p}><path d="M11 4H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-6" /><path d="m18.5 2.5 3 3L12 15l-4 1 1-4z" /></Icon>;
export const FilterIcon = (p: P) => <Icon {...p}><path d="M3 5h18l-7 9v6l-4-2v-4z" /></Icon>;
export const MenuIcon = (p: P) => <Icon {...p}><path d="M4 7h16M4 12h16M4 17h16" /></Icon>;
export const GridIcon = (p: P) => <Icon {...p}><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></Icon>;
export const InboxIcon = (p: P) => <Icon {...p}><path d="M3 13h5l1.5 2.5h5L16 13h5" /><path d="M5 4h14l2 9v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-6z" /></Icon>;
export const CalendarIcon = (p: P) => <Icon {...p}><rect x="3" y="5" width="18" height="16" rx="1.5" /><path d="M3 10h18M8 3v4M16 3v4" /></Icon>;
export const ClockIcon = (p: P) => <Icon {...p}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></Icon>;
export const InfoIcon = (p: P) => <Icon {...p}><circle cx="12" cy="12" r="9" /><path d="M12 11v6" /><circle cx="12" cy="8" r="0.5" fill="currentColor" /></Icon>;
export const WarningIcon = (p: P) => <Icon {...p}><path d="M11 3 2 19a1 1 0 0 0 .9 1.5h18.2A1 1 0 0 0 22 19L13 3a1 1 0 0 0-2 0z" /><path d="M12 9v5" /><circle cx="12" cy="17" r="0.5" fill="currentColor" /></Icon>;
export const ZapIcon = (p: P) => <Icon {...p}><path d="M13 2 4 14h7l-2 8 9-12h-7z" /></Icon>;
export const DiscordIcon = (p: P) => <Icon {...p}><path d="M19 6s-2.5-2-5-2l-.3.5c2.3.5 3.3 1.5 3.3 1.5s-2-1-4-1c-1 0-2 .1-3 .3-1-.2-2-.3-3-.3-2 0-4 1-4 1S4 5 6.3 4.5L6 4C3.5 4 1 6 1 6s-2.5 4-2 11c1.5 2 3.5 2 3.5 2L4 17c-1-.5-2-1.5-2-1.5 2 1.5 4 2 4 2l1-2.5s4 1.5 6 1.5 6-1.5 6-1.5l1 2.5s2-.5 4-2c0 0-1 1-2 1.5l1.5 2s2 0 3.5-2c.5-7-2-11-2-11z" /><circle cx="9" cy="11.5" r="1.5" fill="currentColor" stroke="none" /><circle cx="15" cy="11.5" r="1.5" fill="currentColor" stroke="none" /></Icon>;
