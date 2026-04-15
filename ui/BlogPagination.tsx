import Link from "next/link";
import ThemeImage from "@/ui/ThemeImage";

type PaginationItem = number | "ellipsis";

interface BlogPaginationProps {
  currentPage: number;
  totalPages: number;
  basePath?: string;
}

function buildPaginationItems(currentPage: number, totalPages: number): PaginationItem[] {
  if (totalPages <= 5) {
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  }

  if (currentPage <= 3) {
    return [1, 2, 3, "ellipsis", totalPages];
  }

  if (currentPage >= totalPages - 2) {
    return [1, "ellipsis", totalPages - 2, totalPages - 1, totalPages];
  }

  return [
    1,
    "ellipsis",
    currentPage - 1,
    currentPage,
    currentPage + 1,
    "ellipsis",
    totalPages,
  ];
}

function pageHref(basePath: string, page: number): string {
  return page <= 1 ? basePath : `${basePath}?page=${page}`;
}

function PaginationArrow({
  direction,
  disabled,
  href,
}: {
  direction: "back" | "forward";
  disabled: boolean;
  href: string;
}) {
  const lightSrc =
    direction === "back"
      ? "/brand/blog-pagination-icon-back-black.svg"
      : "/brand/blog-pagination-icon-forward-black.svg";
  const darkSrc =
    direction === "back"
      ? "/brand/blog-pagination-icon-back-white.svg"
      : "/brand/blog-pagination-icon-forward-white.svg";

  if (disabled) {
    return (
      <span className="inline-flex h-4 w-4 items-center justify-center opacity-40">
        <ThemeImage
          lightSrc={lightSrc}
          darkSrc={darkSrc}
          alt=""
          width={16}
          height={16}
        />
      </span>
    );
  }

  return (
    <Link
      href={href}
      className="inline-flex h-4 w-4 items-center justify-center transition-opacity hover:opacity-80"
      aria-label={direction === "back" ? "Go to previous page" : "Go to next page"}
    >
      <ThemeImage
        lightSrc={lightSrc}
        darkSrc={darkSrc}
        alt=""
        width={16}
        height={16}
      />
    </Link>
  );
}

export default function BlogPagination({
  currentPage,
  totalPages,
  basePath = "/en/blog",
}: BlogPaginationProps) {
  const safeTotalPages = Math.max(1, totalPages);
  const safeCurrentPage = Math.min(Math.max(currentPage, 1), safeTotalPages);
  const items = buildPaginationItems(safeCurrentPage, safeTotalPages);

  return (
    <nav
      className="flex h-[44px] items-center justify-end gap-4 border-b border-[var(--blog-pagination-border)] bg-[var(--blog-pagination-bg)] px-4 md:px-6"
      aria-label="Blog pagination"
    >
      <PaginationArrow
        direction="back"
        disabled={safeCurrentPage <= 1}
        href={pageHref(basePath, safeCurrentPage - 1)}
      />

      <span className="h-[16px] w-px bg-[var(--border-contrast)]" aria-hidden="true" />

      <div className="flex items-center gap-8 font-display text-[12px] leading-none text-[var(--text-strong)]">
        {items.map((item, index) => {
          if (item === "ellipsis") {
            return (
              <span key={`ellipsis-${index}`} className="select-none text-[var(--text-strong)]">
                ...
              </span>
            );
          }

          const isCurrent = item === safeCurrentPage;
          return (
            <Link
              key={`page-${item}`}
              href={pageHref(basePath, item)}
              aria-current={isCurrent ? "page" : undefined}
              className={`transition-opacity hover:opacity-80 ${
                isCurrent ? "text-[#00C29F]" : "text-[var(--text-strong)]"
              }`}
            >
              {item}
            </Link>
          );
        })}
      </div>

      <span className="h-[16px] w-px bg-[var(--border-contrast)]" aria-hidden="true" />

      <PaginationArrow
        direction="forward"
        disabled={safeCurrentPage >= safeTotalPages}
        href={pageHref(basePath, safeCurrentPage + 1)}
      />
    </nav>
  );
}
