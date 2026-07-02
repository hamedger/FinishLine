type IconProps = { className?: string };

export function OilChangeIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path d="M24 6v8M18 14h12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M14 18c0-5.523 4.477-10 10-10s10 4.477 10 10v4H14v-4z" stroke="currentColor" strokeWidth="2.5" />
      <path d="M12 22h24v4c0 8.284-6.716 15-15 15s-15-6.716-15-15v-4z" stroke="currentColor" strokeWidth="2.5" />
      <path d="M20 30h8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export function BatteryIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <rect x="8" y="16" width="32" height="20" rx="3" stroke="currentColor" strokeWidth="2.5" />
      <path d="M16 16V12a4 4 0 018 0v4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M20 26h8M24 22v8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export function BrakesIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <circle cx="24" cy="24" r="14" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="24" cy="24" r="6" stroke="currentColor" strokeWidth="2.5" />
      <path d="M24 10v4M24 34v4M10 24h4M34 24h4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export function EngineIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path d="M12 28h24v8H12v-8z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M16 28V20h6l2-4h8l2 4h6v8" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M20 24h8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export function FiltersIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path d="M10 12h28l-10 14v12l-8-4V26L10 12z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
    </svg>
  );
}

export function FluidsIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path d="M24 8c0 8-12 12-12 20a12 12 0 1024 0c0-8-12-12-12-20z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
    </svg>
  );
}

export function InspectionIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <rect x="12" y="8" width="24" height="32" rx="3" stroke="currentColor" strokeWidth="2.5" />
      <path d="M18 18h12M18 24h12M18 30h8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M30 30l3 3 6-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function SuspensionIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path d="M10 34h28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M16 34V22l8-8 8 8v12" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
      <circle cx="16" cy="34" r="3" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="32" cy="34" r="3" stroke="currentColor" strokeWidth="2.5" />
    </svg>
  );
}

export function TiresIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="24" cy="24" r="8" stroke="currentColor" strokeWidth="2.5" />
      <path d="M24 8v32M8 24h32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function VisibilityIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path d="M8 24s6-12 16-12 16 12 16 12-6 12-16 12S8 24 8 24z" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="24" cy="24" r="5" stroke="currentColor" strokeWidth="2.5" />
      <path d="M6 38l8-8M42 38l-8-8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export const SERVICE_ICONS = {
  "oil-change": OilChangeIcon,
  battery: BatteryIcon,
  brakes: BrakesIcon,
  engine: EngineIcon,
  filters: FiltersIcon,
  fluids: FluidsIcon,
  inspections: InspectionIcon,
  suspension: SuspensionIcon,
  tires: TiresIcon,
  visibility: VisibilityIcon,
} as const;
