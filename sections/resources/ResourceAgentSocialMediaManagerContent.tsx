import Link from "next/link";
import { localizePath } from "@/lib/i18n";
import DotGridDivider from "@/ui/DotGridDivider";
import ThemeImage from "@/ui/ThemeImage";
import ResourceMarkdownNotice from "@/sections/resources/ResourceMarkdownNotice";

const FAQ_ITEMS = [
  {
    question: "What does a social media manager do?",
    answer:
      "A social media manager creates content, manages publishing schedules, analyzes performance, engages with audiences, and develops social media strategies that support brand growth and business goals across different platforms.",
  },
  {
    question: "What is community management?",
    answer:
      "Community management is the process of interacting with audiences through comments, messages, replies, and discussions to build stronger relationships, maintain brand reputation, and encourage engagement across social platforms.",
  },
  {
    question: "Can this agent help with content calendars?",
    answer:
      "Yes. The agent can help create a structured content calendar by organizing posting schedules, content themes, campaign timing, platform priorities, and audience-focused content ideas across multiple channels.",
  },
  {
    question: "Can AI help with social media strategy?",
    answer:
      "Yes. Using AI for social media can help teams and individuals improve content planning, audience engagement, platform strategy, campaign analysis, and social media workflows while creating more consistent and effective content across different channels.",
  },
] as const;

export default function ResourceAgentSocialMediaManagerContent() {
  return (
    <section className="flex flex-col">
      <div className="border-b border-[var(--border-soft)] px-4 py-14 md:px-6 md:py-16">
        <div className="max-w-[900px]">
          <Link
            href={localizePath("/resources/agents")}
            className="type-label inline-flex text-brand-mint transition-opacity hover:opacity-80"
            style={{ color: "#00ddb5" }}
          >
            BACK TO AGENTS
          </Link>
          <h1 className="type-h1 mt-3 text-[var(--text-strong)]">Social media manager</h1>
          <p className="type-paragraph mt-4 text-[var(--text-muted)]">
            A content-focused strategist that helps teams plan, write, and manage social campaigns.
          </p>
        </div>
      </div>

      <div className="border-b border-[var(--border-soft)] bg-[var(--resource-agent-detail-bg)] px-4 py-10 md:px-6 md:py-12">
        <div className="max-w-[980px]">
          <p className="type-paragraph text-[var(--text-muted)]">
            Write platform-native content, build a content calendar, analyze performance, and manage community
            responses with an AI social media manager that understands the difference between building an audience and
            converting one.
          </p>
          <h2 className="mt-8 font-display text-[20px] leading-none text-[var(--text-strong)]">How this agent works</h2>
          <p className="type-paragraph mt-4 text-[var(--text-muted)]">
            Strong social media strategy requires more than posting consistently. Effective social media growth depends
            on understanding audience behavior, adapting content for each platform, maintaining a consistent brand
            voice, and balancing audience-building content with conversion-focused messaging. What performs well on
            LinkedIn rarely works the same way on TikTok, Instagram, or X, and good social strategy depends on
            understanding those differences clearly.
          </p>
          <p className="type-paragraph mt-2 text-[var(--text-muted)]">
            Use an AI for social media that supports content planning, campaign ideas, performance analysis, audience
            engagement, and platform-specific content creation. This agent is designed to help you build a stronger
            social media strategy, improve community management, structure sustainable posting workflows, and create
            more effective content calendars across different channels and audiences.
          </p>

          <a
            href="https://cdlhsmdugnbzoirpwpxh.supabase.co/storage/v1/object/public/website-assets/resources-agents/Social-media-manager-krellixlabs.zip"
            className="mt-8 inline-flex h-[38px] items-center justify-center rounded-[6px] border border-[var(--border-soft)] bg-[var(--resource-agent-download-button-bg)] px-3 transition-colors hover:text-brand-mint"
          >
            <ThemeImage
              lightSrc="/brand/download-icon-CTA-black.svg"
              darkSrc="/brand/download-icon-CTA-white.svg"
              alt=""
              width={16}
              height={16}
            />
            <span className="mx-[10px] h-[14px] w-px bg-[var(--resource-row-button-divider)]" aria-hidden="true" />
            <span className="font-display text-[12px] leading-none text-[var(--text-strong)]">Download</span>
            <span className="mx-[10px] h-[14px] w-px bg-[var(--resource-row-button-divider)]" aria-hidden="true" />
            <ThemeImage
              lightSrc="/brand/markdown-icon-26x16-light-mode.svg"
              darkSrc="/brand/markdown-icon-26x16-dark-mode.svg"
              alt=""
              width={26}
              height={16}
            />
          </a>
        </div>
      </div>

      <ResourceMarkdownNotice />

      <div className="my-16">
        <DotGridDivider />
      </div>

      <div className="border-b border-[var(--border-soft)] px-4 py-10 md:px-6 md:py-12">
        <div className="grid gap-8 md:grid-cols-[minmax(260px,0.8fr)_minmax(420px,1.2fr)] md:items-center md:gap-10">
          <div className="max-w-[460px]">
            <p className="type-label text-brand-mint">TRY KRELLIX FOR FREE</p>
            <h2 className="mt-3 font-display text-[20px] leading-none text-[var(--text-strong)] md:text-[24px]">
              Get more done with your team of AI copilots
            </h2>
            <p className="type-paragraph mt-4 text-[var(--text-muted)]">
              Solo or with a team, Krellix gives you the collaborators you need to move faster and ship better work.
            </p>
            <Link
              href={localizePath("/product")}
              style={{
                backgroundColor: "var(--button-primary-bg)",
                color: "var(--button-primary-text)",
              }}
              className="mt-8 inline-flex h-[38px] items-center justify-center rounded-[6px] px-4 font-display text-[12px] leading-none transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-mint focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface-bg)]"
            >
              Learn more
            </Link>
          </div>

          <div className="hidden justify-center md:flex">
            <ThemeImage
              lightSrc="/images/resources-chat-image-light-mode-eng.svg"
              darkSrc="/images/resources-chat-image-dark-mode-eng.svg"
              alt="Krellix AI copilots working together in a shared workspace to help individuals and teams manage tasks, communicate, and ship better work."
              width={738}
              height={637}
            />
          </div>
        </div>

        <div className="mt-8 flex justify-center md:hidden">
          <ThemeImage
            lightSrc="/images/resources-chat-mobile-image-light-mode-eng.svg"
            darkSrc="/images/resources-chat-mobile-image-dark-mode-eng.svg"
            alt="Krellix AI copilots working together in a shared workspace to help individuals and teams manage tasks, communicate, and ship better work."
            width={375}
            height={639}
          />
        </div>
      </div>

      

      <div className="my-16">
        <DotGridDivider />
      </div>

      <div className="px-4 pb-16 md:px-6 md:pb-20">
        <div className="flex flex-col">
          {FAQ_ITEMS.map((item) => (
            <article
              key={item.question}
              className="grid gap-4 py-8 md:grid-cols-[minmax(280px,1fr)_minmax(320px,1.2fr)] md:gap-10"
            >
              <h3 className="font-display text-[20px] leading-none text-[var(--text-strong)]">
                {item.question}
              </h3>
              <p className="type-paragraph text-[var(--text-muted)]">{item.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
