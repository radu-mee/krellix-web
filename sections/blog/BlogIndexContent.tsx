import Image from "next/image";
import Link from "next/link";
import { getBlogPosts, type BlogPost } from "@/content/blog/posts";
import BlogPagination from "@/ui/BlogPagination";

const POSTS_PER_PAGE = 12;

function BlogThumbnail({ post }: { post: BlogPost }) {
  return (
    <div className="relative h-[220px] w-full max-w-full overflow-hidden bg-[var(--ascii-divider-bg)]">
      <Image
        src={post.thumbnailImageSrc}
        alt={post.thumbnailImageAlt}
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
        className="h-full w-full object-cover"
      />
    </div>
  );
}

function BlogCard({ post, index }: { post: BlogPost; index: number }) {
  const mdDividerClass = index % 2 === 1 ? "md:border-l" : "";
  const lgDividerClass = index % 3 === 0 ? "lg:border-l-0" : "lg:border-l";

  return (
    <article
      className={`${mdDividerClass} ${lgDividerClass} min-w-0 w-full border-[var(--border-soft)]`.trim()}
    >
      <Link
        href={`/blog/${post.slug}`}
        className="group flex h-full min-w-0 flex-col overflow-hidden"
      >
        <BlogThumbnail post={post} />

        <div className="flex min-w-0 flex-1 flex-col gap-2 bg-[var(--surface-bg)] px-4 py-5 md:px-5 md:py-6">
          <h2 className="break-words font-display text-[20px] leading-[1.2] text-[var(--text-strong)]">
            {post.title}
          </h2>
          <p className="type-paragraph max-w-full truncate text-[var(--text-muted)]">{post.excerpt}</p>
          <p className="mt-1 max-w-full truncate font-display text-[14px] leading-[1.3] text-[var(--text-strong)]">
            {post.publishedAtLabel} • {post.readTimeLabel}
          </p>
        </div>
      </Link>
    </article>
  );
}

export default function BlogIndexContent({ currentPage }: { currentPage: number }) {
  const posts = getBlogPosts();
  const totalPages = Math.max(1, Math.ceil(posts.length / POSTS_PER_PAGE));
  const safeCurrentPage = Math.min(Math.max(currentPage, 1), totalPages);
  const startIndex = (safeCurrentPage - 1) * POSTS_PER_PAGE;
  const pagedPosts = posts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  return (
    <section className="flex flex-col overflow-x-clip">
      <div className="border-b border-[var(--border-soft)] px-4 py-14 md:px-6 md:py-16">
        <div className="max-w-[620px]">
          <p className="type-label text-brand-mint">Get weekly updates</p>
          <h1 className="type-h1 mt-3 text-[var(--text-strong)]">The Krellix blog</h1>
          <p className="type-paragraph mt-4 text-[var(--text-muted)]">
            News, updates, and hot takes on everything AI—from working with intelligent systems to productivity,
            context-aware workflows, and real-world use.
          </p>
        </div>
      </div>

      <div className="grid overflow-x-clip border-b border-[var(--border-soft)] md:grid-cols-2 lg:grid-cols-3">
        {pagedPosts.map((post, index) => (
          <BlogCard key={post.slug} post={post} index={index} />
        ))}
      </div>

      <BlogPagination currentPage={safeCurrentPage} totalPages={totalPages} />

      <div className="h-16" aria-hidden="true" />
    </section>
  );
}
