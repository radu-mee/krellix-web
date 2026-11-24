interface ThemeImageProps {
  lightSrc: string;
  darkSrc: string;
  alt: string;
  width: number;
  height: number;
  darkWidth?: number;
  darkHeight?: number;
  className?: string;
  priority?: boolean;
}

export default function ThemeImage({
  lightSrc,
  darkSrc,
  alt,
  width,
  height,
  darkWidth = width,
  darkHeight = height,
  className,
  priority = false,
}: ThemeImageProps) {
  return (
    <span
      className={`inline-flex max-w-full justify-center ${className ?? ""}`}
      role="img"
      aria-label={alt}
      style={{ width: Math.max(width, darkWidth) }}
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
        className="theme-only-light h-auto max-w-full object-contain"
      />
      <img
        src={darkSrc}
        alt=""
        aria-hidden="true"
        width={darkWidth}
        height={darkHeight}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={priority ? "high" : "auto"}
        className="theme-only-dark h-auto max-w-full object-contain"
      />
    </span>
  );
}
