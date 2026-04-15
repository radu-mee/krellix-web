import Image from "next/image";

interface ThemeImageProps {
  lightSrc: string;
  darkSrc: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
}

export default function ThemeImage({
  lightSrc,
  darkSrc,
  alt,
  width,
  height,
  className,
  priority = false,
}: ThemeImageProps) {
  return (
    <span
      className={`relative inline-flex ${className ?? ""}`}
      role="img"
      aria-label={alt}
      style={{ width, height }}
    >
      <Image
        src={lightSrc}
        alt=""
        aria-hidden="true"
        width={width}
        height={height}
        priority={priority}
        className="theme-image theme-image--light"
      />
      <Image
        src={darkSrc}
        alt=""
        aria-hidden="true"
        width={width}
        height={height}
        priority={priority}
        className="theme-image theme-image--dark"
      />
    </span>
  );
}
