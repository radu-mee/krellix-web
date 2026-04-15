import Link from "next/link";

interface PrimaryLinkButtonProps {
  href: string;
  label: string;
  className?: string;
  fullWidth?: boolean;
}

export default function PrimaryLinkButton({
  href,
  label,
  className = "",
  fullWidth = false,
}: PrimaryLinkButtonProps) {
  const widthClass = fullWidth ? "w-full" : "w-auto";

  return (
    <Link
      href={href}
      className={`inline-flex h-12 ${widthClass} items-center justify-center rounded-[6px] bg-[var(--button-primary-bg)] px-6 font-display text-[14px] font-normal leading-none text-[var(--button-primary-text)] transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-mint focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface-bg)] ${className}`.trim()}
    >
      {label}
    </Link>
  );
}
