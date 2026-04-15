interface DotGridDividerProps {
  className?: string;
}

export default function DotGridDivider({ className = "" }: DotGridDividerProps) {
  return <div className={`dot-grid-divider ${className}`.trim()} aria-hidden="true" />;
}