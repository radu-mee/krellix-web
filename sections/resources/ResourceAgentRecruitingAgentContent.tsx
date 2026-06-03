import Link from "next/link";
import { localizePath } from "@/lib/i18n";
import DotGridDivider from "@/ui/DotGridDivider";
import ThemeImage from "@/ui/ThemeImage";
import ResourceMarkdownNotice from "@/sections/resources/ResourceMarkdownNotice";

const FAQ_ITEMS = [
  {
    question: "What does a recruiter do?",
    answer:
      "A recruiter helps attract, evaluate, and hire candidates by managing sourcing, interviews, candidate communication, hiring processes, and talent evaluation across different roles and teams.",
  },
  {
    question: "What is a structured interview?",
    answer:
      "A structured interview is a standardized interview process where all candidates are asked consistent questions and evaluated against the same criteria to improve fairness and reduce bias in hiring decisions.",
  },
  {
    question: "Can this agent help with candidate evaluation?",
    answer:
      "Yes. The agent can support candidate evaluation by helping teams create interview scorecards, define assessment criteria, review interview feedback, and make more consistent hiring decisions based on evidence instead of instinct.",
  },
  {
    question: "Can AI help with recruiting?",
    answer:
      "Yes. Using AI for recruiting can help teams improve job descriptions, sourcing outreach, interview planning, employer branding, and candidate communication across the hiring process.",
  },
] as const;

export default function ResourceAgentRecruitingAgentContent() {
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
          <h1 className="type-h1 mt-3 text-[var(--text-strong)]">Recruiting agent</h1>
          <p className="type-paragraph mt-4 text-[var(--text-muted)]">
            A hiring specialist that helps teams evaluate candidates and structure better interviews.
          </p>
        </div>
      </div>

      <div className="border-b border-[var(--border-soft)] bg-[var(--resource-agent-detail-bg)] px-4 py-10 md:px-6 md:py-12">
        <div className="max-w-[980px]">
          <p className="type-paragraph text-[var(--text-muted)]">
            Write stronger job descriptions, design structured interviews, evaluate candidates more consistently, and
            improve hiring decisions with an AI recruiter focused on hiring quality, candidate experience, and
            long-term team fit.
          </p>
          <h2 className="mt-8 font-display text-[20px] leading-none text-[var(--text-strong)]">How this agent works</h2>
          <p className="type-paragraph mt-4 text-[var(--text-muted)]">
            Strong recruiting requires more than filling open roles quickly. Effective hiring depends on clear role
            definition, consistent evaluation processes, thoughtful candidate communication, and the ability to
            identify real evidence of skills and potential. Good recruiting also requires balancing hiring speed with
            rigor, reducing bias in interviews, and creating a candidate experience that reflects the company
            accurately.
          </p>
          <p className="type-paragraph mt-2 text-[var(--text-muted)]">
            Use an AI for recruiting that supports job descriptions, interview planning, candidate evaluation, sourcing
            outreach, and hiring debriefs. This agent is designed to help teams run more structured hiring processes,
            improve employer branding, strengthen interview consistency, and make more defensible hiring decisions
            across different stages of growth.
          </p>

          <a
            href="https://cdlhsmdugnbzoirpwpxh.supabase.co/storage/v1/object/public/website-assets/resources-agents/Recruiting-agent-krellixlabs.zip"
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
