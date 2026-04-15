import Image from "next/image";
import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

interface IconCtaButtonBaseProps {
  label: string;
  className?: string;
  fullWidth?: boolean;
  iconLightSrc?: string;
  iconDarkSrc?: string;
}

type IconCtaButtonAsLinkProps = IconCtaButtonBaseProps & {
  href: string;
  download?: boolean | string;
};

type IconCtaButtonAsButtonProps = IconCtaButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type IconCtaButtonProps = IconCtaButtonAsLinkProps | IconCtaButtonAsButtonProps;

export default function IconCtaButton(props: IconCtaButtonProps) {
  const {
    label,
    className,
    fullWidth = false,
    iconLightSrc = "/brand/download-icon-CTA-white.svg",
    iconDarkSrc = "/brand/download-icon-CTA-black.svg",
  } = props;

  const widthClass = fullWidth ? "w-full" : "w-auto";
  const baseClassName = `inline-flex h-[38px] ${widthClass} items-center justify-center gap-[10px] rounded-[6px] border border-[var(--button-icon-border)] bg-[var(--button-icon-bg)] px-3 transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-mint focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface-bg)]`;

  const content: ReactNode = (
    <>
      <span className="relative size-4 shrink-0" aria-hidden="true">
        <Image
          src={iconLightSrc}
          alt=""
          aria-hidden="true"
          width={16}
          height={16}
          className="theme-image theme-image--light"
        />
        <Image
          src={iconDarkSrc}
          alt=""
          aria-hidden="true"
          width={16}
          height={16}
          className="theme-image theme-image--dark"
        />
      </span>
      <span
        className="h-4 w-px shrink-0 bg-[var(--button-icon-divider)]"
        aria-hidden="true"
      />
      <span className="font-display text-[14px] font-normal leading-none text-[var(--button-icon-text)]">
        {label}
      </span>
    </>
  );

  if ("href" in props && typeof props.href === "string") {
    return (
      <Link
        href={props.href}
        download={props.download}
        className={`${baseClassName} ${className ?? ""}`}
      >
        {content}
      </Link>
    );
  }

  const {
    type = "button",
    label: _label,
    fullWidth: _fullWidth,
    iconLightSrc: _iconLightSrc,
    iconDarkSrc: _iconDarkSrc,
    href: _href,
    className: _className,
    ...buttonProps
  } = props as IconCtaButtonAsButtonProps;

  return (
    <button
      type={type}
      className={`${baseClassName} ${className ?? ""}`}
      {...buttonProps}
    >
      {content}
    </button>
  );
}
