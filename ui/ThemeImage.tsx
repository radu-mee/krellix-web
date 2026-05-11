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
      className={`inline-flex ${className ?? ""}`}
      role="img"
      aria-label={alt}
      style={{ width, height }}
    >
      <img
        src={lightSrc}
        alt=""
        aria-hidden="true"
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={priority ? "high" : "auto"}
        className="theme-only-light h-full w-full object-contain"
      />
      <img
        src={darkSrc}
        alt=""
        aria-hidden="true"
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={priority ? "high" : "auto"}
        className="theme-only-dark h-full w-full object-contain"
      />
    </span>
  );
}
