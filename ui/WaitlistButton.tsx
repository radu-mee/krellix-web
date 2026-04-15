import Link from "next/link";

interface WaitlistButtonProps {
  href: string;
  label: string;
  className?: string;
  fullWidth?: boolean;
}

export default function WaitlistButton({
  href,
  label,
  className = "",
  fullWidth = false,
}: WaitlistButtonProps) {
  const widthClass = fullWidth ? "w-full" : "w-auto";

  return (
    <Link
      href={href}
      className={`inline-flex h-[38px] ${widthClass} items-center justify-center rounded-[6px] border border-[var(--button-waitlist-border)] bg-[var(--button-waitlist-bg)] px-3 font-display text-[12px] font-normal leading-none text-[var(--button-waitlist-text)] transition-colors hover:bg-[var(--button-waitlist-hover-bg)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-mint focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface-bg)] ${className}`.trim()}
    >
      {label}
    </Link>
  );
}
