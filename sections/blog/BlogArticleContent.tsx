import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/content/blog/posts";
import WaitlistHero from "@/sections/waitlist/WaitlistHero";

export default function BlogArticleContent({ post }: { post: BlogPost }) {
  return (
    <section className="flex flex-col">
      <div className="border-b border-[var(--border-soft)] px-4 py-14 md:px-6 md:py-16">
        <div className="max-w-[760px]">
          <Link
            href="/en/blog"
            className="type-label !text-[#00C29F] transition-opacity hover:opacity-80"
            style={{ color: "#00C29F" }}
          >
            BACK TO BLOG
          </Link>
          <h1 className="type-h1 mt-3 text-[var(--text-strong)]">{post.title}</h1>
          <p className="type-paragraph mt-4 text-[var(--text-muted)]">{post.excerpt}</p>
        </div>
      </div>

      <div className="border-b border-[var(--border-soft)] bg-[var(--ascii-divider-bg)]">
        <div className="relative h-[260px] w-full md:h-[420px]">
          <Image
            src={post.heroImageSrc}
            alt={post.heroImageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </div>

      <article className="px-4 py-12 md:px-6 md:py-16">
        <div className="flex w-full max-w-[760px] flex-col gap-16">
          {post.content.map((section) => (
            <section key={section.heading} className="flex flex-col gap-4">
              <h2 className="type-h3 text-[var(--text-strong)]">{section.heading}</h2>
              <div className="flex flex-col gap-4">
                {section.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="type-paragraph text-[var(--text-muted)]"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}

          <p className="font-display text-[14px] leading-[1.3] text-[var(--text-strong)]">
            {post.publishedAtLabel} - {post.readTimeLabel}
          </p>
        </div>
      </article>

      <div className="border-t border-[var(--border-soft)]">
        <WaitlistHero />
      </div>
    </section>
  );
}