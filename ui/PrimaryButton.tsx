import type { ButtonHTMLAttributes, ReactNode } from "react";

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  fullWidth?: boolean;
}

export default function PrimaryButton({
  children,
  className,
  fullWidth = false,
  type = "button",
  ...props
}: PrimaryButtonProps) {
  const widthClass = fullWidth ? "w-full" : "w-auto";

  return (
    <button
      type={type}
      className={`inline-flex h-12 ${widthClass} items-center justify-center rounded-[6px] bg-[var(--button-primary-bg)] px-6 !font-display !text-[14px] font-normal !leading-none text-[var(--button-primary-text)] transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-mint focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface-bg)] disabled:cursor-not-allowed disabled:opacity-50 ${className ?? ""}`}
      {...props}
    >
      {children}
    </button>
  );
}

